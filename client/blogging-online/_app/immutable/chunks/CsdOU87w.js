import{n as o,g as a,C as d}from"./6CqvH31B.js";function g(s,u,e){if(s==null)return u(void 0),o;const t=a(()=>s.subscribe(u,e));return t.unsubscribe?()=>t.unsubscribe():t}const i=[];function _(s,u=o){let e=null;const t=new Set;function c(r){if(d(s,r)&&(s=r,e)){const b=!i.length;for(const n of t)n[1](),i.push(n,s);if(b){for(let n=0;n<i.length;n+=2)i[n][0](i[n+1]);i.length=0}}}function f(r){c(r(s))}function l(r,b=o){const n=[r,b];return t.add(n),t.size===1&&(e=u(c,f)||o),r(s),()=>{t.delete(n),t.size===0&&e&&(e(),e=null)}}return{set:c,update:f,subscribe:l}}function h(s){let u;return g(s,e=>u=e)(),u}export{h as g,g as s,_ as w};
