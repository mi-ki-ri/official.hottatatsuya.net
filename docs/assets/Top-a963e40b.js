import{a as _}from"./microcms-js-sdk-aa1ffaf4.js";import{u as m,r as b,o as g,a as n,c,b as r,F as d,d as s,e as u,t as i}from"./index-3c4badfe.js";const x={class:"card w-80 h-64 m-3 flex flex-col justify-center items-center bg-base-100 shadow-xl"},k={class:"card-body flex flex-col justify-center items-stretch"},v=["onClick"],y=["href"],D={class:"text-right"},j=["href"],A={__name:"Top",setup(B){const l=m(),a=b([]);g(()=>{console.log(l.params.id);let o={limit:20};l.params.id!==void 0&&(o={limit:20,filters:"section[contains]"+l.params.id}),_({serviceDomain:"official-hotta-tatsuya",apiKey:"3c5dvMoOuQjZ8ob2jxrfgcy2BEPC04tFUsDE"}).get({endpoint:"article",queries:o}).then(t=>{console.log(t);for(const e of t.contents){if(!e.publish)continue;const p=e.content.split(`
`)[0].replace("# ","");a.value.push({id:e.id,title:p,content:e.content,publishedAt:e.publishedAt,section:e.section})}}).catch(t=>console.error(t))});const f=o=>{console.log(o),location.replace(`/article/${o}`)};return(o,h)=>(n(!0),c(d,null,r(a.value,t=>(n(),c("article",x,[s("div",k,[s("h2",{class:"card-title link link-hover",onClick:e=>f(t.id)},[u(i(t.title)+" ",1),s("small",null,i(new Date(t.publishedAt).toLocaleDateString()),1)],8,v),s("div",null,[u(i(t.content.substr(0,70))+" ",1),s("a",{class:"link",href:"/article/"+t.id},"全文表示",8,y)]),s("footer",D,[(n(!0),c(d,null,r(t.section,e=>(n(),c("a",{href:"/filter/"+e},i(e),9,j))),256))])])]))),256))}};export{A as default};
