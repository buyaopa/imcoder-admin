webpackJsonp([21],{"0Ohe":function(e,t){},"7Yuv":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("Dd8w"),i=n.n(s),u=n("uQBQ"),a=n("NYxO"),l={components:{MenuItem:u.default},props:{isCollapse:{type:Boolean,default:!1}},data:function(){return{menuList:[]}},computed:i()({},Object(a.b)(["dynamicRouters","settings"]),{menus:function(){return this.dynamicRouters},uniqueOpened:function(){return this.settings.uniqueOpened}}),methods:{handleSelect:function(e,t){if(e.indexOf("@")>-1){var n=e.split("@")[0];this.handleClick(n)}},handleClick:function(e){switch(e){case"settings":this.showSettings()}},showSettings:function(){this.$store.dispatch("updateSettings",{key:"openSetting",value:!0})}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-scrollbar",{staticClass:"full-height"},[n("el-menu",{staticClass:"menu",attrs:{collapse:e.isCollapse,"unique-opened":e.uniqueOpened,"background-color":"#545c64","text-color":"#fff","default-active":this.$route.path},on:{select:e.handleSelect}},[n("el-menu-item",{attrs:{index:"0"}},[n("div",{staticClass:"logo"},[n("a",{attrs:{href:"/index"}},[e._v(e._s(e.isCollapse?"Dd":"Dd - Admin"))])])]),e._v(" "),e._l(e.menus,function(e){return n("menu-item",{key:e.id,attrs:{menu:e,"base-path":e.path}})})],2)],1)},staticRenderFns:[]};var c=n("VU/8")(l,o,!1,function(e){n("0Ohe")},"data-v-560dcfe9",null);t.default=c.exports}});