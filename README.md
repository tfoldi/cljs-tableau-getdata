# cljs-tableau-getdata
Tableau JS API `getData` example in ClojureScript. Showcases datatables integration to show sortable, searchable grid for summary and underlying data.

Demo site: https://tfoldi.github.io/cljs-tableau-getdata/

# URL parameters

## Using a custom VIZ

You can use the `viz` URL query parameter to load a custom Tableau Viz.
Currently this only works for Tableau Views published by Tableau 10.

example:

```
http://localhost:3000/?viz=https://public.tableau.com/views/SuperGetData/CustomerSales
```


## Custom size

Use the `width` and `height` URL parameters to adjust the size of the
viz in pixels.

example:

```
http://localhost:3000/?width=900&height=200&viz=https://public.tableau.com/views/SuperGetData/CustomerSales
```
