import{a as g}from"./microcms-js-sdk-aa1ffaf4.js";import{u as b,r as p,o as k,a as y,b as i,c as r,d as h,F as _,e as n,f as m,t as u}from"./index-dd7e9728.js";const D={class:"card w-80 h-64 m-3 flex flex-col justify-center items-center bg-base-100 shadow-xl"},j={class:"card-body flex flex-col justify-center items-stretch"},w=["onClick"],B=n("span",{class:"text-accent",style:{"text-shadow":"2px 2px rgb(0 0 0 / 0.1)"}},"♦",-1),C=["href"],A={class:"text-right"},E=["href"],M={__name:"Top",setup(F){const c=b(),d=p([]),s=p(""),f=e=>{console.log(e);let a={limit:999};e!==""&&e!==void 0&&(a={limit:999,filters:"section[contains]"+e}),console.log(a),g({serviceDomain:"official-hotta-tatsuya",apiKey:"3c5dvMoOuQjZ8ob2jxrfgcy2BEPC04tFUsDE"}).get({endpoint:"article",queries:a}).then(t=>{console.log(t);for(const l of t.contents){if(!l.publish)continue;const x=l.content.split(`
`)[0].replace("# ","");d.value.push({id:l.id,title:x,content:l.content,publishedAt:l.publishedAt,section:l.section})}}).catch(t=>console.error(t))};k(()=>{s.value!==c.params.id&&(s.value=c.params.id,d.value.splice(0),f(s.value))}),y(()=>{c.params.id===void 0?(s.value="",f(s.value)):(s.value=c.params.id,f(s.value))});const v=e=>{console.log(e),location.replace(`/#/article/${e}`)};return(e,a)=>(i(!0),r(_,null,h(d.value,o=>(i(),r("article",D,[n("div",j,[n("h2",{class:"card-title link link-hover",onClick:t=>v(o.id)},[B,m(" "+u(o.title)+" ",1),n("small",null,u(new Date(o.publishedAt).toLocaleDateString()),1)],8,w),n("div",null,[m(u(o.content.substr(0,70))+" ",1),n("a",{class:"link continued",href:"/#/article/"+o.id},"全文表示",8,C)]),n("footer",A,[(i(!0),r(_,null,h(o.section,t=>(i(),r("a",{href:"/#/filter/"+t},u(t),9,E))),256))])])]))),256))}};export{M as default};
