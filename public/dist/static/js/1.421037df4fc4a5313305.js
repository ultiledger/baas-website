webpackJsonp([1],{"/Zw/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{height:780/(1920/window.screen.availWidth)+"px",images:[{imgUrl:"static/images/index/banner/1.jpg"},{imgUrl:"static/images/index/banner/2.jpg"}]}},methods:{}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner-wrapper",style:{height:t.height}},[n("el-carousel",{attrs:{trigger:"click",height:t.height}},t._l(t.images,function(e,a){return n("el-carousel-item",{key:a},[n("img",{style:{width:"100%",height:t.height},attrs:{src:e.imgUrl,alt:"首页轮播图"}})])}))],1)},staticRenderFns:[]};var i=n("VU/8")(a,s,!1,function(t){n("lSYQ")},"data-v-c9daac30",null).exports,c=n("Way9"),o={props:{canScale:{type:Boolean,default:!1}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block-card-wrapper",class:this.canScale?"scale":""},[e("div",{staticClass:"icon-wrapper"},[this._t("pic")],2),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var l=n("VU/8")(o,r,!1,function(t){n("fUui")},"data-v-ac1e4db2",null).exports,d=n("EJPg"),p={computed:{coops:function(){window.parseInt(window.screen.availWidth);return[{url:"static/images/index/hascoop/zhengxuan.png",hidden:!1,name:"正轩投资",width:"300px"},{url:"static/images/index/hascoop/lianhe.png",hidden:!1,name:"联合利丰",width:"300px"},{url:"static/images/index/hascoop/biya.png",hidden:!1,name:"比亚迪",width:"300px"},{url:"static/images/index/hascoop/wanke.png",hidden:!1,name:"万科采筑",width:"300px"},{url:"static/images/index/hascoop/jingke.png",hidden:!1,name:"晶科能源",width:"300px"},{url:"static/images/index/hascoop/zhaoshang.png",hidden:!1,name:"招商银行",width:"300px"},{url:"static/images/index/hascoop/pufa.png",hidden:!1,name:"浦发银行",width:"300px"},{url:"static/images/index/hascoop/xingqi.png",hidden:!1,name:"星期六",width:"300px"},{url:"static/images/index/hascoop/tianfeng.png",hidden:!1,name:"天风证券",width:"300px"},{url:"static/images/index/hascoop/xuhui.png",hidden:!1,name:"旭辉地产",width:"300px"}]}},methods:{getMdSpan:function(t){return t%5==0?{span:4}:{span:4,offset:1}},getXsSpan:function(t){return t%2==0?{span:11}:{span:11,offset:2}}},components:{commonTitle:d.a}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%"}},[n("div",{staticClass:"Coops",staticStyle:{"margin-top":"0","margin-bottom":"0"}},[n("el-row",{staticClass:"carousel",attrs:{gutter:0}},t._l(t.coops,function(e,a){return n("el-col",{key:a,staticClass:"carouselItem-box",attrs:{xs:t.getXsSpan(a),md:t.getMdSpan(a)}},[n("img",{attrs:{src:e.url}}),t._v(" "),n("div",{staticClass:"hover-layer"},[n("p",{staticClass:"no-indent"},[t._v(t._s(e.name))])])])}))],1)])},staticRenderFns:[]};var h=n("VU/8")(p,u,!1,function(t){n("bxXG"),n("WKZH")},"data-v-7c62e549",null).exports,m=n("fzwH"),g=n("Hng8"),v=n("wHZJ"),f=n("UFLh"),_={components:{banner:i,block:c.a,blockCard:l,coopPartner:h,uiHeader:m.a,commonTitle:d.a,newsCard:g.a},data:function(){return{loading:!0,position:"absolute",headerShadow:!1,background:"transparent",notices:[],hasMore:!1}},methods:{getPageScroll:function(){var t=void 0,e=void 0;return self.pageYOffset?(e=self.pageYOffset,t=self.pageXOffset):document.documentElement&&document.documentElement.scrollTop?(e=document.documentElement.scrollTop,t=document.documentElement.scrollLeft):document.body&&(e=document.body.scrollTop,t=document.body.scrollLeft),new Array(t,e)},goNews:function(t,e){var n=void 0,a=void 0;this.notices.length>e+1&&(a=this.notices[e+1].noticeId),e>0&&(n=this.notices[e-1].noticeId),this.$router.push({name:"news",params:{noticeId:t,nextId:a,prevId:n}})},picPath:function(t){return v.a.genPath(f.a.API+"/file/pub-file/echoPic?relateId="+t+"&&fileType=2")},more:function(){this.$router.push({name:"news-list"})}},mounted:function(){var t=this;this.$nextTick(function(){this.loading=!1}),window.onscroll=function(){t.getPageScroll()[1]>document.querySelector("#banner").clientHeight?(t.position="fixed",t.headerShadow=!0,t.background="#293948"):(t.position="absolute",t.headerShadow=!1,t.background="transparent")}},created:function(){},destroyed:function(){window.onscroll=null}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("banner",{attrs:{id:"banner"}}),t._v(" "),n("div",{staticClass:"container"},[n("block",[n("common-title",{attrs:{slot:"title"},slot:"title"},[t._v("解决方案")]),t._v(" "),n("block-card",{attrs:{"can-scale":!0}},[n("img",{staticStyle:{height:"150px",width:"150px"},attrs:{slot:"pic",src:"static/images/index/pay.png"},slot:"pic"}),t._v(" "),n("div",{staticClass:"block-card-content"},[n("p",{staticClass:"block-card-title no-indent text-bold"},[t._v("创新支付与清结算体系")]),t._v(" "),n("p",{staticClass:"block-card-desc no-indent"},[t._v("重塑传统供应链金融，帮助核心企业零人力零投入打造“商票、银票”体系外的创新支付和清结算体系")])])]),t._v(" "),n("block-card",{attrs:{"can-scale":!0}},[n("img",{staticStyle:{height:"150px",width:"150px"},attrs:{slot:"pic",src:"static/images/index/return.png"},slot:"pic"}),t._v(" "),n("div",{staticClass:"block-card-content"},[n("p",{staticClass:"block-card-title no-indent text-bold"},[t._v("纯线上随借随还体系")]),t._v(" "),n("p",{staticClass:"block-card-desc no-indent"},[t._v("纯线上、便捷高效、随借随还的创新保理体系，为中小企业解决融资难、融资贵难题")])])]),t._v(" "),n("block-card",{attrs:{"can-scale":!0}},[n("img",{staticStyle:{height:"150px",width:"150px"},attrs:{slot:"pic",src:"static/images/index/industry.png"},slot:"pic"}),t._v(" "),n("div",{staticClass:"block-card-content"},[n("p",{staticClass:"block-card-title no-indent text-bold"},[t._v("真正落地的区块链技术")]),t._v(" "),n("p",{staticClass:"block-card-desc no-indent"},[t._v("整个账本和账户体系是基于区块链的分布式账本，资产的发行从源头开始，防止超发和双花，全流程可追溯，并且信息不可篡改")])])])],1),t._v(" "),t.notices.length>0?n("block",[n("common-title",{attrs:{slot:"title"},slot:"title"},[t._v("最新动态")]),t._v(" "),t._l(t.notices,function(e,a){return n("news-card",{key:a,staticClass:"news-card",nativeOn:{click:function(n){t.goNews(e.noticeId,a)}}},[n("img",{staticStyle:{"max-width":"100%"},attrs:{slot:"pic",src:t.picPath(e.noticeId)},slot:"pic"}),t._v(" "),n("div",{staticClass:"block-card-content"},[n("p",{staticClass:"block-card-title no-indent"},[n("span",{staticClass:"news-title pull-left",attrs:{title:e.title}},[t._v(t._s(e.title))]),t._v(" "),n("span",{staticClass:"news-date pull-right"},[t._v(t._s(e.createTime.substring(0,10)))])]),t._v(" "),n("p",{staticClass:"block-card-desc no-indent mult-ellipsis",domProps:{innerHTML:t._s(e.content)}})])])})],2):t._e(),n("br"),t._v(" "),t.hasMore?n("p",{staticClass:"text-center news-more",on:{click:t.more}},[t._v("更多动态 >>")]):t._e(),t._v(" "),n("block",[n("common-title",{attrs:{slot:"title"},slot:"title"},[t._v("合作伙伴")]),t._v(" "),n("coop-partner")],1),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br")],1)],1)},staticRenderFns:[]};var x=n("VU/8")(_,b,!1,function(t){n("3xZU")},"data-v-36a06ff6",null);e.default=x.exports},"0cof":function(t,e){},"3xZU":function(t,e){},Hng8:function(t,e,n){"use strict";var a={props:{canScale:{type:Boolean,default:!1}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block-card-wrapper",class:this.canScale?"scale":""},[e("div",{staticClass:"icon-wrapper"},[this._t("pic")],2),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var i=n("VU/8")(a,s,!1,function(t){n("YWr7")},"data-v-2ba61a8e",null);e.a=i.exports},WKZH:function(t,e){},YWr7:function(t,e){},bxXG:function(t,e){},fUui:function(t,e){},fzwH:function(t,e,n){"use strict";n("UFLh");var a={computed:{menus:function(){return this.isLogin?[{resName:"首页",stateName:"index"}]:[{resName:"首页",stateName:"index"},{resName:"产品概述",stateName:"product"},{resName:"菜单",stateName:"api-menu"},{resName:"API",stateName:"baas-api"},{resName:"区块链",stateName:"block-chain"},{resName:"合作洽谈",stateName:"negotiate"},{resName:"关于我们",stateName:"about"},{resName:"登录",stateName:"login"}]},isLogin:function(){return this.$store.state.isLogin}},methods:{go:function(t){this.$router.push({name:t})}},props:{background:{type:String},headerShadow:{type:Boolean,default:!0},position:{type:String}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("pl-header",{attrs:{menus:this.menus,background:this.background,"header-shadow":this.headerShadow,position:this.position}})],1)},staticRenderFns:[]};var i=n("VU/8")(a,s,!1,function(t){n("0cof")},"data-v-9a72c62a",null);e.a=i.exports},lSYQ:function(t,e){}});
//# sourceMappingURL=1.421037df4fc4a5313305.js.map