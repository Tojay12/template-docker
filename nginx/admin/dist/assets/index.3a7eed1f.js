import{d as k,z as V,r as b,a as N,E as P,b as R,c as T,e as U,A as j,F as G,G as L,f as M,h as e,w as l,ag as F,o as $,n as h,s as n,P as q,g as C,U as H,ah as J,p as K,i as O,_ as Q}from"./index.3149e2b6.js";/* empty css                */import{u as W}from"./usePagination.6bd865a1.js";/* empty css                    */import{d as X}from"./utils.72fea498.js";const Y=r=>(K("data-v-0d5c3cf6"),r=r(),O(),r),Z={class:"home"},ee=Y(()=>C("div",{class:"card-header"},[C("span",null,"\u5168\u90E8\u5730\u5740")],-1)),ae={class:"foot"},te=k({__name:"index",setup(r){const d=V(),E=b(),u=N({username:""}),c=async()=>{let a=await F({pageSize:p.value,pageNo:i.value}),{data:t,code:s}=a.data;s==200&&(_.value=t.total,d.value=t.list)},x=async()=>{let a=await F({pageSize:p.value,pageNo:i.value,username:u.username}),{data:t,code:s}=a.data;s==200&&(_.value=t.total,d.value=t.list)},y=a=>{!a||(a.resetFields(),u.username="",c())},{currentPage:i,pageSize:p,total:_,handleSizeChange:B,handleCurrentChange:z}=W(c);c();const m=b([]),S=async a=>{m.value=a==null?void 0:a.map(t=>t.id)},w=async()=>{if(!m.value.length){H.error("\u8BF7\u9009\u62E9\u60A8\u8981\u5BFC\u51FA\u7684\u6570\u636E");return}let a=await J({ids:m.value});X.excel(a.data,"\u5730\u5740\u5217\u8868.xls")};return(a,t)=>{const s=P,f=R,g=T,A=U,o=j,D=G,I=L;return $(),M("div",Z,[e(I,null,{header:l(()=>[ee]),default:l(()=>[e(A,{inline:!0,model:u,class:"demo-form-inline",ref_key:"formRef",ref:E},{default:l(()=>[e(f,{label:"\u8D26\u6237 :"},{default:l(()=>[e(s,{modelValue:u.username,"onUpdate:modelValue":t[0]||(t[0]=v=>u.username=v),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u8D26\u6237"},null,8,["modelValue"])]),_:1}),e(f,null,{default:l(()=>[e(g,{type:"default",onClick:w},{default:l(()=>[h("\u6279\u91CF\u5BFC\u51FA")]),_:1})]),_:1}),e(f,null,{default:l(()=>[e(g,{type:"primary",onClick:x},{default:l(()=>[h("\u641C\u7D22")]),_:1}),e(g,{onClick:t[1]||(t[1]=v=>y(E.value))},{default:l(()=>[h("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"]),e(n(q),{data:d.value,style:{width:"100%"},ref:"tableRef",onSelectionChange:S},{default:l(()=>[e(o,{type:"selection",width:"55"}),e(o,{prop:"id",label:"ID"}),e(o,{prop:"username",label:"\u7528\u6237\u8D26\u6237"}),e(o,{prop:"name",label:"\u6536\u8D27\u4EBA"}),e(o,{prop:"mobile",label:"\u624B\u673A\u53F7"}),e(o,{prop:"province",label:"\u7701\u4EFD"}),e(o,{prop:"city",label:"\u57CE\u5E02"}),e(o,{prop:"district",label:"\u533A\u53BF"}),e(o,{prop:"street",label:"\u8857\u9053"}),e(o,{prop:"detailAddress",label:"\u8BE6\u7EC6\u5730\u5740"})]),_:1},8,["data"]),C("div",ae,[e(D,{class:"mt20",onSizeChange:n(B),onCurrentChange:n(z),background:"","current-page":n(i),"page-sizes":[10,20],"page-size":n(p),layout:"total, sizes, prev, pager, next, jumper",total:n(_)},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])]),_:1})])}}});const re=Q(te,[["__scopeId","data-v-0d5c3cf6"]]);export{re as default};
