import{d as J,z as ee,r as D,a as U,X as ue,Y as le,y as te,o as C,f as K,h as e,w as l,n as d,g as v,m as h,s as m,P as ae,Z as R,$ as oe,U as _,a0 as ne,a1 as re,E as se,b as ie,c as de,e as ce,A as pe,F as me,H as _e,I as fe,q as ge,a2 as Ce,L as Fe,a3 as Ee,_ as Q,t as ve,a4 as he,a5 as De,G as Be}from"./index.996e171a.js";/* empty css                *//* empty css                    */import{_ as ye}from"./upload.753bdfe2.js";/* empty css                 */import{u as be,g as ke}from"./utils.1d1c89eb.js";/* empty css                  *//* empty css                    */const we=["src"],Ve={class:"foot"},Ue=["src"],xe={class:"dialog-footer"},ze="http://194.36.209.169:48080/admin-api/infra/file/upload",Se=J({__name:"soldingGoods",setup(W){const F=ee(),B=D(),c=U({keyword:""}),i=async()=>{let t=await R({pageSize:y.value,pageNo:E.value,type:0}),{data:u,code:o}=t.data;o==200&&(b.value=u.total,F.value=u.list)},k=async()=>{let t=await R({pageSize:y.value,pageNo:E.value,type:0,keyword:c.keyword}),{data:u,code:o}=t.data;o==200&&(b.value=u.total,F.value=u.list)},V=t=>{!t||(t.resetFields(),c.keyword="",i())},{currentPage:E,pageSize:y,total:b,handleSizeChange:q,handleCurrentChange:I}=be(i);i();const x=(t,u)=>{Ee({status:t?1:0,id:u.id}).then(o=>{o.data.code==200?(_({message:"\u4FEE\u6539\u72B6\u6001\u6210\u529F",type:"success"}),i()):_.error(o.data.msg)})},f=D(!1),n=U({type:0,name:"",picUrl:"",price:"",contribution:""}),w=D([]),T=t=>{for(let u in t)n[u]=t[u];n.type=t.type+"",f.value=!0,w.value.push({name:"1",url:t.picUrl})},z=()=>{f.value=!1,w.value=[]},G=U({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0",trigger:"blur"},{min:2,max:8,message:"\u957F\u5EA6\u4E3A2-8\u4F4D\u4E4B\u95F4",trigger:"blur"}],picUrl:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u5546\u54C1\u56FE\u7247",trigger:"blur"}],type:[{required:!0,message:"\u8BF7\u9009\u62E9\u5546\u54C1\u7C7B\u578B",trigger:"change"}],price:[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u54C1\u4EF7\u683C",trigger:"blur"}],contribution:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D21\u732E\u503C",trigger:"blur"}]}),N=async()=>{let t=await oe(n),{code:u}=t.data;u==200?(_({message:"\u4FEE\u6539\u5546\u54C1\u6210\u529F",type:"success"}),i()):_.error("\u4FEE\u6539\u5546\u54C1\u5931\u8D25"),f.value=!1},L=t=>{ne.alert("\u786E\u5B9A\u5220\u9664\u6539\u5546\u54C1\u5417","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",callback:async u=>{let o=await re({id:t}),{code:r}=o.data;r==200?_({type:"success",message:"\u5220\u9664\u5546\u54C1\u6210\u529F"}):_.error("\u5220\u9664\u5546\u54C1\u5931\u8D25"),i()}})},j=(t,u,o)=>{o=[{name:u.name,file:URL.createObjectURL(u.raw)}],n.picUrl=t.data,console.log(t,u,o)},M=(t,u)=>{console.log(t,u)};return ue(()=>{}),(t,u)=>{const o=se,r=ie,p=de,S=ce,s=pe,A=le,H=me,$=_e,O=fe,X=te("Plus"),Y=ge,P=Ce,Z=Fe;return C(),K("div",null,[e(S,{inline:!0,model:c,class:"demo-form-inline",ref_key:"formRef",ref:B},{default:l(()=>[e(r,{label:"\u5173\u952E\u8BCD\u641C\u7D22"},{default:l(()=>[e(o,{modelValue:c.keyword,"onUpdate:modelValue":u[0]||(u[0]=a=>c.keyword=a),placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0\u3001\u5173\u952E\u8BCD"},null,8,["modelValue"])]),_:1}),e(r,null,{default:l(()=>[e(p,{type:"primary",onClick:k},{default:l(()=>[d("\u641C\u7D22")]),_:1}),e(p,{onClick:u[1]||(u[1]=a=>V(B.value))},{default:l(()=>[d("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"]),e(m(ae),{data:F.value,style:{width:"100%"},ref:"tableRef"},{default:l(()=>[e(s,{type:"selection",width:"55"}),e(s,{prop:"id",label:"ID"}),e(s,{prop:"picUrl",label:"\u5546\u54C1\u56FE"},{default:l(a=>[v("img",{src:a.row.picUrl,style:{width:"50px",height:"50px"}},null,8,we)]),_:1}),e(s,{prop:"name",label:"\u5546\u54C1\u540D\u79F0"}),e(s,{prop:"price",label:"\u5546\u54C1\u552E\u4EF7"}),e(s,{prop:"status",label:"\u4E0A/\u4E0B\u67B6"},{default:l(a=>[a.row.status==1?(C(),h(A,{key:0,"model-value":!0,onChange:g=>x(g,a.row)},null,8,["onChange"])):(C(),h(A,{key:1,"model-value":!1,onChange:g=>x(g,a.row)},null,8,["onChange"]))]),_:1}),e(s,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4"}),e(s,{fixed:"right",label:"\u64CD\u4F5C"},{default:l(a=>[e(p,{link:"",type:"primary",size:"small",onClick:g=>T(a.row)},{default:l(()=>[d("\u7F16\u8F91")]),_:2},1032,["onClick"]),e(p,{link:"",type:"primary",size:"small",onClick:g=>L(a.row.id)},{default:l(()=>[d("\u5220\u9664")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),v("div",Ve,[e(H,{class:"mt20",onSizeChange:m(q),onCurrentChange:m(I),background:"","current-page":m(E),"page-sizes":[10,20],"page-size":m(y),layout:"total, sizes, prev, pager, next, jumper",total:m(b)},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])]),e(Z,{modelValue:f.value,"onUpdate:modelValue":u[7]||(u[7]=a=>f.value=a),title:"\u7F16\u8F91","before-close":z},{footer:l(()=>[v("span",xe,[e(p,{onClick:z},{default:l(()=>[d("\u53D6\u6D88")]),_:1}),e(p,{type:"primary",onClick:u[6]||(u[6]=a=>N())},{default:l(()=>[d(" \u786E\u5B9A ")]),_:1})])]),default:l(()=>[e(S,{model:n,"label-width":"90",rules:G},{default:l(()=>[e(r,{label:"\u5546\u54C1\u7C7B\u578B",prop:"type"},{default:l(()=>[e(O,{modelValue:n.type,"onUpdate:modelValue":u[2]||(u[2]=a=>n.type=a)},{default:l(()=>[e($,{value:"0",label:"0"},{default:l(()=>[d("\u666E\u901A\u5546\u54C1")]),_:1}),e($,{value:"1",label:"1"},{default:l(()=>[d("\u7279\u4EF7\u5546\u54C1")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"\u5546\u54C1\u540D\u79F0",prop:"name"},{default:l(()=>[e(o,{modelValue:n.name,"onUpdate:modelValue":u[3]||(u[3]=a=>n.name=a),autocomplete:"off",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u5546\u54C1\u5C01\u9762\u56FE",prop:"picUrl"},{default:l(()=>[e(ye,{action:ze,"show-file-list":!0,limit:1,onSuccess:j,onError:M,"file-list":w.value},{default:l(()=>[n.picUrl?(C(),h(P,{key:1,slot:"tip",placement:"top",trigger:"hover"},{default:l(()=>[v("img",{src:n.picUrl,style:{width:"100px",height:"100px","background-color":"yellow"}},null,8,Ue)]),_:1})):(C(),h(P,{key:0,slot:"uploadButton",placement:"top",trigger:"hover"},{default:l(()=>[e(Y,null,{default:l(()=>[e(X)]),_:1})]),_:1}))]),_:1},8,["file-list"])]),_:1}),e(r,{label:"\u5546\u54C1\u4EF7\u683C",prop:"price"},{default:l(()=>[e(o,{modelValue:n.price,"onUpdate:modelValue":u[4]||(u[4]=a=>n.price=a),placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u4EF7\u683C"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u5546\u54C1\u8D21\u732E\u503C",prop:"contribution"},{default:l(()=>[e(o,{modelValue:n.contribution,"onUpdate:modelValue":u[5]||(u[5]=a=>n.contribution=a),autocomplete:"off",placeholder:"\u8BF7\u8F93\u5165\u8D21\u732E\u503C(\u5355\u6B21\u8D2D\u4E70\u83B7\u5F97\u7684\u8D21\u732E\u503C)"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}}});const Ae=Q(Se,[["__scopeId","data-v-24cb642c"]]),$e=["src"],Pe={class:"foot"},Re=["src"],qe={class:"dialog-footer"},Ie="http://194.36.209.169:48080/admin-api/infra/file/upload",Te=J({__name:"backGoods",setup(W){const F=ee(),B=D(),c=U({keyword:""}),i=async()=>{let t=await R({pageSize:y.value,pageNo:E.value,type:1}),{data:u,code:o}=t.data;o==200&&(b.value=u.total,F.value=u.list)},k=async()=>{let t=await R({pageSize:y.value,pageNo:E.value,type:1,keyword:c.keyword}),{data:u,code:o}=t.data;o==200&&(b.value=u.total,F.value=u.list)},V=t=>{!t||(t.resetFields(),c.keyword="",i())},{currentPage:E,pageSize:y,total:b,handleSizeChange:q,handleCurrentChange:I}=be(i);i();const x=(t,u)=>{Ee({status:t?1:0,id:u.id}).then(o=>{o.data.code==200?(_({message:"\u4FEE\u6539\u72B6\u6001\u6210\u529F",type:"success"}),i()):_.error(o.data.msg)})},f=D(!1),n=U({type:0,name:"",picUrl:"",price:"",contribution:""}),w=D([]),T=t=>{for(let u in t)n[u]=t[u];n.type=t.type+"",f.value=!0,w.value.push({name:"1",url:t.picUrl})},z=()=>{f.value=!1,w.value=[]},G=U({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0",trigger:"blur"},{min:2,max:8,message:"\u957F\u5EA6\u4E3A2-8\u4F4D\u4E4B\u95F4",trigger:"blur"}],picUrl:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u5546\u54C1\u56FE\u7247",trigger:"blur"}],type:[{required:!0,message:"\u8BF7\u9009\u62E9\u5546\u54C1\u7C7B\u578B",trigger:"change"}],price:[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u54C1\u4EF7\u683C",trigger:"blur"}],contribution:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D21\u732E\u503C",trigger:"blur"}]}),N=async()=>{let t=await oe(n),{code:u}=t.data;u==200?(_({message:"\u4FEE\u6539\u5546\u54C1\u6210\u529F",type:"success"}),i()):_.error("\u4FEE\u6539\u5546\u54C1\u5931\u8D25"),f.value=!1},L=t=>{ne.alert("\u786E\u5B9A\u5220\u9664\u6539\u5546\u54C1\u5417","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",callback:async u=>{let o=await re({id:t}),{code:r}=o.data;r==200?_({type:"success",message:"\u5220\u9664\u5546\u54C1\u6210\u529F"}):_.error("\u5220\u9664\u5546\u54C1\u5931\u8D25"),i()}})},j=(t,u,o)=>{o=[{name:u.name,file:URL.createObjectURL(u.raw)}],n.picUrl=t.data,console.log(t,u,o)},M=(t,u)=>{console.log(t,u)};return ue(()=>{}),(t,u)=>{const o=se,r=ie,p=de,S=ce,s=pe,A=le,H=me,$=_e,O=fe,X=te("Plus"),Y=ge,P=Ce,Z=Fe;return C(),K("div",null,[e(S,{inline:!0,model:c,class:"demo-form-inline",ref_key:"formRef",ref:B},{default:l(()=>[e(r,{label:"\u5173\u952E\u8BCD\u641C\u7D22"},{default:l(()=>[e(o,{modelValue:c.keyword,"onUpdate:modelValue":u[0]||(u[0]=a=>c.keyword=a),placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0\u3001\u5173\u952E\u8BCD"},null,8,["modelValue"])]),_:1}),e(r,null,{default:l(()=>[e(p,{type:"primary",onClick:k},{default:l(()=>[d("\u641C\u7D22")]),_:1}),e(p,{onClick:u[1]||(u[1]=a=>V(B.value))},{default:l(()=>[d("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"]),e(m(ae),{data:F.value,style:{width:"100%"},ref:"tableRef"},{default:l(()=>[e(s,{type:"selection",width:"55"}),e(s,{prop:"id",label:"ID"}),e(s,{prop:"picUrl",label:"\u5546\u54C1\u56FE"},{default:l(a=>[v("img",{src:a.row.picUrl,style:{width:"50px",height:"50px"}},null,8,$e)]),_:1}),e(s,{prop:"name",label:"\u5546\u54C1\u540D\u79F0"}),e(s,{prop:"price",label:"\u5546\u54C1\u552E\u4EF7"}),e(s,{prop:"status",label:"\u4E0A/\u4E0B\u67B6"},{default:l(a=>[a.row.status==1?(C(),h(A,{key:0,"model-value":!0,onChange:g=>x(g,a.row)},null,8,["onChange"])):(C(),h(A,{key:1,"model-value":!1,onChange:g=>x(g,a.row)},null,8,["onChange"]))]),_:1}),e(s,{prop:"createTime",label:"\u8D2D\u4E70\u65F6\u95F4"},{default:l(a=>[v("p",null,ve(m(ke)(a.row.createTime)),1)]),_:1}),e(s,{fixed:"right",label:"\u64CD\u4F5C"},{default:l(a=>[e(p,{link:"",type:"primary",size:"small",onClick:g=>T(a.row)},{default:l(()=>[d("\u7F16\u8F91")]),_:2},1032,["onClick"]),e(p,{link:"",type:"primary",size:"small",onClick:g=>L(a.row.id)},{default:l(()=>[d("\u5220\u9664")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),v("div",Pe,[e(H,{class:"mt20",onSizeChange:m(q),onCurrentChange:m(I),background:"","current-page":m(E),"page-sizes":[10,20],"page-size":m(y),layout:"total, sizes, prev, pager, next, jumper",total:m(b)},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])]),e(Z,{modelValue:f.value,"onUpdate:modelValue":u[7]||(u[7]=a=>f.value=a),title:"\u7F16\u8F91","before-close":z},{footer:l(()=>[v("span",qe,[e(p,{onClick:z},{default:l(()=>[d("\u53D6\u6D88")]),_:1}),e(p,{type:"primary",onClick:u[6]||(u[6]=a=>N())},{default:l(()=>[d(" \u786E\u5B9A ")]),_:1})])]),default:l(()=>[e(S,{model:n,"label-width":"90",rules:G},{default:l(()=>[e(r,{label:"\u5546\u54C1\u7C7B\u578B",prop:"type"},{default:l(()=>[e(O,{modelValue:n.type,"onUpdate:modelValue":u[2]||(u[2]=a=>n.type=a)},{default:l(()=>[e($,{value:"0",label:"0"},{default:l(()=>[d("\u666E\u901A\u5546\u54C1")]),_:1}),e($,{value:"1",label:"1"},{default:l(()=>[d("\u7279\u4EF7\u5546\u54C1")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"\u5546\u54C1\u540D\u79F0",prop:"name"},{default:l(()=>[e(o,{modelValue:n.name,"onUpdate:modelValue":u[3]||(u[3]=a=>n.name=a),autocomplete:"off",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u5546\u54C1\u5C01\u9762\u56FE",prop:"picUrl"},{default:l(()=>[e(ye,{action:Ie,"show-file-list":!0,limit:1,onSuccess:j,onError:M,"file-list":w.value},{default:l(()=>[n.picUrl?(C(),h(P,{key:1,slot:"tip",placement:"top",trigger:"hover"},{default:l(()=>[v("img",{src:n.picUrl,style:{width:"100px",height:"100px","background-color":"yellow"}},null,8,Re)]),_:1})):(C(),h(P,{key:0,slot:"uploadButton",placement:"top",trigger:"hover"},{default:l(()=>[e(Y,null,{default:l(()=>[e(X)]),_:1})]),_:1}))]),_:1},8,["file-list"])]),_:1}),e(r,{label:"\u5546\u54C1\u4EF7\u683C",prop:"price"},{default:l(()=>[e(o,{modelValue:n.price,"onUpdate:modelValue":u[4]||(u[4]=a=>n.price=a),placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u4EF7\u683C"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u5546\u54C1\u8D21\u732E\u503C",prop:"contribution"},{default:l(()=>[e(o,{modelValue:n.contribution,"onUpdate:modelValue":u[5]||(u[5]=a=>n.contribution=a),autocomplete:"off",placeholder:"\u8BF7\u8F93\u5165\u8D21\u732E\u503C(\u5355\u6B21\u8D2D\u4E70\u83B7\u5F97\u7684\u8D21\u732E\u503C)"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}}});const Ge=Q(Te,[["__scopeId","data-v-7bc394c7"]]),Ne={class:"home"},Le=J({__name:"total-shop",setup(W){const F=D("first"),B=D(0),c=(i,k)=>{B.value=i.index};return(i,k)=>{const V=he,E=De,y=Be;return C(),K("div",Ne,[e(y,null,{default:l(()=>[e(E,{modelValue:F.value,"onUpdate:modelValue":k[0]||(k[0]=b=>F.value=b),class:"demo-tabs",onTabClick:c},{default:l(()=>[e(V,{label:"\u666E\u901A\u5546\u54C1",name:"first"},{default:l(()=>[e(Ae)]),_:1}),e(V,{label:"\u590D\u8D2D\u5546\u54C1",name:"second"},{default:l(()=>[e(Ge)]),_:1})]),_:1},8,["modelValue"])]),_:1})])}}});const Ke=Q(Le,[["__scopeId","data-v-c965caf9"]]);export{Ke as default};
