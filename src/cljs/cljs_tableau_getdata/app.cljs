(ns cljs-tableau-getdata.app
  (:require [reagent.core :as reagent :refer [atom]]
						[reagent-modals.modals :as reagent-modals]))

(defonce viz (reagent/atom {:status "Loading" :vizobj nil}))

;; Tableau API
(def viz-url
  "https://public.tableau.com/views/SuperGetData/CustomerSales")

; Hide things from the embedded viz
(def viz-options
  (js-obj
    "hideTabs" true
    "hideToolbar" true
    "onFirstInteractive" #(swap! viz assoc :status "Ready to interact")))

(swap! viz assoc :status "Initializing view..." :vizobj
       (js/tableau.Viz. (.getElementById js/document "tableau-div") viz-url viz-options))

(defn get-sheet
  "Get the `Sheet` object from the active sheet. Active sheet must be a `Dashboard`"
  []
  (-> (:vizobj @viz)
      (.getWorkbook)
      (.getActiveSheet)))

;; UI 
(defn modal-window-button []
  [:div.btn.btn-primary 
   {:on-click #(reagent-modals/modal! [:div "some message to the user!"])} 
   "Show underlying data"])

(defn get-data-component []
  [:div
   [:p (:status @viz)]
   [reagent-modals/modal-window]
   [modal-window-button]])


(defn init []
  (reagent/render-component [get-data-component]
                            (.getElementById js/document "container")))


