import{S as U,i as W,s as X,j as Y,m as Z,o as $,x,u as ee,v as te,e as h,t as I,k as D,c as g,a as p,g as T,d,n as L,b as r,f as ae,L as o,E as F,h as A,Q as se}from"./vendor-dfb9df3e.js";import{T as le}from"./TransitionInView-b5bbebe8.js";function ne(l){let e,t,a=l[1].title+"",f,u,v,_=l[1].organization+"",k,E,i,b=l[1].date.slice(0,4)+"",j,V,Q,c,w,z=l[1].organization+"",M,y,m,H=l[1].date.slice(0,4)+"",P,S,q,B,G;return{c(){e=h("a"),t=h("h2"),f=I(a),u=D(),v=h("p"),k=I(_),E=D(),i=h("time"),j=I(b),Q=D(),c=h("div"),w=h("p"),M=I(z),y=D(),m=h("time"),P=I(H),this.h()},l(n){e=g(n,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var s=p(e);t=g(s,"H2",{class:!0});var J=p(t);f=T(J,a),J.forEach(d),u=L(s),v=g(s,"P",{class:!0});var K=p(v);k=T(K,_),K.forEach(d),E=L(s),i=g(s,"TIME",{datetime:!0,class:!0});var N=p(i);j=T(N,b),N.forEach(d),Q=L(s),c=g(s,"DIV",{class:!0});var C=p(c);w=g(C,"P",{class:!0});var O=p(w);M=T(O,z),O.forEach(d),y=L(C),m=g(C,"TIME",{datetime:!0,class:!0});var R=p(m);P=T(R,H),R.forEach(d),C.forEach(d),s.forEach(d),this.h()},h(){r(t,"class","title svelte-10v4fkf"),r(v,"class","organization hidden-mobile svelte-10v4fkf"),r(i,"datetime",V=l[1].date),r(i,"class","hidden-mobile svelte-10v4fkf"),r(w,"class","organization svelte-10v4fkf"),r(m,"datetime",S=l[1].date),r(m,"class","svelte-10v4fkf"),r(c,"class","flex-mobile svelte-10v4fkf"),r(e,"class",q="container no-underline "+(l[0]&&!l[3]?"inactive":l[3]?"active":"")+" svelte-10v4fkf"),r(e,"sveltekit:prefetch",""),r(e,"href",l[2])},m(n,s){ae(n,e,s),o(e,t),o(t,f),o(e,u),o(e,v),o(v,k),o(e,E),o(e,i),o(i,j),o(e,Q),o(e,c),o(c,w),o(w,M),o(c,y),o(c,m),o(m,P),B||(G=[F(e,"mouseover",l[4]),F(e,"focus",l[5]),F(e,"mouseleave",l[6])],B=!0)},p(n,s){s&2&&a!==(a=n[1].title+"")&&A(f,a),s&2&&_!==(_=n[1].organization+"")&&A(k,_),s&2&&b!==(b=n[1].date.slice(0,4)+"")&&A(j,b),s&2&&V!==(V=n[1].date)&&r(i,"datetime",V),s&2&&z!==(z=n[1].organization+"")&&A(M,z),s&2&&H!==(H=n[1].date.slice(0,4)+"")&&A(P,H),s&2&&S!==(S=n[1].date)&&r(m,"datetime",S),s&9&&q!==(q="container no-underline "+(n[0]&&!n[3]?"inactive":n[3]?"active":"")+" svelte-10v4fkf")&&r(e,"class",q),s&4&&r(e,"href",n[2])},d(n){n&&d(e),B=!1,se(G)}}}function ie(l){let e,t;return e=new le({props:{$$slots:{default:[ne]},$$scope:{ctx:l}}}),{c(){Y(e.$$.fragment)},l(a){Z(e.$$.fragment,a)},m(a,f){$(e,a,f),t=!0},p(a,[f]){const u={};f&143&&(u.$$scope={dirty:f,ctx:a}),e.$set(u)},i(a){t||(x(e.$$.fragment,a),t=!0)},o(a){ee(e.$$.fragment,a),t=!1},d(a){te(e,a)}}}function re(l,e,t){let{award:a}=e,{slug:f}=e,{anyHovered:u=!1}=e,v=!1;const _=()=>{t(3,v=!0),t(0,u=!0)},k=()=>{t(3,v=!0),t(0,u=!0)},E=()=>{t(3,v=!1),t(0,u=!1)};return l.$$set=i=>{"award"in i&&t(1,a=i.award),"slug"in i&&t(2,f=i.slug),"anyHovered"in i&&t(0,u=i.anyHovered)},[u,a,f,v,_,k,E]}class ue extends U{constructor(e){super();W(this,e,re,ie,X,{award:1,slug:2,anyHovered:0})}}export{ue as A};
