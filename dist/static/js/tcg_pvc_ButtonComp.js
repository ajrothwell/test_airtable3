(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tcg_pvc_ButtonComp"],{"1f13":function(t,s,o){"use strict";var n=o("2839"),e=o.n(n);e.a},2839:function(t,s,o){},fce2:function(t,s,o){"use strict";o.r(s);var n=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("a",{class:"button "+this.class+" clicked-"+this.$data.clicked,style:t.style,attrs:{href:"#"},domProps:{innerHTML:t._s(t.message)},on:{click:function(s){return s.preventDefault(),t.clickAction(s)}}})},e=[],i=o("f076"),c={mixins:[i["a"]],data:function(){return{clicked:!1}},computed:{message:function(){var t;return this.$props.slots&&(t=this.evaluateSlot(this.$props.slots.text)),t},class:function(){var t;return this.$props.options&&(t=this.evaluateSlot(this.$props.options.class)||""),t},style:function(){var t;return this.$props.options&&(t=this.evaluateSlot(this.$props.options.style)||""),t}},methods:{clickAction:function(){this.evaluateSlot(this.slots.buttonAction),!this.$props.options.stopClickedChange&&(this.$data.clicked=!0)}}},a=c,l=(o("1f13"),o("2877")),r=Object(l["a"])(a,n,e,!1,null,"5975e190",null);s["default"]=r.exports}}]);
//# sourceMappingURL=tcg_pvc_ButtonComp.js.map