"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[7909],{3824:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});const c=JSON.parse('{"id":"Javascript/script","title":"<script>, <script async> \u548c <script defer> \u7684\u5dee\u7570","description":"\u900f\u904e``\u6211\u5011\u53ef\u4ee5\u9069\u7576\u7684\u63a7\u5236\u8173\u672c\u5728\u700f\u89bd\u5668\u8f09\u5165\u7684\u6642\u6a5f\u3002","source":"@site/docs/Javascript/08.script.md","sourceDirName":"Javascript","slug":"/Javascript/script","permalink":"/frontend-notes/docs/Javascript/script","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Javascript/08.script.md","tags":[{"inline":true,"label":"2024iT\u9435\u4eba\u8cfd","permalink":"/frontend-notes/docs/tags/2024-i-t\u9435\u4eba\u8cfd"},{"inline":true,"label":"script","permalink":"/frontend-notes/docs/tags/script"},{"inline":true,"label":"JavaScript","permalink":"/frontend-notes/docs/tags/java-script"},{"inline":true,"label":"browser","permalink":"/frontend-notes/docs/tags/browser"},{"inline":true,"label":"defer","permalink":"/frontend-notes/docs/tags/defer"}],"version":"current","sidebarPosition":8,"frontMatter":{"slug":"script","title":"<script>, <script async> \u548c <script defer> \u7684\u5dee\u7570","authors":["ashley"],"tags":["2024iT\u9435\u4eba\u8cfd","script","JavaScript","browser","defer"],"keywords":["2024iT\u9435\u4eba\u8cfd","script","JavaScript","browser","defer"]},"sidebar":"notesSidebar","previous":{"title":"cookie, sessionStorage \u548c localStorage \u5728\u700f\u89bd\u5668\u4e2d\u7684\u5dee\u7570","permalink":"/frontend-notes/docs/Javascript/cookie-sessionStorage-localStorage"},"next":{"title":"null, undefined \u548c undeclared \u7684\u5dee\u7570","permalink":"/frontend-notes/docs/Javascript/null-undefined-undeclared"}}');var n=s(6070),t=s(5248);const i={slug:"script",title:"<script>, <script async> \u548c <script defer> \u7684\u5dee\u7570",authors:["ashley"],tags:["2024iT\u9435\u4eba\u8cfd","script","JavaScript","browser","defer"],keywords:["2024iT\u9435\u4eba\u8cfd","script","JavaScript","browser","defer"]},d="<script>, <script async> \u548c <script defer> \u7684\u5dee\u7570",o={},l=[{value:"<code>&lt;script&gt;</code>",id:"script",level:2},{value:"Non-Blocking:<code>&lt;script async&gt;</code> \u548c <code>&lt;script defer&gt;</code>",id:"non-blockingscript-async-\u548c-script-defer",level:2},{value:"<code>&lt;script async&gt;</code>",id:"script-async",level:3},{value:"<code>&lt;script defer&gt;</code>",id:"script-defer",level:3}];function a(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsxs)(r.h1,{id:"script-script-async-\u548c-script-defer-\u7684\u5dee\u7570",children:[(0,n.jsx)(r.code,{children:"<script>"}),", ",(0,n.jsx)(r.code,{children:"<script async>"})," \u548c ",(0,n.jsx)(r.code,{children:"<script defer>"})," \u7684\u5dee\u7570"]})}),"\n",(0,n.jsxs)(r.p,{children:["\u900f\u904e",(0,n.jsx)(r.code,{children:"<script>"}),"\u6211\u5011\u53ef\u4ee5\u9069\u7576\u7684\u63a7\u5236\u8173\u672c\u5728\u700f\u89bd\u5668\u8f09\u5165\u7684\u6642\u6a5f\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"script",children:(0,n.jsx)(r.code,{children:"<script>"})}),"\n",(0,n.jsxs)(r.p,{children:["\u9019\u662f\u9810\u8a2d\u7684\u8173\u672c\u52a0\u8f09\u65b9\u5f0f\uff0c\u5728\u7db2\u9801\u6e32\u67d3\u7684\u904e\u7a0b\u4e2d\uff0c\u6703\u4f7f\u7528 ",(0,n.jsx)(r.code,{children:"<script>"})," \u5728 HTML \u4e2d\u8f09\u5165 Javascript\uff0c\u7576\u57f7\u884c\u5230",(0,n.jsx)(r.code,{children:"<script>"}),"\u6642\uff0c\u700f\u89bd\u5668\u6703\u66ab\u505c\u89e3\u6790 HTML\uff0c\u958b\u59cb\u4e0b\u8f09 ",(0,n.jsx)(r.code,{children:"<script>"}),"\u8173\u672c\u4e26\u4e14\u7acb\u5373\u57f7\u884c\uff0c\u76f4\u5230",(0,n.jsx)(r.code,{children:"<script>"})," \u57f7\u884c\u5b8c\u7562\u624d\u6703\u7e7c\u7e8c\u89e3\u6790 HTML \u5efa\u7acb DOM\u3002\u4f46\u662f\u7576\u9700\u8981\u8f09\u5165\u7684",(0,n.jsx)(r.code,{children:"<script>"}),"\u8173\u672c\u5f88\u591a\u7684\u6642\u5019\uff0c\u6703\u963b\u585e\u9801\u9762\u6e32\u67d3\uff0c\u6703\u5c0e\u81f4\u4f7f\u7528\u8005\u9ad4\u9a57\u4e0d\u4f73\u3002"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-html",children:'<script src="index.js"><\/script>\n'})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\u9069\u7528\u65bc\uff1a\n\u9700\u8981\u7acb\u5373\u57f7\u884c\u7684\u8173\u672c\uff0c\u7279\u5225\u662f\u90a3\u4e9b\u6703\u5f71\u97ff\u5230 HTML \u7d50\u69cb\u7684\u8173\u672c\uff08\u4f8b\u5982\uff0c\u4f7f\u7528 document.write() \u7684\u8173\u672c\uff09\u3002"}),"\n"]}),"\n",(0,n.jsxs)(r.h2,{id:"non-blockingscript-async-\u548c-script-defer",children:["Non-Blocking:",(0,n.jsx)(r.code,{children:"<script async>"})," \u548c ",(0,n.jsx)(r.code,{children:"<script defer>"})]}),"\n",(0,n.jsxs)(r.p,{children:["\u4f7f\u7528 ",(0,n.jsx)(r.code,{children:"async"})," \u5c6c\u6027\u548c ",(0,n.jsx)(r.code,{children:"defer"})," \u5c6c\u6027\u53ef\u4ee5\u8b93 ",(0,n.jsx)(r.code,{children:"<script>"})," \u6a94\u6848\u5728\u4e00\u958b\u59cb\u5c31\u5728\u80cc\u666f\u5148\u4e0b\u8f09\uff0c\u53ef\u4ee5\u907f\u514d\u8173\u672c\u963b\u585e HTML \u89e3\u6790\u3002"]}),"\n",(0,n.jsx)(r.h3,{id:"script-async",children:(0,n.jsx)(r.code,{children:"<script async>"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"async"})," \u5c6c\u6027\u6703\u975e\u540c\u6b65\u4e0b\u8f09 ",(0,n.jsx)(r.code,{children:"<script>"}),"\u8173\u672c\uff0c\u4e00\u65e6\u4e0b\u8f09\u597d\u5c31\u7acb\u523b\u57f7\u884c\uff0c\u958b\u59cb\u6642\u57f7\u884c\u6703\u505c\u6b62\u89e3\u6790 HTML\uff0c\u4f46\u4e0b\u8f09\u672c\u8eab\u4e0d\u6703\u963b\u585e HTML \u7684\u89e3\u6790\u3002\u5982\u679c\u6709\u591a\u500b ",(0,n.jsx)(r.code,{children:"<script>"})," \u4e26\u4e0d\u80fd\u4fdd\u8b49 ",(0,n.jsx)(r.code,{children:"<script>"})," \u9593\u57f7\u884c\u7684\u9806\u5e8f\uff0c\u4e5f\u4e0d\u78ba\u5b9a\u8173\u672c\u57f7\u884c\u7684\u6642\u5019 HTML \u662f\u5426\u5b8c\u5168\u89e3\u6790\u5b8c\u6210\u3002"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\u9069\u7528\u65bc\uff1a\n\u4e0d\u9700\u8981\u4f9d\u8cf4 DOM \u6216\u8005\u4e0d\u9700\u8981\u56b4\u683c\u57f7\u884c\u9806\u5e8f\u7684\u7368\u7acb\u8173\u672c\u7684\u7b2c\u4e09\u65b9\u51fd\u5f0f\u5eab\uff0c\u4f8b\u5982\uff1aGA\u3002"}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"script-defer",children:(0,n.jsx)(r.code,{children:"<script defer>"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"defer"}),"\u5c6c\u6027\u6703\u975e\u540c\u6b65\u4e0b\u8f09 ",(0,n.jsx)(r.code,{children:"<script>"})," \u8173\u672c\uff0c\u4f46\u662f\u8207 ",(0,n.jsx)(r.code,{children:"async"})," \u5c6c\u6027\u4e0d\u540c\u7684\u662f\uff0c",(0,n.jsx)(r.code,{children:"defer"})," \u5c6c\u6027\u4e0d\u6703\u6253\u65b7 DOM \u5efa\u7acb\u7684\u904e\u7a0b\uff0c\u800c\u662f\u7b49\u5230 HTML \u89e3\u6790\u5b8c\u6210\uff0c\u4e26\u4e14\u5728 ",(0,n.jsx)(r.code,{children:"DOMContentLoad"})," \u57f7\u884c\u4e4b\u524d\u57f7\u884c\u4e0b\u8f09\u597d\u7684\u8173\u672c\uff0c\u53e6\u5916\uff0c",(0,n.jsx)(r.code,{children:"defer"})," \u6703\u4fdd\u8b49 script \u662f\u4f9d\u7167 ",(0,n.jsx)(r.code,{children:"<script>"})," \u7684\u9806\u5e8f\u53bb\u57f7\u884c\u3002"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\u9069\u7528\u65bc\uff1a\n\u4f9d\u8cf4 DOM \u6216\u662f\u8ddf\u5176\u4ed6\u6a21\u7d44\u6709\u76f8\u4e92\u4f9d\u8cf4\u7684\u6a21\u7d44\u3002"}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},5248:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>d});var c=s(758);const n={},t=c.createContext(n);function i(e){const r=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),c.createElement(t.Provider,{value:r},e.children)}}}]);