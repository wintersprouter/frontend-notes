"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[6103],{3182:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(7294);var i=n(512),a=n(7255),o=n(8015),r=n(7762),s=n(8762),l=n(2994),c=n(1614),d=n(6948),u=n(5893);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.Z,{...n,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,u.jsx)(d.Z,{...t,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,r.C)(),{title:n,description:i,date:o,tags:s,authors:l,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(a.d,{title:n,description:i,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:o}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")})]})}var f=n(2411),h=n(6294);function p(){const e=(0,h.i)();return(0,u.jsx)(f.Z,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var v=n(5967),x=n(4007);function b(e){let{sidebar:t,children:n}=e;const{metadata:i,toc:a}=(0,r.C)(),{nextItem:o,prevItem:c,frontMatter:d,unlisted:g}=i,{hide_table_of_contents:f,toc_min_heading_level:h,toc_max_heading_level:p}=d;return(0,u.jsxs)(s.Z,{sidebar:t,toc:!f&&a.length>0?(0,u.jsx)(v.Z,{toc:a,minHeadingLevel:h,maxHeadingLevel:p}):void 0,children:[g&&(0,u.jsx)(x.Z,{}),(0,u.jsx)(l.Z,{children:n}),(o||c)&&(0,u.jsx)(m,{nextItem:o,prevItem:c})]})}function j(e){const t=e.content;return(0,u.jsx)(r.n,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(a.FG,{className:(0,i.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(p,{}),(0,u.jsx)(b,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},5967:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var i=n(512),a=n(1351);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=n(5893);const s="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,i.Z)(o.tableOfContents,"thin-scrollbar",t),children:(0,r.jsx)(a.Z,{...n,linkClassName:s,linkActiveClassName:l})})}},1351:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(7294),a=n(6793);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):i.push(a)})),i}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const i=e.find((e=>s(e).top>=n));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,i.useRef)(void 0),n=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:r}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const i=[];for(let a=t;a<=n;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),c=l(s,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}var u=n(5013),m=n(5893);function g(e){let{toc:t,className:n,linkClassName:i,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:i})]},e.id)))}):null}const f=i.memo(g);function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...g}=e;const h=(0,a.L)(),p=c??h.tableOfContents.minHeadingLevel,v=u??h.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>r({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:v});return d((0,i.useMemo)((()=>{if(s&&l)return{linkClassName:s,linkActiveClassName:l,minHeadingLevel:p,maxHeadingLevel:v}}),[s,l,p,v])),(0,m.jsx)(f,{toc:x,className:n,linkClassName:s,...g})}},4007:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var i=n(512),a=n(1614),o=n(2411),r=n(5893);function s(){return(0,r.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(o.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(8015),u=n(8555);function m(e){let{className:t}=e;return(0,r.jsx)(u.Z,{type:"caution",title:(0,r.jsx)(s,{}),className:(0,i.Z)(t,d.k.common.unlistedBanner),children:(0,r.jsx)(l,{})})}function g(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(m,{...e})]})}},6294:(e,t,n)=>{n.d(t,{C:()=>d,i:()=>u});var i=n(1402),a=n(6832),o=n(5540);var r=n(7762);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(m);return{author:1===t.length?t[0]:t}}function c(e,t,n){return e?{image:g({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function d(e){const{siteConfig:t}=(0,a.Z)(),{withBaseUrl:n}=(0,i.C)(),{metadata:{blogDescription:o,blogTitle:r,permalink:d}}=e,u=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":u,mainEntityOfPage:u,headline:r,description:o,blogPost:e.items.map((e=>function(e,t,n){const{assets:i,frontMatter:a,metadata:o}=e,{date:r,title:d,description:u,lastUpdatedAt:m}=o,g=i.image??a.image,f=a.keywords??[],h=`${t.url}${o.permalink}`,p=m?s(m):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:d,name:d,description:u,datePublished:r,...p?{dateModified:p}:{},...l(o.authors),...c(g,n,d),...f?{keywords:f}:{}}}(e.content,t,n)))}}function u(){const e=function(){const e=(0,o.Z)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,r.C)(),{siteConfig:d}=(0,a.Z)(),{withBaseUrl:u}=(0,i.C)(),{date:m,title:g,description:f,frontMatter:h,lastUpdatedAt:p}=n,v=t.image??h.image,x=h.keywords??[],b=p?s(p):void 0,j=`${d.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":j,mainEntityOfPage:j,url:j,headline:g,name:g,description:f,datePublished:m,...b?{dateModified:b}:{},...l(n.authors),...c(v,u,g),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function m(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function g(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},8753:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var i=n(8943),a=n(5893);function o(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.Z,{...e})})}}}]);