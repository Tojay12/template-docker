import{d as Z,z as W,r as V,a as x,X as ee,Y as ue,y as le,o as F,f as J,h as e,w as l,n as p,g as D,m as B,s as m,P as te,Z as T,$ as ae,U as _,a0 as oe,a1 as ne,E as re,b as se,c as ie,e as de,A as pe,F as ce,H as me,I as _e,q as ge,a2 as fe,L as Ce,a3 as Fe,_ as K,t as ye,a4 as ve,a5 as he,G as De}from"./index.78ea79e9.js";/* empty css                *//* empty css                    */import{_ as Ee}from"./upload.6f8e3c86.js";/* empty css                 */import{u as be,g as Be}from"./utils.133bad76.js";/* empty css                  *//* empty css                    */const ke=["src"],we={class:"foot"},Ve=["src"],Ue={class:"dialog-footer"},xe="http://194.36.209.169:48080/admin-api/infra/file/upload",ze=Z({__name:"soldingGoods",setup(Q){const E=W(),k=V(),c=x({keyword:""}),i=async()=>{let u=await T({pageSize:y.value,pageNo:b.value,type:0}),{data:t,code:r}=u.data;r==200&&(v.value=t.total,E.value=t.list)},w=async()=>{let u=await T({pageSize:y.value,pageNo:b.value,type:0,keyword:c.keyword}),{data:t,code:r}=u.data;r==200&&(v.value=t.total,E.value=t.list)},U=u=>{!u||(u.resetFields(),c.keyword="",i())},{currentPage:b,pageSize:y,total:v,handleSizeChange:G,handleCurrentChange:N}=be(i);i();const z=(u,t)=>{Fe({status:u?1:0,id:t.id}).then(r=>{r.data.code==200?(_({message:"\u4FEE\u6539\u72B6\u6001\u6210\u529F",type:"success"}),i()):_.error(r.data.msg)})},g=V(!1),a=x({type:0,name:"",picUrl:"",price:"",contribution:""}),A=V([]),L=u=>{for(let t in u)a[t]=u[t];a.type=u.type+"",g.value=!0,A.value.push({name:"1",url:u.picUrl})},j=x({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0",trigger:"blur"},{min:2,max:8,message:"\u957F\u5EA6\u4E3A2-8\u4F4D\u4E4B\u95F4",trigger:"blur"}],picUrl:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u5546\u54C1\u56FE\u7247",trigger:"blur"}],type:[{required:!0,message:"\u8BF7\u9009\u62E9\u5546\u54C1\u7C7B\u578B",trigger:"change"}],price:[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u54C1\u4EF7\u683C",trigger:"blur"}],contribution:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D21\u732E\u503C",trigger:"blur"}]}),M=async()=>{let u=await ae(a),{code:t}=u.data;t==200?(_({message:"\u4FEE\u6539\u5546\u54C1\u6210\u529F",type:"success"}),i()):_.error("\u4FEE\u6539\u5546\u54C1\u5931\u8D25"),g.value=!1},H=u=>{oe.alert("\u786E\u5B9A\u5220\u9664\u6539\u5546\u54C1\u5417","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",callback:async t=>{let r=await ne({id:u}),{code:d}=r.data;d==200?_({type:"success",message:"\u5220\u9664\u5546\u54C1\u6210\u529F"}):_.error("\u5220\u9664\u5546\u54C1\u5931\u8D25"),i()}})},O=(u,t,r)=>{r=[{name:t.name,file:URL.createObjectURL(t.raw)}],a.picUrl=u.data,console.log(u,t,r)},s=(u,t)=>{console.log(u,t)};return ee(()=>{}),(u,t)=>{const r=re,d=se,h=ie,f=de,C=pe,$=ue,P=ce,R=me,X=_e,Y=le("Plus"),q=ge,I=fe,n=Ce;return F(),J("div",null,[e(f,{inline:!0,model:c,class:"demo-form-inline",ref_key:"formRef",ref:k},{default:l(()=>[e(d,{label:"\u5173\u952E\u8BCD\u641C\u7D22"},{default:l(()=>[e(r,{modelValue:c.keyword,"onUpdate:modelValue":t[0]||(t[0]=o=>c.keyword=o),placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0\u3001\u5173\u952E\u8BCD"},null,8,["modelValue"])]),_:1}),e(d,null,{default:l(()=>[e(h,{type:"primary",onClick:w},{default:l(()=>[p("\u641C\u7D22")]),_:1}),e(h,{onClick:t[1]||(t[1]=o=>U(k.value))},{default:l(()=>[p("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"]),e(m(te),{data:E.value,style:{width:"100%"},ref:"tableRef"},{default:l(()=>[e(C,{type:"selection",width:"55"}),e(C,{prop:"id",label:"ID"}),e(C,{prop:"picUrl",label:"\u5546\u54C1\u56FE"},{default:l(o=>[D("img",{src:o.row.picUrl,style:{width:"50px",height:"50px"}},null,8,ke)]),_:1}),e(C,{prop:"name",label:"\u5546\u54C1\u540D\u79F0"}),e(C,{prop:"price",label:"\u5546\u54C1\u552E\u4EF7"}),e(C,{prop:"status",label:"\u4E0A/\u4E0B\u67B6"},{default:l(o=>[o.row.status==1?(F(),B($,{key:0,"model-value":!0,onChange:S=>z(S,o.row)},null,8,["onChange"])):(F(),B($,{key:1,"model-value":!1,onChange:S=>z(S,o.row)},null,8,["onChange"]))]),_:1}),e(C,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4"}),e(C,{fixed:"right",label:"\u64CD\u4F5C"},{default:l(o=>[e(h,{link:"",type:"primary",size:"small",onClick:S=>L(o.row)},{default:l(()=>[p("\u7F16\u8F91")]),_:2},1032,["onClick"]),e(h,{link:"",type:"primary",size:"small",onClick:S=>H(o.row.id)},{default:l(()=>[p("\u5220\u9664")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),D("div",we,[e(P,{class:"mt20",onSizeChange:m(G),onCurrentChange:m(N),background:"","current-page":m(b),"page-sizes":[10,20],"page-size":m(y),layout:"total, sizes, prev, pager, next, jumper",total:m(v)},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])]),e(n,{modelValue:g.value,"onUpdate:modelValue":t[8]||(t[8]=o=>g.value=o),title:"\u7F16\u8F91"},{footer:l(()=>[D("span",Ue,[e(h,{onClick:t[6]||(t[6]=o=>g.value=!1)},{default:l(()=>[p("\u53D6\u6D88")]),_:1}),e(h,{type:"primary",onClick:t[7]||(t[7]=o=>M())},{default:l(()=>[p(" \u786E\u5B9A ")]),_:1})])]),default:l(()=>[e(f,{model:a,"label-width":"90",rules:j},{default:l(()=>[e(d,{label:"\u5546\u54C1\u7C7B\u578B",prop:"type"},{default:l(()=>[e(X,{modelValue:a.type,"onUpdate:modelValue":t[2]||(t[2]=o=>a.type=o)},{default:l(()=>[e(R,{value:"0",label:"0"},{default:l(()=>[p("\u666E\u901A\u5546\u54C1")]),_:1}),e(R,{value:"1",label:"1"},{default:l(()=>[p("\u7279\u4EF7\u5546\u54C1")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"\u5546\u54C1\u540D\u79F0",prop:"name"},{default:l(()=>[e(r,{modelValue:a.name,"onUpdate:modelValue":t[3]||(t[3]=o=>a.name=o),autocomplete:"off",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u5546\u54C1\u5C01\u9762\u56FE",prop:"picUrl"},{default:l(()=>[e(Ee,{action:xe,"show-file-list":!0,limit:1,onSuccess:O,onError:s,"file-list":A.value},{default:l(()=>[a.picUrl?(F(),B(I,{key:1,slot:"tip",placement:"top",trigger:"hover"},{default:l(()=>[D("img",{src:a.picUrl,style:{width:"100px",height:"100px","background-color":"yellow"}},null,8,Ve)]),_:1})):(F(),B(I,{key:0,slot:"uploadButton",placement:"top",trigger:"hover"},{default:l(()=>[e(q,null,{default:l(()=>[e(Y)]),_:1})]),_:1}))]),_:1},8,["file-list"])]),_:1}),e(d,{label:"\u5546\u54C1\u4EF7\u683C",prop:"price"},{default:l(()=>[e(r,{modelValue:a.price,"onUpdate:modelValue":t[4]||(t[4]=o=>a.price=o),placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u4EF7\u683C"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u5546\u54C1\u8D21\u732E\u503C",prop:"contribution"},{default:l(()=>[e(r,{modelValue:a.contribution,"onUpdate:modelValue":t[5]||(t[5]=o=>a.contribution=o),autocomplete:"off",placeholder:"\u8BF7\u8F93\u5165\u8D21\u732E\u503C(\u5355\u6B21\u8D2D\u4E70\u83B7\u5F97\u7684\u8D21\u732E\u503C)"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}}});const Se=K(ze,[["__scopeId","data-v-5bb81a73"]]),Ae=["src"],$e={class:"foot"},Pe=["src"],Re={class:"dialog-footer"},qe=1,Ie="http://194.36.209.169:48080/admin-api/infra/file/upload",Te=Z({__name:"backGoods",setup(Q){const E=W(),k=V(),c=x({keyword:""}),i=async()=>{let s=await T({pageSize:y.value,pageNo:b.value,type:1}),{data:u,code:t}=s.data;t==200&&(v.value=u.total,E.value=u.list)},w=async()=>{let s=await T({pageSize:y.value,pageNo:b.value,type:1,keyword:c.keyword}),{data:u,code:t}=s.data;t==200&&(v.value=u.total,E.value=u.list)},U=s=>{!s||(s.resetFields(),c.keyword="",i())},{currentPage:b,pageSize:y,total:v,handleSizeChange:G,handleCurrentChange:N}=be(i);i();const z=(s,u)=>{Fe({status:s?1:0,id:u.id}).then(t=>{t.data.code==200?(_({message:"\u4FEE\u6539\u72B6\u6001\u6210\u529F",type:"success"}),i()):_.error(t.data.msg)})},g=V(!1),a=x({type:0,name:"",picUrl:"",price:"",contribution:""}),A=s=>{for(let u in s)a[u]=s[u];a.type=s.type+"",g.value=!0},L=x({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0",trigger:"blur"},{min:2,max:8,message:"\u957F\u5EA6\u4E3A2-8\u4F4D\u4E4B\u95F4",trigger:"blur"}],picUrl:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u5546\u54C1\u56FE\u7247",trigger:"blur"}],type:[{required:!0,message:"\u8BF7\u9009\u62E9\u5546\u54C1\u7C7B\u578B",trigger:"change"}],price:[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u54C1\u4EF7\u683C",trigger:"blur"}],contribution:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D21\u732E\u503C",trigger:"blur"}]}),j=async()=>{let s=await ae(a),{code:u}=s.data;u==200?(_({message:"\u4FEE\u6539\u5546\u54C1\u6210\u529F",type:"success"}),i()):_.error("\u4FEE\u6539\u5546\u54C1\u5931\u8D25"),g.value=!1},M=s=>{oe.alert("\u786E\u5B9A\u5220\u9664\u6539\u5546\u54C1\u5417","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",callback:async u=>{let t=await ne({id:s}),{code:r}=t.data;r==200?_({type:"success",message:"\u5220\u9664\u5546\u54C1\u6210\u529F"}):_.error("\u5220\u9664\u5546\u54C1\u5931\u8D25"),i()}})},H=(s,u,t)=>{t=[{name:u.name,file:URL.createObjectURL(u.raw)}],a.picUrl=s.data,console.log(s,u,t)},O=(s,u)=>{console.log(s,u)};return ee(()=>{}),(s,u)=>{const t=re,r=se,d=ie,h=de,f=pe,C=ue,$=ce,P=me,R=_e,X=le("Plus"),Y=ge,q=fe,I=Ce;return F(),J("div",null,[e(h,{inline:!0,model:c,class:"demo-form-inline",ref_key:"formRef",ref:k},{default:l(()=>[e(r,{label:"\u5173\u952E\u8BCD\u641C\u7D22"},{default:l(()=>[e(t,{modelValue:c.keyword,"onUpdate:modelValue":u[0]||(u[0]=n=>c.keyword=n),placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0\u3001\u5173\u952E\u8BCD"},null,8,["modelValue"])]),_:1}),e(r,null,{default:l(()=>[e(d,{type:"primary",onClick:w},{default:l(()=>[p("\u641C\u7D22")]),_:1}),e(d,{onClick:u[1]||(u[1]=n=>U(k.value))},{default:l(()=>[p("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"]),e(m(te),{data:E.value,style:{width:"100%"},ref:"tableRef"},{default:l(()=>[e(f,{type:"selection",width:"55"}),e(f,{prop:"id",label:"ID"}),e(f,{prop:"picUrl",label:"\u5546\u54C1\u56FE"},{default:l(n=>[D("img",{src:n.row.picUrl,style:{width:"50px",height:"50px"}},null,8,Ae)]),_:1}),e(f,{prop:"name",label:"\u5546\u54C1\u540D\u79F0"}),e(f,{prop:"price",label:"\u5546\u54C1\u552E\u4EF7"}),e(f,{prop:"status",label:"\u4E0A/\u4E0B\u67B6"},{default:l(n=>[n.row.status==1?(F(),B(C,{key:0,"model-value":!0,onChange:o=>z(o,n.row)},null,8,["onChange"])):(F(),B(C,{key:1,"model-value":!1,onChange:o=>z(o,n.row)},null,8,["onChange"]))]),_:1}),e(f,{prop:"createTime",label:"\u8D2D\u4E70\u65F6\u95F4"},{default:l(n=>[D("p",null,ye(m(Be)(n.row.createTime)),1)]),_:1}),e(f,{fixed:"right",label:"\u64CD\u4F5C"},{default:l(n=>[e(d,{link:"",type:"primary",size:"small",onClick:o=>A(n.row)},{default:l(()=>[p("\u7F16\u8F91")]),_:2},1032,["onClick"]),e(d,{link:"",type:"primary",size:"small",onClick:o=>M(n.row.id)},{default:l(()=>[p("\u5220\u9664")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),D("div",$e,[e($,{class:"mt20",onSizeChange:m(G),onCurrentChange:m(N),background:"","current-page":m(b),"page-sizes":[10,20],"page-size":m(y),layout:"total, sizes, prev, pager, next, jumper",total:m(v)},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])]),e(I,{modelValue:g.value,"onUpdate:modelValue":u[8]||(u[8]=n=>g.value=n),title:"\u7F16\u8F91"},{footer:l(()=>[D("span",Re,[e(d,{onClick:u[6]||(u[6]=n=>g.value=!1)},{default:l(()=>[p("\u53D6\u6D88")]),_:1}),e(d,{type:"primary",onClick:u[7]||(u[7]=n=>j())},{default:l(()=>[p(" \u786E\u5B9A ")]),_:1})])]),default:l(()=>[e(h,{model:a,"label-width":"90",rules:L},{default:l(()=>[e(r,{label:"\u5546\u54C1\u7C7B\u578B",prop:"type"},{default:l(()=>[e(R,{modelValue:a.type,"onUpdate:modelValue":u[2]||(u[2]=n=>a.type=n)},{default:l(()=>[e(P,{value:"0",label:"0"},{default:l(()=>[p("\u666E\u901A\u5546\u54C1")]),_:1}),e(P,{value:"1",label:"1"},{default:l(()=>[p("\u7279\u4EF7\u5546\u54C1")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"\u5546\u54C1\u540D\u79F0",prop:"name"},{default:l(()=>[e(t,{modelValue:a.name,"onUpdate:modelValue":u[3]||(u[3]=n=>a.name=n),autocomplete:"off",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u5546\u54C1\u4E3B\u56FE",prop:"name"},{default:l(()=>[e(Ee,{action:Ie,"show-file-list":!1,limit:qe,onSuccess:H,onError:O},{default:l(()=>[a.picUrl?(F(),B(q,{key:1,slot:"tip",placement:"top",trigger:"hover"},{default:l(()=>[D("img",{src:a.picUrl},null,8,Pe)]),_:1})):(F(),B(q,{key:0,slot:"uploadButton",placement:"top",trigger:"hover"},{default:l(()=>[e(Y,null,{default:l(()=>[e(X)]),_:1})]),_:1}))]),_:1})]),_:1}),e(r,{label:"\u5546\u54C1\u4EF7\u683C",prop:"price"},{default:l(()=>[e(t,{modelValue:a.price,"onUpdate:modelValue":u[4]||(u[4]=n=>a.price=n),placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u4EF7\u683C"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u5546\u54C1\u8D21\u732E\u503C",prop:"contribution"},{default:l(()=>[e(t,{modelValue:a.contribution,"onUpdate:modelValue":u[5]||(u[5]=n=>a.contribution=n),autocomplete:"off",placeholder:"\u8BF7\u8F93\u5165\u8D21\u732E\u503C(\u5355\u6B21\u8D2D\u4E70\u83B7\u5F97\u7684\u8D21\u732E\u503C)"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}}});const Ge=K(Te,[["__scopeId","data-v-e9003b3d"]]),Ne={class:"home"},Le=Z({__name:"total-shop",setup(Q){const E=V("first"),k=V(0),c=(i,w)=>{k.value=i.index};return(i,w)=>{const U=ve,b=he,y=De;return F(),J("div",Ne,[e(y,null,{default:l(()=>[e(b,{modelValue:E.value,"onUpdate:modelValue":w[0]||(w[0]=v=>E.value=v),class:"demo-tabs",onTabClick:c},{default:l(()=>[e(U,{label:"\u666E\u901A\u5546\u54C1",name:"first"},{default:l(()=>[e(Se)]),_:1}),e(U,{label:"\u7279\u4EF7\u5546\u54C1",name:"second"},{default:l(()=>[e(Ge)]),_:1})]),_:1},8,["modelValue"])]),_:1})])}}});const Ke=K(Le,[["__scopeId","data-v-496c1599"]]);export{Ke as default};
