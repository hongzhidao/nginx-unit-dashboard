(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ed1a3af"],{"480c":function(e,t,o){},"53ca":function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));o("a4d3"),o("e01a"),o("d28b"),o("d3b7"),o("3ca3"),o("ddb0");function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}},"61ec":function(e,t,o){"use strict";var l=o("480c"),a=o.n(l);a.a},e705:function(e,t,o){"use strict";o.r(t);var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("div",{staticClass:"filter-container"},[o("el-button",{staticClass:"filter-item",staticStyle:{"margin-bottom":"10px"},attrs:{type:"success",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v("Add")]),o("el-select",{staticStyle:{width:"150px","margin-left":"10px"},attrs:{clearable:"","default-first-option":"",placeholder:"Select group"},on:{change:e.selectGroup,clear:function(t){return e.removeGroup()}},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}},e._l(e.groups,(function(e){return o("el-option",{key:e,attrs:{label:e,value:e}})})),1),o("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"warning",icon:"el-icon-delete"},on:{click:e.handleClear}},[e._v("Clear routes")])],1),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[o("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index+1)+" ")]}}])}),o("el-table-column",{attrs:{label:"Match"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.host.length?o("span",{staticClass:"match-item"},[o("em",{staticClass:"match-name"},[e._v("Host:")]),e._l(t.row.host,(function(t,l){return o("em",{key:l},[e._v(" "+e._s(t)+" ")])}))],2):e._e(),t.row.uri.length?o("span",{staticClass:"match-item"},[o("em",{staticClass:"match-name"},[e._v("URI:")]),e._l(t.row.uri,(function(t,l){return o("em",{key:l},[e._v(" "+e._s(t)+" ")])}))],2):e._e(),t.row.method.length?o("span",{staticClass:"match-item"},[o("em",{staticClass:"match-name"},[e._v("Method:")]),e._l(t.row.method,(function(t,l){return o("em",{key:l},[e._v(" "+e._s(t)+" ")])}))],2):e._e()]}}])}),o("el-table-column",{attrs:{label:"Action"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.pass?o("span",[o("em",{staticClass:"match-name"},[e._v("Pass:")]),e._v(" "+e._s(t.row.pass)+" ")]):t.row.share?o("span",[o("em",{staticClass:"match-name"},[e._v("Share:")]),e._v(" "+e._s(t.row.share)+" ")]):t.row.code?o("span",[o("em",{staticClass:"match-name"},[e._v("Return:")]),e._v(" "+e._s(t.row.code)+" "+e._s(t.row.location)+" ")]):t.row.proxy?o("span",[o("em",{staticClass:"match-name"},[e._v("Proxy:")]),e._v(" "+e._s(t.row.proxy)+" ")]):e._e()]}}])}),o("el-table-column",{attrs:{label:"Operation",align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleUpdate(l)}}},[e._v("Update")]),"deleted"!=l.status?o("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.handleDelete(l,e.group)}}},[e._v("Delete")]):e._e()]}}])})],1),o("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[o("el-form",{ref:"form",staticStyle:{width:"400px margin-left:50px"},attrs:{rules:e.rules,"show-message":!1,model:e.model,"label-position":"right","label-width":"100px"}},[o("el-form-item",{attrs:{label:"Group",prop:"group"}},[o("el-select",{staticStyle:{width:"150px"},attrs:{filterable:"",disabled:e.disabledGroup,"allow-create":"","default-first-option":"",placeholder:"Select"},on:{change:e.selectGroup},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}},e._l(e.groups,(function(e){return o("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"URI",prop:"uri"}},[o("el-select",{staticStyle:{width:"450px"},attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"Enter values"},model:{value:e.model.uri,callback:function(t){e.$set(e.model,"uri",t)},expression:"model.uri"}})],1),o("el-form-item",{attrs:{label:"Host",prop:"host"}},[o("el-select",{staticStyle:{width:"450px"},attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"Enter values"},model:{value:e.model.host,callback:function(t){e.$set(e.model,"host",t)},expression:"model.host"}})],1),o("el-form-item",{attrs:{label:"Method",prop:"method"}},[o("el-select",{staticStyle:{width:"300px"},attrs:{multiple:"","allow-create":"","default-first-option":"",placeholder:"Select"},model:{value:e.model.method,callback:function(t){e.$set(e.model,"method",t)},expression:"model.method"}},e._l(e.methods,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),o("el-form-item",[o("el-link",{attrs:{underline:!1,type:"primary"},on:{click:function(t){e.showMore^=!0}}},[e._v(e._s(e.showMore?"Hide":"Show")+" more")])],1),e.showMore?o("el-form-item",{attrs:{label:"Scheme",prop:"scheme"}},[o("el-select",{staticStyle:{width:"300px"},attrs:{placeholder:"Select"},model:{value:e.model.scheme,callback:function(t){e.$set(e.model,"scheme",t)},expression:"model.scheme"}},e._l(e.schemes,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),e.showMore?o("el-form-item",{attrs:{label:"Source",prop:"src"}},[o("el-select",{staticStyle:{width:"450px"},attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"Enter values"},model:{value:e.model.src,callback:function(t){e.$set(e.model,"src",t)},expression:"model.src"}})],1):e._e(),e.showMore?o("el-form-item",{attrs:{label:"Destination",prop:"dst"}},[o("el-select",{staticStyle:{width:"450px"},attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"Enter values"},model:{value:e.model.dst,callback:function(t){e.$set(e.model,"dst",t)},expression:"model.dst"}})],1):e._e(),e.showMore?o("el-form-item",{attrs:{label:"Arguments"}},[o("el-button",{attrs:{type:"success"},on:{click:function(t){return e.addArgument()}}},[e._v("Add argument")])],1):e._e(),e.showMore?e._l(e.model.args,(function(t,l){return o("el-form-item",{key:"args_"+l,attrs:{inline:!0}},[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{rules:[{required:!0}],prop:"args."+l+".name"}},[o("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"Name"},model:{value:t.name,callback:function(o){e.$set(t,"name",o)},expression:"arg.name"}})],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{rules:[{required:!0}],prop:"args."+l+".value"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"Enter values"},model:{value:t.value,callback:function(o){e.$set(t,"value",o)},expression:"arg.value"}})],1)],1),o("el-col",{attrs:{span:6}},[o("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.removeArgument(l)}}},[e._v("Delete")])],1)],1)],1)})):e._e(),e.showMore?o("el-form-item",{attrs:{label:"Headers"}},[o("el-button",{attrs:{type:"success"},on:{click:function(t){return e.addHeader()}}},[e._v("Add header")])],1):e._e(),e.showMore?e._l(e.model.headers,(function(t,l){return o("el-form-item",{key:"headers_"+l,attrs:{inline:!0}},[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{rules:[{required:!0}],prop:"headers."+l+".name"}},[o("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"Name"},model:{value:t.name,callback:function(o){e.$set(t,"name",o)},expression:"header.name"}})],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{rules:[{required:!0}],prop:"headers."+l+".value"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"Enter values"},model:{value:t.value,callback:function(o){e.$set(t,"value",o)},expression:"header.value"}})],1)],1),o("el-col",{attrs:{span:6}},[o("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.removeHeader(l)}}},[e._v("Delete")])],1)],1)],1)})):e._e(),e.showMore?o("el-form-item",{attrs:{label:"Cookies"}},[o("el-button",{attrs:{type:"success"},on:{click:function(t){return e.addCookie()}}},[e._v("Add cookie")])],1):e._e(),e.showMore?e._l(e.model.cookies,(function(t,l){return o("el-form-item",{key:"cookies_"+l,attrs:{inline:!0}},[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{rules:[{required:!0}],prop:"cookies."+l+".name"}},[o("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"Name"},model:{value:t.name,callback:function(o){e.$set(t,"name",o)},expression:"cookie.name"}})],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{rules:[{required:!0}],prop:"cookies."+l+".value"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"Enter values"},model:{value:t.value,callback:function(o){e.$set(t,"value",o)},expression:"cookie.value"}})],1)],1),o("el-col",{attrs:{span:6}},[o("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.removeCookie(l)}}},[e._v("Delete")])],1)],1)],1)})):e._e(),o("el-form-item",{attrs:{label:"Action"}},[o("el-radio-group",{model:{value:e.model.action_type,callback:function(t){e.$set(e.model,"action_type",t)},expression:"model.action_type"}},[o("el-radio-button",{attrs:{label:"pass"}},[e._v("Pass")]),o("el-radio-button",{attrs:{label:"share"}},[e._v("Share")]),o("el-radio-button",{attrs:{label:"proxy"}},[e._v("Proxy")]),o("el-radio-button",{attrs:{label:"return"}},[e._v("Return")])],1)],1),"pass"==e.model.action_type?o("el-form-item",[o("el-select",{attrs:{placeholder:"Select","allow-create":"",filterable:""},model:{value:e.model.pass,callback:function(t){e.$set(e.model,"pass",t)},expression:"model.pass"}},e._l(e.passes,(function(e){return o("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1):e._e(),"share"==e.model.action_type?o("el-form-item",[o("el-input",{staticStyle:{width:"300px"},model:{value:e.model.share,callback:function(t){e.$set(e.model,"share",t)},expression:"model.share"}})],1):e._e(),"proxy"==e.model.action_type?o("el-form-item",[o("el-input",{staticStyle:{width:"300px"},model:{value:e.model.proxy,callback:function(t){e.$set(e.model,"proxy",t)},expression:"model.proxy"}})],1):e._e(),"return"==e.model.action_type?o("el-form-item",[o("el-col",{attrs:{span:5}},[o("el-form-item",{staticStyle:{"margin-right":"10px"},attrs:{prop:"code"}},[o("el-input",{attrs:{placeholder:"Status"},model:{value:e.model.code,callback:function(t){e.$set(e.model,"code",t)},expression:"model.code"}})],1)],1),o("el-col",{attrs:{span:9}},[o("el-form-item",{attrs:{prop:"location"}},[o("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"Location"},model:{value:e.model.location,callback:function(t){e.$set(e.model,"location",t)},expression:"model.location"}})],1)],1)],1):e._e()],2),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("Cancel")]),o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitDataForm()}}},[e._v("Submit")])],1)],1)],1)},a=[],s=(o("4de4"),o("caad"),o("b64b"),o("ac1f"),o("2532"),o("466d"),o("53ca")),r={args:[],headers:[],cookies:[],action_type:"pass"};function i(e){for(var t,o,l,a=[],r=0;r<e.length;r++){var i,n=e[r],c=n.match,u=n.action,d=[],m=[],p=[],h=[],f=[],b=[],v=[],g=[];if(c){var y=c.method,_=c.scheme,w=c.host,k=c.source,x=c.destination,S=c.uri,$=c.arguments,C=c.headers,A=c.cookies;if(y&&(d="object"===Object(s["a"])(y)?y:[y]),w&&(m="object"===Object(s["a"])(w)?w:[w]),k&&(p="object"===Object(s["a"])(k)?k:[k]),x&&(h="object"===Object(s["a"])(x)?x:[x]),S&&(f="object"===Object(s["a"])(S)?S:[S]),$)for(t in $)o=$[t],l="string"===typeof o?[o]:o,b.push({name:t,value:l});if(C)for(t in C)o=C[t],l="string"===typeof o?[o]:o,v.push({name:t,value:l});if(A)for(t in A)o=A[t],l="string"===typeof o?[o]:o,g.push({name:t,value:l})}i=u.pass?"pass":u.share?"share":u.proxy?"proxy":"return",a.push({index:r,method:d,scheme:_,host:m,src:p,dst:h,uri:f,args:b,headers:v,cookies:v,action_type:i,pass:u.pass,share:u.share,proxy:u.proxy,code:u.return,location:u.location})}return a}var n={filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){return{showMore:!1,methods:[{value:"GET",label:"GET"},{value:"PUT",label:"PUT"},{value:"POST",label:"POST"}],schemes:[{value:"http",label:"http"},{value:"https",label:"https"}],list:null,group:null,groups:null,routes:null,passes:null,latest:null,listLoading:!1,model:Object.assign({},r),dialogFormVisible:!1,dialogStatus:"",textMap:{create:"Add route",update:"Update route"},rules:{}}},computed:{disabledGroup:function(){return"update"===this.dialogStatus||Array.isArray(this.routes)}},created:function(){this.fetchData()},methods:{fetchData:function(){var e,t=this.$store.getters.routes,o=this.$store.getters.passes;this.routes=t,this.passes=o,this.routes&&(Array.isArray(this.routes)?e=this.routes:(this.groups=Object.keys(this.routes),this.groups.length>0&&(this.group||(this.group=this.groups[0]),e=this.routes[this.group],this.latest=this.group))),this.list=e?i(e):null},resetFormModel:function(){this.model=Object.assign({},r)},submitDataForm:function(){var e=this;this.$refs.form.validate((function(t){if(t){if(e.routes&&(Array.isArray(e.routes)&&e.group||!Array.isArray(e.routes)&&!e.group))return;e.$store.dispatch("conf/saveRoute",{data:e.model,routes:e.routes,group:e.group,list:e.list}).then((function(t){e.dialogFormVisible=!1,e.fetchData(),e.$notify({title:"Done",message:t,type:"success",duration:2e3})}))}}))},handleCreate:function(){var e=this;this.resetFormModel(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs.form.clearValidate()}))},handleUpdate:function(e){var t=this;this.model=Object.assign({},e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs.form.clearValidate()}))},handleDelete:function(e,t){var o=this;this.$confirm("Are you sure?",{confirmButtonText:"Yes",cancelButtonText:"No"}).then((function(){o.$store.dispatch("conf/removeRoute",{index:e.index,group:t}).then((function(e){o.fetchData(),o.$notify({title:"Success",message:e,type:"success",duration:2e3})}))})).catch((function(){}))},handleClear:function(){var e=this;this.$confirm("Are you sure?",{confirmButtonText:"Yes",cancelButtonText:"No"}).then((function(){e.$store.dispatch("conf/clearRoutes").then((function(t){e.group=null,e.fetchData(),e.$notify({title:"Success",message:t,type:"success",duration:2e3})}))})).catch((function(){}))},addArgument:function(){this.model.args.push({})},removeArgument:function(e){this.model.args=this.model.args.filter((function(t,o){return o!==e}))},addHeader:function(){this.model.headers.push({})},removeHeader:function(e){this.model.headers=this.model.headers.filter((function(t,o){return o!==e}))},addCookie:function(){this.model.cookies.push({})},removeCookie:function(e){this.model.cookies=this.model.cookies.filter((function(t,o){return o!==e}))},selectGroup:function(e){e&&(this.latest=e,this.group=e,this.routes&&this.routes[e]?this.list=i(this.routes[e]):this.list=null)},removeGroup:function(){var e=this,t=this.latest;this.groups&&this.groups.includes(t)&&this.$confirm("Are you sure?",{confirmButtonText:"Yes",cancelButtonText:"No"}).then((function(){e.$store.dispatch("conf/deleteRouteGroup",t).then((function(t){e.group=null,e.fetchData(),e.$notify({title:"Success",message:t,type:"success",duration:2e3})}))})).catch((function(){e.group=t}))}}},c=n,u=(o("61ec"),o("2877")),d=Object(u["a"])(c,l,a,!1,null,null,null);t["default"]=d.exports}}]);