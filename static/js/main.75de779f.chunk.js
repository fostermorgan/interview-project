(this["webpackJsonpinterview-project"]=this["webpackJsonpinterview-project"]||[]).push([[0],{34:function(e,t,n){e.exports=n(44)},39:function(e,t,n){},40:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),c=(n(39),n(23)),l=(n(40),n(77)),s=n(83),u=n(81),p=n(82),m=n(84);var d=function(){var e=r.a.useState(""),t=Object(c.a)(e,2),n=t[0],a=t[1],i=["CAN","USA","MEX","BLZ","GTM","SLV","HND","NIC","CRI","PAN"],o=r.a.useState([]),d=Object(c.a)(o,2),h=d[0],g=d[1],f=r.a.useRef(["USA"]);r.a.useEffect((function(){E()}),[n]);var E=function(){if(i.includes(n.toUpperCase())){if("CAN"!==n.toUpperCase())for(var e=2;e<i.length;e++)i[e]!==n.toUpperCase().toString()&&"BLZ"!==i[e]&&"SLV"!==i[e]?f.current.push(i[e]):i[e]===n.toUpperCase().toString()&&(f.current.push(i[e]),e=i.length);else f.current.push(i[0]);g(f.current)}else f.current=["USA"]};return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null),r.a.createElement(u.a,{maxWidth:"lg"},r.a.createElement(p.a,{container:!0,spacing:1,alignItems:"flex-end"},r.a.createElement(p.a,{item:!0},r.a.createElement(m.a,{label:"Destination",id:"standard-adornment-weight",value:n,onChange:function(e){return a(e.target.value)},"aria-describedby":"standard-weight-helper-text",inputProps:{"aria-label":"weight"}}))),r.a.createElement(p.a,{container:!0,spacing:1,alignItems:"flex-end"},r.a.createElement(p.a,{item:!0},""===n&&r.a.createElement(s.a,null,"Enter a destination"),""!==n&&!i.includes(n.toUpperCase())&&r.a.createElement(s.a,null,"Enter a valid destination"),""!==n&&i.includes(n.toUpperCase())&&h.map((function(e){return r.a.createElement("li",{key:e},e)}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.75de779f.chunk.js.map