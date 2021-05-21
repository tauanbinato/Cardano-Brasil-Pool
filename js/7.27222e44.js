(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{3878:function(s,t,e){"use strict";e("7ea9")},"7ea9":function(s,t,e){},e479:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("q-page",{staticClass:"q-pa-sm"},[e("div",{staticClass:"row q-col-gutter-sm"},[e("div",{staticClass:"col-lg-4 col-md-7 col-xs-12 col-sm-12"},[e("q-card",{staticClass:"card-bg text-white"},[e("q-card-section",{staticClass:"text-h6 "},[e("div",{staticClass:"text-h6"},[s._v("Edit Profile")]),e("div",{staticClass:"text-subtitle2"},[s._v("Complete your profile")])]),e("q-card-section",{staticClass:"q-pa-sm"},[e("q-list",{staticClass:"row"},[e("q-item",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},[e("q-item-section",{attrs:{side:""}},[e("q-avatar",{attrs:{size:"100px"}},[e("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})])],1),e("q-item-section",[e("q-btn",{staticClass:"text-capitalize",staticStyle:{"max-width":"120px"},attrs:{disable:"",label:"Add Photo",rounded:"",color:"info"}})],1)],1),e("q-item",{staticClass:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},[e("q-item-section",[e("q-input",{attrs:{dark:"",color:"white",dense:"",label:"User Name"},model:{value:s.local_user_details.name,callback:function(t){s.$set(s.local_user_details,"name",t)},expression:"local_user_details.name"}})],1)],1),e("q-item",{staticClass:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},[e("q-item-section",[e("q-input",{attrs:{disable:"",dark:"",color:"white",dense:"",label:"Email Address"},model:{value:s.local_user_details.email,callback:function(t){s.$set(s.local_user_details,"email",t)},expression:"local_user_details.email"}})],1)],1),e("q-item",{staticClass:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},[e("q-item-section",[e("q-input",{attrs:{dark:"",color:"white",dense:"",label:"Country"},model:{value:s.local_user_details.country,callback:function(t){s.$set(s.local_user_details,"country",t)},expression:"local_user_details.country"}})],1)],1),e("q-item",{staticClass:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},[e("q-item-section",[e("q-input",{attrs:{dark:"",color:"white",dense:"",label:"City"},model:{value:s.local_user_details.city,callback:function(t){s.$set(s.local_user_details,"city",t)},expression:"local_user_details.city"}})],1)],1)],1)],1),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{staticClass:"text-capitalize bg-info text-white",on:{click:s.updateUserInfo}},[s._v("Update User Info")])],1)],1)],1),e("div",{staticClass:"col-lg-6 col-md-5 col-xs-12 col-sm-12"},[e("q-card",{staticClass:"card-bg text-white"},[e("q-card-section",{staticClass:"text-h6 q-pa-sm"},[e("div",{staticClass:"text-h6"},[s._v("Delegator Settings")])]),e("q-card-section",{staticClass:"q-pa-sm row"},[e("q-item",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[e("q-item-section",[s._v("\n              Stake Address\n            ")])],1),e("q-item",{staticClass:"col-lg-8 col-md-8 col-sm-12 col-xs-12"},[e("q-item-section",[e("q-input",{attrs:{clearable:"",disable:!0===this.userDetails.stake_address_registered,dark:"",dense:"",outlined:"",color:"white",round:"",label:"Stake Address"},model:{value:s.local_user_details.stake_address,callback:function(t){s.$set(s.local_user_details,"stake_address",t)},expression:"local_user_details.stake_address"}})],1)],1)],1),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{staticClass:"text-capitalize bg-info text-white",attrs:{disable:!0===this.userDetails.stake_address_registered},on:{click:s.updateUserStakeAddress}},[s._v("Update Delegator")])],1)],1)],1),e("div",{staticClass:"col-lg-4 col-md-7 col-xs-12 col-sm-12"},[e("q-card",{staticClass:"card-bg text-white"},[e("q-card-section",{staticClass:"text-h6 q-pa-sm"},[e("div",{staticClass:"text-h6"},[s._v("Change Password")])]),e("q-card-section",{staticClass:"q-pa-sm row"},[e("q-item",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[e("q-item-section",[s._v("\n              Current Password\n            ")])],1),e("q-item",{staticClass:"col-lg-8 col-md-8 col-sm-12 col-xs-12"},[e("q-item-section",[e("q-input",{attrs:{type:"password",dark:"",dense:"",outlined:"",color:"white",round:"",label:"Current Password"},model:{value:s.password_dict.current_password,callback:function(t){s.$set(s.password_dict,"current_password",t)},expression:"password_dict.current_password"}})],1)],1),e("q-item",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[e("q-item-section",[s._v("\n              New Password\n            ")])],1),e("q-item",{staticClass:"col-lg-8 col-md-8 col-sm-12 col-xs-12"},[e("q-item-section",[e("q-input",{attrs:{type:"password",dark:"",dense:"",outlined:"",color:"white",round:"",label:"New Password"},model:{value:s.password_dict.new_password,callback:function(t){s.$set(s.password_dict,"new_password",t)},expression:"password_dict.new_password"}})],1)],1),e("q-item",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[e("q-item-section",[s._v("\n              Confirm New Password\n            ")])],1),e("q-item",{staticClass:"col-lg-8 col-md-8 col-sm-12 col-xs-12"},[e("q-item-section",[e("q-input",{attrs:{type:"password",dark:"",dense:"",outlined:"",round:"",color:"white",label:"Confirm New Password"},model:{value:s.password_dict.confirm_new_password,callback:function(t){s.$set(s.password_dict,"confirm_new_password",t)},expression:"password_dict.confirm_new_password"}})],1)],1)],1),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{staticClass:"text-capitalize bg-info text-white",attrs:{disable:""}},[s._v("Change Password\n          ")]),e("q-tooltip",{attrs:{"content-class":"bg-blue",anchor:"center right",self:"center left",offset:[10,10],"transition-show":"flip-right","transition-hide":"flip-left"}},[s._v("\n            Coming "),e("strong",[s._v("soon!")])])],1)],1)],1)])])},l=[],o=e("ded3"),i=e.n(o),c=e("2f62"),r={name:"UserProfile",data(){return{local_user_details:{},password_dict:{}}},computed:i()({},Object(c["c"])("store",["userDetails"])),beforeMount(){console.log(this.userDetails),this.local_user_details=i()({},this.userDetails)},methods:i()(i()({},Object(c["b"])("store",["updateUserProfile","updateDelegator"])),{},{updateUserInfo(){this.updateUserProfile(this.local_user_details)},updateUserStakeAddress(){this.updateDelegator(this.local_user_details)}})},d=r,n=(e("3878"),e("2877")),m=e("9989"),u=e("f09f"),_=e("a370"),p=e("1c1c"),w=e("66e5"),q=e("4074"),g=e("cb32"),C=e("9c40"),b=e("27f9"),h=e("4b7e"),x=e("05c0"),f=e("eebe"),v=e.n(f),k=Object(n["a"])(d,a,l,!1,null,"9086b3fe",null);t["default"]=k.exports;v()(k,"components",{QPage:m["a"],QCard:u["a"],QCardSection:_["a"],QList:p["a"],QItem:w["a"],QItemSection:q["a"],QAvatar:g["a"],QBtn:C["a"],QInput:b["a"],QCardActions:h["a"],QTooltip:x["a"]})}}]);