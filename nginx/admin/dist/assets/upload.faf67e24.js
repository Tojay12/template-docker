import{a6 as p,c as y,a2 as g,r as E,a7 as x,_ as b,y as v,o as q,m as w,w as i,a8 as u,h as d,q as P}from"./index.d473e7bc.js";const B={components:{ElUpload:p,ElButton:y,ElPopover:g},props:{action:{type:String,required:!0},headers:{type:Object,default:()=>({})},multiple:{type:Boolean,default:!1},data:{type:Object,default:()=>({})},limit:{type:Number,default:0},showFileList:{type:Boolean,default:!0}},emits:["success","error"],setup(n,{emit:c}){return{fileList:E([]),beforeUpload:e=>{const o=e.type==="image/jpeg",t=e.type==="image/gif",m=e.type==="image/png",h=e.size/1024/1024<2;return!(!o&&!t&&!m||!h)},handleExceed:(e,o)=>{},onSuccess:(e,o,t)=>{t.value=t,c("success",e,o,t)},onError:(e,o,t)=>{c("error",e,o,t)},customRequest:e=>{const o=new FormData;o.append("file",e.file),x.post(e.action,o,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{e.onSuccess(t.data)}).catch(t=>{e.onError(t)})}}}};function S(n,c,s,a,_,f){const r=v("Plus"),l=P,e=p;return q(),w(e,{class:"upload-demo",drag:"",headers:s.headers,action:s.action,multiple:s.multiple,data:s.data,"before-upload":a.beforeUpload,"on-success":a.onSuccess,"on-error":a.onError,"on-exceed":a.handleExceed,limit:s.limit,"show-file-list":s.showFileList,"file-list":a.fileList,"list-type":"picture-card","http-request":a.customRequest},{default:i(()=>[u(n.$slots,"uploadButton",{},()=>[d(l,null,{default:i(()=>[d(r)]),_:1})],!0),u(n.$slots,"tip",{},void 0,!0)]),_:3},8,["headers","action","multiple","data","before-upload","on-success","on-error","on-exceed","limit","show-file-list","file-list","http-request"])}const U=b(B,[["render",S],["__scopeId","data-v-9ccac812"]]);export{U as _};
