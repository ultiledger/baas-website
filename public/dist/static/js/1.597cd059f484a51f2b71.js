webpackJsonp([1],{"/Zw/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{height:780/(1920/window.screen.availWidth)+"px",images:[{imgUrl:"static/images/index/banner/1.jpg"},{imgUrl:"static/images/index/banner/2.jpg"}]}},methods:{}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner-wrapper",style:{height:t.height}},[n("el-carousel",{attrs:{trigger:"click",height:t.height}},t._l(t.images,function(e,r){return n("el-carousel-item",{key:r},[n("img",{style:{width:"100%",height:t.height},attrs:{src:e.imgUrl,alt:"首页轮播图"}})])}))],1)},staticRenderFns:[]};var a=n("VU/8")(r,i,!1,function(t){n("lSYQ")},"data-v-c9daac30",null).exports,o=n("Way9"),s={props:{canScale:{type:Boolean,default:!1}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block-card-wrapper",class:this.canScale?"scale":""},[e("div",{staticClass:"icon-wrapper"},[this._t("pic")],2),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var l=n("VU/8")(s,c,!1,function(t){n("fUui")},"data-v-ac1e4db2",null).exports,u=n("EJPg"),d={computed:{coops:function(){window.parseInt(window.screen.availWidth);return[{url:"static/images/index/hascoop/zhengxuan.png",hidden:!1,name:"正轩投资",width:"300px"},{url:"static/images/index/hascoop/lianhe.png",hidden:!1,name:"联合利丰",width:"300px"},{url:"static/images/index/hascoop/biya.png",hidden:!1,name:"比亚迪",width:"300px"},{url:"static/images/index/hascoop/wanke.png",hidden:!1,name:"万科采筑",width:"300px"},{url:"static/images/index/hascoop/jingke.png",hidden:!1,name:"晶科能源",width:"300px"},{url:"static/images/index/hascoop/zhaoshang.png",hidden:!1,name:"招商银行",width:"300px"},{url:"static/images/index/hascoop/pufa.png",hidden:!1,name:"浦发银行",width:"300px"},{url:"static/images/index/hascoop/xingqi.png",hidden:!1,name:"星期六",width:"300px"},{url:"static/images/index/hascoop/tianfeng.png",hidden:!1,name:"天风证券",width:"300px"},{url:"static/images/index/hascoop/xuhui.png",hidden:!1,name:"旭辉地产",width:"300px"}]}},methods:{getMdSpan:function(t){return t%5==0?{span:4}:{span:4,offset:1}},getXsSpan:function(t){return t%2==0?{span:11}:{span:11,offset:2}}},components:{commonTitle:u.a}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%"}},[n("div",{staticClass:"Coops",staticStyle:{"margin-top":"0","margin-bottom":"0"}},[n("el-row",{staticClass:"carousel",attrs:{gutter:0}},t._l(t.coops,function(e,r){return n("el-col",{key:r,staticClass:"carouselItem-box",attrs:{xs:t.getXsSpan(r),md:t.getMdSpan(r)}},[n("img",{attrs:{src:e.url}}),t._v(" "),n("div",{staticClass:"hover-layer"},[n("p",{staticClass:"no-indent"},[t._v(t._s(e.name))])])])}))],1)])},staticRenderFns:[]};var p=n("VU/8")(d,h,!1,function(t){n("bxXG"),n("WKZH")},"data-v-7c62e549",null).exports,f=n("fzwH"),m=n("Hng8"),g=n("wHZJ"),v=n("UFLh"),y={components:{banner:a,block:o.a,blockCard:l,coopPartner:p,uiHeader:f.a,commonTitle:u.a,newsCard:m.a},data:function(){return{loading:!0,position:"absolute",headerShadow:!1,background:"transparent",notices:[],hasMore:!1}},methods:{getPageScroll:function(){var t=void 0,e=void 0;return self.pageYOffset?(e=self.pageYOffset,t=self.pageXOffset):document.documentElement&&document.documentElement.scrollTop?(e=document.documentElement.scrollTop,t=document.documentElement.scrollLeft):document.body&&(e=document.body.scrollTop,t=document.body.scrollLeft),new Array(t,e)},goNews:function(t,e){var n=void 0,r=void 0;this.notices.length>e+1&&(r=this.notices[e+1].noticeId),e>0&&(n=this.notices[e-1].noticeId),this.$router.push({name:"news",params:{noticeId:t,nextId:r,prevId:n}})},picPath:function(t){return g.a.genPath(v.a.API+"/file/pub-file/echoPic?relateId="+t+"&&fileType=2")},more:function(){this.$router.push({name:"news-list"})}},mounted:function(){var t=this;this.$nextTick(function(){this.loading=!1}),window.onscroll=function(){t.getPageScroll()[1]>document.querySelector("#banner").clientHeight?(t.position="fixed",t.headerShadow=!0,t.background="#293948"):(t.position="absolute",t.headerShadow=!1,t.background="transparent")}},created:function(){},destroyed:function(){window.onscroll=null}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("banner",{attrs:{id:"banner"}}),t._v(" "),n("div",{staticClass:"container"},[n("block",[n("common-title",{attrs:{slot:"title"},slot:"title"},[t._v("解决方案")]),t._v(" "),n("block-card",{attrs:{"can-scale":!0}},[n("img",{staticStyle:{height:"150px",width:"150px"},attrs:{slot:"pic",src:"static/images/index/pay.png"},slot:"pic"}),t._v(" "),n("div",{staticClass:"block-card-content"},[n("p",{staticClass:"block-card-title no-indent text-bold"},[t._v("创新支付与清结算体系")]),t._v(" "),n("p",{staticClass:"block-card-desc no-indent"},[t._v("重塑传统供应链金融，帮助核心企业零人力零投入打造“商票、银票”体系外的创新支付和清结算体系")])])]),t._v(" "),n("block-card",{attrs:{"can-scale":!0}},[n("img",{staticStyle:{height:"150px",width:"150px"},attrs:{slot:"pic",src:"static/images/index/return.png"},slot:"pic"}),t._v(" "),n("div",{staticClass:"block-card-content"},[n("p",{staticClass:"block-card-title no-indent text-bold"},[t._v("纯线上随借随还体系")]),t._v(" "),n("p",{staticClass:"block-card-desc no-indent"},[t._v("纯线上、便捷高效、随借随还的创新保理体系，为中小企业解决融资难、融资贵难题")])])]),t._v(" "),n("block-card",{attrs:{"can-scale":!0}},[n("img",{staticStyle:{height:"150px",width:"150px"},attrs:{slot:"pic",src:"static/images/index/industry.png"},slot:"pic"}),t._v(" "),n("div",{staticClass:"block-card-content"},[n("p",{staticClass:"block-card-title no-indent text-bold"},[t._v("真正落地的区块链技术")]),t._v(" "),n("p",{staticClass:"block-card-desc no-indent"},[t._v("整个账本和账户体系是基于区块链的分布式账本，资产的发行从源头开始，防止超发和双花，全流程可追溯，并且信息不可篡改")])])])],1),t._v(" "),t.notices.length>0?n("block",[n("common-title",{attrs:{slot:"title"},slot:"title"},[t._v("最新动态")]),t._v(" "),t._l(t.notices,function(e,r){return n("news-card",{key:r,staticClass:"news-card",nativeOn:{click:function(n){t.goNews(e.noticeId,r)}}},[n("img",{staticStyle:{"max-width":"100%"},attrs:{slot:"pic",src:t.picPath(e.noticeId)},slot:"pic"}),t._v(" "),n("div",{staticClass:"block-card-content"},[n("p",{staticClass:"block-card-title no-indent"},[n("span",{staticClass:"news-title pull-left",attrs:{title:e.title}},[t._v(t._s(e.title))]),t._v(" "),n("span",{staticClass:"news-date pull-right"},[t._v(t._s(e.createTime.substring(0,10)))])]),t._v(" "),n("p",{staticClass:"block-card-desc no-indent mult-ellipsis",domProps:{innerHTML:t._s(e.content)}})])])})],2):t._e(),n("br"),t._v(" "),t.hasMore?n("p",{staticClass:"text-center news-more",on:{click:t.more}},[t._v("更多动态 >>")]):t._e(),t._v(" "),n("block",[n("common-title",{attrs:{slot:"title"},slot:"title"},[t._v("合作伙伴")]),t._v(" "),n("coop-partner")],1),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br")],1)],1)},staticRenderFns:[]};var x=n("VU/8")(y,w,!1,function(t){n("3xZU")},"data-v-36a06ff6",null);e.default=x.exports},"3xZU":function(t,e){},Hng8:function(t,e,n){"use strict";var r={props:{canScale:{type:Boolean,default:!1}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block-card-wrapper",class:this.canScale?"scale":""},[e("div",{staticClass:"icon-wrapper"},[this._t("pic")],2),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var a=n("VU/8")(r,i,!1,function(t){n("YWr7")},"data-v-2ba61a8e",null);e.a=a.exports},SldL:function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",l="object"==typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{(u=e.regeneratorRuntime=l?t.exports:{}).wrap=x;var d="suspendedStart",h="suspendedYield",p="executing",f="completed",m={},g={};g[o]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==r&&i.call(y,o)&&(g=y);var w=N.prototype=_.prototype=Object.create(g);k.prototype=w.constructor=N,N.constructor=k,N[c]=k.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,N):(t.__proto__=N,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},u.awrap=function(t){return{__await:t}},L(S.prototype),S.prototype[s]=function(){return this},u.AsyncIterator=S,u.async=function(t,e,n,r){var i=new S(x(t,e,n,r));return u.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},L(w),w[c]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),l=i.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}}}function x(t,e,n,r){var i=e&&e.prototype instanceof _?e:_,a=Object.create(i.prototype),o=new O(r||[]);return a._invoke=function(t,e,n){var r=d;return function(i,a){if(r===p)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw a;return F()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=E(o,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=b(t,e,n);if("normal"===c.type){if(r=n.done?f:h,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=f,n.method="throw",n.arg=c.arg)}}}(t,n,o),a}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function _(){}function k(){}function N(){}function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(t){var e;this._invoke=function(n,r){function a(){return new Promise(function(e,a){!function e(n,r,a,o){var s=b(t[n],t,r);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&i.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,a,o)},function(t){e("throw",t,a,o)}):Promise.resolve(l).then(function(t){c.value=t,a(c)},o)}o(s.arg)}(n,r,e,a)})}return e=e?e.then(a,a):a()}}function E(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,E(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=b(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},WKZH:function(t,e){},Xxa5:function(t,e,n){t.exports=n("jyFz")},YWr7:function(t,e){},bxXG:function(t,e){},exGp:function(t,e,n){"use strict";e.__esModule=!0;var r,i=n("//Fk"),a=(r=i)&&r.__esModule?r:{default:r};e.default=function(t){return function(){var e=t.apply(this,arguments);return new a.default(function(t,n){return function r(i,o){try{var s=e[i](o),c=s.value}catch(t){return void n(t)}if(!s.done)return a.default.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}("next")})}}},fUui:function(t,e){},fzwH:function(t,e,n){"use strict";var r=n("Xxa5"),i=n.n(r),a=n("exGp"),o=n.n(a),s=(n("UFLh"),n("I3G/")),c=n.n(s),l={computed:{menus:function(){return this.isLogin?[{resName:"首页",stateName:"index"},{resName:"产品概述",stateName:"product"},{resName:"API",stateName:"baas-api"},{resName:"区块链",stateName:"block-chain"},{resName:"合作洽谈",stateName:"negotiate"},{resName:"关于我们",stateName:"about"}]:[{resName:"首页",stateName:"index"},{resName:"产品概述",stateName:"product"},{resName:"API",stateName:"baas-api"},{resName:"区块链",stateName:"block-chain"},{resName:"合作洽谈",stateName:"negotiate"},{resName:"关于我们",stateName:"about"},{resName:"登录",stateName:"login"}]},isLogin:function(){var t=this;return o()(i.a.mark(function e(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.api.core.refreshContextData();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},e,t)}))()}},methods:{go:function(t){this.$router.push({name:t})}},props:{background:{type:String},headerShadow:{type:Boolean,default:!0},position:{type:String}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("pl-header",{attrs:{menus:this.menus,background:this.background,"header-shadow":this.headerShadow,position:this.position}})],1)},staticRenderFns:[]};var d=n("VU/8")(l,u,!1,function(t){n("y2Jo")},"data-v-d286c9d4",null);e.a=d.exports},jyFz:function(t,e,n){var r=function(){return this}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("SldL"),i)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},lSYQ:function(t,e){},y2Jo:function(t,e){}});
//# sourceMappingURL=1.597cd059f484a51f2b71.js.map