import{_ as e,i as a,u as l,r as s,l as o,c as t,a as n,b as u,w as r,n as i,k as m,s as c,e as d,o as v,g as p,p as g,h as f}from"./index-CfxxE0OO.js";import{i as y,a as k,e as x,b as _}from"./iconexcitet-B6irSPmZ.js";import{d as h}from"./index-DoZ6u9uq.js";import{m as b}from"./md5-CeX6lLuH.js";import{u as I}from"./index-DTChSudc.js";const j=e=>(g("data-v-62cade74"),e=e(),f(),e),q={class:"login"},V=j((()=>n("div",{class:"dis imglog"},[n("img",{src:"/assets/loginimg-2u8qqK-2.png",alt:""})],-1))),w=j((()=>n("div",{class:"ptext"},[n("p",null,"登录")],-1))),S={class:"froms"},T={class:"butlogin"},C=e({__name:"index",setup(e){const g=a("reload"),f=I(),j=l(),C=s(j.currentRoute.value.query.username?j.currentRoute.value.query.username:""),B=s("");let F=s(!1),R=s(!1);const U=()=>{F.value=!F.value},z=()=>{R.value=!R.value},D=s(!1),K=()=>{D.value=!D.value},A=s(""),E=s(""),G=()=>{A.value=""==C.value?"请不要为空":"",E.value=""==B.value?"请不要为空":"",""==A.value&&""==E.value&&h({username:C.value,password:b(B.value)}).then((e=>{if(200==e.code){let a=(new Date).getTime();localStorage.setItem("token",e.data.accessToken),localStorage.setItem("tenant-id",e.data.userId),localStorage.setItem("loginTime",a),f.logintoken(e.data.accessToken),localStorage.getItem("token")&&j.push({name:"home"}),C.value="",B.value="",c("登录成功"),g()}else c(e.msg)}))};localStorage.getItem("token")&&j.push({name:"home"}),o([C,B],(([e,a])=>{""!=e&&""!=a&&(A.value="",E.value="")}));const H=()=>{j.push({name:"register"})};return(e,a)=>{const l=d("van-field"),s=d("van-cell-group"),o=d("van-icon"),c=d("van-button");return v(),t("div",q,[V,w,n("div",{class:i(""+(m(F)?" fromstwo":" froms")),style:{"margin-top":"10px"}},[u(s,{inset:""},{default:r((()=>[u(l,{modelValue:C.value,"onUpdate:modelValue":a[0]||(a[0]=e=>C.value=e),"left-icon":"contact-o",required:"","error-message":A.value,placeholder:"请输入账号",clearable:!0,onFocus:U,onBlur:U},null,8,["modelValue","error-message"])])),_:1})],2),n("div",S,[u(s,{inset:""},{default:r((()=>[u(l,{modelValue:B.value,"onUpdate:modelValue":a[1]||(a[1]=e=>B.value=e),"left-icon":m(R)?m(y):m(k),placeholder:"请输入密码",type:D.value?"text":"password",clearable:!0,onFocus:z,onBlur:z,required:"","error-message":E.value},{button:r((()=>[u(o,{name:D.value?m(x):m(_),onClick:K,size:"20"},null,8,["name"])])),_:1},8,["modelValue","left-icon","type","error-message"])])),_:1})]),n("div",T,[u(c,{type:"primary",class:"loginsty loginco",style:{"margin-bottom":"25px"},onClick:G},{default:r((()=>[p("登录")])),_:1}),u(c,{plain:"",type:"primary",class:"loginsty",onClick:H},{default:r((()=>[p("注册")])),_:1})])])}}},[["__scopeId","data-v-62cade74"]]);export{C as default};
