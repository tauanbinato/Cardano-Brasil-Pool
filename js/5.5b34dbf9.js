(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"21d7":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},[a("q-card",[a("q-card-section",[a("div",{staticClass:"text-h6 text-grey-8"},[t._v("\n        Active Giveaways\n      ")])]),a("q-card-section",{staticClass:"q-pa-none"},[a("q-table",{attrs:{data:t.data,columns:t.columns,"hide-bottom":""},scopedSlots:t._u([{key:"body-cell-Name",fn:function(e){return[a("q-td",{attrs:{props:e}},[a("q-item",{staticStyle:{"max-width":"420px"}},[a("q-item-section",[a("q-item-label",[t._v(t._s(e.row.name))])],1)],1)],1)]}},{key:"body-cell-Action",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("q-btn",{attrs:{icon:"mdi-information",size:"sm",flat:"",dense:"",disable:""}})],1)]}}])})],1)],1)],1)},o=[],i={name:"TableGiveaways",data(){return{data:[{name:"Adazul Grand Prize",Start_At:"15/3/2021",End_Date:"Not defined",Beneficiary:"Adazul Brasil Pool"}],columns:[{name:"Name",label:"Name",field:"name",sortable:!0,align:"left"},{name:"Start At",label:"Start At",field:"Start_At",sortable:!0,align:"left"},{name:"End At",label:"End Date",field:"End_Date",sortable:!1,align:"left"},{name:"Beneficiary",label:"Beneficiary",field:"Beneficiary",sortable:!0,align:"left"},{name:"Action",label:"",field:"Action",sortable:!1,align:"center"}]}}},l=i,n=a("2877"),r=a("f09f"),c=a("a370"),d=a("eaac"),m=a("db86"),u=a("66e5"),h=a("4074"),b=a("0170"),p=a("9c40"),f=a("eebe"),g=a.n(f),y=Object(n["a"])(l,s,o,!1,null,"63bccb9a",null);e["a"]=y.exports;g()(y,"components",{QCard:r["a"],QCardSection:c["a"],QTable:d["a"],QTd:m["a"],QItem:u["a"],QItemSection:h["a"],QItemLabel:b["a"],QBtn:p["a"]})},"3e16":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"q-pa-sm"},[a("card-pool-infos",{attrs:{dataset:t.pool_data,icon_position:"left"}}),a("card-pool-charts",{attrs:{dataset:t.pool_history_data}}),a("div",{staticClass:"row q-col-gutter-md q-py-sm "},[a("card-time-line-pool-news"),a("card-timeline-donations"),a("card-grand-prize"),a("table-giveaways")],1)],1)},o=[],i=(a("e6cf"),a("ddb0"),a("ded3")),l=a.n(i),n=a("b3bb"),r=a("21d7"),c=a("5f97"),d=a("fdcb"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"bg-transparent no-shadow no-border"},[a("q-card-section",{staticClass:"q-pa-none"},[a("div",{staticClass:"row q-col-gutter-sm "},t._l(t.items,(function(e,s){return a("div",{key:s,staticClass:"col-sm-4 col-md-4 col-lg-2 col-xs-6"},[a("q-item",{staticClass:"q-pa-none q-ml-xs",style:"background-color: "+e.color1},["left"===t.icon_position?a("q-item-section",{staticClass:" q-pa-lg q-mr-none text-white",style:"background-color: "+e.color2,attrs:{side:""}},[a("q-icon",{attrs:{name:e.icon,color:"white",size:"24px"}})],1):t._e(),a("q-item-section",{staticClass:" q-pa-md q-ml-none  text-white"},[a("q-item-label",{staticClass:"text-white text-h6 text-weight-bolder"},[t._v(t._s(e.value))]),a("q-item-label",[t._v(t._s(e.title))])],1),"right"===t.icon_position?a("q-item-section",{staticClass:"q-mr-md text-white",attrs:{side:""}},[a("q-icon",{attrs:{name:e.icon,color:"white",size:"44px"}})],1):t._e()],1)],1)})),0)])],1)},u=[],h={name:"CardPoolInfos",props:{dataset:{},icon_position:{required:!1,default:"left"}},computed:{items:function(){return[{title:"Delegators",icon:"person",value:this.dataset.live_delegators,color1:"#5064b5",color2:"#3e51b5"},{title:"Total Blocks",icon:"mdi-cube",value:this.dataset.blocks_minted,color1:"#75ce5c",color2:"#61bb45"},{title:"Active Stake",icon:"mdi-gold",value:new Intl.NumberFormat("en",{maximumSignificantDigits:4}).format(this.dataset.active_stake/1e6),color1:"#ea6a7f",color2:"#ea4b64"},{title:"Pledge",icon:"mdi-handshake",value:new Intl.NumberFormat("en",{maximumSignificantDigits:4}).format(this.dataset.declared_pledge/1e6),color1:"#5ecdcd",color2:"#5cbfb0"},{title:"Pool Fees",icon:"bar_chart",value:this.dataset.margin_cost+"%",color1:"#a270b1",color2:"#9f52b1"},{title:"Saturation",icon:"mdi-beer",value:new Intl.NumberFormat("en",{style:"percent",minimumFractionDigits:2,maximumFractionDigits:2}).format(this.dataset.live_saturation),color1:"#a270b1",color2:"#9f52b1"}]}}},b=h,p=a("2877"),f=a("f09f"),g=a("a370"),y=a("66e5"),v=a("4074"),x=a("0016"),_=a("0170"),C=a("eebe"),q=a.n(C),w=Object(p["a"])(b,m,u,!1,null,null,null),k=w.exports;q()(w,"components",{QCard:f["a"],QCardSection:g["a"],QItem:y["a"],QItemSection:v["a"],QIcon:x["a"],QItemLabel:_["a"]});var S=a("76c7"),Q=a("f6ab"),z={name:"home",components:{CardPoolCharts:Q["a"],CardPoolInfos:k,CardGrandPrize:d["a"],CardTimeLinePoolNews:c["a"],TableGiveaways:r["a"],CardTimelineDonations:n["a"]},data(){return{pool_data:{},pool_history_data:[],mode:"list"}},beforeMount(){this.getPoolInfos(),this.getPoolHistory()},methods:{async getPoolInfos(){let t=await S["a"]("pool16pg8zc9zxxfjksquvjs6ljxuy8ng9xf79ekqekap98a8wjzuttg");200===t.status&&(this.pool_data=l()({},t.data))},async getPoolHistory(){let t=await S["b"]("pool16pg8zc9zxxfjksquvjs6ljxuy8ng9xf79ekqekap98a8wjzuttg");200===t.status&&(this.pool_history_data=[...t.data])}}},A=z,I=a("9989"),L=Object(p["a"])(A,s,o,!1,null,"c892cf94",null);e["default"]=L.exports;q()(L,"components",{QPage:I["a"]})},"5f97":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-4 col-md-6 col-sm-12 col-xs-12"},[a("q-card",{staticClass:"fit"},[a("q-card-section",{staticClass:"text-h6 q-pb-none"},[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{staticStyle:{"font-size":"2em"},attrs:{color:"blue",name:"access_time"}})],1),a("q-item-section",[a("div",{staticClass:"text-h6"},[t._v("Pool News")])])],1)],1),a("q-card-section",{},[a("q-timeline",{attrs:{color:"secondary"}},t._l(t.timeline_list,(function(e,s){return a("q-timeline-entry",{key:s,attrs:{title:e.title,subtitle:e.subtitle,color:e.color,icon:e.icon,side:e.side}},[a("div",[t._v("\n            "+t._s(e.desc)+"\n          ")])])})),1)],1)],1)],1)},o=[],i={name:"CardTimeLinePoolNews",data(){return{timeline_list:[{title:"Pool Nodes update 1.26.2",side:"left",desc:"Our servers are running with the latest node verions. You can always check their performance in the live data on menu.",color:"green",icon:"thumb_up"},{title:"New Dashboard",side:"left",desc:"Welcome to the Adazul Center beta version, we have a lot of ideas to implement here, but the basic is already running enjoy!",color:"orange",icon:"mdi-check-circle"},{title:"Website updated ",side:"left",desc:"Updates were made in our website and domain to show more info about the team.",color:"blue",icon:"mdi-check-circle"}]}}},l=i,n=a("2877"),r=a("f09f"),c=a("a370"),d=a("66e5"),m=a("4074"),u=a("0016"),h=a("05eb"),b=a("74af"),p=a("eebe"),f=a.n(p),g=Object(n["a"])(l,s,o,!1,null,null,null);e["a"]=g.exports;f()(g,"components",{QCard:r["a"],QCardSection:c["a"],QItem:d["a"],QItemSection:m["a"],QIcon:u["a"],QTimeline:h["a"],QTimelineEntry:b["a"]})},b3bb:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-4 col-md-6 col-sm-12 col-xs-12"},[a("q-card",{staticClass:"fit"},[a("q-card-section",{staticClass:"text-h6 q-pb-none"},[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{staticStyle:{"font-size":"2em"},attrs:{color:"blue",name:"access_time"}})],1),a("q-item-section",[a("div",{staticClass:"text-h6"},[t._v("Donations News")])])],1)],1),a("q-card-section",{},[a("q-timeline",{attrs:{color:"secondary"}},t._l(t.timeline_list,(function(e,s){return a("q-timeline-entry",{key:s,attrs:{title:e.title,subtitle:e.subtitle,color:e.color,icon:e.icon,side:e.side}},[a("div",[t._v("\n            "+t._s(e.desc)+"\n          ")])])})),1)],1)],1)],1)},o=[],i={name:"CardTimelineDonations",data(){return{timeline_list:[{title:"First Donation ",side:"left",desc:"First Donation incoming",color:"red",icon:"thumb_up"}]}}},l=i,n=a("2877"),r=a("f09f"),c=a("a370"),d=a("66e5"),m=a("4074"),u=a("0016"),h=a("05eb"),b=a("74af"),p=a("eebe"),f=a.n(p),g=Object(n["a"])(l,s,o,!1,null,null,null);e["a"]=g.exports;f()(g,"components",{QCard:r["a"],QCardSection:c["a"],QItem:d["a"],QItemSection:m["a"],QIcon:u["a"],QTimeline:h["a"],QTimelineEntry:b["a"]})},f6ab:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row q-col-gutter-sm  q-py-sm"},[a("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[a("q-card",{staticClass:"q-ma-xs",staticStyle:{"background-color":"#38b1c5"}},[a("q-card-section",{staticClass:"text-h6 text-white"},[t._v("\n        Pool Blocks / Epoch\n      ")]),a("q-card-section",{staticClass:"q-pa-none"},[a("IEcharts",{staticStyle:{height:"250px"},attrs:{option:t.BlocksChartComputed,resizable:!0}})],1)],1)],1),a("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[a("q-card",{staticClass:"q-ma-xs",staticStyle:{"background-color":"#ea4b64"}},[a("q-card-section",{staticClass:"text-h6 text-white"},[t._v("\n        Pool Delegators / Epoch\n      ")]),a("q-card-section",{staticClass:"q-pa-none"},[a("IEcharts",{staticStyle:{height:"250px"},attrs:{option:t.DelegatorsChartComputed,resizable:!0}})],1)],1)],1),a("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[a("q-card",{staticClass:"q-ma-xs",staticStyle:{"background-color":"#1e88e5"}},[a("q-card-section",{staticClass:"text-h6 text-white"},[t._v("\n        Pool Active Stake / Epoch\n      ")]),a("q-card-section",{staticClass:"q-pa-none"},[a("IEcharts",{staticStyle:{height:"250px"},attrs:{option:t.ActiveStakeChartComputed,resizable:!0}})],1)],1)],1)])},o=[],i=a("4082"),l=a.n(i),n=a("ce44"),r={name:"CardPoolCharts",props:{dataset:null},components:{IEcharts:n["a"]},computed:{BlocksChartComputed:function(){return{tooltip:{show:!0},title:{show:!0,textStyle:{color:"rgba(0, 0, 0 , .87)",fontFamily:"sans-serif"}},grid:{containLabel:!0,left:"0",bottom:"0",right:"0"},xAxis:{show:!1,type:"category",axisLine:{lineStyle:{color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisTick:{show:!0,alignWithLabel:!0,lineStyle:{show:!0,color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisLabel:{show:!1},boundaryGap:!1},yAxis:{show:!1,type:"value",axisLine:{lineStyle:{color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisLabel:{show:!1},splitLine:{lineStyle:{type:"dashed"}},axisTick:{show:!0,lineStyle:{show:!0,color:"rgba(0, 0, 0 , .54)",type:"dashed"}}},series:[{type:"line",areaStyle:{},smooth:!1}],dataset:{source:this.filterBlocksChartComputed(this.dataset)},color:["#45c2c5"]}},ActiveStakeChartComputed:function(){return{tooltip:{show:!0},title:{show:!0,textStyle:{color:"rgba(0, 0, 0 , .87)",fontFamily:"sans-serif"}},grid:{containLabel:!0,left:"0",bottom:"0",right:"0"},xAxis:{show:!1,type:"category",axisLine:{lineStyle:{color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisTick:{show:!0,alignWithLabel:!0,lineStyle:{show:!0,color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisLabel:{show:!1},boundaryGap:!1},yAxis:{show:!1,type:"value",axisLine:{lineStyle:{color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisLabel:{show:!1},splitLine:{lineStyle:{type:"dashed"}},axisTick:{show:!0,lineStyle:{show:!0,color:"rgba(0, 0, 0 , .54)",type:"dashed"}}},series:[{type:"line",areaStyle:{},smooth:!0}],dataset:{source:this.filterActiveStakeChartComputed(this.dataset)},color:["#2196f3"]}},DelegatorsChartComputed:function(){return{tooltip:{show:!0},title:{show:!0,textStyle:{color:"rgba(0, 0, 0 , .87)",fontFamily:"sans-serif"}},grid:{containLabel:!0,bottom:"10%",top:"5%"},xAxis:{show:!1,type:"category",axisLine:{lineStyle:{color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisTick:{show:!0,alignWithLabel:!0,lineStyle:{show:!0,color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisLabel:{show:!1}},yAxis:{show:!1,type:"value",axisLine:{lineStyle:{color:"rgba(0, 0, 0 , .54)",type:"dot"}},axisLabel:{show:!0},splitLine:{lineStyle:{type:"dashed"}},axisTick:{show:!0,lineStyle:{show:!0,color:"rgba(0, 0, 0 , .54)",type:"dashed"}}},series:[{type:"bar",barGap:"-100%",itemStyle:{normal:{color:"rgba(0,0,0,0.1)"}},barWidth:"50%"},{barWidth:"50%",type:"bar",itemStyle:{normal:{color:"#ffffff"}}}],dataset:{source:this.filterDelegatorsChartComputed(this.dataset)}}}},methods:{filterActiveStakeChartComputed(t){let e=t.map((t=>{let{blocks:e,delegators_count:a,fees:s,rewards:o,active_size:i}=t,n=l()(t,["blocks","delegators_count","fees","rewards","active_size"]);return n["Active Stake"]=n["active_stake"],delete n["active_stake"],n}));return e},filterDelegatorsChartComputed(t){let e=t.map((t=>{let{blocks:e,fees:a,rewards:s,active_size:o,active_stake:i}=t,n=l()(t,["blocks","fees","rewards","active_size","active_stake"]);return n["Delegators"]=n["delegators_count"],delete n["delegators_count"],n}));return e},filterBlocksChartComputed(t){let e=t.map((t=>{let{delegators_live:e,fees:a,rewards:s,active_size:o,active_stake:i}=t,n=l()(t,["delegators_live","fees","rewards","active_size","active_stake"]);return n["Delegators"]=n["delegators_count"],delete n["delegators_count"],n}));return e}},data(){return{forceKey:0}}},c=r,d=a("2877"),m=a("f09f"),u=a("a370"),h=a("eebe"),b=a.n(h),p=Object(d["a"])(c,s,o,!1,null,null,null);e["a"]=p.exports;b()(p,"components",{QCard:m["a"],QCardSection:u["a"]})},fdcb:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-4 col-md-6 col-sm-12 col-xs-12"},[a("q-card",{staticClass:"fit",style:{"background-image":t.background_image}},[a("q-card-section",[a("div",{staticClass:"text-h6 text-center"},[t._v("\n        Adazul Grand Prize\n      ")])]),a("q-separator"),a("q-card-section",[a("div",{staticClass:"text-h3 text-weight-bolder text-center"},[a("q-icon",{attrs:{name:"mdi-cash-register"}})],1)]),a("q-card-section",{staticClass:"q-pa-none"},[a("div",{staticClass:"text-h4 text-weight-bolder text-center"},[t._v("\n        16 ₳\n      ")])]),a("q-card-section",[a("div",{staticClass:"text-h6 text-center"},[t._v("\n        ADABR holds 2% of pool rewards each epoch to the anual giveaway\n      ")])]),a("q-card-actions",{attrs:{vertical:"",align:"center"}},[a("q-btn",{staticClass:"text-capitalize bg-indigo-8",attrs:{color:"",disable:""}},[t._v("Register")])],1),a("q-separator"),a("q-card-section",{staticClass:"text-center"},[t._v("\n      * Registrations via dashboard is a work in progress. Please contact @binatof on telegram to register your stake address.\n    ")])],1)],1)},o=[],i={name:"CardGrandPrize",props:["background_image"]},l=i,n=a("2877"),r=a("f09f"),c=a("a370"),d=a("eb85"),m=a("0016"),u=a("4b7e"),h=a("9c40"),b=a("eebe"),p=a.n(b),f=Object(n["a"])(l,s,o,!1,null,"110563fa",null);e["a"]=f.exports;p()(f,"components",{QCard:r["a"],QCardSection:c["a"],QSeparator:d["a"],QIcon:m["a"],QCardActions:u["a"],QBtn:h["a"]})}}]);