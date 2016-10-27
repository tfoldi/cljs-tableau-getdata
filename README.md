# cljs-tableau-getdata
Tableau JS API `getData` example in ClojureScript. Showcases datatables integration to show sortable, searchable grid for summary and underlying data.

Demo site: https://tfoldi.github.io/cljs-tableau-getdata/


# Using a custom VIZ

You can use the `viz` URL query parameter to load a custom Tableau Viz.
Currently this only works for Tableau Views published by Tableau 10.

example:

```
http://localhost:3000/?viz=https://public.tableau.com/views/SuperGetData/CustomerSales
```
