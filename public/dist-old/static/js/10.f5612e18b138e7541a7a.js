webpackJsonp([10],{"5W9s":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Mseh"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);var c=i("ELDS");var r=function(t){i("b8Ia")},o=i("VU/8")(a.a,c.a,!1,r,"data-v-76cce7cc",null);e.default=o.exports},ELDS:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"container-wrapper container",style:{"min-height":t.minHeight+"px"}},[i("h2",{staticClass:"text-center",staticStyle:{"margin-top":"45px"}},[t._v(t._s(t.data.title))]),t._v(" "),i("div",{staticClass:"small text-center"},[t._v(t._s(t.data.createTime))]),t._v(" "),i("div",{staticClass:"ql-editor"},[i("div",{staticClass:"news-header-img"},[i("img",{attrs:{src:t.srcUrl,alt:"新闻图片"}})]),t._v(" "),i("p",{domProps:{innerHTML:t._s(t.data.content)}})]),t._v(" "),i("pl-content-box-toolbar",{staticStyle:{"margin-top":"50px",position:"relative"},attrs:{border:!1}},[t.prevId?i("div",{staticClass:"ext",on:{click:t.getPrev}},[i("span",[t._v("上一篇：")]),i("span",[t._v("  "+t._s(t.preTitle))])]):t._e(),t._v(" "),t.nextId?i("div",{staticClass:"ext",on:{click:t.getNext}},[i("span",[t._v("下一篇：")]),i("span",[t._v("  "+t._s(t.nextTitle))])]):t._e(),t._v(" "),i("div",{staticClass:"ext-back",on:{click:t.goBack}},[i("span",{staticClass:"back"},[t._v("【返回】")])])])],1)},staticRenderFns:[]};e.a=n},Mseh:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=i("wHZJ"),s=(n=a)&&n.__esModule?n:{default:n},c=i("UFLh");i("3f40"),e.default={data:function(){return{loading:!0,data:{},srcUrl:"",prevId:"",nextId:"",noticeId:"",nextTitle:"",preTitle:""}},computed:{minHeight:function(){return document.documentElement.clientHeight-304}},mounted:function(){var t=this.$route.params;t.noticeId?(this.noticeId=t.noticeId,this.getNews()):this.$router.push({name:"home"})},methods:{getNews:function(){var t=this;this.loading=!0,this.$api.bsp.notice.getNoticeDetail(this.noticeId).then(function(e){t.data=e,t.srcUrl=s.default.genPath(c.HttpPrefix.API+"/file/pub-file/echoPic?relateId="+t.noticeId+"&&fileType=2"),t.loading=!1,t.prevId=e.preNoticeId,t.nextId=e.nextNoticeId,t.nextTitle=e.nextTitle,t.preTitle=e.preTitle})},goBack:function(){this.$router.back()},getPrev:function(){this.noticeId=this.prevId,this.getNews()},getNext:function(){this.noticeId=this.nextId,this.getNews()}}}},b8Ia:function(t,e){}});
//# sourceMappingURL=10.f5612e18b138e7541a7a.js.map