"use strict";(self["webpackChunkhello"]=self["webpackChunkhello"]||[]).push([[830],{8830:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"tab"},t._l(t.tabList,(function(a,i){return e("div",{key:i,staticClass:"tab-item",class:t.active==i?"active":"",on:{click:function(e){return t.handlerClick(a,i)}}},[e("div",[t._v(t._s(a.label))])])})),0),e("router-view")],1)},n=[],s=(a(560),{name:"Home",data(){return{active:0,tabList:[{label:"aaa",pathName:"first"},{label:"bbb",pathName:"second"}]}},watch:{$route(){this.init()}},created(){this.init()},methods:{init(){let t=this.tabList.findIndex((t=>this.$route.name==t.pathName));this.active=t},handlerClick(t,e){this.$router.push({name:t.pathName})}}}),l=s,r=a(1001),c=(0,r.Z)(l,i,n,!1,null,"44b262f4",null),u=c.exports}}]);
//# sourceMappingURL=830.3caf2cce.js.map