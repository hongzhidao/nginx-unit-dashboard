(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddc5d"],{"838d":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("div",{staticClass:"filter-container"},[s("el-button",{staticClass:"filter-item",staticStyle:{"margin-bottom":"10px"},attrs:{type:"success",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v("Add")])],1),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[s("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index+1)+" ")]}}])}),s("el-table-column",{attrs:{label:"Name",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.name)+" ")]}}])}),s("el-table-column",{attrs:{label:"Type",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.type))])]}}])}),s("el-table-column",{attrs:{label:"Servers"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.servers,(function(t,r){return s("span",{key:r},[e._v(" "+e._s(t.address)+" ")])}))}}])}),s("el-table-column",{attrs:{label:"Operation",align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[s("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleUpdate(r)}}},[e._v("Update")]),"deleted"!=r.status?s("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.handleDelete(r)}}},[e._v("Delete")]):e._e()]}}])})],1),s("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[s("el-form",{ref:"form",staticStyle:{width:"400px margin-left:50px"},attrs:{rules:e.rules,"show-message":!1,model:e.model,"label-position":"right","label-width":"85px"}},[s("el-form-item",{attrs:{label:"Name",prop:"name"}},[s("el-input",{staticStyle:{width:"200px"},attrs:{readonly:"update"==e.dialogStatus},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),s("el-form-item",{attrs:{label:"Type",prop:"type"}},[s("el-select",{staticClass:"select-danger",staticStyle:{width:"200px"},attrs:{placeholder:"Select One"},model:{value:e.model.type,callback:function(t){e.$set(e.model,"type",t)},expression:"model.type"}},e._l(e.types,(function(e){return s("el-option",{key:e.label,staticClass:"select-danger",attrs:{value:e.value,label:e.label}})})),1)],1),s("el-form-item",{attrs:{label:"Servers"}},[s("el-button",{attrs:{type:"success"},on:{click:function(t){return e.addServer()}}},[e._v("Add server")])],1),e._l(e.model.servers,(function(t,r){return s("el-form-item",{key:r,attrs:{inline:!0}},[s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{span:10}},[s("el-form-item",{attrs:{rules:[{required:!0}],prop:"servers."+r+".address"}},[s("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"Address"},model:{value:t.address,callback:function(s){e.$set(t,"address",s)},expression:"server.address"}})],1)],1),s("el-col",{attrs:{span:4}},[s("el-form-item",{attrs:{prop:"servers."+r+".weight"}},[s("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"Weight"},model:{value:t.weight,callback:function(s){e.$set(t,"weight",s)},expression:"server.weight"}})],1)],1),s("el-col",{attrs:{span:10}},[s("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.removeServer(r)}}},[e._v("Delete")])],1)],1)],1)}))],2),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("Cancel")]),s("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitDataForm()}}},[e._v("Submit")])],1)],1)],1)},a=[],l=(s("4de4"),s("b0c0"),{type:"roundrobin",servers:[]}),i={filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){return{types:[{value:"roundrobin",label:"Round Robin"}],list:null,listLoading:!1,model:Object.assign({},l),dialogFormVisible:!1,dialogStatus:"",textMap:{create:"Add upstream",update:"Update upstream"},rules:{name:[{required:!0,trigger:"blur"}]}}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this.$store.getters.upstreams;if(e){var t=[];for(var s in e){var r=e[s],a={name:s,type:"roundrobin"},l=[];for(var i in r["servers"]){var n=r["servers"][i];l.push({address:i,weight:n["weight"]})}a["servers"]=l,t.push(a)}this.list=t}},resetFormModel:function(){this.model=Object.assign({},l)},submitDataForm:function(){var e=this;this.$refs.form.validate((function(t){t&&e.$store.dispatch("conf/saveUpstream",{data:e.model,list:e.list}).then((function(){e.dialogFormVisible=!1,e.fetchData(),e.$notify({title:"Done",message:"Successfully submit",type:"success",duration:2e3})}))}))},handleCreate:function(){var e=this;this.resetFormModel(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs.form.clearValidate()}))},handleUpdate:function(e){var t=this;this.model=Object.assign({},e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs.form.clearValidate()}))},handleDelete:function(e){var t=this;this.$confirm("Are you sure?",{confirmButtonText:"Yes",cancelButtonText:"No"}).then((function(){t.$store.dispatch("conf/removeUpstream",e.name).then((function(){t.fetchData(),t.$notify({title:"Done",message:"Successfully remove",type:"success",duration:2e3})}))})).catch((function(){}))},addServer:function(){this.model.servers.push({})},removeServer:function(e){this.model.servers=this.model.servers.filter((function(t,s){return s!==e}))}}},n=i,o=s("2877"),d=Object(o["a"])(n,r,a,!1,null,null,null);t["default"]=d.exports}}]);