webpackJsonp([10],{EV1k:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("QmSG"),s=(o("UFLh"),{data:function(){return{form:{userName:"",password:"",rememberMe:!0,kaptchaReceived:""},msg:"<em>hello world</em>",loading:!1,verifyCode:this.$api.core.getVerifyCode()}},methods:{setLoginHeight:function(){var e=document.documentElement.clientHeight,t=this.$refs.loginContext;t&&(t.style.height=e-t.offsetTop+"px")},send:function(){var e=this;this.loading=!0,this.$store.dispatch("login",this.form).then(function(t){var o=t.isLogin,r=t.msg;e.loading=!1,o&&e.go(r)})},go:function(e){e.bean&&e.bean.sso?this.goBizApp():e.bean&&e.bean.serviceUrl?window.location.href=e.bean.serviceUrl:this.$router.push(r.a.defaultRoute())},goBizApp:function(){var e=this.$store.state.contextData.user.extension.authApps,t=null;if(e)for(var o=0,s=e.length;o<s;o++)if("CHAINBILL"===e[o].appCode){t=e[o];break}t?window.location.href=t.appUrl:this.$router.push(r.a.defaultRoute())},refreshVerifyCode:function(){var e=this;this.$api.core.getCaptcha(Math.random()).then(function(t){e.verifyCode=t.body,console.debug("refreshVerifyCode...this.verifyCode="+e.verifyCode)})},forgetPassword:function(){this.$router.push({name:"forgetPass"})},registerBuyer:function(){this.$router.push({name:"bsp.register"})}},created:function(){this.$store.state.isLogin&&this.$router.push(r.a.defaultRoute())},mounted:function(){this.setLoginHeight();var e=this;window.onresize=function(){e.setLoginHeight()}}}),i={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"login-wrapper"},[o("pl-header"),e._v(" "),o("div",{ref:"loginContext",staticClass:"login-context"},[o("div",{staticClass:"login-container"},[o("div",{staticClass:"login-panel",on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.send(t):null}}},[o("div",{staticClass:"login-title"},[e._v("\n          登录\n        ")]),e._v(" "),o("el-form",{ref:"form",staticClass:"login-form",attrs:{model:e.form}},[o("el-form-item",[o("el-input",{attrs:{placeholder:"账号"},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}})],1),e._v(" "),o("el-form-item",[o("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),o("el-form-item",[o("el-row",[o("el-col",{attrs:{span:16}},[o("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入验证码"},model:{value:e.form.kaptchaReceived,callback:function(t){e.$set(e.form,"kaptchaReceived",t)},expression:"form.kaptchaReceived"}})],1),e._v(" "),o("el-col",{staticClass:"text-right",attrs:{span:8}},[o("div",{staticClass:"code-img"},[o("div",{attrs:{title:"点击刷新验证码",width:"80"},domProps:{innerHTML:e._s(e.verifyCode)},on:{click:e.refreshVerifyCode}})])])],1)],1),e._v(" "),o("el-form-item",{staticClass:"login-btn-wrapper"},[o("el-button",{staticClass:"login-btn",attrs:{type:"primary",loading:e.loading},on:{click:e.send}},[e._v("登录")])],1),e._v(" "),o("el-row",[o("el-col",{attrs:{span:9}},[o("el-checkbox",{attrs:{checked:""},model:{value:e.form.rememberMe,callback:function(t){e.$set(e.form,"rememberMe",t)},expression:"form.rememberMe"}},[e._v("记住密码")])],1),e._v(" "),o("el-col",{attrs:{span:12}},[o("el-button",{staticClass:"forgetPass",attrs:{type:"text"},on:{click:e.forgetPassword}},[e._v("忘记密码 ?")])],1)],1)],1)],1)])])],1)},staticRenderFns:[]};var n=o("VU/8")(s,i,!1,function(e){o("tPrA")},null,null);t.default=n.exports},tPrA:function(e,t){}});
//# sourceMappingURL=10.3dfa72fe51085e09fa40.js.map