<<<<<<< HEAD:backend/public/assets/index.24bea82e.js
import{j as y,u as N,a as b,r as m,R as g,B as S,S as I,b as _,c as R}from"./vendor.8337d4c8.js";const j=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))u(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}};j();const e=y.exports.jsx,n=y.exports.jsxs;function O(){return e("div",{className:"modal",id:"menualmodal",tabIndex:-1,children:e("div",{className:"modal-dialog",children:n("div",{className:"modal-content",children:[n("div",{className:"modal-header",children:[e("h4",{className:"modal-title align-middle px-10",children:"\u{1F5C4} 42cabi \uC774\uC6A9 \uC548\uB0B4\uC11C"}),e("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e("div",{className:"menual-body",id:"menual-body",children:n("ul",{children:[n("li",{className:"py-1",children:["1\uC778 \uB2F9 1\uAC1C\uC758 \uC0AC\uBB3C\uD568\uC744 \uB300\uC5EC\uD560 \uC218 \uC788\uACE0,",e("br",{}),"\uB300\uC5EC\uAE30\uAC04 \uB3D9\uC548 \uC790\uC720\uB86D\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",e("br",{})]}),n("li",{className:"py-1",children:["\uB300\uC5EC\uAE30\uAC04\uC740 \uB300\uC5EC\uD55C \uB0A0\uB85C \uBD80\uD130 +30\uC77C \uC785\uB2C8\uB2E4.",e("br",{})]}),n("li",{className:"py-1",children:["\uBC18\uB0A9 \uC2DC \uB450\uACE0\uAC00\uB294 \uC18C\uC9C0\uD488\uC774 \uC5C6\uB294 \uC9C0 \uD655\uC778\uD574\uC8FC\uC138\uC694!",e("br",{})]}),n("li",{className:"py-1",children:["\uB300\uC5EC\uD558\uC2E0 \uC0AC\uBB3C\uD568\uC758 \uBE44\uBC00\uBC88\uD638\uB294 \uC800\uC7A5\uD558\uC9C0",e("br",{}),"\uC54A\uC73C\uB2C8 \uB530\uB85C \uAE30\uB85D\uD574\uC8FC\uC138\uC694.",e("br",{})]}),n("li",{className:"py-1",children:["\uC0AC\uBB3C\uD568\uC5D0 \uC0C1\uD560 \uC218 \uC788\uB294 \uC74C\uC2DD\uBB3C\uC774\uB098 \uC0AC\uBB3C\uD568\uC774 ",e("br",{}),"\uC624\uC5FC \uB420 \uC218 \uC788\uB294 \uBB3C\uD488 \uBCF4\uAD00\uC740 \uC790\uC81C\uD574\uC8FC\uC138\uC694.",e("br",{})]}),n("li",{className:"py-1",children:["\uB300\uC5EC\uD55C \uC0AC\uBB3C\uD568\uC774 \uC7A0\uACA8 \uC788\uAC70\uB098 \uBE44\uBC00\uBC88\uD638\uB97C ",e("br",{}),"\uBD84\uC2E4\uD558\uC168\uB2E4\uBA74 \uD504\uB860\uD2B8\uC758 Staff \uD639\uC740 42cabi \uC2AC\uB799 \uCC44\uB110\uB85C \uBB38\uC758\uD574\uC8FC\uC138\uC694.",e("br",{})]})]})}),e("div",{className:"modal-footer",children:e("button",{type:"button",className:"btn btn-primary",id:"btn-primary","data-bs-dismiss":"modal",children:"Ok! \uC54C\uC558\uC5B4\uC694!"})})]})})})}function x(t){const c=N(),s="/auth/logout",u=()=>{b.post(s).then(l=>{c.push("/")}).catch(l=>console.log(l))},a=()=>t.url==="/return"?"\uB0B4 \uC0AC\uBB3C\uD568":"\uC804\uCCB4 \uC0AC\uBB3C\uD568";return n("div",{className:"dropdown text-right",id:"menu",children:[e("button",{className:"btn",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:e("i",{className:"h2 bi bi-list"})}),n("div",{className:"dropdown-menu start-50",id:(()=>t.url==="/lent"?"dropdownMenuReturn":"dropdownMenuLent")(),"aria-labelledby":"dropdownMenuButton",children:[e("a",{className:"dropdown-item",href:t.url,children:a()}),e("a",{className:"dropdown-item","data-bs-toggle":"modal","data-bs-target":"#menualmodal",children:"\uC774\uC6A9\uC548\uB0B4"}),e("a",{className:"dropdown-item",href:"https://42born2code.slack.com/archives/C02V6GE8LD7",target:"_blank",children:"\uC2AC\uB799\uBB38\uC758"}),e("a",{className:"dropdown-item",onClick:u,children:"\uB85C\uADF8\uC544\uC6C3"})]}),e(O,{})]})}function P(t){const c=t.intra_id!==""?"":"modal",s=t.isLent===-1?"#lentmodal":"#contentsmodal",u=`border justify-content-center${t.intra_id!==""?" lentCabinet":""}`;return n("div",{className:u,"data-bs-toggle":c,"data-bs-target":s,onClick:()=>{t.setTarget(t.cabinet_id),t.setCabiNum(t.cabinet_num)},children:[e("div",{id:"cabinet_num",children:t.cabinet_num}),e("div",{id:"intra_id",children:t.intra_id})]})}function T(t){const c=(a,o)=>{let l=[];if(!t.info||!t.info.cabinet)return[];const i=t.info.cabinet[t.l_idx][a][o];for(let h=0;h<i.length;h++){var B=t.outer_lent.findIndex(f=>f.lent_cabinet_id===i[h].cabinet_id);l.push(e(P,{className:"d-block w-100",setTarget:t.setTarget,setCabiNum:t.setCabiNum,cabinet_id:i[h].cabinet_id,cabinet_num:i[h].cabinet_num,intra_id:B!==-1?t.outer_lent[B].intra_id:"",isLent:t.isLent},`cab_box_${i[h].cabinet_id}`))}return l},s=a=>{let o=[];if(!t.info||!t.info.section||t.info.section[t.l_idx].length<=a)return[];for(let l=0;l<t.info.section[t.l_idx][a].length;l++)o.length===0?o.push(e("button",{className:"indicator active",type:"button","data-bs-target":`#carousel_${t.l_idx}_${t.floor_name}`,"data-bs-slide-to":`${l}`,"aria-current":"true","aria-label":`Slide ${l+1}`})):o.push(e("button",{className:"indicator",type:"button","data-bs-target":`#carousel_${t.l_idx}_${t.floor_name}`,"data-bs-slide-to":`${l}`,"aria-current":"true","aria-label":`Slide ${l+1}`}));return o},u=a=>{let o=[];if(!t.info||!t.info.section||t.info.section[t.l_idx].length<=a)return[];for(let l=0;l<t.info.section[t.l_idx][a].length;l++)o.push(n("div",{className:`carousel-item carousel-item${l?"":" active"}`,children:[e("div",{className:"m-3 sectionName",children:t.info.section[t.l_idx][a][l]},`label_${t.info.section[t.l_idx][a][l]}`),e("div",{id:"cabinetGrid",children:c(a,l)})]},`carousel-item_${t.info.section[t.l_idx][a][l]}`));return o};return e("div",{className:`tab-pane${t.outer_i?"":" active"}`,id:`nav-${t.floor_name}`,role:"tabpanel","aria-labelledby":`nav-${t.floor_name}-tab`,children:n("div",{id:`carousel_${t.l_idx}_${t.floor_name}`,className:"carousel slide","data-bs-touch":"true","data-bs-ride":"carousel","data-bs-interval":"false",children:[e("div",{className:"carousel-indicators",children:s(t.outer_i)}),e("div",{className:"carousel-inner",children:u(t.outer_i)},`nav-inner${t.floor_name}`),n("button",{className:"carousel-control-prev",type:"button","data-bs-target":`#carousel_${t.l_idx}_${t.floor_name}`,"data-bs-slide":"prev",children:[e("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),e("span",{className:"visually-hidden",children:"Previous"})]}),n("button",{className:"carousel-control-next",type:"button","data-bs-target":`#carousel_${t.l_idx}_${t.floor_name}`,"data-bs-slide":"next",children:[e("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),e("span",{className:"visually-hidden",children:"Next"})]})]})},`nav-${t.floor_name}`)}function G(t){let c=t.info.location;const s=u=>{t.setLidx(u)};return n("div",{className:"dropdown",id:"location",children:[n("button",{className:"btn",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[e("i",{className:"bi bi-caret-down-fill"}),c?c[t.l_idx]:""]}),e("div",{className:"dropdown-menu",id:"locationMenu","aria-labelledby":"dropdownMenuButton",children:c==null?void 0:c.map((u,a)=>e("a",{className:"dropdown-item",onClick:()=>s(a),children:u}))})]})}function H(t){const c=N(),s=()=>{const u="/api/lent";b.post(u,{cabinet_id:t.target}).then(a=>{if(a.data.cabinet_id&&a.data.cabinet_id===-2){alert("\uC774\uBBF8 \uB300\uC5EC\uC911\uC778 \uC0AC\uBB3C\uD568\uC785\uB2C8\uB2E4!");return}a.status===200&&c.push("/return")}).catch(a=>{console.log(a)})};return e("div",{className:"modal",id:"lentmodal",tabIndex:-1,children:e("div",{className:"modal-dialog modal-dialog-centered",children:n("div",{className:"modal-content",children:[n("div",{className:"modal-header",children:[e("h5",{className:"modal-title"}),e("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e("div",{className:"modal-body",children:n("p",{children:[" \uC120\uD0DD\uD558\uC2E0 [ ",t.cabiNum," ] \uBC88 \uC0AC\uBB3C\uD568\uC744 ",e("br",{}),"\uB300\uC5EC\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"]})}),n("div",{className:"modal-footer justify-content-center",children:[e("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"\uCDE8\uC18C"}),e("button",{type:"button",className:"btn btn-primary",id:"btn-primary","data-bs-dismiss":"modal",onClick:s,children:"\uB300\uC5EC"})]})]})})})}function D(t){const c=N(),s=()=>{t.path&&t.path!==""&&c.push(t.path)};return e("div",{className:"modal",id:"contentsmodal",tabIndex:-1,children:e("div",{className:"modal-dialog modal-dialog-centered",children:n("div",{className:"modal-content",children:[n("div",{className:"modal-header",children:[e("h5",{className:"modal-title"}),e("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e("div",{className:"modal-body",children:n("p",{children:[" ",t.contents]})}),e("div",{className:"modal-footer justify-content-center",children:e("button",{type:"button",className:"btn btn-primary",id:"btn-primary","data-bs-dismiss":"modal",onClick:s,children:"\uD655\uC778"})})]})})})}function U(){const t=N(),[c,s]=m.exports.useState(),[u,a]=m.exports.useState(0),[o,l]=m.exports.useState(0),[i,B]=m.exports.useState(-1),[h,f]=m.exports.useState(-1),[d,E]=m.exports.useState({}),[w,p]=m.exports.useState([]);m.exports.useEffect(()=>{k(),d.location||L(),$()},[u,d]);const k=async()=>{const C="/api/check";await b.post(C).then(r=>{s(r.data.user)}).catch(r=>{console.log(r),t.push("/")})},$=()=>{const C="/api/lent_info";b.post(C).then(r=>{p(r.data.lentInfo),l(r.data.isLent)}).catch(r=>{console.log(r)})},L=()=>{const C="/api/cabinet";b.post(C).then(r=>{E(r.data)}).catch(r=>{console.log(r)})},M=()=>{let C=[];return!d||!d.floor||d.floor.length<=u||d.floor[u].forEach((r,v)=>{C.push(n("button",{className:`nav-link border border-bottom-0 px-4${v?"":" active"}`,id:"nav-tab","data-bs-toggle":"tab","data-bs-target":`#nav-${r}`,type:"button",role:"tab","aria-controls":`nav-${r}`,"aria-selected":v?"false":"true",children:[r,"F"]},`nav-${r}-tab`))}),C},F=()=>{let C=[];return!d||!d.floor||d.floor.length<=u||d.floor[u].forEach((r,v)=>{C.push(e(T,{setTarget:B,setCabiNum:f,info:d,l_idx:u,outer_i:v,outer_lent:w,floor_name:r,isLent:o}))}),C};return n("div",{className:"container col",id:"container",children:[n("div",{className:"row align-items-center",children:[e("div",{className:"col-6",children:e(G,{info:d,l_idx:u,setLidx:a})}),e("div",{className:"col",children:e(x,{url:"/return"})})]}),n("div",{className:"row my-2 mx-2",children:[e("nav",{children:e("div",{className:"nav nav-tabs border-bottom-0",id:"nav-tabs",role:"tablist",children:e(g.Fragment,{children:M()})})}),e("div",{className:"tab-content",id:"nav-tabContent",children:e(g.Fragment,{children:F()})})]}),e(H,{target:i,cabiNum:h}),e(D,{contents:"\uC774\uBBF8 \uB300\uC5EC\uC911\uC778 \uC0AC\uBB3C\uD568\uC774 \uC788\uC5B4\uC694 :)"})]})}function A(){return n("div",{className:"container",children:[e("div",{className:"row p-5",id:"logo",children:e("img",{src:"../img/logo.png",alt:"logo"})}),e("div",{className:"row d-grid gap-2 col-6 mx-auto",children:e("a",{className:"btn btn-lg",id:"loginBtn",href:"/auth/login",children:"L O G I N"})})]})}function q(t){return e("div",{className:"modal",id:"returnmodal",tabIndex:-1,children:e("div",{className:"modal-dialog modal-dialog-centered",children:n("div",{className:"modal-content",children:[n("div",{className:"modal-header",children:[e("h5",{className:"modal-title",children:"\uC774\uC6A9 \uC911\uC778 \uC0AC\uBB3C\uD568\uC744 \uBC18\uB0A9\uD569\uB2C8\uB2E4."}),e("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e("div",{className:"modal-body",children:e("p",{children:"\uC0AC\uBB3C\uD568\uC744 \uBC18\uB0A9\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"})}),n("div",{className:"modal-footer",children:[e("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"\uCDE8\uC18C"}),e("button",{type:"button",className:"btn btn-primary",id:"btn-primary","data-bs-toggle":"modal","data-bs-target":"#contentsmodal","data-bs-dismiss":"modal",onClick:async()=>{const s="/api/return";await b.post(s,{lent_id:t.lentCabinet.lent_id}).then(u=>{u.status===200&&(t.setContent("\uBC18\uB0A9\uB418\uC5C8\uC2B5\uB2C8\uB2E4"),t.setPath("/lent"))}).catch(u=>{console.log(u),t.setContent("\uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694!"),t.setPath("")})},children:"\uBC18\uB0A9"})]})]})})})}function K(){const t=N(),[c,s]=m.exports.useState(),[u,a]=m.exports.useState(""),[o,l]=m.exports.useState(""),[i,B]=m.exports.useState();m.exports.useEffect(()=>{h().then(()=>{f()})},[o,u]);const h=async()=>{await b.post("/api/check").then(d=>{s(d.data.user)}).catch(d=>{console.log(d),t.push("/")})},f=async()=>{await b.post("/api/return_info",{user:c==null?void 0:c.user_id}).then(d=>{d.status===200&&B(d.data)}).catch(d=>{console.log(d)})};return n("div",{className:"container",id:"container",children:[e("div",{className:"row-2",children:e(x,{url:"/lent"})}),e("div",{className:"card row-2 p-5 m-5",children:e("div",{className:"card-body my-5",id:"card-body",children:e(g.Fragment,{children:(i==null?void 0:i.lent_id)===-1?e("div",{className:"card-subtitle mb-2 text-muted text-center",children:"\uD604\uC7AC \uB300\uC5EC\uC911\uC778 \uC0AC\uBB3C\uD568\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."}):n("div",{children:[n("div",{className:"card-title text-center display-5",children:[i==null?void 0:i.location," ",i==null?void 0:i.floor,"F ",i==null?void 0:i.cabinet_num]}),n("div",{className:"card-subtitle mb-2 text-muted text-center",children:["~ ",i==null?void 0:i.expire_time]})]})})})}),n("div",{children:[e("div",{className:"row-2 d-grid gap-2 col-6 mx-auto m-5",children:e("div",{className:`btn btn-lg ${(i==null?void 0:i.lent_id)===-1?"hidden":""}`,id:"colorBtn","data-bs-toggle":"modal","data-bs-target":"#returnmodal",children:"\uBC18\uB0A9\uD558\uAE30"})}),e("div",{className:"row-2 d-grid gap-2 col-6 mx-auto m-5",children:e("div",{className:`btn btn-lg ${(i==null?void 0:i.lent_id)===-1?"hidden":"disabled"}`,id:"colorBtn",children:"\uC5F0\uC7A5\uD558\uAE30"})})]}),e(q,{lentCabinet:i,setContent:l,setPath:a}),e(D,{contents:o,path:u})]})}function V(){return e("footer",{children:e("div",{className:"wholeContainer",children:n("div",{className:"textContainer",children:[e("a",{className:"textLink",target:"_blank",href:"https://github.com/innovationacademy-kr/42cabi/issues/new?assignees=&labels=&template=bug_report.md&title=",children:" Report\xA0| "}),e("a",{className:"textLink",target:"_blank",href:"https://github.com/innovationacademy-kr/42cabi",children:" \xA0Github\xA0 "}),e("a",{className:"textLink",target:"_blank",href:"https://www.notion.so/hyunja/42cabi-5fc66d1a6b0a4c48862b2e66e7cf1397",children:" |\xA0Notion"}),e("div",{className:"textCopy",children:"\xA9 2022 42Cabi "})]})})})}function z(){return e(S,{children:n("div",{className:"App",children:[n(I,{children:[e(_,{exact:!0,path:"/",component:A}),e(_,{path:"/lent",component:U}),e(_,{path:"/return",component:K}),e(_,{component:A})]}),e(V,{})]})})}R.render(e(g.StrictMode,{children:e(z,{})}),document.getElementById("root"));
=======
import{j as y,u as N,a as b,r as m,R as g,B as S,S as I,b as _,c as R}from"./vendor.4838de36.js";const j=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))u(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}};j();const e=y.exports.jsx,n=y.exports.jsxs;function O(){return e("div",{className:"modal",id:"menualmodal",tabIndex:-1,children:e("div",{className:"modal-dialog",children:n("div",{className:"modal-content",children:[n("div",{className:"modal-header",children:[e("h4",{className:"modal-title align-middle px-10",children:"\u{1F5C4} 42cabi \uC774\uC6A9 \uC548\uB0B4\uC11C"}),e("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e("div",{className:"menual-body",id:"menual-body",children:n("ul",{children:[n("li",{className:"py-1",children:["1\uC778 \uB2F9 1\uAC1C\uC758 \uC0AC\uBB3C\uD568\uC744 \uB300\uC5EC\uD560 \uC218 \uC788\uACE0,",e("br",{}),"\uB300\uC5EC\uAE30\uAC04 \uB3D9\uC548 \uC790\uC720\uB86D\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",e("br",{})]}),n("li",{className:"py-1",children:["\uB300\uC5EC\uAE30\uAC04\uC740 \uB300\uC5EC\uD55C \uB0A0\uB85C \uBD80\uD130 +30\uC77C \uC785\uB2C8\uB2E4.",e("br",{})]}),n("li",{className:"py-1",children:["\uBC18\uB0A9 \uC2DC \uB450\uACE0\uAC00\uB294 \uC18C\uC9C0\uD488\uC774 \uC5C6\uB294 \uC9C0 \uD655\uC778\uD574\uC8FC\uC138\uC694!",e("br",{})]}),n("li",{className:"py-1",children:["\uB300\uC5EC\uD558\uC2E0 \uC0AC\uBB3C\uD568\uC758 \uBE44\uBC00\uBC88\uD638\uB294 \uC800\uC7A5\uD558\uC9C0",e("br",{}),"\uC54A\uC73C\uB2C8 \uB530\uB85C \uAE30\uB85D\uD574\uC8FC\uC138\uC694.",e("br",{})]}),n("li",{className:"py-1",children:["\uC0AC\uBB3C\uD568\uC5D0 \uC0C1\uD560 \uC218 \uC788\uB294 \uC74C\uC2DD\uBB3C\uC774\uB098 \uC0AC\uBB3C\uD568\uC774 ",e("br",{}),"\uC624\uC5FC \uB420 \uC218 \uC788\uB294 \uBB3C\uD488 \uBCF4\uAD00\uC740 \uC790\uC81C\uD574\uC8FC\uC138\uC694.",e("br",{})]}),n("li",{className:"py-1",children:["\uB300\uC5EC\uD55C \uC0AC\uBB3C\uD568\uC774 \uC7A0\uACA8 \uC788\uAC70\uB098 \uBE44\uBC00\uBC88\uD638\uB97C ",e("br",{}),"\uBD84\uC2E4\uD558\uC168\uB2E4\uBA74 \uD504\uB860\uD2B8\uC758 Staff \uD639\uC740 42cabi \uC2AC\uB799 \uCC44\uB110\uB85C \uBB38\uC758\uD574\uC8FC\uC138\uC694.",e("br",{})]})]})}),e("div",{className:"modal-footer",children:e("button",{type:"button",className:"btn btn-primary",id:"btn-primary","data-bs-dismiss":"modal",children:"Ok! \uC54C\uC558\uC5B4\uC694!"})})]})})})}function x(t){const c=N(),s="/auth/logout",u=()=>{b.post(s).then(l=>{c.push("/")}).catch(l=>console.log(l))},a=()=>t.url==="/return"?"\uB0B4 \uC0AC\uBB3C\uD568":"\uC804\uCCB4 \uC0AC\uBB3C\uD568";return n("div",{className:"dropdown text-right",id:"menu",children:[e("button",{className:"btn",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:e("i",{className:"h2 bi bi-list"})}),n("div",{className:"dropdown-menu start-50",id:(()=>t.url==="/lent"?"dropdownMenuReturn":"dropdownMenuLent")(),"aria-labelledby":"dropdownMenuButton",children:[e("a",{className:"dropdown-item",href:t.url,children:a()}),e("a",{className:"dropdown-item","data-bs-toggle":"modal","data-bs-target":"#menualmodal",children:"\uC774\uC6A9\uC548\uB0B4"}),e("a",{className:"dropdown-item",href:"https://42born2code.slack.com/archives/C02V6GE8LD7",target:"_blank",children:"\uC2AC\uB799\uBB38\uC758"}),e("a",{className:"dropdown-item",onClick:u,children:"\uB85C\uADF8\uC544\uC6C3"})]}),e(O,{})]})}function P(t){const c=t.intra_id!==""?"":"modal",s=t.isLent===-1?"#lentmodal":"#contentsmodal",u=`border justify-content-center${t.intra_id!==""?" lentCabinet":""}`;return n("div",{className:u,"data-bs-toggle":c,"data-bs-target":s,onClick:()=>{t.setTarget(t.cabinet_id),t.setCabiNum(t.cabinet_num)},children:[e("div",{id:"cabinet_num",children:t.cabinet_num}),e("div",{id:"intra_id",children:t.intra_id})]})}function T(t){const c=(a,o)=>{let l=[];if(!t.info||!t.info.cabinet)return[];const i=t.info.cabinet[t.l_idx][a][o];for(let h=0;h<i.length;h++){var B=t.outer_lent.findIndex(f=>f.lent_cabinet_id===i[h].cabinet_id);l.push(e(P,{className:"d-block w-100",setTarget:t.setTarget,setCabiNum:t.setCabiNum,cabinet_id:i[h].cabinet_id,cabinet_num:i[h].cabinet_num,intra_id:B!==-1?t.outer_lent[B].intra_id:"",isLent:t.isLent},`cab_box_${i[h].cabinet_id}`))}return l},s=a=>{let o=[];if(!t.info||!t.info.section||t.info.section[t.l_idx].length<=a)return[];for(let l=0;l<t.info.section[t.l_idx][a].length;l++)o.length===0?o.push(e("button",{className:"indicator active",type:"button","data-bs-target":`#carousel_${t.l_idx}_${t.floor_name}`,"data-bs-slide-to":`${l}`,"aria-current":"true","aria-label":`Slide ${l+1}`})):o.push(e("button",{className:"indicator",type:"button","data-bs-target":`#carousel_${t.l_idx}_${t.floor_name}`,"data-bs-slide-to":`${l}`,"aria-current":"true","aria-label":`Slide ${l+1}`}));return o},u=a=>{let o=[];if(!t.info||!t.info.section||t.info.section[t.l_idx].length<=a)return[];for(let l=0;l<t.info.section[t.l_idx][a].length;l++)o.push(n("div",{className:`carousel-item carousel-item${l?"":" active"}`,children:[e("div",{className:"m-3 sectionName",children:t.info.section[t.l_idx][a][l]},`label_${t.info.section[t.l_idx][a][l]}`),e("div",{id:"cabinetGrid",children:c(a,l)})]},`carousel-item_${t.info.section[t.l_idx][a][l]}`));return o};return e("div",{className:`tab-pane${t.outer_i?"":" active"}`,id:`nav-${t.floor_name}`,role:"tabpanel","aria-labelledby":`nav-${t.floor_name}-tab`,children:n("div",{id:`carousel_${t.l_idx}_${t.floor_name}`,className:"carousel slide","data-bs-touch":"true","data-bs-ride":"carousel","data-bs-interval":"false",children:[e("div",{className:"carousel-indicators",children:s(t.outer_i)}),e("div",{className:"carousel-inner",children:u(t.outer_i)},`nav-inner${t.floor_name}`),n("button",{className:"carousel-control-prev",type:"button","data-bs-target":`#carousel_${t.l_idx}_${t.floor_name}`,"data-bs-slide":"prev",children:[e("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),e("span",{className:"visually-hidden",children:"Previous"})]}),n("button",{className:"carousel-control-next",type:"button","data-bs-target":`#carousel_${t.l_idx}_${t.floor_name}`,"data-bs-slide":"next",children:[e("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),e("span",{className:"visually-hidden",children:"Next"})]})]})},`nav-${t.floor_name}`)}function G(t){let c=t.info.location;const s=u=>{t.setLidx(u)};return n("div",{className:"dropdown",id:"location",children:[n("button",{className:"btn",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[e("i",{className:"bi bi-caret-down-fill"}),c?c[t.l_idx]:""]}),e("div",{className:"dropdown-menu",id:"locationMenu","aria-labelledby":"dropdownMenuButton",children:c==null?void 0:c.map((u,a)=>e("a",{className:"dropdown-item",onClick:()=>s(a),children:u}))})]})}function H(t){const c=N(),s=()=>{const u="/api/lent";b.post(u,{cabinet_id:t.target}).then(a=>{if(a.data.cabinet_id&&a.data.cabinet_id===-2){alert("\uC774\uBBF8 \uB300\uC5EC\uC911\uC778 \uC0AC\uBB3C\uD568\uC785\uB2C8\uB2E4!");return}a.status===200&&c.push("/return")}).catch(a=>{console.log(a)})};return e("div",{className:"modal",id:"lentmodal",tabIndex:-1,children:e("div",{className:"modal-dialog modal-dialog-centered",children:n("div",{className:"modal-content",children:[n("div",{className:"modal-header",children:[e("h5",{className:"modal-title"}),e("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e("div",{className:"modal-body",children:n("p",{children:[" \uC120\uD0DD\uD558\uC2E0 [ ",t.cabiNum," ] \uBC88 \uC0AC\uBB3C\uD568\uC744 ",e("br",{}),"\uB300\uC5EC\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"]})}),n("div",{className:"modal-footer justify-content-center",children:[e("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"\uCDE8\uC18C"}),e("button",{type:"button",className:"btn btn-primary",id:"btn-primary","data-bs-dismiss":"modal",onClick:s,children:"\uB300\uC5EC"})]})]})})})}function D(t){const c=N(),s=()=>{t.path&&t.path!==""&&c.push(t.path)};return e("div",{className:"modal",id:"contentsmodal",tabIndex:-1,children:e("div",{className:"modal-dialog modal-dialog-centered",children:n("div",{className:"modal-content",children:[n("div",{className:"modal-header",children:[e("h5",{className:"modal-title"}),e("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e("div",{className:"modal-body",children:n("p",{children:[" ",t.contents]})}),e("div",{className:"modal-footer justify-content-center",children:e("button",{type:"button",className:"btn btn-primary",id:"btn-primary","data-bs-dismiss":"modal",onClick:s,children:"\uD655\uC778"})})]})})})}function U(){const t=N(),[c,s]=m.exports.useState(),[u,a]=m.exports.useState(0),[o,l]=m.exports.useState(0),[i,B]=m.exports.useState(-1),[h,f]=m.exports.useState(-1),[d,E]=m.exports.useState({}),[w,p]=m.exports.useState([]);m.exports.useEffect(()=>{k(),d.location||L(),$()},[u,d]);const k=async()=>{const C="/api/check";await b.post(C).then(r=>{s(r.data.user)}).catch(r=>{console.log(r),t.push("/")})},$=()=>{const C="/api/lent_info";b.post(C).then(r=>{p(r.data.lentInfo),l(r.data.isLent)}).catch(r=>{console.log(r)})},L=()=>{const C="/api/cabinet";b.post(C).then(r=>{E(r.data)}).catch(r=>{console.log(r)})},M=()=>{let C=[];return!d||!d.floor||d.floor.length<=u||d.floor[u].forEach((r,v)=>{C.push(n("button",{className:`nav-link border border-bottom-0 px-4${v?"":" active"}`,id:"nav-tab","data-bs-toggle":"tab","data-bs-target":`#nav-${r}`,type:"button",role:"tab","aria-controls":`nav-${r}`,"aria-selected":v?"false":"true",children:[r,"F"]},`nav-${r}-tab`))}),C},F=()=>{let C=[];return!d||!d.floor||d.floor.length<=u||d.floor[u].forEach((r,v)=>{C.push(e(T,{setTarget:B,setCabiNum:f,info:d,l_idx:u,outer_i:v,outer_lent:w,floor_name:r,isLent:o}))}),C};return n("div",{className:"container col",id:"container",children:[n("div",{className:"row align-items-center",children:[e("div",{className:"col-6",children:e(G,{info:d,l_idx:u,setLidx:a})}),e("div",{className:"col",children:e(x,{url:"/return"})})]}),n("div",{className:"row my-2 mx-2",children:[e("nav",{children:e("div",{className:"nav nav-tabs border-bottom-0",id:"nav-tabs",role:"tablist",children:e(g.Fragment,{children:M()})})}),e("div",{className:"tab-content",id:"nav-tabContent",children:e(g.Fragment,{children:F()})})]}),e(H,{target:i,cabiNum:h}),e(D,{contents:"\uC774\uBBF8 \uB300\uC5EC\uC911\uC778 \uC0AC\uBB3C\uD568\uC774 \uC788\uC5B4\uC694 :)"})]})}function A(){return n("div",{className:"container",children:[e("div",{className:"row p-5",id:"logo",children:e("img",{src:"../img/logo.png",alt:"logo"})}),e("div",{className:"row d-grid gap-2 col-6 mx-auto",children:e("a",{className:"btn btn-lg",id:"loginBtn",href:"/auth/login",children:"L O G I N"})})]})}function q(t){return e("div",{className:"modal",id:"returnmodal",tabIndex:-1,children:e("div",{className:"modal-dialog modal-dialog-centered",children:n("div",{className:"modal-content",children:[n("div",{className:"modal-header",children:[e("h5",{className:"modal-title",children:"\uC774\uC6A9 \uC911\uC778 \uC0AC\uBB3C\uD568\uC744 \uBC18\uB0A9\uD569\uB2C8\uB2E4."}),e("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e("div",{className:"modal-body",children:e("p",{children:"\uC0AC\uBB3C\uD568\uC744 \uBC18\uB0A9\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"})}),n("div",{className:"modal-footer",children:[e("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"\uCDE8\uC18C"}),e("button",{type:"button",className:"btn btn-primary",id:"btn-primary","data-bs-toggle":"modal","data-bs-target":"#contentsmodal","data-bs-dismiss":"modal",onClick:async()=>{const s="/api/return";await b.post(s,{lent_id:t.lentCabinet.lent_id}).then(u=>{u.status===200&&(t.setContent("\uBC18\uB0A9\uB418\uC5C8\uC2B5\uB2C8\uB2E4"),t.setPath("/lent"))}).catch(u=>{console.log(u),t.setContent("\uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694!"),t.setPath("")})},children:"\uBC18\uB0A9"})]})]})})})}function K(){const t=N(),[c,s]=m.exports.useState(),[u,a]=m.exports.useState(""),[o,l]=m.exports.useState(""),[i,B]=m.exports.useState();m.exports.useEffect(()=>{h().then(()=>{f()})},[o,u]);const h=async()=>{await b.post("/api/check").then(d=>{s(d.data.user)}).catch(d=>{console.log(d),t.push("/")})},f=async()=>{await b.post("/api/return_info",{user:c==null?void 0:c.user_id}).then(d=>{d.status===200&&B(d.data)}).catch(d=>{console.log(d)})};return n("div",{className:"container",id:"container",children:[e("div",{className:"row-2",children:e(x,{url:"/lent"})}),e("div",{className:"card row-2 p-5 m-5",children:e("div",{className:"card-body my-5",id:"card-body",children:e(g.Fragment,{children:(i==null?void 0:i.lent_id)===-1?e("div",{className:"card-subtitle mb-2 text-muted text-center",children:"\uD604\uC7AC \uB300\uC5EC\uC911\uC778 \uC0AC\uBB3C\uD568\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."}):n("div",{children:[n("div",{className:"card-title text-center display-5",children:[i==null?void 0:i.location," ",i==null?void 0:i.floor,"F ",i==null?void 0:i.cabinet_num]}),n("div",{className:"card-subtitle mb-2 text-muted text-center",children:["~ ",i==null?void 0:i.expire_time]})]})})})}),n("div",{children:[e("div",{className:"row-2 d-grid gap-2 col-6 mx-auto m-5",children:e("div",{className:`btn btn-lg ${(i==null?void 0:i.lent_id)===-1?"hidden":""}`,id:"colorBtn","data-bs-toggle":"modal","data-bs-target":"#returnmodal",children:"\uBC18\uB0A9\uD558\uAE30"})}),e("div",{className:"row-2 d-grid gap-2 col-6 mx-auto m-5",children:e("div",{className:`btn btn-lg ${(i==null?void 0:i.lent_id)===-1?"hidden":"disabled"}`,id:"colorBtn",children:"\uC5F0\uC7A5\uD558\uAE30"})})]}),e(q,{lentCabinet:i,setContent:l,setPath:a}),e(D,{contents:o,path:u})]})}function V(){return e("footer",{children:e("div",{className:"wholeContainer",children:n("div",{className:"textContainer",children:[e("a",{className:"textLink",target:"_blank",href:"https://github.com/innovationacademy-kr/42cabi/issues/new?assignees=&labels=&template=bug_report.md&title=",children:" Report\xA0| "}),e("a",{className:"textLink",target:"_blank",href:"https://github.com/innovationacademy-kr/42cabi",children:" \xA0Github\xA0 "}),e("a",{className:"textLink",target:"_blank",href:"https://www.notion.so/hyunja/42cabi-5fc66d1a6b0a4c48862b2e66e7cf1397",children:" |\xA0Notion"}),e("div",{className:"textCopy",children:"\xA9 2022 42Cabi "})]})})})}function z(){return e(S,{children:n("div",{className:"App",children:[n(I,{children:[e(_,{exact:!0,path:"/",component:A}),e(_,{path:"/lent",component:U}),e(_,{path:"/return",component:K}),e(_,{component:A})]}),e(V,{})]})})}R.render(e(g.StrictMode,{children:e(z,{})}),document.getElementById("root"));
>>>>>>> 07a8bdadccedef4afab8422228474b7a4aeb5efc:backend/public/assets/index.5f988990.js
