(this["webpackJsonpmaps-app"]=this["webpackJsonpmaps-app"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),o=n(15),r=n.n(o),s=n(16),l=n(4),i=n.n(l),u=n(42);i.a.accessToken="pk.eyJ1IjoiZ2l1bGlvNzgiLCJhIjoiY2tqaGNneGtiOTk1MzJ2cWpyemljZHQzcSJ9.HnFfA7OBcnwbaFJq-vB-5w";var f=function(e){var t=Object(a.useRef)(),n=Object(a.useCallback)((function(e){t.current=e}),[]),c=Object(a.useRef)({}),o=Object(a.useRef)(),r=Object(a.useState)(e),l=Object(s.a)(r,2),f=l[0],b=l[1],j=Object(a.useCallback)((function(e){var t=e.lngLat,n=t.lng,a=t.lat,r=new i.a.Marker;r.id=Object(u.a)(),r.setLngLat([n,a]).addTo(o.current).setDraggable(!0),c.current[r.id]=r,r.on("drag",(function(e){var t=e.target,n=(t.id,t.getLngLat());n.lng,n.lat}))}),[]);return Object(a.useEffect)((function(){var n=new i.a.Map({container:t.current,style:"mapbox://styles/mapbox/streets-v11",center:[e.lng,e.lat],zoom:e.zoom});o.current=n}),[e]),Object(a.useEffect)((function(){var e;null===(e=o.current)||void 0===e||e.on("move",(function(){var e=o.current.getCenter(),t=e.lng,n=e.lat;console.log(t.lat),b({lng:t.toFixed(4),lat:n.toFixed(4),zoom:o.current.getZoom().toFixed(2)})}))}),[]),Object(a.useEffect)((function(){var e;null===(e=o.current)||void 0===e||e.on("click",(function(e){j(e)}))}),[j]),{addMarker:j,coords:f,point:c,setRef:n}},b={lng:144.8794,lat:-37.802,zoom:11.52},j=function(){var e=f(b),t=e.coords,n=e.setRef;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"info",children:["lng:",t.lng," | lat:",t.lat," | zoom ",t.zoom]}),Object(c.jsx)("div",{ref:n,className:"mapContainer"})]})},d=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(j,{})})};n(39);r.a.render(Object(c.jsx)(d,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.c74bdf05.chunk.js.map