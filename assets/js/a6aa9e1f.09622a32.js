"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[89],{7167:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(7294);var a=n(512),i=n(6832),r=n(7255),o=n(8015),s=n(8762),l=n(1052),d=n(6145),c=n(6903),g=n(2411),u=n(6294),p=n(5893);function m(e){const t=(0,u.C)(e);return(0,p.jsx)(g.Z,{children:(0,p.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,i.Z)(),{blogDescription:a,blogTitle:o,permalink:s}=t,l="/"===s?n:o;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.d,{title:l,description:a}),(0,p.jsx)(d.Z,{tag:"blog_posts_list"})]})}function f(e){const{metadata:t,items:n,sidebar:a}=e;return(0,p.jsxs)(s.Z,{sidebar:a,children:[(0,p.jsx)(c.Z,{items:n}),(0,p.jsx)(l.Z,{metadata:t})]})}function b(e){return(0,p.jsxs)(r.FG,{className:(0,a.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage),children:[(0,p.jsx)(h,{...e}),(0,p.jsx)(m,{...e}),(0,p.jsx)(f,{...e})]})}},1052:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var a=n(1614),i=n(6948),r=n(5893);function o(e){const{metadata:t}=e,{previousPage:n,nextPage:o}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(i.Z,{permalink:n,title:(0,r.jsx)(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),o&&(0,r.jsx)(i.Z,{permalink:o,title:(0,r.jsx)(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},6903:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var a=n(7762),i=n(2994),r=n(5893);function o(e){let{items:t,component:n=i.Z}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(a.n,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},6294:(e,t,n)=>{n.d(t,{C:()=>c,i:()=>g});var a=n(1402),i=n(6832),r=n(5540);var o=n(7762);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function d(e,t,n){return e?{image:p({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function c(e){const{siteConfig:t}=(0,i.Z)(),{withBaseUrl:n}=(0,a.C)(),{metadata:{blogDescription:r,blogTitle:o,permalink:c}}=e,g=`${t.url}${c}`;return{"@context":"https://schema.org","@type":"Blog","@id":g,mainEntityOfPage:g,headline:o,description:r,blogPost:e.items.map((e=>function(e,t,n){const{assets:a,frontMatter:i,metadata:r}=e,{date:o,title:c,description:g,lastUpdatedAt:u}=r,p=a.image??i.image,m=i.keywords??[],h=`${t.url}${r.permalink}`,f=u?s(u):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:c,name:c,description:g,datePublished:o,...f?{dateModified:f}:{},...l(r.authors),...d(p,n,c),...m?{keywords:m}:{}}}(e.content,t,n)))}}function g(){const e=function(){const e=(0,r.Z)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,o.C)(),{siteConfig:c}=(0,i.Z)(),{withBaseUrl:g}=(0,a.C)(),{date:u,title:p,description:m,frontMatter:h,lastUpdatedAt:f}=n,b=t.image??h.image,x=h.keywords??[],j=f?s(f):void 0,Z=`${c.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":Z,mainEntityOfPage:Z,url:Z,headline:p,name:p,description:m,datePublished:u,...j?{dateModified:j}:{},...l(n.authors),...d(b,g,p),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${c.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function p(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},8753:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var a=n(8943),i=n(5893);function r(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.Z,{...e})})}}}]);