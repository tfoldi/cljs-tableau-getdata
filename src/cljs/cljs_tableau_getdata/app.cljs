(ns cljs-tableau-getdata.app
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent-modals.modals :as reagent-modals]
            [cemerick.url :refer [url url-encode]]))

;; Utility
;; -------

(defn reduce-indexed
  "Reduce while adding an index as the second argument to the function"
  ([f coll]
   (reduce-indexed f (first coll) 0 (rest coll)))

  ([f init coll]
   (reduce-indexed f init 0 coll))

  ([f init ^long i coll]
   (if (empty? coll)
     init
     (let [v (first coll)
           fv (f init i v)]
       (recur f fv (inc i) (rest coll))))))

;; App state
;; ---------

(defonce viz (reagent/atom {:maxRows 100 :includeAllColumns false}))
(declare modal)

;; Tableau API
(def viz-url
  (or (get (:query (url (-> js/window .-location .-href))) "viz")
      "https://public.tableau.com/views/SuperGetData/CustomerSales"))

(js/console.log "Using viz url: " (pr-str viz-url))


(def viz-options
  (js-obj
    "hideTabs" true
    "hideToolbar" true
    "height" "500px"
    "width" "500px"
    "onFirstInteractive" #(swap! viz assoc :ready true)))

(swap! viz assoc :ready false :vizobj
       (js/tableau.Viz. (.getElementById js/document "tableau-div") viz-url viz-options))

(defn get-data-and-show-modal!
  [f]
  (-> (:vizobj @viz)
      (.getWorkbook)
      (.getActiveSheet)
      (f (clj->js @viz))
      (.then (fn [data]
               (swap! viz assoc :columns (.getColumns data) :data (.getData data))
               (reagent-modals/modal! [modal] {:size :lg}) ))))

;; UI  / Reagent Components
(defn modal-render []
  (let [columns (:columns @viz)]
    (js/console.log "COL:" columns )
    [:div {:class "underlying-data-table-wrap"}
     [reagent-modals/close-button]
     [:table#data-table.table.table-striped.table-bordered.nowrap
      {:cell-spacing "0" :width "100%"}
      [:thead
       (reduce (fn [res col] (conj res (vector :th (.getFieldName col)))) [:tr] columns)]

      ; tbody, reduce from [[{formattedValue: val]] to [:tbody [:tr [:td val1] [:td val2]]]
      (reduce (fn [res row]
                (conj res
                      (reduce-indexed
                        (fn [tr i col]
                          (let [column-meta (nth columns i)]
                            (conj tr [:td {:class (str " data-cell-kind-" (.getDataType column-meta)
                                                              " data-cell-" (.getFieldName column-meta))}
                                             (get col "formattedValue")])))
                        [:tr]
                        row)))
              [:tbody]
              (js->clj (:data @viz)))]]))

(defn modal-did-mount [this]
  (.DataTable (js/$ (.getElementById js/document "data-table"))))

(defn modal []
  (reagent/create-class {:reagent-render modal-render
                         :component-did-mount modal-did-mount}))

(defn underlying-button []
  [:div.btn.btn-primary
   {:disabled (not (:ready @viz))
    :on-click (fn [] (get-data-and-show-modal! #(.getUnderlyingDataAsync %1 %2)))}
   "Show underlying data"])

(defn summary-button []
  [:div.btn.btn-primary
   {:disabled (not (:ready @viz))
    :on-click (fn [] (get-data-and-show-modal! #(.getSummaryDataAsync %1 %2)))}
   "Show summary data"])

(defn get-data-component []
  [:div.form-horizontal {:style {:margin "10px"}}
   [:p "Select customers to see their summary or underlying data in tabular format."]
   [:p [:a {:href "https://git.io/v6YOK"} "Source code"] " is less than 100 lines."]
   [:div.form-group
    [:label.col-xs-2 "Number of rows to show"]
    [:div.col-xs-2
     [:input#num-rows.form-control
      {:type "number" :min 0 :step 1
       :value (:maxRows @viz)
       :on-change #(swap! viz assoc :maxRows (.-target.value %))} ]]]
   [:div.form-group
    [:label.col-xs-2 {:for "all-cols"} "Show all columns"]
    [:div.col-xs-2
     [:input#all-cols.toggle.form-control
      {:type "checkbox"
       :checked (:includeAllColumns @viz)
       :on-change #(swap! viz update-in [:includeAllColumns] not) }]]]
   [underlying-button] [summary-button]
   [reagent-modals/modal-window]])

(defn init []
  (reagent/render-component [get-data-component]
                            (.getElementById js/document "container")))
