// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('cljs_tableau_getdata.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent_modals.modals');
if(typeof cljs_tableau_getdata.app.viz !== 'undefined'){
} else {
cljs_tableau_getdata.app.viz = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$maxRows,(100),cljs.core.cst$kw$includeAllColumns,false], null));
}
cljs_tableau_getdata.app.viz_url = "https://public.tableau.com/views/SuperGetData/CustomerSales";
cljs_tableau_getdata.app.viz_options = (function (){var obj12555 = {"hideTabs":true,"hideToolbar":true,"height":"500px","width":"500px","onFirstInteractive":(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_tableau_getdata.app.viz,cljs.core.assoc,cljs.core.cst$kw$ready,true);
})};
return obj12555;
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs_tableau_getdata.app.viz,cljs.core.assoc,cljs.core.cst$kw$ready,false,cljs.core.array_seq([cljs.core.cst$kw$vizobj,(new tableau.Viz(document.getElementById("tableau-div"),cljs_tableau_getdata.app.viz_url,cljs_tableau_getdata.app.viz_options))], 0));
cljs_tableau_getdata.app.get_data_and_show_modal_BANG_ = (function cljs_tableau_getdata$app$get_data_and_show_modal_BANG_(f){
return (function (){var G__12558 = cljs.core.cst$kw$vizobj.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_tableau_getdata.app.viz) : cljs.core.deref.call(null,cljs_tableau_getdata.app.viz))).getWorkbook().getActiveSheet();
var G__12559 = cljs.core.clj__GT_js((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_tableau_getdata.app.viz) : cljs.core.deref.call(null,cljs_tableau_getdata.app.viz)));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12558,G__12559) : f.call(null,G__12558,G__12559));
})().then((function (data){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs_tableau_getdata.app.viz,cljs.core.assoc,cljs.core.cst$kw$columns,data.getColumns(),cljs.core.array_seq([cljs.core.cst$kw$data,data.getData()], 0));

return reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_tableau_getdata.app.modal], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$lg], null));
}));
});
cljs_tableau_getdata.app.modal_render = (function cljs_tableau_getdata$app$modal_render(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow_DASH_y,cljs.core.cst$kw$auto], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_modals.modals.close_button], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table_SHARP_data_DASH_table$table$table_DASH_striped$table_DASH_bordered$nowrap,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cell_DASH_spacing,"0",cljs.core.cst$kw$width,"100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,col){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$th,col.getFieldName()],null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr], null),cljs.core.cst$kw$columns.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_tableau_getdata.app.viz) : cljs.core.deref.call(null,cljs_tableau_getdata.app.viz))))], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,row){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tr,col){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tr,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$td,cljs.core.get.cljs$core$IFn$_invoke$arity$2(col,"formattedValue")],null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr], null),row));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody], null),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_tableau_getdata.app.viz) : cljs.core.deref.call(null,cljs_tableau_getdata.app.viz)))))], null)], null);
});
cljs_tableau_getdata.app.modal_did_mount = (function cljs_tableau_getdata$app$modal_did_mount(this$){
return (function (){var G__12561 = document.getElementById("data-table");
return $(G__12561);
})().DataTable();
});
cljs_tableau_getdata.app.modal = (function cljs_tableau_getdata$app$modal(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,cljs_tableau_getdata.app.modal_render,cljs.core.cst$kw$component_DASH_did_DASH_mount,cljs_tableau_getdata.app.modal_did_mount], null));
});
cljs_tableau_getdata.app.underlying_button = (function cljs_tableau_getdata$app$underlying_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$disabled,cljs.core.not(cljs.core.cst$kw$ready.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_tableau_getdata.app.viz) : cljs.core.deref.call(null,cljs_tableau_getdata.app.viz)))),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs_tableau_getdata.app.get_data_and_show_modal_BANG_((function (p1__12562_SHARP_,p2__12563_SHARP_){
return p1__12562_SHARP_.getUnderlyingDataAsync(p2__12563_SHARP_);
}));
})], null),"Show underlying data"], null);
});
cljs_tableau_getdata.app.summary_button = (function cljs_tableau_getdata$app$summary_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$disabled,cljs.core.not(cljs.core.cst$kw$ready.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_tableau_getdata.app.viz) : cljs.core.deref.call(null,cljs_tableau_getdata.app.viz)))),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs_tableau_getdata.app.get_data_and_show_modal_BANG_((function (p1__12564_SHARP_,p2__12565_SHARP_){
return p1__12564_SHARP_.getSummaryDataAsync(p2__12565_SHARP_);
}));
})], null),"Show summary data"], null);
});
cljs_tableau_getdata.app.get_data_component = (function cljs_tableau_getdata$app$get_data_component(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_horizontal,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Select customers to see their summary or underlying data in tabular format."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://git.io/v6YOK"], null),"Source code"], null)," is less than 100 lines."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$col_DASH_xs_DASH_2,"Number of rows to show"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xs_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_num_DASH_rows$form_DASH_control,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$step,(1),cljs.core.cst$kw$value,cljs.core.cst$kw$maxRows.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_tableau_getdata.app.viz) : cljs.core.deref.call(null,cljs_tableau_getdata.app.viz))),cljs.core.cst$kw$on_DASH_change,(function (p1__12566_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_tableau_getdata.app.viz,cljs.core.assoc,cljs.core.cst$kw$maxRows,p1__12566_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$col_DASH_xs_DASH_2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"all-cols"], null),"Show all columns"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xs_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_all_DASH_cols$toggle$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$checked,cljs.core.cst$kw$includeAllColumns.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_tableau_getdata.app.viz) : cljs.core.deref.call(null,cljs_tableau_getdata.app.viz))),cljs.core.cst$kw$on_DASH_change,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_tableau_getdata.app.viz,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$includeAllColumns], null),cljs.core.not);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_tableau_getdata.app.underlying_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_tableau_getdata.app.summary_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_modals.modals.modal_window], null)], null);
});
cljs_tableau_getdata.app.init = (function cljs_tableau_getdata$app$init(){
var G__12569 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_tableau_getdata.app.get_data_component], null);
var G__12570 = document.getElementById("container");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__12569,G__12570) : reagent.core.render_component.call(null,G__12569,G__12570));
});
