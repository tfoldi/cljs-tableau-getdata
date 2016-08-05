// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('reagent_modals.modals');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
reagent_modals.modals.modal_id = "reagent-modal";
reagent_modals.modals.modal_content = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null),cljs.core.cst$kw$shown,null,cljs.core.cst$kw$size,null], null));
reagent_modals.modals.get_modal = (function reagent_modals$modals$get_modal(){
return goog.dom.getElement(reagent_modals.modals.modal_id);
});
reagent_modals.modals.show_modal_BANG_ = (function reagent_modals$modals$show_modal_BANG_(keyboard){
var m = (function (){var G__12529 = reagent_modals.modals.get_modal();
return jQuery(G__12529);
})();
(m["modal"]).call(m,{"keyboard": keyboard});

(m["modal"]).call(m,"show");

return m;
});
reagent_modals.modals.close_modal_BANG_ = (function reagent_modals$modals$close_modal_BANG_(){
var m = (function (){var G__12531 = reagent_modals.modals.get_modal();
return jQuery(G__12531);
})();
return (m["modal"]).call(m,"hide");
});
/**
 * A pre-configured close button. Just include it anywhere in the
 * modal to let the user dismiss it.
 */
reagent_modals.modals.close_button = (function reagent_modals$modals$close_button(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$close,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$data_DASH_dismiss,"modal"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$glyphicon$glyphicon_DASH_remove,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$aria_DASH_hidden,"true"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$sr_DASH_only,"Close"], null)], null);
});
reagent_modals.modals.modal_window_STAR_ = (function reagent_modals$modals$modal_window_STAR_(){
var map__12534 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent_modals.modals.modal_content) : cljs.core.deref.call(null,reagent_modals.modals.modal_content));
var map__12534__$1 = ((((!((map__12534 == null)))?((((map__12534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12534):map__12534);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12534__$1,cljs.core.cst$kw$content);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12534__$1,cljs.core.cst$kw$size);
var size_class = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lg,"modal-lg",cljs.core.cst$kw$sm,"modal-sm"], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal$fade,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,reagent_modals.modals.modal_id,cljs.core.cst$kw$tab_DASH_index,(-1),cljs.core.cst$kw$role,"dialog"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal_DASH_dialog,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.get.cljs$core$IFn$_invoke$arity$2(size_class,size)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal_DASH_content,content], null)], null)], null);
});
reagent_modals.modals.modal_window = cljs.core.with_meta(reagent_modals.modals.modal_window_STAR_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (e){
var m = (function (){var G__12536 = reagent_modals.modals.get_modal();
return jQuery(G__12536);
})();
(m["on"]).call(m,"hidden.bs.modal",((function (m){
return (function (){
var temp__4425__auto___12539 = cljs.core.cst$kw$hidden.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent_modals.modals.modal_content) : cljs.core.deref.call(null,reagent_modals.modals.modal_content)));
if(cljs.core.truth_(temp__4425__auto___12539)){
var f_12540 = temp__4425__auto___12539;
(f_12540.cljs$core$IFn$_invoke$arity$0 ? f_12540.cljs$core$IFn$_invoke$arity$0() : f_12540.call(null));
} else {
}

var G__12537 = reagent_modals.modals.modal_content;
var G__12538 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null)], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12537,G__12538) : cljs.core.reset_BANG_.call(null,G__12537,G__12538));
});})(m))
);

(m["on"]).call(m,"shown.bs.modal",((function (m){
return (function (){
var temp__4425__auto__ = cljs.core.cst$kw$shown.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent_modals.modals.modal_content) : cljs.core.deref.call(null,reagent_modals.modals.modal_content)));
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});})(m))
);

return (m["on"]).call(m,"hide.bs.modal",((function (m){
return (function (){
var temp__4425__auto__ = cljs.core.cst$kw$hide.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent_modals.modals.modal_content) : cljs.core.deref.call(null,reagent_modals.modals.modal_content)));
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});})(m))
);
})], null));
/**
 * Update and show the modal window. `reagent-content' is a normal
 * reagent component. `configs' is an optional map of advanced
 * configurations: 
 * 
 * - :shown -> a function called once the modal is shown.
 * - :hide -> a function called once the modal is asked to hide.
 * - :hidden -> a function called once the modal is hidden.
 * - :size -> Can be :lg (large) or :sm (small). Everything else defaults to medium.
 * - :keyboard -> if `esc' can dismiss the modal. Default to true.
 */
reagent_modals.modals.modal_BANG_ = (function reagent_modals$modals$modal_BANG_(var_args){
var args12541 = [];
var len__7513__auto___12546 = arguments.length;
var i__7514__auto___12547 = (0);
while(true){
if((i__7514__auto___12547 < len__7513__auto___12546)){
args12541.push((arguments[i__7514__auto___12547]));

var G__12548 = (i__7514__auto___12547 + (1));
i__7514__auto___12547 = G__12548;
continue;
} else {
}
break;
}

var G__12543 = args12541.length;
switch (G__12543) {
case 1:
return reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12541.length)].join('')));

}
});

reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (reagent_content){
return reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$2(reagent_content,null);
});

reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reagent_content,configs){
var G__12544_12550 = reagent_modals.modals.modal_content;
var G__12545_12551 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,reagent_content], null),configs], 0));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12544_12550,G__12545_12551) : cljs.core.reset_BANG_.call(null,G__12544_12550,G__12545_12551));

return reagent_modals.modals.show_modal_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(configs,cljs.core.cst$kw$keyboard,true));
});

reagent_modals.modals.modal_BANG_.cljs$lang$maxFixedArity = 2;
