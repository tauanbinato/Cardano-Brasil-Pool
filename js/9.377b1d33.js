(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{8265:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHr LpR lfr"}},[a("q-toolbar",{staticClass:"bg-primary text-white",attrs:{elevated:""}},[a("div",{staticClass:"row"},[a("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"menu"},on:{click:function(e){t.left=!t.left}}}),a("q-toolbar-title",[t._v("\n          Adazul Center "),a("q-badge",{staticClass:"q-ml-sm",attrs:{color:"blue-6",align:"top"}},[t._v("Alpha v1.0.0")])],1)],1),a("q-space"),a("div",{staticClass:"q-gutter-sm row items-center no-wrap"},[a("q-btn",{attrs:{round:"",dense:"",flat:"",color:"white"}}),a("q-btn",{attrs:{round:"",dense:"",flat:"",color:"white",icon:"notifications"}},[this.notifications.length>0?a("q-badge",{attrs:{color:"red","text-color":"white",floating:""}},[t._v("\n            "+t._s(t.notifications.length)+"\n          ")]):t._e(),a("q-menu",[a("q-list",{staticStyle:{"min-width":"100px"}},[a("notifications")],1)],1)],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"",behavior:"mobile",width:200,breakpoint:400,draggable:!1,persistent:!0},model:{value:t.left,callback:function(e){t.left=e},expression:"left"}},[a("q-scroll-area",{staticStyle:{height:"calc(100% - 150px)","margin-top":"150px","border-right":"1px solid #ddd"}},[a("q-list",{attrs:{padding:""}},[a("q-item-label",{attrs:{header:""}},[t._v("Dashboard")]),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:{name:"dash_home"},clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"home"}})],1),a("q-item-section",[t._v("\n            Home\n          ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:{name:"dash_delegator_center"},clickable:"",active:!1,disable:!1===this.userDetails.stake_address_registered}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"mdi-monitor-dashboard"}})],1),!1===this.userDetails.stake_address_registered?a("q-tooltip",{attrs:{"content-class":"bg-blue",anchor:"center right",self:"center left",offset:[10,10],"transition-show":"flip-right","transition-hide":"flip-left"}},[t._v("\n            Please configure your "),a("strong",[t._v("stake address")]),t._v(" in your  "),a("em",[t._v("profile settings")])]):t._e(),a("q-item-section",[t._v("\n            Delegator Center\n          ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{disable:"",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"mdi-database-search"}})],1),a("q-tooltip",{attrs:{"content-class":"bg-blue",anchor:"center right",self:"center left",offset:[10,10],"transition-show":"flip-right","transition-hide":"flip-left"}},[t._v("\n            Coming "),a("strong",[t._v("soon!")])]),a("q-item-section",[t._v("\n            Servers Data\n          ")])],1),a("q-separator",{attrs:{spaced:""}}),a("q-item-label",{attrs:{header:""}},[t._v("Settings")]),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:{name:"dash_profile"},clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"person"}})],1),a("q-item-section",[t._v("\n            Profile\n          ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:t.logoutUser}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"mdi-logout"}})],1),a("q-item-section",[t._v("\n            Logout\n          ")])],1),a("q-separator",{attrs:{spaced:""}}),a("q-item-label",{attrs:{header:""}},[t._v("Social Medias")]),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"mdi-twitter"}})],1),a("q-item-section",[a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://twitter.com/adabr_pool",target:"_blank"}},[t._v("Twitter")])])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"mdi-instagram"}})],1),a("q-item-section",[a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://www.instagram.com/cardanobr/",target:"_blank"}},[t._v("Instagram")])])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"mdi-youtube"}})],1),a("q-item-section",[a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://www.youtube.com/channel/UCs5SpoMH3wIyBTvCe2KUQKw",target:"_blank"}},[t._v("Youtube")])])],1)],1)],1),a("q-img",{staticClass:"absolute-top",staticStyle:{height:"150px"},attrs:{src:"https://cdn.quasar.dev/img/material.png"}},[a("div",{staticClass:"absolute-bottom bg-transparent"},[a("q-avatar",{staticClass:"q-mb-sm",attrs:{size:"56px"}},[a("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})]),a("div",{staticClass:"text-weight-bold"},[t._v(t._s(t.userDetails.name))]),a("div",[t._v(t._s(t.userDetails.email))])],1)])],1),a("q-page-container",[a("router-view")],1),a("q-footer",{staticClass:"primary text-white",attrs:{elevated:""}},[a("div",{staticClass:"row no-wrap items-center justify-center"},[a("div",{staticClass:"column"},[t._v("\n        © Copyright Adazul Brasil Pool. All Rights Reserved - 2021\n      ")])])])],1)},s=[],r=(a("e6cf"),a("ded3")),n=a.n(r),o=a("2f62"),l=a("76c7"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(this.notifications,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.id,staticStyle:{"max-width":"420px"},attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("q-img",{attrs:{contain:"",src:e.avatar}})],1)],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e.notificator))]),a("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v(t._s(e.msg))])],1),a("q-item-section",{attrs:{side:""}},[t._v("\n      "+t._s(e.timestamp)+"\n    ")])],1)})),1)},m=[],p={name:"Notifications",computed:n()({},Object(o["c"])("store",["notifications"]))},d=p,v=a("2877"),q=a("66e5"),b=a("4074"),u=a("cb32"),g=a("068f"),h=a("0170"),f=a("714f"),_=a("eebe"),w=a.n(_),Q=Object(v["a"])(d,c,m,!1,null,"467ac9bc",null),k=Q.exports;w()(Q,"components",{QItem:q["a"],QItemSection:b["a"],QAvatar:u["a"],QImg:g["a"],QItemLabel:h["a"]}),w()(Q,"directives",{Ripple:f["a"]});var y={components:{Notifications:k},data(){return{left:!1}},computed:n()({},Object(o["c"])("store",["userDetails","notifications"])),methods:n()(n()({},Object(o["b"])("store",["logoutUser"])),{},{async test(){let t=await l["d"]("stake1u90nahryvqqxl9hm0xqnnqtqqvxlv2k7es2yp0l3knt4v8qg7mgsu");console.log(t)}})},x=y,C=a("4d5a"),S=a("65c6"),I=a("9c40"),N=a("6ac5"),D=a("58a81"),A=a("2c91"),j=a("4e73"),L=a("1c1c"),T=a("9404"),O=a("4983"),R=a("0016"),B=a("05c0"),P=a("eb85"),U=a("09e3"),z=a("7ff0"),H=Object(v["a"])(x,i,s,!1,null,null,null);e["default"]=H.exports;w()(H,"components",{QLayout:C["a"],QToolbar:S["a"],QBtn:I["a"],QToolbarTitle:N["a"],QBadge:D["a"],QSpace:A["a"],QMenu:j["a"],QList:L["a"],QDrawer:T["a"],QScrollArea:O["a"],QItemLabel:h["a"],QItem:q["a"],QItemSection:b["a"],QIcon:R["a"],QTooltip:B["a"],QSeparator:P["a"],QImg:g["a"],QAvatar:u["a"],QPageContainer:U["a"],QFooter:z["a"]}),w()(H,"directives",{Ripple:f["a"]})}}]);