(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tcg_pvc_PopoverLink"],{"1c8d":function(e,t,o){"use strict";var s=o("82e6"),i=o.n(s);i.a},"82e6":function(e,t,o){},a8e6:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._v(" "+e._s(e.evaluateFieldLabel())+" "),o("a",{staticClass:"popover-link",style:this.$props.options.customStyle,attrs:{title:e.value+" "+e.popoverValue},on:{click:e.didClickPopoverLink}},[e._v(" "+e._s(e.value)+" ")])])},i=[],r=o("0524"),p={mixins:[r["a"]],props:["fieldLabel"],data:function(){var e={showFieldLabel:!1};return e},computed:{popoverOptions:function(){return this.$props.options},value:function(){var e=this.$props.slots.value,t=this.$props.slots.transforms||[],o=this.$props.slots.nullValue||"";return this.evaluateSlot(e,t,o)},popoverValue:function(){var e=this.value,t=this.$props.slots.popoverTransforms||[],o=this.$props.slots.popoverNullValue||"";return this.evaluateSlot(e,t,o)},popoverPreText:function(){var e=this.$props.slots.popoverPreText||"";return this.evaluateSlot(e)},popoverPostText:function(){var e=this.$props.slots.popoverPostText||"";return this.evaluateSlot(e)},shouldShowValue:function(){return!1!==this.$props.slots.shouldShowValue},popoverText:function(){return!0===this.shouldShowValue?this.popoverPreText+" "+this.popoverValue+" "+this.popoverPostText:this.popoverPreText+" "+this.popoverPostText}},created:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},methods:{didClickPopoverLink:function(e){this.$store.commit("setPopoverOpen",!0),this.$store.commit("setPopoverText",this.popoverText),this.$store.commit("setPopoverOptions",this.popoverOptions)},handleWindowResize:function(){window.innerWidth>=750?this.showFieldLabel=!1:this.showFieldLabel=!0},evaluateFieldLabel:function(){return this.$props.fieldLabel&&this.showFieldLabel?this.$props.fieldLabel+": ":""}}},n=p,l=(o("1c8d"),o("2877")),a=Object(l["a"])(n,s,i,!1,null,null,null);t["default"]=a.exports}}]);
//# sourceMappingURL=tcg_pvc_PopoverLink.js.map