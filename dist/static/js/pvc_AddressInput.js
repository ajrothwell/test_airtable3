(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pvc_AddressInput"],{"204d":function(t,e,n){"use strict";n("09a4"),n("5ca2");function i(){return"id-"+Math.random().toString(36).substring(7)}e["a"]=i},"354d":function(t,e,n){"use strict";var i=n("53ca");function r(t){var e=Object(i["a"])(t);return null!=t&&("object"==e||"function"==e)}e["a"]=r},"35cb":function(t,e,n){},"48a4":function(t,e,n){"use strict";var i=n("354d"),r=n("f404"),o=function(){return r["a"].Date.now()},a=o,s=n("7c18"),c="Expected a function",d=Math.max,u=Math.min;function l(t,e,n){var r,o,l,f,h,p,m=0,b=!1,v=!1,w=!0;if("function"!=typeof t)throw new TypeError(c);function g(e){var n=r,i=o;return r=o=void 0,m=e,f=t.apply(i,n),f}function y(t){return m=t,h=setTimeout(j,e),b?g(t):f}function S(t){var n=t-p,i=t-m,r=e-n;return v?u(r,l-i):r}function O(t){var n=t-p,i=t-m;return void 0===p||n>=e||n<0||v&&i>=l}function j(){var t=a();if(O(t))return C(t);h=setTimeout(j,S(t))}function C(t){return h=void 0,w&&r?g(t):(r=o=void 0,f)}function $(){void 0!==h&&clearTimeout(h),m=0,r=p=o=h=void 0}function E(){return void 0===h?f:C(a())}function x(){var t=a(),n=O(t);if(r=arguments,o=this,p=t,n){if(void 0===h)return y(p);if(v)return clearTimeout(h),h=setTimeout(j,e),g(p)}return void 0===h&&(h=setTimeout(j,e)),f}return e=Object(s["a"])(e)||0,Object(i["a"])(n)&&(b=!!n.leading,v="maxWait"in n,l=v?d(Object(s["a"])(n.maxWait)||0,e):l,w="trailing"in n?!!n.trailing:w),x.cancel=$,x.flush=E,x}e["a"]=l},"5a0f":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"pvc-search-control-container "+t.containerClass,style:t.containerStyle},[n("form",{staticClass:"pvc-search-control-form",attrs:{id:"search-form",autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.handleSearchFormSubmit(e)}}},[n("input",{class:"pvc-search-control-input "+t.inputClass,style:t.inputStyle,attrs:{id:t.inputID,placeholder:this.$props.placeholder||"Search the map",tabindex:"0"},domProps:{value:t.addressEntered},on:{keyup:t.didType}})]),""!=t.addressEntered&&null!=t.addressEntered?n("button",{class:"pvc-search-control-button "+t.buttonClass,on:{click:t.handleFormX}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1):t._e(),n("button",{class:"pvc-search-control-button "+t.buttonClass,attrs:{name:"pvc-search-control-button",tabindex:"-1"},on:{click:t.handleSearchFormSubmit}},[n("font-awesome-icon",{attrs:{icon:"search"}})],1),t._t("address-candidates-slot")],2)},r=[],o=(n("1c7d"),n("09a4"),n("5ca2"),n("48a4")),a=n("d117"),s=n.n(a),c=n("204d"),d={name:"AddressInput",props:["widthFromConfig","placeholder"],data:function(){var t={containerStyle:{width:"305px"},inputStyle:{width:"250px"},inputID:Object(c["a"])(),addressEntered:null};return t},computed:{inputWidth:function(){return""===this.addressEntered||null===this.addressEntered?this.$props.widthFromConfig-55:this.$props.widthFromConfig-108},inputClass:function(){return this.isMobileOrTablet?"pvc-input-mobile":"pvc-input-non-mobile"},containerClass:function(){return this.isMobileOrTablet?"pvc-container-mobile":"pvc-container-non-mobile"},buttonClass:function(){return this.isMobileOrTablet?"pvc-button-mobile":"pvc-button-non-mobile"},addressAutocompleteEnabled:function(){return!!this.$config.addressInput&&!0===this.$config.addressInput.autocompleteEnabled},isMobileOrTablet:function(){return this.$store.state.isMobileOrTablet}},watch:{addressEntered:function(t){this.handleWindowResize()}},created:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize(),console.log("AddressInput created is running")},methods:{didType:Object(o["a"])((function(t){var e=t.target.value;if(this.$data.addressEntered=e,this.addressAutocompleteEnabled){if("ArrowDown"===t.key)return void document.getElementById("address-candidate-list-0").focus();this.getCandidates(e),"Enter"!==t.key&&this.$store.commit("setShouldShowAddressCandidateList",!0)}}),50),getCandidates:function(t){s.a.get("https://cqvfg1pm72.execute-api.us-east-1.amazonaws.com/dev/first-api-test/",{params:{address:t}}).then(this.didGetCandidates).catch(this.didGetCandidatesError)},didGetCandidates:function(t){var e=t.data.matches,n=e.map((function(t){return t.address}));this.$store.commit("setCandidates",n)},didGetCandidatesError:function(t){console.log("error getting candidates",t),this.$store.commit("setCandidates",[])},handleFormX:function(){console.log("handleFormX is running"),this.$data.addressEntered="",this.$store.commit("setShouldShowAddressCandidateList",!1),this.$store.commit("setCandidates",[])},handleSearchFormSubmit:function(){var t;console.log("handleSearchFormSubmit is running"),t=this.addressAutocompleteEnabled?this.addressEntered:document.querySelector("#"+this.$data.inputID.toString()).value,this.$emit("handle-search-form-submit",t)},handleWindowResize:function(){var t=this.addressEntered;window.innerWidth>=850?(this.containerStyle.width=this.$props.widthFromConfig+"px",this.inputStyle.width=""===t||null===t?this.$props.widthFromConfig-55+"px":this.$props.widthFromConfig-108+"px"):window.innerWidth>=750?(this.containerStyle.width=this.$props.widthFromConfig-100+"px",this.inputStyle.width=""===t||null===t?this.$props.widthFromConfig-155+"px":this.$props.widthFromConfig-208+"px"):(this.containerStyle.width="300px",this.inputStyle.width=""===t||null===t?"245px":"192px")}}},u=d,l=(n("9b6e"),n("2877")),f=Object(l["a"])(u,i,r,!1,null,"15e36a69",null);e["default"]=f.exports},"7c18":function(t,e,n){"use strict";n("02a5"),n("44e9"),n("f0c9");var i=n("354d"),r=n("53ca"),o=n("bc00");function a(t){return null!=t&&"object"==Object(r["a"])(t)}var s=a,c="[object Symbol]";function d(t){return"symbol"==Object(r["a"])(t)||s(t)&&Object(o["a"])(t)==c}var u=d,l=NaN,f=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt;function v(t){if("number"==typeof t)return t;if(u(t))return l;if(Object(i["a"])(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Object(i["a"])(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var n=p.test(t);return n||m.test(t)?b(t.slice(2),n?2:8):h.test(t)?l:+t}e["a"]=v},"9b6e":function(t,e,n){"use strict";var i=n("35cb"),r=n.n(i);r.a},bc00:function(t,e,n){"use strict";var i=n("f404"),r=i["a"].Symbol,o=r,a=(n("09a4"),n("5ca2"),Object.prototype),s=a.hasOwnProperty,c=a.toString,d=o?o.toStringTag:void 0;function u(t){var e=s.call(t,d),n=t[d];try{t[d]=void 0;var i=!0}catch(o){}var r=c.call(t);return i&&(e?t[d]=n:delete t[d]),r}var l=u,f=Object.prototype,h=f.toString;function p(t){return h.call(t)}var m=p,b="[object Null]",v="[object Undefined]",w=o?o.toStringTag:void 0;function g(t){return null==t?void 0===t?v:b:w&&w in Object(t)?l(t):m(t)}e["a"]=g},ec32:function(t,e,n){"use strict";(function(t){var i=n("53ca"),r="object"==("undefined"===typeof t?"undefined":Object(i["a"])(t))&&t&&t.Object===Object&&t;e["a"]=r}).call(this,n("c8ba"))},f404:function(t,e,n){"use strict";var i=n("53ca"),r=n("ec32"),o="object"==("undefined"===typeof self?"undefined":Object(i["a"])(self))&&self&&self.Object===Object&&self,a=r["a"]||o||Function("return this")();e["a"]=a}}]);
//# sourceMappingURL=pvc_AddressInput.js.map