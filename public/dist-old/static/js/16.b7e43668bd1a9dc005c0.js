webpackJsonp([16],{"0slD":function(e,t){},EV1k:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("broi"),s=o.n(n);for(var r in n)"default"!==r&&function(e){o.d(t,e,function(){return n[e]})}(r);var i=o("Y2Yd");var a=function(e){o("0slD")},l=o("VU/8")(s.a,i.a,!1,a,null,null);t.default=l.exports},Y2Yd:function(e,t,o){"use strict";var n={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"login-wrapper"},[o("pl-header"),e._v(" "),o("div",{ref:"loginContext",staticClass:"login-context"},[o("div",{staticClass:"login-container"},[o("div",{staticClass:"login-panel",on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.send(t):null}}},[o("div",{staticClass:"login-title"},[e._v("\n          登录\n        ")]),e._v(" "),o("el-form",{ref:"form",staticClass:"login-form",attrs:{model:e.form}},[o("el-form-item",[o("el-input",{attrs:{placeholder:"账号"},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}})],1),e._v(" "),o("el-form-item",[o("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),o("el-form-item",{staticClass:"login-btn-wrapper"},[o("el-button",{staticClass:"login-btn",attrs:{type:"primary",loading:e.loading},on:{click:e.send}},[e._v("登录")])],1),e._v(" "),o("el-row",[o("el-col",{attrs:{span:12}},[o("el-button",{staticClass:"forgetPass",attrs:{type:"text"},on:{click:e.forgetPassword}},[e._v("忘记密码 ?")])],1)],1)],1)],1)])])],1)},staticRenderFns:[]};t.a=n},broi:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=o("QmSG"),r=(n=s)&&n.__esModule?n:{default:n};o("UFLh");t.default={data:function(){return{form:{userName:"",password:"",rememberMe:!0,kaptchaReceived:""},msg:"<em>hello world</em>",loading:!1,verifyCode:this.$api.core.getVerifyCode()}},methods:{setLoginHeight:function(){var e=document.documentElement.clientHeight,t=this.$refs.loginContext;t&&(t.style.height=e-t.offsetTop+"px")},send:function(){var e=this;this.loading=!0,this.$store.dispatch("login",this.form).then(function(t){var o=t.isLogin,n=t.msg;e.loading=!1,o&&e.go(n)})},go:function(e){e.bean&&e.bean.sso?this.goBizApp():e.bean&&e.bean.serviceUrl?window.location.href=e.bean.serviceUrl:this.$router.push(r.default.defaultRoute())},goBizApp:function(){var e=this.$store.state.contextData.user.extension.authApps,t=null;if(e)for(var o=0,n=e.length;o<n;o++)if("CHAINBILL"===e[o].appCode){t=e[o];break}t?window.location.href=t.appUrl:this.$router.push(r.default.defaultRoute())},refreshVerifyCode:function(){this.verifyCode=this.$api.core.getVerifyCode()},forgetPassword:function(){this.$router.push({name:"forgetPass"})},registerBuyer:function(){this.$router.push({name:"bsp.register"})}},created:function(){this.$store.state.isLogin&&this.$router.push(r.default.defaultRoute())},mounted:function(){this.setLoginHeight();var e=this;window.onresize=function(){e.setLoginHeight()}}}}});
//# sourceMappingURL=16.b7e43668bd1a9dc005c0.js.map