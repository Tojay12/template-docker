import{r as l}from"./index.94d816e0.js";function g(t){const e=l(1),n=l(10),a=l(0);return{currentPage:e,pageSize:n,total:a,handleSizeChange:c=>{n.value=c,t()},handleCurrentChange:c=>{e.value=c,t()}}}const u=t=>{var e=new Date(t),n=e.getFullYear()+"/",a=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"/",r=(e.getDate()<10?"0"+e.getDate():e.getDate())+" ",o=(e.getHours()<10?"0"+e.getHours():e.getHours())+":",c=(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":",i=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return n+a+r+o+c+i},s=(t,e,n)=>{const a=new Blob([t],{type:n});window.URL=window.URL||window.webkitURL;const r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=e,o.click(),window.URL.revokeObjectURL(r)},w={excel:(t,e)=>{s(t,e,"application/vnd.ms-excel")},word:(t,e)=>{s(t,e,"application/msword")},zip:(t,e)=>{s(t,e,"application/zip")},html:(t,e)=>{s(t,e,"text/html")},markdown:(t,e)=>{s(t,e,"text/markdown")}};export{w as d,u as g,g as u};
