import{d as H,a9 as z,C as N,i as s,z as y,w as x,A as n,g as V,n as l,e as j,c as o,a6 as c,t as d,f as r,F as S,I as U,H as F,B as q,P as A,aw as w,am as D,bq as E,a8 as I}from"./Buuvh-f3.js";const L={slots:{root:"relative isolate",container:"flex flex-col lg:grid py-24 sm:py-32 lg:py-40 gap-16 sm:gap-y-24",wrapper:"",headline:"mb-4",title:"text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-[var(--ui-text-highlighted)]",description:"text-lg sm:text-xl/8 text-[var(--ui-text-muted)]",links:"mt-10 flex flex-wrap gap-x-6 gap-y-3"},variants:{orientation:{horizontal:{container:"lg:grid-cols-2 lg:items-center",description:"text-pretty"},vertical:{container:"",headline:"justify-center",wrapper:"text-center",description:"text-balance",links:"justify-center"}},reverse:{true:{wrapper:"order-last"}},headline:{true:{headline:"font-semibold text-[var(--ui-primary)] flex items-center gap-1.5"}},title:{true:{description:"mt-6"}}}},O={key:1,class:"hidden lg:block"},T=I;var b;const G=w({extend:w(L),...((b=T.uiPro)==null?void 0:b.pageHero)||{}}),J=H({__name:"PageHero",props:{as:{},headline:{},title:{},description:{},links:{},orientation:{default:"vertical"},reverse:{type:Boolean},class:{},ui:{}},setup(C){const t=C,a=z(),i=N(()=>G({orientation:t.orientation,reverse:t.reverse,title:!!t.title||!!a.title}));return(e,K)=>{var p;const _=D,B=E;return s(),y(q(A),{as:e.as,"data-orientation":e.orientation,class:l(i.value.root({class:[t.class,(p=t.ui)==null?void 0:p.root]}))},{default:x(()=>{var u;return[n(e.$slots,"top"),V(B,{class:l(i.value.container({class:(u=t.ui)==null?void 0:u.container}))},{default:x(()=>{var m,g,h,f,v,k;return[j("div",{class:l(i.value.wrapper({class:(m=t.ui)==null?void 0:m.wrapper}))},[e.headline||a.headline?(s(),o("div",{key:0,class:l(i.value.headline({class:(g=t.ui)==null?void 0:g.headline,headline:!a.headline}))},[n(e.$slots,"headline",{},()=>[c(d(e.headline),1)])],2)):r("",!0),e.title||a.title?(s(),o("h1",{key:1,class:l(i.value.title({class:(h=t.ui)==null?void 0:h.title}))},[n(e.$slots,"title",{},()=>[c(d(e.title),1)])],2)):r("",!0),e.description||a.description?(s(),o("div",{key:2,class:l(i.value.description({class:(f=t.ui)==null?void 0:f.description}))},[n(e.$slots,"description",{},()=>[c(d(e.description),1)])],2)):r("",!0),(v=e.links)!=null&&v.length||a.links?(s(),o("div",{key:3,class:l(i.value.links({class:(k=t.ui)==null?void 0:k.links}))},[n(e.$slots,"links",{},()=>[(s(!0),o(S,null,U(e.links,(P,$)=>(s(),y(_,F({key:$,size:"xl",ref_for:!0},P),null,16))),128))])],2)):r("",!0)],2),a.default?n(e.$slots,"default",{key:0}):e.orientation==="horizontal"?(s(),o("div",O)):r("",!0)]}),_:3},8,["class"]),n(e.$slots,"bottom")]}),_:3},8,["as","data-orientation","class"])}}}),Q=Object.assign(J,{__name:"UPageHero"});export{Q as default};
