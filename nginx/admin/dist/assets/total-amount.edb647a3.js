import{d as B,j as A,r as v,a as C,y as q,o as d,f as V,h as e,w as t,n as f,m as b,g as I,ab as S,U as R,H as N,I as P,b as T,E as $,q as G,a2 as j,c as H,e as L,_ as y,a4 as M,a5 as O,G as z}from"./index.78ea79e9.js";/* empty css                *//* empty css                    */import{_ as J}from"./upload.6f8e3c86.js";/* empty css                 */const K={class:"reward"},Q=["src"],W="http://194.36.209.169:48080/admin-api/infra/file/upload",X=B({__name:"rewardSetting",setup(U){const c=A(),_=v(),o=C({name:"",picUrl:"",price:"",type:"0",contribution:"",discount:""}),s=C({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0",trigger:"blur"},{min:2,max:8,message:"\u957F\u5EA6\u4E3A2-8\u4F4D\u4E4B\u95F4",trigger:"blur"}],picUrl:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u5546\u54C1\u56FE\u7247",trigger:"blur"}],type:[{required:!0,message:"\u8BF7\u9009\u62E9\u5546\u54C1\u7C7B\u578B",trigger:"change"}],price:[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u54C1\u4EF7\u683C",trigger:"blur"}],contribution:[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u54C1\u8D21\u732E\u503C",trigger:"blur"}],discount:[{required:!0,message:"\u8BF7\u8F93\u5165\u6298\u6263\u6BD4\u4F8B",trigger:"blur"}]}),p=(l,u,n)=>{n=[{name:u.name,file:URL.createObjectURL(u.raw)}],o.picUrl=l.data,console.log(l,u,n)},m=(l,u)=>{console.log(l,u)},i=async l=>{let u=await S(o),{code:n,data:F}=u.data;n==200&&R({message:"\u5546\u54C1\u6DFB\u52A0\u6210\u529F",type:"success"}),c.push("/total/shop")};return(l,u)=>{const n=N,F=P,r=T,g=$,D=q("Plus"),h=G,E=j,w=J,x=H,k=L;return d(),V("div",K,[e(k,{model:o,"label-width":"120px",rules:s,ref_key:"ruleForm",ref:_},{default:t(()=>[e(r,{label:"\u5546\u54C1\u7C7B\u578B",prop:"type"},{default:t(()=>[e(F,{modelValue:o.type,"onUpdate:modelValue":u[0]||(u[0]=a=>o.type=a)},{default:t(()=>[e(n,{value:"0",label:"0"},{default:t(()=>[f("\u666E\u901A\u5546\u54C1")]),_:1}),e(n,{value:"1",label:"1"},{default:t(()=>[f("\u7279\u4EF7\u5546\u54C1")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"\u5546\u54C1\u540D\u79F0 :",prop:"name"},{default:t(()=>[e(g,{modelValue:o.name,"onUpdate:modelValue":u[1]||(u[1]=a=>o.name=a),placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u5546\u54C1\u5C01\u9762\u56FE",prop:"picUrl"},{default:t(()=>[e(w,{action:W,"show-file-list":!0,limit:"1",onSuccess:p,onError:m},{default:t(()=>[o.picUrl?(d(),b(E,{key:1,slot:"tip",placement:"top",trigger:"hover"},{default:t(()=>[I("img",{src:o.picUrl},null,8,Q)]),_:1})):(d(),b(E,{key:0,slot:"uploadButton",placement:"top",trigger:"hover"},{default:t(()=>[e(h,null,{default:t(()=>[e(D)]),_:1})]),_:1}))]),_:1})]),_:1}),e(r,{label:"\u5546\u54C1\u4EF7\u683C :",class:"mt60",prop:"price"},{default:t(()=>[e(g,{modelValue:o.price,"onUpdate:modelValue":u[2]||(u[2]=a=>o.price=a),placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u4EF7\u683C"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u5546\u54C1\u8D21\u732E\u503C :",prop:"contribution"},{default:t(()=>[e(g,{modelValue:o.contribution,"onUpdate:modelValue":u[3]||(u[3]=a=>o.contribution=a),placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u8D21\u732E\u503C(\u5355\u6B21\u8D2D\u4E70\u83B7\u5F97\u7684\u8D21\u732E\u503C)"},null,8,["modelValue"])]),_:1}),e(r,null,{default:t(()=>[e(x,{type:"primary",onClick:u[4]||(u[4]=a=>i(_.value))},{default:t(()=>[f("\u63D0\u4EA4")]),_:1})]),_:1})]),_:1},8,["model","rules"])])}}});const Y=y(X,[["__scopeId","data-v-dbc014c4"]]),Z={class:"home"},ee=B({__name:"total-amount",setup(U){const c=v("first"),_=(o,s)=>{};return(o,s)=>{const p=M,m=O,i=z;return d(),V("div",Z,[e(i,null,{default:t(()=>[e(m,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=l=>c.value=l),class:"demo-tabs",onTabClick:_},{default:t(()=>[e(p,{label:"\u5546\u54C1\u4FE1\u606F",name:"first"},{default:t(()=>[e(Y)]),_:1})]),_:1},8,["modelValue"])]),_:1})])}}});const ne=y(ee,[["__scopeId","data-v-e38fc620"]]);export{ne as default};
