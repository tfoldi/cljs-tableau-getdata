(ns cljs-tableau-getdata.app
  (:require [reagent.core :as reagent :refer [atom]]
						[reagent-modals.modals :as reagent-modals]))

(defonce viz (reagent/atom {:status "Loading" :vizobj nil}))

(def viz-url
  "https://public.tableau.com/views/AirbnbSanFranciscoAnalysis/Airbnb")

; Hide things from the embedded viz
(def viz-options
  (js-obj
    "hideTabs" true
    "hideToolbar" true
    "onFirstInteractive" #(swap! viz assoc :status "Ready")))

(swap! viz assoc :status "Initializing" :vizobj
       (js/tableau.Viz. (.getElementById js/document "tableau-div") viz-url viz-options))

(defn modal-window-button []
  [:div.btn.btn-primary 
   {:on-click #(reagent-modals/modal! [:div "some message to the user!"])} 
   "Show underlying data"])

(defn home []
  [:div
   [:p (:status @viz)]
   [reagent-modals/modal-window]
   ;; ATTNETION \/
   [modal-window-button]
   ;; ATTENTION /\
   ])


(defn tableau-component []
  [:div 
		[home]])

(defn init []
  (reagent/render-component [tableau-component]
                            (.getElementById js/document "container")))


