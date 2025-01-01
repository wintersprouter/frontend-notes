"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[8401],{9019:(e,n,t)=>{t.d(n,{A:()=>c});t(758);var s=t(3526),a=t(9535),i=t(6626),l=t(1814),o=t(6070);function r(e){let{className:n}=e;return(0,o.jsx)(l.A,{type:"caution",title:(0,o.jsx)(a.Rc,{}),className:(0,s.A)(n,i.G.common.unlistedBanner),children:(0,o.jsx)(a.Uh,{})})}function c(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.AE,{}),(0,o.jsx)(r,{...e})]})}},701:(e,n,t)=>{t.d(n,{A:()=>d});t(758);var s=t(3526),a=t(9535),i=t(6626),l=t(1814),o=t(6070);function r(e){let{className:n}=e;return(0,o.jsx)(l.A,{type:"caution",title:(0,o.jsx)(a.Yh,{}),className:(0,s.A)(n,i.G.common.draftBanner),children:(0,o.jsx)(a.TT,{})})}var c=t(9019);function d(e){let{metadata:n}=e;const{unlisted:t,frontMatter:s}=n;return(0,o.jsxs)(o.Fragment,{children:[(t||s.unlisted)&&(0,o.jsx)(c.A,{}),s.draft&&(0,o.jsx)(r,{})]})}},6128:(e,n,t)=>{t.d(n,{A:()=>g});t(758);var s=t(3526),a=t(6626),i=t(6558),l=t(2088),o=t(3774),r=t(2029),c=t(3553),d=t(6070);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_NWlQ"};function h(){const e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const v={breadcrumbsContainer:"breadcrumbsContainer_foJF"};function x(e){let{children:n,href:t,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:n}):t?(0,d.jsx)(o.A,{className:a,href:t,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:n})}):(0,d.jsx)("span",{className:a,children:n})}function b(e){let{children:n,active:t,index:a,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function g(){const e=(0,i.OF)(),n=(0,l.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(a.G.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,d.jsx)(h,{}),e.map(((n,t)=>{const s=t===e.length-1,a="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,d.jsx)(b,{active:s,index:t,addMicrodata:!!a,children:(0,d.jsx)(x,{href:a,isLast:s,children:n.label})},t)}))]})}):null}},1171:(e,n,t)=>{t.r(n),t.d(n,{default:()=>F});var s=t(758),a=t(1767),i=t(6747),l=t(6070);const o=s.createContext(null);function r(e){let{children:n,content:t}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return(0,l.jsx)(o.Provider,{value:a,children:n})}function c(){const e=(0,s.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:n,assets:t}=c();return(0,l.jsx)(a.be,{title:e.title,description:e.description,keywords:n.keywords,image:t.image??n.image})}var u=t(3526),m=t(8972),h=t(50);function v(){const{metadata:e}=c();return(0,l.jsx)(h.A,{previous:e.previous,next:e.next})}var x=t(2959),b=t(9948),g=t(6626),f=t(7459),p=t(5244);function j(){const{metadata:e}=c(),{editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s,tags:a}=e,i=a.length>0,o=!!(n||t||s);return i||o?(0,l.jsxs)("footer",{className:(0,u.A)(g.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,u.A)("row margin-top--sm",g.G.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(f.A,{tags:a})})}),o&&(0,l.jsx)(p.A,{className:(0,u.A)("margin-top--sm",g.G.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s})]}):null}var A=t(4305),N=t(8003),L=t(2029);const C={tocCollapsibleButton:"tocCollapsibleButton_TnBC",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_nSo8"};function _(e){let{collapsed:n,...t}=e;return(0,l.jsx)("button",{type:"button",...t,className:(0,u.A)("clean-btn",C.tocCollapsibleButton,!n&&C.tocCollapsibleButtonExpanded,t.className),children:(0,l.jsx)(L.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const T={tocCollapsible:"tocCollapsible_Ls8X",tocCollapsibleContent:"tocCollapsibleContent_l7Tw",tocCollapsibleExpanded:"tocCollapsibleExpanded_miFk"};function k(e){let{toc:n,className:t,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:o}=(0,A.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)(T.tocCollapsible,!i&&T.tocCollapsibleExpanded,t),children:[(0,l.jsx)(_,{collapsed:i,onClick:o}),(0,l.jsx)(A.N,{lazy:!0,className:T.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(N.A,{toc:n,minHeadingLevel:s,maxHeadingLevel:a})})]})}const H={tocMobile:"tocMobile_L3gj"};function y(){const{toc:e,frontMatter:n}=c();return(0,l.jsx)(k,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,u.A)(g.G.docs.docTocMobile,H.tocMobile)})}var M=t(4003);function B(){const{toc:e,frontMatter:n}=c();return(0,l.jsx)(M.A,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:g.G.docs.docTocDesktop})}var w=t(7059),I=t(9983);function E(e){let{children:n}=e;const t=function(){const{metadata:e,frontMatter:n,contentTitle:t}=c();return n.hide_title||void 0!==t?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(g.G.docs.docMarkdown,"markdown"),children:[t&&(0,l.jsx)("header",{children:(0,l.jsx)(w.A,{as:"h1",children:t})}),(0,l.jsx)(I.A,{children:n})]})}var R=t(6128),V=t(701);const O={docItemContainer:"docItemContainer_PtxD",docItemCol:"docItemCol_MnpD"};function S(e){let{children:n}=e;const t=function(){const{frontMatter:e,toc:n}=c(),t=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&n.length>0;return{hidden:s,mobile:a?(0,l.jsx)(y,{}):void 0,desktop:!a||"desktop"!==t&&"ssr"!==t?void 0:(0,l.jsx)(B,{})}}(),{metadata:s}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!t.hidden&&O.docItemCol),children:[(0,l.jsx)(V.A,{metadata:s}),(0,l.jsx)(x.A,{}),(0,l.jsxs)("div",{className:O.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(R.A,{}),(0,l.jsx)(b.A,{}),t.mobile,(0,l.jsx)(E,{children:n}),(0,l.jsx)(j,{})]}),(0,l.jsx)(v,{})]})]}),t.desktop&&(0,l.jsx)("div",{className:"col col--3",children:t.desktop})]})}function F(e){const n=`docs-doc-id-${e.content.metadata.id}`,t=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(a.e3,{className:n,children:[(0,l.jsx)(d,{}),(0,l.jsx)(S,{children:(0,l.jsx)(t,{})})]})})}},50:(e,n,t)=>{t.d(n,{A:()=>l});t(758);var s=t(2029),a=t(5299),i=t(6070);function l(e){const{previous:n,next:t}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,i.jsx)(a.A,{...n,subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),t&&(0,i.jsx)(a.A,{...t,subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},9948:(e,n,t)=>{t.d(n,{A:()=>r});t(758);var s=t(3526),a=t(2029),i=t(6626),l=t(6331),o=t(6070);function r(e){let{className:n}=e;const t=(0,l.r)();return t.badge?(0,o.jsx)("span",{className:(0,s.A)(n,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(a.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}},2959:(e,n,t)=>{t.d(n,{A:()=>b});t(758);var s=t(3526),a=t(5090),i=t(3774),l=t(2029),o=t(3205),r=t(6626),c=t(4188),d=t(6331),u=t(6070);const m={unreleased:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,u.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,u.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const n=m[e.versionMetadata.banner];return(0,u.jsx)(n,{...e})}function v(e){let{versionLabel:n,to:t,onClick:s}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.A,{to:t,onClick:s,children:(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:n,versionMetadata:t}=e;const{siteConfig:{title:i}}=(0,a.A)(),{pluginId:l}=(0,o.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(l),{latestDocSuggestion:m,latestVersionSuggestion:x}=(0,o.HW)(l),b=m??(g=x).docs.find((e=>e.id===g.mainDocId));var g;return(0,u.jsxs)("div",{className:(0,s.A)(n,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:t})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(v,{versionLabel:x.label,to:b.path,onClick:()=>d(x.name)})})]})}function b(e){let{className:n}=e;const t=(0,d.r)();return t.banner?(0,u.jsx)(x,{className:n,versionMetadata:t}):null}},5299:(e,n,t)=>{t.d(n,{A:()=>l});t(758);var s=t(3526),a=t(3774),i=t(6070);function l(e){const{permalink:n,title:t,subLabel:l,isNext:o}=e;return(0,i.jsxs)(a.A,{className:(0,s.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:t})]})}},4003:(e,n,t)=>{t.d(n,{A:()=>c});t(758);var s=t(3526),a=t(8003);const i={tableOfContents:"tableOfContents_C0sa",docItemContainer:"docItemContainer_J5Qy"};var l=t(6070);const o="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,s.A)(i.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(a.A,{...t,linkClassName:o,linkActiveClassName:r})})}},8003:(e,n,t)=>{t.d(n,{A:()=>x});var s=t(758),a=t(9441);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):s.push(a)})),s}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>o(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.p)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,s.useRef)(void 0),t=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let a=n;a<=t;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=r(o,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}var u=t(3774),m=t(6070);function h(e){let{toc:n,className:t,linkClassName:s,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const v=s.memo(h);function x(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const x=(0,a.p)(),b=c??x.tableOfContents.minHeadingLevel,g=u??x.tableOfContents.maxHeadingLevel,f=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>l({toc:i(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:b,maxHeadingLevel:g});return d((0,s.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:b,maxHeadingLevel:g}}),[o,r,b,g])),(0,m.jsx)(v,{toc:f,className:t,linkClassName:o,...h})}},5921:(e,n,t)=>{t.d(n,{A:()=>o});t(758);var s=t(3526),a=t(3774);const i={tag:"tag_y3So",tagRegular:"tagRegular_RKoN",tagWithCount:"tagWithCount_n_Ru"};var l=t(6070);function o(e){let{permalink:n,label:t,count:o,description:r}=e;return(0,l.jsxs)(a.A,{href:n,title:r,className:(0,s.A)(i.tag,o?i.tagWithCount:i.tagRegular),children:[t,o&&(0,l.jsx)("span",{children:o})]})}},7459:(e,n,t)=>{t.d(n,{A:()=>r});t(758);var s=t(3526),a=t(2029),i=t(5921);const l={tags:"tags__nyC",tag:"tag_aVBw"};var o=t(6070);function r(e){let{tags:n}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(a.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,s.A)(l.tags,"padding--none","margin-left--sm"),children:n.map((e=>(0,o.jsx)("li",{className:l.tag,children:(0,o.jsx)(i.A,{...e})},e.permalink)))})]})}},9535:(e,n,t)=>{t.d(n,{AE:()=>r,Rc:()=>l,TT:()=>d,Uh:()=>o,Yh:()=>c});t(758);var s=t(2029),a=t(3460),i=t(6070);function l(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function r(){return(0,i.jsx)(a.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},2079:(e,n,t)=>{t.d(n,{A:()=>i});t(758);var s=t(8557),a=t(6070);function i(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.A,{...e})})}},689:(e,n,t)=>{t.d(n,{A:()=>a});var s=t(758);const a={React:s,...s}}}]);