import{_ as e}from"./logoB-BT7p4XHT.js";import{b as t,g as a,a as s}from"./index-DoZ6u9uq.js";import{u as l}from"./index-DTChSudc.js";import{_ as i,i as n,r as d,c as r,a as o,b as p,w as u,F as c,d as f,e as v,o as A,g,t as y,f as m,s as x,p as b,h}from"./index-CfxxE0OO.js";const B=e=>(b("data-v-e3613fcf"),e=e(),h(),e),k={class:"home"},w={class:"topbar"},j=B((()=>o("img",{src:e,alt:""},null,-1))),C=B((()=>o("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAA9VJREFUSEu1lW1oW1UYx//nvuXm7SZpYl9MalrM1s5tnWXWbiKr4BR8QTcoRbBgtQzHPvgCvnwSdB+kfhgKA1+maBFEXZHpFDrF2nZ1TqmYOkZxWyeb6da1aZImubnJfck9cosJWdpONtj5dnjO83ue85zn+R+Cm7TItbj39VFxCRBNEYKNAWOdVU2YTAGaFyiMDZLCWv6rgpv6qCiJkNwcuGsFzhowMgVkLqwSYAW480kqcT64rqdCRgryb5+RTKXPVeCWZ6g74ID7eqCls4sKsmc+JtnSvgy2ru8X4BMFXBWs+55seHOj1ksYtBaNIqcb5sXLSfLV4HjdZGUCBQ00oSFVKksZ0raX1lbX9M2nlH2SA69cWUjxqaUcWIbA63FD4FmaV83DH414Xp1Pi3opgFXzU++TBWu/DLayDbpQU5nBgb1Gv1PQ3xgZ+5OcnfkHPo8ATuCRTMrYdtcmhBvrkFdx+PUvAy9W+l2SkbSyXgbf2Ue9W1vUwJZwdoOhFxm/l3Nvb/d+ODIWFadOzcAustjT/wASMsHRI6NIp2Q89nAnAjV+GlswX5qd085rlNGOT3unLyfE9NQgWVoGtz9Nb3mhx2jpWI+JjGyAIYBhqhg6Mg5DN/D4rg40hwNYTOSRTGsY/u4ERIHDE907oWkUFBycDi4xEuUe/PR7xKKfkPgyuGMfrXfbwA706d+qarGdsCayORnHfjiBu7dtwLpIPYINTsA0ce5CBvG4jOOjf6B79w447Q7kFAZ2Oxs7+I3Q9dcc8pPvkitlsMCAeXSL0rCzQ/upYBBJVjT8OPormkJB1Ps9CDZ54KmVkMwUMXtxHicnoujetQM+yYFMujA3eY7rGfrF/bdmwiyDKzvi7T3KMVUrbi4UDERPT2M+nsYdkWZIdgENkSBSqSzGx3+HaOPRs/tecISBouiJ5w8526zbKwR69OB/pbAez+mCwzI890iuq96jHcipZi3LF9mJk6ehGwba1t+OultrMfbzJAqqjs6trdjYGqKZdG42vkjeGfja/YXln5OhlB/PEhu9qt2evT/R65PogN1OyfTZGJbSOfA8B5MC65pDuC3khwn+g5cP8fvXbDfLsNqA9Hct9HrdzGsCT1y8jQUoBSEAz7G6VmTf2/+5861K6IoBsYyRh6jN04ia6pHeHskFNoWUHruNbOQ4hpog589cYoeGp6TZ6pFOx5CcGSZqefJKB26KCFXCXRxc1ZmvpXiW+MgG5EplW5FxydkqiyMMz/8JvdVa2RlkStdfU4+rsyp9TYSA5+xgLbuRR5FS6Df0Nd2I0Ff7/AsAJ6smzyWAVwAAAABJRU5ErkJggg==",alt:""},null,-1))),F={style:{"font-weight":"300","font-size":"12px",color:"#A1ABB9"}},S={class:"shoplist"},G=["src"],W={style:{"text-decoration":"line-through","font-size":"12px",color:"#C3CAD4"}},O={class:"wrapper"},R={key:0,class:"block"},I=B((()=>o("div",{class:"dis",style:{"margin-top":"34px"}},[o("p",{class:"psty"},"确认购买吗？")],-1))),N=i({__name:"index",setup(e){const i=n("reload"),b=l(),h=d(!1),B=d(),N=d(!0),T=d({}),U=d(1),Y=d(0),M=d([]);t({userId:localStorage.getItem("tenant-id")}).then((e=>{200==e.code&&(T.value=e.data,N.value=0==e.data.level,b.getuserinfos(e.data),a({pageNo:U.value,pageSize:10,type:1}).then((e=>{200==e.code&&(M.value=e.data.list.map((e=>({...e,pricettwo:0==T.value.discountPercent?e.price:e.price*(T.value.discountPercent/100)}))),Y.value=e.data.total)})))}));const X=()=>{s({type:1,productId:B.value.id,price:B.value.price,discount:T.value.discountPercent}).then((e=>{200==e.code?(x("购买成功"),i()):x(e.msg)}))};return(e,t)=>{const a=v("van-col"),s=v("van-row"),l=v("van-nav-bar"),i=v("van-button"),n=v("van-overlay");return A(),r("div",k,[o("div",w,[p(l,{title:"",border:!1,placeholder:!0,"safe-area-inset-top":!0},{left:u((()=>[j])),right:u((()=>[p(s,{gutter:[0,5]},{default:u((()=>[p(a,{span:"24",style:{display:"flex","justify-content":"flex-end","align-items":"center","font-size":"16px"}},{default:u((()=>[C,g(),o("span",null,"当前等级：V"+y(T.value.level),1)])),_:1}),p(a,{span:"24",style:{display:"flex","justify-content":"flex-end"}},{default:u((()=>[o("span",F,"当前等级享受折扣"+y(T.value.discountPercent)+"%",1)])),_:1})])),_:1})])),_:1})]),o("div",S,[(A(!0),r(c,null,f(M.value,((e,t)=>(A(),m(s,{key:t,style:{"margin-bottom":"10px","border-radius":"10px"}},{default:u((()=>[p(a,{span:"4"},{default:u((()=>[o("img",{src:e.picUrl,style:{width:"45px",height:"45px","border-radius":"50%"},alt:""},null,8,G)])),_:2},1024),p(a,{span:"12"},{default:u((()=>[o("div",null,[o("p",null,y(e.name),1),o("p",W,y(e.price),1),o("p",null,"折后"+y(e.pricettwo.toFixed(4)),1)])])),_:2},1024),p(a,{span:"8"},{default:u((()=>[p(i,{type:"primary",class:"buybuttonsty",onClick:t=>{return a=e,B.value=a,void(h.value=!h.value);var a},disabled:N.value},{default:u((()=>[g("购买")])),_:2},1032,["onClick","disabled"])])),_:2},1024)])),_:2},1024)))),128))]),p(n,{show:h.value,onClick:t[0]||(t[0]=e=>h.value=!1)},{default:u((()=>[o("div",O,[(A(),r("div",R,[I,p(s,{style:{"margin-top":"45px"}},{default:u((()=>[p(a,{span:"12",style:{display:"flex","justify-content":"center","align-items":"center"}},{default:u((()=>[p(i,{plain:"",type:"primary",style:{width:"100px",height:"40px"}},{default:u((()=>[g("取消")])),_:1})])),_:1}),p(a,{span:"12",style:{display:"flex","justify-content":"center","align-items":"center"}},{default:u((()=>[p(i,{type:"primary",style:{width:"100px",height:"40px"},onClick:X},{default:u((()=>[g("确认")])),_:1})])),_:1})])),_:1})]))])])),_:1},8,["show"])])}}},[["__scopeId","data-v-e3613fcf"]]);export{N as default};
