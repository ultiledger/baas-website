webpackJsonp([3],{"4gEF":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={components:{logo:i("lN+R").a},methods:{toChainbill:function(){window.open("http://www.chainbill.cn")},wait:function(){this.$message("尚未开放，敬请期待!")}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer-warpper"},[i("div",{staticClass:"footer-contianer"},[i("div",{staticClass:"pull-left footer-content"},[i("div",{staticClass:"link"},[i("ul",[i("li",{staticClass:"title"},[t._v("快速链接")]),t._v(" "),i("li",{staticClass:"footer-link",on:{click:t.toChainbill}},[t._v("共赢链 | 链单")])]),t._v(" "),i("ul",[i("li",{staticClass:"title"},[t._v("加入我们")]),t._v(" "),i("li",{staticClass:"footer-link",on:{click:t.wait}},[t._v("社会招聘")]),t._v(" "),i("li",{staticClass:"footer-link",on:{click:t.wait}},[t._v("校园招聘")])]),t._v(" "),t._m(0)]),t._v(" "),t._m(1)])]),t._v(" "),i("div",{staticClass:"copyright"},[t._v("\n    Copyright © 2017-2025 共赢链信息科技（深圳）有限公司 粤ICP备18032780号-1\n  ")]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",{staticClass:"title"},[this._v("联系我们")]),this._v(" "),e("li",[this._v("0755-86720669")]),this._v(" "),e("li",[this._v("\n            gylsz@gylsz.cn\n          ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:"static/images/index/weixin.png",alt:"微信扫一扫"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"copyright mobile"},[this._v("\n    共赢链信息科技（深圳）有限公司"),e("br"),this._v("Copyright © 2017-2025 粤ICP备18032780号-1\n  ")])}]};var n={data:function(){return{mobileNav:!1}},components:{uiFooter:i("VU/8")(s,a,!1,function(t){i("qAGS")},"data-v-7f00af70",null).exports,uiHeader:i("fzwH").a},methods:{hideMobileNav:function(){this.$store.dispatch("toggleMobileNav",!1)}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[!1!==t.$route.meta.needHeader?i("ui-header"):t._e(),t._v(" "),i("router-view",{nativeOn:{click:function(e){return t.hideMobileNav(e)}}}),t._v(" "),i("ui-footer")],1)},staticRenderFns:[]};var r=i("VU/8")(n,o,!1,function(t){i("g3SM")},null,null);e.default=r.exports},fzwH:function(t,e,i){"use strict";i("UFLh");var s={computed:{menus:function(){return this.isLogin&&this.$store.dispatch("logout"),[{resName:"首页",stateName:"index"},{resName:"产品概述",stateName:"product"},{resName:"API",stateName:"baas-api"},{resName:"区块链",stateName:"block-chain"},{resName:"合作洽谈",stateName:"negotiate"},{resName:"关于我们",stateName:"about"},{resName:"登录",stateName:"login"}]},isLogin:function(){return this.$store.state.isLogin}},methods:{go:function(t){this.$router.push({name:t})}},props:{background:{type:String},headerShadow:{type:Boolean,default:!0},position:{type:String}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("pl-header",{attrs:{menus:this.menus,background:this.background,"header-shadow":this.headerShadow,position:this.position}})],1)},staticRenderFns:[]};var n=i("VU/8")(s,a,!1,function(t){i("vxQ5")},"data-v-d58af868",null);e.a=n.exports},g3SM:function(t,e){},qAGS:function(t,e){},vxQ5:function(t,e){}});
//# sourceMappingURL=3.ce79b720f5f39c7df209.js.map