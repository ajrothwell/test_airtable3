(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pvc_ExternalLink"],{"29a2":function(t,n,e){},9901:function(t,n,e){"use strict";var i=e("29a2"),a=e.n(i);a.a},f004:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"external-link"},[e("a",{attrs:{href:t.externalLinkHref,target:"_blank"}},[t._v(" "+t._s(t.externalLinkText)+" "),e("font-awesome-icon",{attrs:{icon:"external-link-alt","aria-hidden":"true"}})],1)])},a=[],r=(e("4621"),e("21c8"),e("0524")),o={mixins:[r["a"]],props:["count","limit","type"],computed:{externalLinkCount:function(){return this.count-this.limit},externalLinkAction:function(){var t,n=this.options.action;return n&&(t=n(this.externalLinkCount)||"See more at "),t},externalLinkDataFromState:function(){var t=this.options.data;return this.evaluateSlot(t)},externalLinkText:function(){if(this.options){var t=this.options.name||"";return"vertical-table"===this.type?t?"".concat(this.externalLinkAction," at ").concat(t):"".concat(this.externalLinkAction):"horizontal-table"===this.type?"".concat(this.externalLinkAction):"".concat(this.externalLinkDataFromState)}return null},externalLinkHref:function(){return this.options?this.evaluateSlot(this.options.href):null}}},s=o,l=(e("9901"),e("2877")),c=Object(l["a"])(s,i,a,!1,null,"598621d6",null);n["default"]=c.exports}}]);
//# sourceMappingURL=pvc_ExternalLink.js.map