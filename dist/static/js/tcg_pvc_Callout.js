(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tcg_pvc_Callout"],{"0524":function(t,n,o){"use strict";o("2d6d"),o("e8fd"),o("9d62"),o("5d53"),o("97cc");var e,s,r=o("b85c"),c=o("53ca"),i={props:{slots:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}}},computed:{nullValue:function(){var t=this.options||{};return t.nullValue}},beforeCreate:function(){},created:function(){},methods:{evaluateSlot:function(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!t)return t;var s,i=Object(c["a"])(t);if("function"===i){var u=this.$store.state,l=this.$controller,a=t,p=this.item;s=p?a(u,p,l):a(u)}else s=t;if(!1===s);else if(!o.includes("currency")&&!s)return e;var f,d=Object(r["a"])(o);try{var m=function(){var t=f.value,o=n.$config.transforms[t],e=void 0,r=o.globals;r&&(e=Object.keys(window).filter((function(t){return r.includes(t)})).reduce((function(t,n){return t[n]=window[n],t}),{}));var c=o.transform;s=c(s,e)};for(d.s();!(f=d.n()).done;)m()}catch(v){d.e(v)}finally{d.f()}return s}}},u=i,l=o("2877"),a=Object(l["a"])(u,e,s,!1,null,null,null);n["a"]=a.exports},"34c8":function(t,n,o){"use strict";o.r(n);var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"wrapper grid-y"},[o("div",{class:"callout "+t.calloutClass},[t.message?o("p",{domProps:{innerHTML:t._s(t.message)}}):t._e(),t.components?o("topic-component-group",{attrs:{"topic-components":t.components}}):t._e()],1)])},s=[],r=(o("09a4"),o("0524")),c={components:{TopicComponentGroup:function(){return o.e("pvc_TopicComponentGroup").then(o.bind(null,"89a9"))}},mixins:[r["a"]],computed:{calloutClass:function(){var t;return this.$props.options&&(this.$props.options.class&&(t=this.$props.options.class),t="columns small-24"),t},message:function(){return this.$props.slots&&this.evaluateSlot(this.$props.slots.text)||""},components:function(){return this.$props.options&&this.$props.options.components||null}}},i=c,u=(o("c1fb"),o("2877")),l=Object(u["a"])(i,e,s,!1,null,"7030db76",null);n["default"]=l.exports},c1fb:function(t,n,o){"use strict";var e=o("ef81"),s=o.n(e);s.a},ef81:function(t,n,o){}}]);
//# sourceMappingURL=tcg_pvc_Callout.js.map