(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(13),a(1));a(15);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("href",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},e.home)),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"About"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:e.togglemode,role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlfor:"flexSwitchCheckDefault"},"light"===e.mode?"Enable Dark Mode":"Enable Light Mode")))))}function m(e){var t=Object(n.useState)("enter your text"),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mb-3"},l.a.createElement("h1",null,e.heading),l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){c(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"grey",color:"light"===e.mode?"black":"white"},id:"mybox",rows:"10"}),l.a.createElement("button",{className:"btn btn-success my-2 mx-1",onClick:function(){var t=r.toUpperCase();c(t),e.showalert("Text changed to Uppercase","success")}},"Change to Uppercase"),l.a.createElement("button",{className:"btn btn-danger my-2 mx-1",onClick:function(){var t=r.toLowerCase();c(t),e.showalert("Text changed to Lowercase","success")}},"Change to Lowercase"),l.a.createElement("button",{className:"btn btn-secondary my-2 mx-1",onClick:function(){var t=document.getElementById("mybox");t.select(),navigator.clipboard.writeText(t.value),e.showalert("Text copied","success")}},"Copy Text"),l.a.createElement("button",{className:"btn btn-warning my-2 mx-1",onClick:function(){var t=r.split(/[ ]+/);c(t.join(" ")),e.showalert("Extra spaces has been removed","success")}},"Remove Extra space"),l.a.createElement("button",{className:"btn btn-primary my-2 mx-1",onClick:function(){c(""),e.showalert("Textarea set to be empty","danger")}},"Clear textarea")),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Your Text Summary"),l.a.createElement("h4",null,"You have ",r.split(" ").length>0?r.split(" ").length:0," words and ",r.length," characters in your textbox"),l.a.createElement("p",null,"You will take ",.08*r.split(" ").length," minutes to read this"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"<---Enter something in textarea to preview here---\x3e")))}function i(e){return e.alert&&l.a.createElement("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.message)}s.defaultProps={title:"Disney"};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),d=u[0],b=u[1],h=function(e,t){b({message:e,type:t}),setTimeout(function(){b(null)},1200)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"JANAK GOYAL",home:"Home",mode:a,togglemode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="grey",document.body.style.color="white",h("Dark mode has been enabled","success"),document.title="TextUtiles-Dark Mode"):(r("light"),document.body.style.backgroundColor="white",document.body.style.color="black",h("Light mode has been enabled","success"),document.title="TextUtiles-Light Mode")}}),l.a.createElement(i,{alert:d}),l.a.createElement("div",{className:"container"},l.a.createElement(m,{heading:"Enter your text to analyze",mode:a,showalert:h})))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.10a44f10.chunk.js.map