import{i as e}from"./line-CzZ6jyAH.js";import{T as t}from"./index-D_fT48cH.js";import{_ as s,i as a,u as l,r as n,c as i,a as d,b as o,w as p,F as r,d as y,e as u,o as c,t as f,f as g,g as m,p as x,h as _}from"./index-CfxxE0OO.js";import{n as v}from"./index-DoZ6u9uq.js";/* empty css                                                              */const b=e=>(x("data-v-98b3395a"),e=e(),_(),e),h={class:"Address"},j={style:{padding:"0 16px"}},k={style:{height:"46px"}},z={class:"roll"},w={key:0},F={class:"inviteonebox"},$=b((()=>d("img",{src:"/assets/add-BL77WWu9.png",style:{width:"100%"},alt:""},null,-1))),E=b((()=>d("span",{style:{"font-size":"16px",color:"#263141"}},"暂无收货地址",-1))),C={key:1,style:{"margin-top":"10px"}},q=b((()=>d("span",{style:{"font-weight":"bold","font-size":"14px",color:"#263141"}},"收货人姓名",-1))),A={style:{"font-size":"14px",color:"#263141"}},S=["onClick"],W=b((()=>d("img",{src:e,alt:""},null,-1))),B=b((()=>d("span",{style:{"font-weight":"bold","font-size":"12px",color:"#3E69FF"}},"默认",-1))),I={style:{"font-size":"12px",color:"#7E8794"}},J={style:{"font-size":"12px",color:"#7E8794"}},L={class:"butlogin"},N=s({__name:"index",setup(e){const s=a("reload"),x=l(),_=n("my"),b=(e,t)=>{let a=JSON.stringify(t);1==e?x.push({name:"edit",query:{id:e}}):(x.push({name:"modifyedit",query:{id:e,datas:a}}),s())},N=n([]);return v().then((e=>{N.value=e.data.map((e=>({...e,add:`${e.province}${e.city}${e.district}${e.street}${e.detailAddress}`})))})),(e,s)=>{const a=u("van-col"),l=u("van-row"),n=u("van-button");return c(),i("div",h,[d("div",j,[d("div",k,[o(t,{title:"管理地址",gorouter:_.value},null,8,["gorouter"])]),d("div",z,[N.value.length?(c(),i("div",C,[(c(!0),i(r,null,y(N.value,((e,t)=>(c(),i("div",{class:"addboxsty",key:t},[o(l,{gutter:[0,14]},{default:p((()=>[o(a,{span:"8",style:{display:"flex","align-items":"center","justify-content":"center"}},{default:p((()=>[q])),_:1}),o(a,{span:"12",style:{display:"flex","align-items":"center","justify-content":"center"}},{default:p((()=>[d("span",A,f(e.name),1)])),_:2},1024),o(a,{span:"4",style:{display:"flex","align-items":"center","justify-content":"center"}},{default:p((()=>[d("span",{style:{"font-size":"14px",color:"#3E69FF"},onClick:t=>b(2,e)},"编辑",8,S)])),_:2},1024),o(a,{span:"24",style:{display:"flex","align-items":"center"}},{default:p((()=>[W])),_:1})])),_:2},1024),d("div",null,[e.defaultStatus?(c(),g(l,{key:0,gutter:[0,14],style:{"margin-top":"10px"}},{default:p((()=>[o(a,{span:"3",style:{display:"flex","align-items":"center"}},{default:p((()=>[B])),_:1}),o(a,{span:"21",style:{display:"flex","align-items":"center"}},{default:p((()=>[d("span",I,f(e.add),1)])),_:2},1024)])),_:2},1024)):(c(),g(l,{key:1,gutter:[0,14],style:{"margin-top":"10px"}},{default:p((()=>[o(a,{span:"24",style:{display:"flex","align-items":"center"}},{default:p((()=>[d("span",J,f(e.add),1)])),_:2},1024)])),_:2},1024))])])))),128))])):(c(),i("div",w,[d("div",F,[o(l,{gutter:[0,14],style:{"margin-top":"90px"}},{default:p((()=>[o(a,{span:"24",style:{display:"flex","align-items":"center"}},{default:p((()=>[$])),_:1})])),_:1})]),o(l,{gutter:[0,14],style:{"margin-top":"26px"}},{default:p((()=>[o(a,{span:"24",style:{display:"flex","align-items":"center","justify-content":"center"}},{default:p((()=>[E])),_:1})])),_:1})]))])]),d("div",L,[o(n,{type:"primary",class:"loginsty loginco",style:{"margin-bottom":"25px"},onClick:s[0]||(s[0]=e=>b(1))},{default:p((()=>[m("+ 新增地址")])),_:1})])])}}},[["__scopeId","data-v-98b3395a"]]);export{N as default};