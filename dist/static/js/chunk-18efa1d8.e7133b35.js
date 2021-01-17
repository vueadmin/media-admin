(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18efa1d8"],{2240:function(e,t,l){"use strict";l.r(t);var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("el-button",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"primary"},on:{click:e.hanldeShowResourceDialog}},[e._v("添加资源")]),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[l("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index+1)+" ")]}}])}),l("el-table-column",{attrs:{width:"150",label:"资源名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.name)+" ")]}}])}),l("el-table-column",{attrs:{label:"演唱",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.singer)+" ")]}}])}),l("el-table-column",{attrs:{label:"作者",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.author)+" ")]}}])}),l("el-table-column",{attrs:{label:"资源类型",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.type)+" ")]}}])}),l("el-table-column",{attrs:{label:"资源链接",width:"450"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.url)+" ")]}}])}),l("el-table-column",{attrs:{label:"资源介绍"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.desc)+" ")]}}])}),l("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){return e.handleFetchResourcesQrcode(t.row)}}},[e._v("二维码")]),l("el-button",{attrs:{type:"text",size:"small"}},[e._v("编辑")])]}}])})],1),l("el-dialog",{attrs:{title:"新增资源",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[l("el-form",{attrs:{model:e.form}},[l("el-form-item",{attrs:{label:"资源名称","label-width":e.formLabelWidth}},[l("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),l("el-form-item",{attrs:{label:"资源简介","label-width":e.formLabelWidth}},[l("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),l("el-form-item",{attrs:{label:"资源地址","label-width":e.formLabelWidth}},[l("el-input",{attrs:{disabled:"",autocomplete:"off"},model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1),l("el-form-item",{attrs:{label:"演唱者","label-width":e.formLabelWidth}},[l("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.singer,callback:function(t){e.$set(e.form,"singer",t)},expression:"form.singer"}})],1),l("el-form-item",{attrs:{label:"作者","label-width":e.formLabelWidth}},[l("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.author,callback:function(t){e.$set(e.form,"author",t)},expression:"form.author"}})],1),l("el-form-item",{attrs:{label:"资源类型","label-width":e.formLabelWidth}},[l("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[l("el-option",{attrs:{label:"音频",value:"mp3"}}),l("el-option",{attrs:{label:"视频",value:"mp4"}})],1)],1),l("el-form-item",{attrs:{label:"上传资源","label-width":e.formLabelWidth}},[l("el-upload",{staticClass:"upload-demo",attrs:{action:"http://api.zhangguoheng.cn/resources/upload","on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-success":e.handleSuccess,"before-remove":e.beforeRemove,multiple:"",limit:1,"on-exceed":e.handleExceed,"file-list":e.fileList}},[l("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1)],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:e.hanldeCreateResources}},[e._v("确 定")])],1)],1),l("el-dialog",{attrs:{title:"二维码",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("el-image",{attrs:{src:e.qrcodeUrl}})],1)],1)},a=[],r=(l("99af"),l("fb6a"),l("b0c0"),l("b775"));function i(e){return Object(r["a"])({url:"/resources/add",method:"post",data:e})}function n(){return Object(r["a"])({url:"/resources/index",method:"get"})}function s(e){return Object(r["a"])({url:"/resources/qrcode",method:"post",data:e})}var c={data:function(){return{list:null,listLoading:!0,httpUrl:"http://api.zhangguoheng.cn/",form:{name:"",desc:"",type:"",url:"",author:"",singer:""},formLabelWidth:"120px",dialogFormVisible:!1,dialogVisible:!1,qrcodeUrl:"",fileList:[]}},created:function(){this.fetchData()},methods:{handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},handleSuccess:function(e,t){200===e.code&&(this.form.url=this.httpUrl+e.data)},handleExceed:function(e,t){this.$message.warning("当前限制选择 1 个文件，本次选择了 ".concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))},beforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))},fetchData:function(){var e=this;this.listLoading=!0,n().then((function(t){console.log(t),e.listLoading=!1,e.list=t.data}))},hanldeShowResourceDialog:function(){this.form={name:"",desc:"",type:"",url:"",author:"",singer:""},this.dialogFormVisible=!0},hanldeCreateResources:function(){var e=this;i(this.form).then((function(t){e.dialogFormVisible=!1,e.fetchData()}))},handleFetchResourcesQrcode:function(e){var t=this;this.dialogVisible=!0;var l={name:e.index_id,url:e.url};s(l).then((function(e){console.log(e.qrcode),t.qrcodeUrl=t.httpUrl+e.qrcode.slice(2,16),console.log(t.qrcodeUrl)}))}}},u=c,d=l("2877"),f=Object(d["a"])(u,o,a,!1,null,null,null);t["default"]=f.exports},fb6a:function(e,t,l){"use strict";var o=l("23e7"),a=l("861d"),r=l("e8b5"),i=l("23cb"),n=l("50c4"),s=l("fc6a"),c=l("8418"),u=l("b622"),d=l("1dde"),f=l("ae40"),m=d("slice"),h=f("slice",{ACCESSORS:!0,0:0,1:2}),b=u("species"),p=[].slice,g=Math.max;o({target:"Array",proto:!0,forced:!m||!h},{slice:function(e,t){var l,o,u,d=s(this),f=n(d.length),m=i(e,f),h=i(void 0===t?f:t,f);if(r(d)&&(l=d.constructor,"function"!=typeof l||l!==Array&&!r(l.prototype)?a(l)&&(l=l[b],null===l&&(l=void 0)):l=void 0,l===Array||void 0===l))return p.call(d,m,h);for(o=new(void 0===l?Array:l)(g(h-m,0)),u=0;m<h;m++,u++)m in d&&c(o,u,d[m]);return o.length=u,o}})}}]);