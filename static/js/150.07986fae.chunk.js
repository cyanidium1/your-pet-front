"use strict";(self.webpackChunkyour_pet_front=self.webpackChunkyour_pet_front||[]).push([[150],{2959:function(e,n,t){t.d(n,{Z:function(){return g}});var a=t(9337),s="NewsList_list__bCQhY",i=t(817),r="NewsItem_item__Tc0eW",c="NewsItem_img__mLtbm",o="NewsItem_textBox__w2aRw",l="NewsItem_title__h2Qtd",u="NewsItem_text__kz6RK",h="NewsItem_dateBox__hdt7k",_="NewsItem_link__jpZlD",d="NewsItem_date__Q1Ee0",f=t(184),m=function(e){var n=e._id,t=e.text,a=e.image_url,s=e.title,i=e.url,m=e.date,g=new Date(m).toLocaleDateString().split(".").join("/");return(0,f.jsxs)("li",{className:"".concat(r),children:[(0,f.jsx)("img",{src:a,alt:s,className:c}),(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)("h3",{className:l,children:s}),(0,f.jsx)("p",{className:u,children:t}),(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)("p",{className:d,children:g}),(0,f.jsx)("a",{className:_,href:i,target:"_blank",rel:"noreferrer noopener",children:(0,f.jsx)("p",{children:"Read more"})})]})]})]},n)},g=function(){var e=(0,a.v9)(i.uX);return(0,f.jsx)("ul",{className:s,children:e.map((function(e){var n=e._id,t=e.description,a=e.image_url,s=e.title,i=e.url,r=e.published_at;return(0,f.jsx)(m,{text:t,image_url:a,title:s,url:i,date:r},n)}))})}},249:function(e,n,t){t.d(n,{Z:function(){return l}});var a="NoticeNotFound_notFound__NuWFr",s="NoticeNotFound_imgWrapper__N08+h",i="NoticeNotFound_backBtn__5UYzz",r=t(1087),c=t(3439),o=t(184),l=function(){return(0,o.jsxs)("div",{className:a,children:[(0,o.jsx)("div",{className:s}),(0,o.jsxs)(r.rU,{to:"/notices/sell",className:i,children:["To main page",(0,o.jsx)("svg",{width:"24px",height:"24px",fill:"#fff",children:(0,o.jsx)("use",{href:"".concat(c.Z,"#icon-pawprint-1")})})]})]})}},5235:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(9439),s="Pagination_pagination__vcNDC",i="Pagination_paginationItem__CDbt4",r="Pagination_paginationWrap__6CMq6",c="Pagination_btnRight__d0C59",o="Pagination_btnLeft__8MWgc",l="Pagination_activePage__AAm2h",u=t(3439),h=t(2791),_=t(184),d=function(e){for(var n=e.totalNewsPages,t=e.setSearchParams,d=(0,h.useState)(1),f=(0,a.Z)(d,2),m=f[0],g=f[1],p=[],x=1;x<=n;x++)p.push(x);return(0,_.jsxs)("div",{className:r,children:[(0,_.jsx)("button",{className:o,onClick:function(){if(m>1){var e=m-1;t({page:e}),g(e)}},disabled:1===m,children:(0,_.jsx)("svg",{width:35,height:35,children:(0,_.jsx)("use",{href:u.Z+"#icon-left"})})}),(0,_.jsx)("ul",{className:s,children:p.map((function(e,n){return(0,_.jsx)("li",{className:"".concat(i," ").concat(e===m?l:""),onClick:function(n){n.preventDefault(),function(e){t({page:e}),g(e)}(e)},children:(0,_.jsxs)("a",{href:"!#",children:[" ",e," "]})},n+1)}))}),(0,_.jsx)("button",{className:c,onClick:function(){if(m<n){var e=m+1;t({page:e}),g(e)}},disabled:m===n,children:(0,_.jsx)("svg",{width:35,height:35,children:(0,_.jsx)("use",{href:u.Z+"#icon-right"})})})]})}},8699:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(9439),s=t(2791),i={positioning:"Search_positioning__T09fZ",name:"Search_name__s01gE",form:"Search_form__KGT+E",input:"Search_input__PXR0c",icon:"Search_icon__5fDV1",resetIcon:"Search_resetIcon__qXAIS",searchIconWrapper:"Search_searchIconWrapper__R5oXv"},r=t(3439),c=(t(8348),t(5462),t(9337)),o=t(184);var l=function(e){var n=e.searchParams,t=e.setSearchParams,l=e.titleSearch,u=((0,c.I0)(),(0,s.useState)(n.get("searchQuery")||"")),h=(0,a.Z)(u,2),_=h[0],d=h[1];return(0,o.jsxs)("div",{className:i.positioning,children:[(0,o.jsx)("h3",{className:i.name,children:l}),(0,o.jsxs)("form",{onSubmit:function(e){(e.preventDefault(),_)?t(""!==_?{searchQuery:_,page:1}:null):t({page:1})},className:i.form,children:[(0,o.jsx)("input",{type:"text",value:_,onChange:function(e){d(e.target.value)},className:i.input}),(0,o.jsxs)("div",{className:i.searchIconWrapper,children:[(0,o.jsx)("button",{type:"submit",children:(0,o.jsx)("svg",{height:24,width:24,children:(0,o.jsx)("use",{href:r.Z+"#icon-search"})})}),_&&(0,o.jsx)("button",{className:i.buttonClose,onClick:function(){d(""),n.forEach((function(e,t){n.delete(t)})),t(n)},children:(0,o.jsx)("svg",{height:24,width:24,className:i.resetIcon,children:(0,o.jsx)("use",{href:r.Z+"#icon-cross"})})})]})]})]})}},3150:function(e,n,t){t.a(e,(async function(e,a){try{t.r(n);var s=t(9439),i=t(2959),r=t(249),c=t(5235),o=t(8699),l=t(2791),u=t(9337),h=t(1087),_=t(5913),d=t(817),f=t(184),m=e([_]);_=(m.then?(await m)():m)[0];n.default=function(){var e,n,t=(0,u.I0)(),a=(0,l.useState)(6),m=(0,s.Z)(a,2),g=m[0],p=(m[1],(0,u.v9)(d.fI)),x=(0,h.lr)({page:1}),N=(0,s.Z)(x,2),j=N[0],v=N[1],w=null!==(e=j.get("searchQuery"))&&void 0!==e?e:null,I=null!==(n=j.get("page"))&&void 0!==n?n:null;return(0,l.useEffect)((function(){console.log(p),t((0,_.V)({searchQuery:w,page:I,limit:g}))}),[t,w,I,g,p]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.Z,{searchParams:j,setSearchParams:v,titleSearch:"News"}),p?(0,f.jsx)(i.Z,{}):(0,f.jsx)(r.Z,{}),(0,f.jsx)(c.Z,{totalNewsPages:p,setSearchParams:v})]})},a()}catch(g){a(g)}}))},817:function(e,n,t){t.d(n,{fI:function(){return s},uX:function(){return a}});var a=function(e){return e.news.items},s=function(e){return e.news.totalPages}}}]);
//# sourceMappingURL=150.07986fae.chunk.js.map