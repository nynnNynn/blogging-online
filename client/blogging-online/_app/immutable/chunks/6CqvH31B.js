var Fn=Array.isArray,Zt=Array.prototype.indexOf,bn=Array.from,qn=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,zt=Object.getOwnPropertyDescriptors,Mn=Object.prototype,Ln=Array.prototype,Wt=Object.getPrototypeOf;const Yn=()=>{};function jn(t){return t()}function Xt(t){for(var n=0;n<t.length;n++)t[n]()}const g=2,wt=4,J=8,ot=16,D=32,H=64,G=128,w=256,K=512,v=1024,S=2048,q=4096,b=8192,Q=16384,Jt=32768,gt=65536,Hn=1<<17,Qt=1<<19,mt=1<<20,pt=Symbol("$state"),Un=Symbol("legacy props");function Tt(t){return t===this.v}function tn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!tn(t,this.v)}function nn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function rn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function en(t){throw new Error("https://svelte.dev/e/effect_orphan")}function ln(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Bn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Vn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Gn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Kn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function $n(){tt=!0}const Zn=1,zn=2,Wn=16,Xn=1,Jn=2,Qn=4,tr=8,nr=16,rr=1,er=2,un="[",on="[!",fn="]",xt={},lr=Symbol();function Rt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let f=null;function ht(t){f=t}function sr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},tt&&!n&&(f.l={s:null,u:null,r1:[],r2:ft(!1)})}function ar(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=o,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];z(s.effect),Z(s.reaction),Pt(s.fn)}}finally{z(r),Z(e)}}f=n.p,n.m=!0}return{}}function nt(){return!tt||f!==null&&f.l===null}function ft(t,n){var r={f:0,v:t,reactions:null,equals:Tt,rv:0,wv:0};return r}function ur(t){return _n(ft(t))}function or(t,n=!1){var e;const r=ft(t);return n||(r.equals=At),tt&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function _n(t){return u!==null&&!T&&u.f&g&&(A===null?xn([t]):A.push(t)),t}function fr(t,n){return u!==null&&!T&&nt()&&u.f&(g|ot)&&(A===null||!A.includes(t))&&an(),cn(t,n)}function cn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Ut(),Dt(t,S),nt()&&o!==null&&o.f&v&&!(o.f&(D|H))&&(R===null?Rn([t]):R.push(t))),n}function Dt(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),l=r.length,s=0;s<l;s++){var a=r[s],i=a.f;i&S||!e&&a===o||(x(a,n),i&(v|w)&&(i&g?Dt(a,q):et(a)))}}let O=!1;function ir(t){O=t}let m;function L(t){if(t===null)throw Rt(),xt;return m=t}function _r(){return L(C(m))}function cr(t){if(O){if(C(m)!==null)throw Rt(),xt;m=t}}function vr(t=1){if(O){for(var n=t,r=m;n--;)r=C(r);m=r}}function pr(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===fn){if(t===0)return n;t-=1}else(r===un||r===on)&&(t+=1)}var e=C(n);n.remove(),n=e}}var dt,vn,kt,St;function hr(){if(dt===void 0){dt=window,vn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;kt=vt(n,"firstChild").get,St=vt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function lt(t=""){return document.createTextNode(t)}function st(t){return kt.call(t)}function C(t){return St.call(t)}function dr(t,n){if(!O)return st(t);var r=st(m);if(r===null)r=m.appendChild(lt());else if(n&&r.nodeType!==3){var e=lt();return r==null||r.before(e),L(e),e}return L(r),r}function Er(t,n){if(!O){var r=st(t);return r instanceof Comment&&r.data===""?C(r):r}return m}function yr(t,n=1,r=!1){let e=O?m:t;for(var l;n--;)l=e,e=C(e);if(!O)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=lt();return e===null?l==null||l.after(a):e.before(a),L(a),a}return L(e),e}function wr(t){t.textContent=""}function It(t){var n=g|S,r=u!==null&&u.f&g?u:null;return o===null||r!==null&&r.f&w?n|=w:o.f|=mt,{ctx:f,deps:null,effects:null,equals:Tt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function gr(t){const n=It(t);return n.equals=At,n}function Ot(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)N(n[r])}}function pn(t){for(var n=t.parent;n!==null;){if(!(n.f&g))return n;n=n.parent}return null}function hn(t){var n,r=o;z(pn(t));try{Ot(t),n=Vt(t)}finally{z(r)}return n}function Nt(t){var n=hn(t),r=(k||t.f&w)&&t.deps!==null?q:v;x(t,r),t.equals(n)||(t.v=n,t.wv=Ut())}function Ct(t){o===null&&u===null&&en(),u!==null&&u.f&w&&o===null&&rn(),it&&nn()}function dn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function M(t,n,r,e=!0){var l=(t&H)!==0,s=o,a={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var i=P;try{Et(!0),_t(a),a.f|=Jt}catch(p){throw N(a),p}finally{Et(i)}}else n!==null&&et(a);var y=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(mt|G))===0;if(!y&&!l&&e&&(s!==null&&dn(a,s),u!==null&&u.f&g)){var _=u;(_.effects??(_.effects=[])).push(a)}return a}function mr(t){const n=M(J,null,!1);return x(n,v),n.teardown=t,n}function Tr(t){Ct();var n=o!==null&&(o.f&D)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Pt(t);return e}}function Ar(t){return Ct(),En(t)}function xr(t){const n=M(H,t,!0);return(r={})=>new Promise(e=>{r.outro?gn(n,()=>{N(n),e(void 0)}):(N(n),e(void 0))})}function Pt(t){return M(wt,t,!1)}function En(t){return M(J,t,!0)}function Rr(t,n=[],r=It){const e=n.map(r);return yn(()=>t(...e.map(Cn)))}function yn(t,n=0){return M(J|ot|n,t,!0)}function Dr(t,n=!0){return M(J|D,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=it,e=u;yt(!0),Z(null);try{n.call(null)}finally{yt(r),Z(e)}}}function bt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;N(r,n),r=e}}function wn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&D||N(n),n=r}}function N(t,n=!0){var r=!1;if((n||t.f&Qt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:C(e);e.remove(),e=s}r=!0}bt(t,n&&!r),X(t,0),x(t,Q);var a=t.transitions;if(a!==null)for(const y of a)y.stop();Ft(t);var i=t.parent;i!==null&&i.first!==null&&qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function qt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function gn(t,n){var r=[];Mt(t,r,!0),mn(r,()=>{N(t),n&&n()})}function mn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Mt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&gt)!==0||(e.f&D)!==0;Mt(e,n,s?r:!1),e=l}}}function kr(t){Lt(t,!0)}function Lt(t,n){if(t.f&b){t.f^=b,t.f&v||(t.f^=v),U(t)&&(x(t,S),et(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&gt)!==0||(r.f&D)!==0;Lt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let $=!1,at=[];function Yt(){$=!1;const t=at.slice();at=[],Xt(t)}function Sr(t){$||($=!0,queueMicrotask(Yt)),at.push(t)}function Tn(){$&&Yt()}const jt=0,An=1;let B=!1,V=jt,Y=!1,j=null,P=!1,it=!1;function Et(t){P=t}function yt(t){it=t}let I=[],F=0;let u=null,T=!1;function Z(t){u=t}let o=null;function z(t){o=t}let A=null;function xn(t){A=t}let c=null,E=0,R=null;function Rn(t){R=t}let Ht=1,W=0,k=!1;function Ut(){return++Ht}function U(t){var h;var n=t.f;if(n&S)return!0;if(n&q){var r=t.deps,e=(n&w)!==0;if(r!==null){var l,s,a=(n&K)!==0,i=e&&o!==null&&!k,y=r.length;if(a||i){var _=t,p=_.parent;for(l=0;l<y;l++)s=r[l],(a||!((h=s==null?void 0:s.reactions)!=null&&h.includes(_)))&&(s.reactions??(s.reactions=[])).push(_);a&&(_.f^=K),i&&p!==null&&!(p.f&w)&&(_.f^=w)}for(l=0;l<y;l++)if(s=r[l],U(s)&&Nt(s),s.wv>t.wv)return!0}(!e||o!==null&&!k)&&x(t,v)}return!1}function Dn(t,n){for(var r=n;r!==null;){if(r.f&G)try{r.fn(t);return}catch{r.f^=G}r=r.parent}throw B=!1,t}function kn(t){return(t.f&Q)===0&&(t.parent===null||(t.parent.f&G)===0)}function rt(t,n,r,e){if(B){if(r===null&&(B=!1),kn(n))throw t;return}r!==null&&(B=!0);{Dn(t,n);return}}function Bt(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&g?Bt(s,n,!1):n===s&&(r?x(s,S):s.f&v&&x(s,q),et(s))}}function Vt(t){var ct;var n=c,r=E,e=R,l=u,s=k,a=A,i=f,y=T,_=t.f;c=null,E=0,R=null,u=_&(D|H)?null:t,k=(_&w)!==0&&(!P||l===null||y),A=null,ht(t.ctx),T=!1,W++;try{var p=(0,t.fn)(),h=t.deps;if(c!==null){var d;if(X(t,E),h!==null&&E>0)for(h.length=E+c.length,d=0;d<c.length;d++)h[E+d]=c[d];else t.deps=h=c;if(!k)for(d=E;d<h.length;d++)((ct=h[d]).reactions??(ct.reactions=[])).push(t)}else h!==null&&E<h.length&&(X(t,E),h.length=E);if(nt()&&R!==null&&!T&&h!==null&&!(t.f&(g|q|S)))for(d=0;d<R.length;d++)Bt(R[d],t);return l!==null&&W++,p}finally{c=n,E=r,R=e,u=l,k=s,A=a,ht(i),T=y}}function Sn(t,n){let r=n.reactions;if(r!==null){var e=Zt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&g&&(c===null||!c.includes(n))&&(x(n,q),n.f&(w|K)||(n.f^=K),Ot(n),X(n,0))}function X(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Sn(t,r[e])}function _t(t){var n=t.f;if(!(n&Q)){x(t,v);var r=o,e=f;o=t;try{n&ot?wn(t):bt(t),Ft(t);var l=Vt(t);t.teardown=typeof l=="function"?l:null,t.wv=Ht;var s=t.deps,a}catch(i){rt(i,t,r,e||t.ctx)}finally{o=r}}}function Gt(){if(F>1e3){F=0;try{ln()}catch(t){if(j!==null)rt(t,j,null);else throw t}}F++}function Kt(t){var n=t.length;if(n!==0){Gt();var r=P;P=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&v||(l.f^=v);var s=Nn(l);In(s)}}finally{P=r}}}function In(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(Q|b)))try{U(e)&&(_t(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qt(e):e.fn=null))}catch(l){rt(l,e,null,e.ctx)}}}function On(){if(Y=!1,F>1001)return;const t=I;I=[],Kt(t),Y||(F=0,j=null)}function et(t){V===jt&&(Y||(Y=!0,queueMicrotask(On))),j=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(H|D)){if(!(r&v))return;n.f^=v}}I.push(n)}function Nn(t){var n=[],r=t.first;t:for(;r!==null;){var e=r.f,l=(e&D)!==0,s=l&&(e&v)!==0,a=r.next;if(!s&&!(e&b)){if(e&wt)n.push(r);else if(l)r.f^=v;else{var i=u;try{u=r,U(r)&&_t(r)}catch(p){rt(p,r,null,r.ctx)}finally{u=i}}var y=r.first;if(y!==null){r=y;continue}}if(a===null){let p=r.parent;for(;p!==null;){if(t===p)break t;var _=p.next;if(_!==null){r=_;continue t}p=p.parent}}r=a}return n}function $t(t){var n=V,r=I;try{Gt();const l=[];V=An,I=l,Y=!1,Kt(r);var e=t==null?void 0:t();return Tn(),(I.length>0||l.length>0)&&$t(),F=0,j=null,e}finally{V=n,I=r}}async function Ir(){await Promise.resolve(),$t()}function Cn(t){var n=t.f,r=(n&g)!==0;if(u!==null&&!T){A!==null&&A.includes(t)&&sn();var e=u.deps;t.rv<W&&(t.rv=W,c===null&&e!==null&&e[E]===t?E++:c===null?c=[t]:(!k||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,s=l.parent;s!==null&&!(s.f&w)&&(l.f^=w)}return r&&(l=t,U(l)&&Nt(l)),t.v}function Or(t){var n=T;try{return T=!0,t()}finally{T=n}}const Pn=-7169;function x(t,n){t.f=t.f&Pn|n}function Nr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&pt in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=Wt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=zt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{bn as $,It as A,$n as B,tn as C,sr as D,gt as E,Rr as F,ar as G,on as H,dr as I,cr as J,yr as K,Z as L,z as M,u as N,o as O,Fn as P,Sr as Q,hr as R,st as S,un as T,lr as U,C as V,xt as W,fn as X,Rt as Y,Bn as Z,wr as _,Dr as a,xr as a0,lt as a1,vn as a2,rr as a3,er as a4,gr as a5,b as a6,cn as a7,ft as a8,zn as a9,Ir as aA,Mt as aa,mn as ab,Zn as ac,Wn as ad,Wt as ae,zt as af,vr as ag,pt as ah,Mn as ai,Ln as aj,Kn as ak,vt as al,Gn as am,Pt as an,En as ao,Vn as ap,Hn as aq,Qn as ar,At as as,tr as at,Un as au,Jn as av,Xn as aw,nr as ax,$t as ay,ur as az,yn as b,m as c,N as d,f as e,Er as f,Or as g,O as h,_r as i,ir as j,kr as k,tt as l,qn as m,Yn as n,or as o,gn as p,Cn as q,pr as r,L as s,mr as t,Tr as u,fr as v,Ar as w,Xt as x,jn as y,Nr as z};
