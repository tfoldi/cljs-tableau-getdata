(ns cljs-tableau-getdata.app
  (:require [reagent.core :as reagent :refer [atom]]
						[reagent-modals.modals :as reagent-modals]))

(defonce viz (reagent/atom {}))
(declare modal)

;; Tableau API
(def viz-url
  "https://public.tableau.com/views/SuperGetData/CustomerSales")

; Hide things from the embedded viz
(def viz-options
  (js-obj
    "hideTabs" true
    "hideToolbar" true
    "onFirstInteractive" #(swap! viz assoc :ready true)))

(def get-data-options (js-obj "maxRows" 10)) 
  
(swap! viz assoc :ready false :vizobj
       (js/tableau.Viz. (.getElementById js/document "tableau-div") viz-url viz-options))

(defn assign-data!
  "Get the `Sheet` object from the active sheet."
  [f]
  (-> (:vizobj @viz)
      (.getWorkbook)
      (.getActiveSheet)
      (f get-data-options) 
      (.then (fn [data] 
               (swap! viz assoc :columns (.getColumns data) :data (.getData data))
               (reagent-modals/modal! [modal] {:size :lg}) ))))

;; UI 
(defn modal-render []
  [:table.table.table-striped.table-bordered 
   {:cell-spacing "0" :width "100%"}

   [:thead
	  (reduce (fn [res col] (conj res (vector :th (.getFieldName col)))) [:tr] (:columns @viz))]

    ; tbody
    (reduce (fn [res row] 
              (conj res 
                    (reduce 
                      (fn [tr col] (conj tr (vector :td (get col "formattedValue")))) 
                      [:tr] 
                      row))) 
            [:tbody] 
            (js->clj (:data @viz)))])

(defn modal-did-mount [this]
  (.DataTable (js/$ (reagent/dom-node this))))


(defn modal []
  (reagent/create-class {:reagent-render modal-render
                         :component-did-mount modal-did-mount}))

(defn get-data-and-show-modal! [f]
  (assign-data! f))

(defn modal-window-button []
  [:div.btn.btn-primary 
   {:disabled (not (:ready @viz))
    :on-click (fn [] (get-data-and-show-modal! #(.getUnderlyingDataAsync %1)))} 
   "Show underlying data"])

(defn get-data-component []
  [:div
   [reagent-modals/modal-window]
   [modal-window-button]])


(defn init []
  (reagent/render-component [get-data-component]
                            (.getElementById js/document "container")))


