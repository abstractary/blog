import{S as ce,i as de,s as he,N as ie,j as U,m as Z,o as G,E as K,x as j,u as A,v as $,H as me,A as je,al as oe,J as Pe,e as P,c as Y,a as X,d as H,b as T,f as x,t as J,g as Q,L as v,h as ee,k as F,n as L,aa as M,am as Ye,F as Xe,r as ne,w as ae,ab as fe,Q as Ce,_ as ue,Y as _e,I as We,$ as ge,W as Ae,an as Ne,Z as ze}from"../../chunks/vendor-dfb9df3e.js";import{b as pe}from"../../chunks/utils-419e8671.js";import{S as Oe}from"../../chunks/Star-6bfb9ffc.js";import{a as Re}from"../../chunks/global-164a8ca5.js";import{T as Fe}from"../../chunks/TransitionInView-b5bbebe8.js";import{T as Le,B as Me}from"../../chunks/BackTo-f09ad798.js";import{s as ve}from"../../chunks/store-b0ba4c19.js";const{setTimeout:be}=Pe;function we(e,s,t){const l=e.slice();return l[35]=s[t],l}function ke(e){let s,t,l;return t=new Oe({props:{width:"20",height:"20",fill:"var(--accent-color)",stroke:"none",hovered:e[10],index:e[3]}}),{c(){s=P("div"),U(t.$$.fragment),this.h()},l(r){s=Y(r,"DIV",{class:!0});var i=X(s);Z(t.$$.fragment,i),i.forEach(H),this.h()},h(){T(s,"class","featured-star svelte-1pm8o92")},m(r,i){x(r,s,i),G(t,s,null),l=!0},p(r,i){const o={};i[0]&1024&&(o.hovered=r[10]),i[0]&8&&(o.index=r[3]),t.$set(o)},i(r){l||(j(t.$$.fragment,r),l=!0)},o(r){A(t.$$.fragment,r),l=!1},d(r){r&&H(s),$(t)}}}function He(e){let s,t=e[35]+"",l;return{c(){s=P("span"),l=J(t),this.h()},l(r){s=Y(r,"SPAN",{class:!0});var i=X(s);l=Q(i,t),i.forEach(H),this.h()},h(){T(s,"class","post-tag svelte-1pm8o92")},m(r,i){x(r,s,i),v(s,l)},p(r,i){i[0]&2&&t!==(t=r[35]+"")&&ee(l,t)},d(r){r&&H(s)}}}function qe(e){let s,t,l,r,i,o,h,f,a=pe(e[1].date)+"",S,m,n,d=e[1].title+"",V,C,N,R=e[1].description+"",B,p,W,g,u,c,b,I,_=e[1].featured&&ke(e),z=e[1].tags,D=[];for(let y=0;y<z.length;y+=1)D[y]=He(we(e,z,y));return{c(){s=P("a"),t=P("div"),_&&_.c(),l=F(),r=P("div"),i=F(),o=P("div"),h=P("div"),f=P("h2"),S=J(a),m=F(),n=P("h1"),V=J(d),C=F(),N=P("h2"),B=J(R),p=F(),W=P("div");for(let y=0;y<D.length;y+=1)D[y].c();this.h()},l(y){s=Y(y,"A",{class:!0,style:!0,href:!0,"sveltekit:prefetch":!0});var E=X(s);t=Y(E,"DIV",{style:!0,class:!0});var w=X(t);_&&_.l(w),l=L(w),r=Y(w,"DIV",{class:!0,style:!0}),X(r).forEach(H),i=L(w),o=Y(w,"DIV",{class:!0});var O=X(o);h=Y(O,"DIV",{class:!0});var q=X(h);f=Y(q,"H2",{class:!0});var te=X(f);S=Q(te,a),te.forEach(H),m=L(q),n=Y(q,"H1",{class:!0});var se=X(n);V=Q(se,d),se.forEach(H),C=L(q),N=Y(q,"H2",{class:!0});var le=X(N);B=Q(le,R),le.forEach(H),q.forEach(H),p=L(O),W=Y(O,"DIV",{class:!0});var re=X(W);for(let k=0;k<D.length;k+=1)D[k].l(re);re.forEach(H),O.forEach(H),w.forEach(H),E.forEach(H),this.h()},h(){T(r,"class","card-highlight svelte-1pm8o92"),M(r,"left",e[15]+"%"),M(r,"top",e[14]+"%"),T(f,"class","post-date svelte-1pm8o92"),T(n,"class","post-title svelte-1pm8o92"),T(N,"class","post-description svelte-1pm8o92"),T(h,"class","post-info"),T(W,"class","post-tags svelte-1pm8o92"),T(o,"class","post-card svelte-1pm8o92"),M(t,"transform","rotateY("+e[17]+"deg) rotateX("+e[16]+"deg) scale3d("+e[11]+", "+e[11]+", "+e[11]+")"),M(t,"box-shadow",e[13]+"px "+e[12]+"px 15px rgba(0, 0, 0, 0.1)"),T(t,"class",g="post-container no-underline "+(e[1].featured?"featured":"")+" "+(e[0]?e[10]?"hovered":"unhovered":"")+" svelte-1pm8o92"),T(s,"class","perspective-container no-underline svelte-1pm8o92"),M(s,"perspective",e[5]+"px"),T(s,"href",e[2]),T(s,"sveltekit:prefetch",""),ie(()=>e[32].call(s))},m(y,E){x(y,s,E),v(s,t),_&&_.m(t,null),v(t,l),v(t,r),v(t,i),v(t,o),v(o,h),v(h,f),v(f,S),v(h,m),v(h,n),v(n,V),v(h,C),v(h,N),v(N,B),v(o,p),v(o,W);for(let w=0;w<D.length;w+=1)D[w].m(W,null);e[31](s),u=Ye(s,e[32].bind(s)),c=!0,b||(I=[K(s,"mouseover",e[29]),K(s,"focus",e[30]),K(s,"mousemove",function(){Xe(e[9]?e[18]:null)&&(e[9]?e[18]:null).apply(this,arguments)}),K(s,"mouseleave",e[19])],b=!0)},p(y,E){if(e=y,e[1].featured?_?(_.p(e,E),E[0]&2&&j(_,1)):(_=ke(e),_.c(),j(_,1),_.m(t,l)):_&&(ne(),A(_,1,1,()=>{_=null}),ae()),(!c||E[0]&32768)&&M(r,"left",e[15]+"%"),(!c||E[0]&16384)&&M(r,"top",e[14]+"%"),(!c||E[0]&2)&&a!==(a=pe(e[1].date)+"")&&ee(S,a),(!c||E[0]&2)&&d!==(d=e[1].title+"")&&ee(V,d),(!c||E[0]&2)&&R!==(R=e[1].description+"")&&ee(B,R),E[0]&2){z=e[1].tags;let w;for(w=0;w<z.length;w+=1){const O=we(e,z,w);D[w]?D[w].p(O,E):(D[w]=He(O),D[w].c(),D[w].m(W,null))}for(;w<D.length;w+=1)D[w].d(1);D.length=z.length}(!c||E[0]&198656)&&M(t,"transform","rotateY("+e[17]+"deg) rotateX("+e[16]+"deg) scale3d("+e[11]+", "+e[11]+", "+e[11]+")"),(!c||E[0]&12288)&&M(t,"box-shadow",e[13]+"px "+e[12]+"px 15px rgba(0, 0, 0, 0.1)"),(!c||E[0]&1027&&g!==(g="post-container no-underline "+(e[1].featured?"featured":"")+" "+(e[0]?e[10]?"hovered":"unhovered":"")+" svelte-1pm8o92"))&&T(t,"class",g),(!c||E[0]&32)&&M(s,"perspective",e[5]+"px"),(!c||E[0]&4)&&T(s,"href",e[2])},i(y){c||(j(_),c=!0)},o(y){A(_),c=!1},d(y){y&&H(s),_&&_.d(),fe(D,y),e[31](null),u(),b=!1,Ce(I)}}}function Je(e){let s=!1,t=()=>{s=!1},l,r,i,o,h;return ie(e[28]),r=new Fe({props:{$$slots:{default:[qe]},$$scope:{ctx:e}}}),{c(){U(r.$$.fragment)},l(f){Z(r.$$.fragment,f)},m(f,a){G(r,f,a),i=!0,o||(h=K(window,"scroll",()=>{s=!0,clearTimeout(l),l=be(t,100),e[28]()}),o=!0)},p(f,a){a[0]&384&&!s&&(s=!0,clearTimeout(l),scrollTo(f[8],f[7]),l=be(t,100));const S={};a[0]&261759|a[1]&128&&(S.$$scope={dirty:a,ctx:f}),r.$set(S)},i(f){i||(j(r.$$.fragment,f),i=!0)},o(f){A(r.$$.fragment,f),i=!1},d(f){$(r,f),o=!1,h()}}}function Qe(e,s,t){let l,r,i,o,h,f,a,S,m,n,d,V,C;me(e,Re,k=>t(27,C=k));let{post:N}=s,{slug:R}=s,{anyHovered:B}=s,{index:p}=s,W,g,u,c,b,I,_,z=0,D=0,y=!1;je(()=>{setTimeout(()=>{l(W),t(9,y=!0)},1e3)});const E=function(k){t(20,I=k.clientX-c),t(21,_=k.pageY-b)},w=function(){t(20,I=null),t(21,_=null),t(0,B=!1),t(10,O=!1)};let O=!1;function q(){t(8,z=window.pageXOffset),t(7,D=window.pageYOffset)}const te=()=>{t(0,B=!0),t(10,O=!0)},se=()=>{t(0,B=!0),t(10,O=!0)};function le(k){ue[k?"unshift":"push"](()=>{W=k,t(4,W)})}function re(){g=this.offsetWidth,u=this.offsetHeight,t(5,g),t(6,u)}return e.$$set=k=>{"post"in k&&t(1,N=k.post),"slug"in k&&t(2,R=k.slug),"anyHovered"in k&&t(0,B=k.anyHovered),"index"in k&&t(3,p=k.index)},e.$$.update=()=>{e.$$.dirty[0]&128&&t(26,l=function(k){c=k?k.getBoundingClientRect().left:0,b=k?k.getBoundingClientRect().top+D:0}),e.$$.dirty[0]&201326608&&l(W),e.$$.dirty[0]&67109008&&l(W),e.$$.dirty[0]&32&&t(25,r=oe().domain([0,g]).range([-4,4])),e.$$.dirty[0]&64&&t(24,i=oe().domain([u,0]).range([-4,4])),e.$$.dirty[0]&34603008&&t(17,o=I?r(I):0),e.$$.dirty[0]&18874368&&t(16,h=_?i(_):0),e.$$.dirty[0]&32&&t(23,f=oe().domain([0,g]).range([-50,50])),e.$$.dirty[0]&64&&t(22,a=oe().domain([0,u]).range([-50,50])),e.$$.dirty[0]&9437184&&t(15,S=I?f(I):0),e.$$.dirty[0]&6291456&&t(14,m=_?a(_):0),e.$$.dirty[0]&9437184&&t(13,n=I?f(I)/5:0),e.$$.dirty[0]&6291456&&t(12,d=_?a(_)/5:0),e.$$.dirty[0]&3145728&&t(11,V=I&&_?1.02:1)},[B,N,R,p,W,g,u,D,z,y,O,V,d,n,m,S,h,o,E,w,I,_,a,f,i,r,l,C,q,te,se,le,re]}class ye extends ce{constructor(s){super();de(this,s,Qe,Je,he,{post:1,slug:2,anyHovered:0,index:3},null,[-1,-1])}}function Ee(e,s,t){const l=e.slice();return l[9]=s[t],l[11]=t,l}function Te(e,s,t){const l=e.slice();return l[9]=s[t],l[11]=t,l}function De(e){let s,t,l;function r(o){e[5](o)}let i={post:e[9].metadata,slug:e[9].path.replace(/\.[^/.]+$/,""),index:e[11]};return e[0]!==void 0&&(i.anyHovered=e[0]),s=new ye({props:i}),ue.push(()=>ge(s,"anyHovered",r)),{c(){U(s.$$.fragment)},l(o){Z(s.$$.fragment,o)},m(o,h){G(s,o,h),l=!0},p(o,h){const f={};!t&&h&1&&(t=!0,f.anyHovered=o[0],_e(()=>t=!1)),s.$set(f)},i(o){l||(j(s.$$.fragment,o),l=!0)},o(o){A(s.$$.fragment,o),l=!1},d(o){$(s,o)}}}function Ie(e){let s,t,l,r,i,o,h,f=e[3],a=[];for(let m=0;m<f.length;m+=1)a[m]=Se(Ee(e,f,m));const S=m=>A(a[m],1,1,()=>{a[m]=null});return{c(){s=P("div"),t=P("h1"),l=J("\u{1F62C} The archives \u{1F62C}"),r=F(),i=P("div");for(let m=0;m<a.length;m+=1)a[m].c();this.h()},l(m){s=Y(m,"DIV",{});var n=X(s);t=Y(n,"H1",{class:!0});var d=X(t);l=Q(d,"\u{1F62C} The archives \u{1F62C}"),d.forEach(H),r=L(n),i=Y(n,"DIV",{class:!0});var V=X(i);for(let C=0;C<a.length;C+=1)a[C].l(V);V.forEach(H),n.forEach(H),this.h()},h(){T(t,"class","archives-title svelte-l5v6ru"),T(i,"class","posts-grid svelte-l5v6ru")},m(m,n){x(m,s,n),v(s,t),v(t,l),v(s,r),v(s,i);for(let d=0;d<a.length;d+=1)a[d].m(i,null);h=!0},p(m,n){if(e=m,n&9){f=e[3];let d;for(d=0;d<f.length;d+=1){const V=Ee(e,f,d);a[d]?(a[d].p(V,n),j(a[d],1)):(a[d]=Se(V),a[d].c(),j(a[d],1),a[d].m(i,null))}for(ne(),d=f.length;d<a.length;d+=1)S(d);ae()}},i(m){if(!h){for(let n=0;n<f.length;n+=1)j(a[n]);m&&(o||ie(()=>{o=Ae(s,ze,{duration:300,easing:Ne}),o.start()})),h=!0}},o(m){a=a.filter(Boolean);for(let n=0;n<a.length;n+=1)A(a[n]);h=!1},d(m){m&&H(s),fe(a,m)}}}function Se(e){let s,t,l;function r(o){e[6](o)}let i={post:e[9].metadata,slug:e[9].path.replace(/\.[^/.]+$/,""),index:e[11]};return e[0]!==void 0&&(i.anyHovered=e[0]),s=new ye({props:i}),ue.push(()=>ge(s,"anyHovered",r)),{c(){U(s.$$.fragment)},l(o){Z(s.$$.fragment,o)},m(o,h){G(s,o,h),l=!0},p(o,h){const f={};!t&&h&1&&(t=!0,f.anyHovered=o[0],_e(()=>t=!1)),s.$set(f)},i(o){l||(j(s.$$.fragment,o),l=!0)},o(o){A(s.$$.fragment,o),l=!1},d(o){$(s,o)}}}function Ue(e){let s,t,l,r,i,o,h,f,a,S,m,n,d=(e[1]?"Hide the archives \u{1F44D}":"Show the archives \u{1F62C}")+"",V,C,N,R;s=new Le({}),r=new Me({props:{href:"/",text:"Home",classes:"page-overline transition-subtitle centered"}});let B=e[2],p=[];for(let u=0;u<B.length;u+=1)p[u]=De(Te(e,B,u));const W=u=>A(p[u],1,1,()=>{p[u]=null});let g=e[1]&&Ie(e);return{c(){U(s.$$.fragment),t=F(),l=P("main"),U(r.$$.fragment),i=F(),o=P("h1"),h=J("Writing"),f=F(),a=P("div");for(let u=0;u<p.length;u+=1)p[u].c();S=F(),g&&g.c(),m=F(),n=P("button"),V=J(d),this.h()},l(u){Z(s.$$.fragment,u),t=L(u),l=Y(u,"MAIN",{class:!0});var c=X(l);Z(r.$$.fragment,c),i=L(c),o=Y(c,"H1",{class:!0});var b=X(o);h=Q(b,"Writing"),b.forEach(H),f=L(c),a=Y(c,"DIV",{class:!0});var I=X(a);for(let z=0;z<p.length;z+=1)p[z].l(I);I.forEach(H),S=L(c),g&&g.l(c),m=L(c),n=Y(c,"BUTTON",{class:!0});var _=X(n);V=Q(_,d),_.forEach(H),c.forEach(H),this.h()},h(){T(o,"class","page-title transition-title overflow-hidden"),T(a,"class","transition-content posts-grid svelte-l5v6ru"),T(n,"class","button pulled-right block transition-content svelte-l5v6ru"),T(l,"class","svelte-l5v6ru")},m(u,c){G(s,u,c),x(u,t,c),x(u,l,c),G(r,l,null),v(l,i),v(l,o),v(o,h),v(l,f),v(l,a);for(let b=0;b<p.length;b+=1)p[b].m(a,null);v(l,S),g&&g.m(l,null),v(l,m),v(l,n),v(n,V),C=!0,N||(R=K(n,"click",e[7]),N=!0)},p(u,[c]){if(c&5){B=u[2];let b;for(b=0;b<B.length;b+=1){const I=Te(u,B,b);p[b]?(p[b].p(I,c),j(p[b],1)):(p[b]=De(I),p[b].c(),j(p[b],1),p[b].m(a,null))}for(ne(),b=B.length;b<p.length;b+=1)W(b);ae()}u[1]?g?(g.p(u,c),c&2&&j(g,1)):(g=Ie(u),g.c(),j(g,1),g.m(l,m)):g&&(ne(),A(g,1,1,()=>{g=null}),ae()),(!C||c&2)&&d!==(d=(u[1]?"Hide the archives \u{1F44D}":"Show the archives \u{1F62C}")+"")&&ee(V,d)},i(u){if(!C){j(s.$$.fragment,u),j(r.$$.fragment,u);for(let c=0;c<B.length;c+=1)j(p[c]);j(g),C=!0}},o(u){A(s.$$.fragment,u),A(r.$$.fragment,u),p=p.filter(Boolean);for(let c=0;c<p.length;c+=1)A(p[c]);A(g),C=!1},d(u){$(s,u),u&&H(t),u&&H(l),$(r),fe(p,u),g&&g.d(),N=!1,R()}}}async function lt({fetch:e}){return{props:{posts:await(await e("/posts.json")).json()}}}let Ve="Blog | Connor Rothschild",Be="Some of my writing.";function Ze(e,s,t){let l;me(e,ve,n=>t(8,l=n));let{posts:r}=s,i=r.filter(n=>!n.metadata.draft&&!n.metadata.archived).sort((n,d)=>{if(d.metadata.featured&&!n.metadata.featured)return 1;if(!d.metadata.featured&&n.metadata.featured)return-1;if(Date.parse(d.metadata.date)>Date.parse(n.metadata.date))return 1;if(Date.parse(d.metadata.date)<Date.parse(n.metadata.date))return-1}),o=r.filter(n=>n.metadata.archived==!0).sort((n,d)=>Date.parse(d.metadata.date)-Date.parse(n.metadata.date));We(ve,l={title:Ve,description:Be,image:`https://og-image-eight-eta.vercel.app/${Ve}.png?subtitle=${Be}&theme=light&md=true&hasImage=true`},l);let h=!1,f=!1;function a(n){h=n,t(0,h)}function S(n){h=n,t(0,h)}const m=()=>{t(1,f=!f)};return e.$$set=n=>{"posts"in n&&t(4,r=n.posts)},[h,f,i,o,r,a,S,m]}class rt extends ce{constructor(s){super();de(this,s,Ze,Ue,he,{posts:4})}}export{rt as default,lt as load};
