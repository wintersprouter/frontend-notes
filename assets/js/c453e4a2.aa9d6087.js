"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[5220],{9717:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=o(4848),t=o(8453);const s={},r="\u8acb\u63cf\u8ff0 cookie, sessionStorage \u548c localStorage \u5728\u700f\u89bd\u5668\u4e2d\u7684\u5dee\u7570\u70ba\u4f55\uff1f",l={id:"Javascript/cookie&localStoarge&sesstionStoarge",title:"\u8acb\u63cf\u8ff0 cookie, sessionStorage \u548c localStorage \u5728\u700f\u89bd\u5668\u4e2d\u7684\u5dee\u7570\u70ba\u4f55\uff1f",description:"\u4ee5\u4e0b\u5e7e\u9ede\u70ba cookie, sessionStorage \u548c localStorage \u4e3b\u8981\u7684\u5dee\u7570\uff1a",source:"@site/docs/Javascript/07.cookie&localStoarge&sesstionStoarge.md",sourceDirName:"Javascript",slug:"/Javascript/cookie&localStoarge&sesstionStoarge",permalink:"/frontend-notes/docs/Javascript/cookie&localStoarge&sesstionStoarge",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Javascript/07.cookie&localStoarge&sesstionStoarge.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"notesSidebar",previous:{title:"\u8acb\u8aaa\u660e this \u5982\u4f55\u5728 JavaScript \u4e2d\u904b\u4f5c\uff1f",permalink:"/frontend-notes/docs/Javascript/this"}},i={},c=[{value:"\u751f\u547d\u9031\u671f\u9577\u77ed",id:"\u751f\u547d\u9031\u671f\u9577\u77ed",level:2},{value:"\u8cc7\u6599\u5132\u5b58\u7684\u5927\u5c0f",id:"\u8cc7\u6599\u5132\u5b58\u7684\u5927\u5c0f",level:2},{value:"\u4f7f\u7528\u7684\u65b9\u5f0f",id:"\u4f7f\u7528\u7684\u65b9\u5f0f",level:2},{value:"\u61c9\u7528\u5834\u666f",id:"\u61c9\u7528\u5834\u666f",level:2},{value:"\u5be6\u4f8b\u7df4\u7fd2",id:"\u5be6\u4f8b\u7df4\u7fd2",level:2},{value:"\u89e3\u984c",id:"\u89e3\u984c",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"\u8acb\u63cf\u8ff0-cookie-sessionstorage-\u548c-localstorage-\u5728\u700f\u89bd\u5668\u4e2d\u7684\u5dee\u7570\u70ba\u4f55",children:"\u8acb\u63cf\u8ff0 cookie, sessionStorage \u548c localStorage \u5728\u700f\u89bd\u5668\u4e2d\u7684\u5dee\u7570\u70ba\u4f55\uff1f"})}),"\n",(0,a.jsx)(n.p,{children:"\u4ee5\u4e0b\u5e7e\u9ede\u70ba cookie, sessionStorage \u548c localStorage \u4e3b\u8981\u7684\u5dee\u7570\uff1a"}),"\n",(0,a.jsx)(n.h2,{id:"\u751f\u547d\u9031\u671f\u9577\u77ed",children:"\u751f\u547d\u9031\u671f\u9577\u77ed"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"cookie\uff1acookie \u7684\u9810\u8a2d\u884c\u70ba\u662f\u5728\u700f\u89bd\u5668\u95dc\u9589\u5f8c\u6703\u6d88\u5931\uff0c\u4f46\u662f\u53ef\u4ee5\u81ea\u884c\u900f\u904e Expires \u6a19\u660e\u5931\u6548\u6642\u9593\u3001 Max-Age \u6a19\u660e\u6709\u6548\u6642\u9593\u9577\u5ea6\uff0c\u8b93 cookie \u5728\u700f\u89bd\u5668\u95dc\u9589\u5f8c\u80fd\u4f9d\u7136\u5b58\u5728\u3002"}),"\n",(0,a.jsx)(n.li,{children:"sessionStorage\uff1a\u700f\u89bd\u5668\u95dc\u9589\u5f8c\u81ea\u52d5\u6e05\u9664\uff0c\u751a\u81f3\u5728\u76f8\u540c\u7db2\u57df\u7684\u4e0d\u540c\u6a19\u7c64\u9801\u4e4b\u9593\u4e5f\u7121\u6cd5\u5171\u4eab\u3002"}),"\n",(0,a.jsx)(n.li,{children:"localStorage\uff1a\u5982\u679c\u6c92\u6709\u624b\u52d5\u53bb\u6e05\u9664\u7684\u8a71\uff0c\u6703\u6c38\u4e45\u4fdd\u5b58\u5728\u700f\u89bd\u5668\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u8cc7\u6599\u5132\u5b58\u7684\u5927\u5c0f",children:"\u8cc7\u6599\u5132\u5b58\u7684\u5927\u5c0f"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"cookie\uff1a4KB \u5de6\u53f3\u3002"}),"\n",(0,a.jsx)(n.li,{children:"sessionStorage\uff1a\u4f9d\u64da\u4e0d\u540c\u700f\u89bd\u5668 5MB~10MB\u3002"}),"\n",(0,a.jsx)(n.li,{children:"localStorage\uff1a\u4f9d\u64da\u4e0d\u540c\u700f\u89bd\u5668 5MB~10MB\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u4f7f\u7528\u7684\u65b9\u5f0f",children:"\u4f7f\u7528\u7684\u65b9\u5f0f"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["cookie\uff1acookie \u6703\u96a8\u8457 http \u8acb\u6c42\u6253\u5230\u4f3a\u670d\u5668\uff0c\u6703\u5728\u7b2c\u4e00\u6b21 client \u767c\u9001\u8acb\u6c42\u5f8c\uff0csever \u6703\u5728 response \u7684 header \u52a0\u5165",(0,a.jsx)(n.code,{children:"Set-Cookie"})," \u9084\u6709 response \u52a0\u5165 cookie\uff0c\u7576 client \u6536\u5230\u5f8c\u6703\u5b58\u5728\u700f\u89bd\u5668\u672c\u5730\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"sessionStorage\uff1a\u4f7f\u7528 key-value \u7684\u5f62\u5f0f\u5132\u5b58\u5728\u700f\u89bd\u5668\u672c\u5730\u3002"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"localStorage\uff1a\u4f7f\u7528 key-value \u7684\u5f62\u5f0f\u5132\u5b58\u5728\u700f\u89bd\u5668\u672c\u5730\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u61c9\u7528\u5834\u666f",children:"\u61c9\u7528\u5834\u666f"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"cookie\uff1a \u9069\u5408\u7528\u4f86\u7528\u6236\u9a57\u8b49\u3001\u8ffd\u8e64\u6703\u8a71\u3002"}),"\n",(0,a.jsx)(n.li,{children:"sessionStorage\uff1a \u56e0\u70ba\u751f\u547d\u9031\u671f\u8f03\u77ed\uff0c\u9069\u5408\u77ed\u671f\u4e14\u81e8\u6642\u7684\u8cc7\u6599\u5132\u5b58\uff0c\u4f8b\u5982\uff1a\u8868\u55ae\u7684\u8cc7\u6599\u3001\u8cfc\u7269\u8eca\u3002"}),"\n",(0,a.jsx)(n.li,{children:"localStorage\uff1a \u751f\u547d\u9031\u671f\u5f88\u9577\uff0c\u9069\u5408\u5b58\u9700\u8981\u9577\u671f\u4fdd\u5b58\u7684\u8cc7\u6599\u4f8b\u5982\uff1a\u4e3b\u984c\u9078\u64c7\u3001\u8a9e\u7cfb\u8a2d\u5b9a\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"\u5be6\u4f8b\u7df4\u7fd2",children:"\u5be6\u4f8b\u7df4\u7fd2"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://bigfrontend.dev/problem/localStorage-with-expiration",children:"135. localStorage with expiration"}),"\nlocalStorage is a simple and handy client-side storage, but you should avoid using it because it is synchronous."]}),"\n",(0,a.jsx)(n.p,{children:"Also Safari's ITP actually deletes client-side script-writable storage after 7 days of Safari use without interacting on your website, and localStorage is included."}),"\n",(0,a.jsx)(n.p,{children:"Unlike Cookie, localStorage doesn't expire."}),"\n",(0,a.jsx)(n.p,{children:"In this problem, please create a localStorage wrapper with expiration support"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'myLocalStorage.setItem("bfe", "dev", 1000);\nmyLocalStorage.getItem("bfe");\n// \'dev\'\n'})}),"\n",(0,a.jsx)(n.p,{children:"after 1 second:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'myLocalStorage.getItem("bfe");\n// null\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u89e3\u984c",children:"\u89e3\u984c"}),"\n",(0,a.jsxs)(n.p,{children:["\u53c3\u8003 ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API",children:"Web Storage API"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"window.myLocalStorage = {\n  getItem(key) {\n    const data = window.localStorage.getItem(key);\n    if (!data) return null; // key \u4e0d\u5b58\u5728\n    const parsedData = JSON.parse(data);\n    // \u6aa2\u67e5 expiry \uff0c\u6c92\u6709\u8a2d\u7f6e expiry \u6216\u5c1a\u672a\u904e\u671f\uff0c\u5247\u8fd4\u56de value\n    if (!parsedData.expiry || parsedData.expiry > Date.now()) {\n      return parsedData.value;\n    } else {\n      // \u5982\u679c\u904e\u671f\u4e86\uff0c\u79fb\u9664\u8a72\u9805\u76ee\u4e26\u8fd4\u56de null\n      window.localStorage.removeItem(key);\n      return null;\n    }\n  },\n\n  setItem(key, value, maxAge) {\n    window.localStorage.setItem(key, value);\n\n    if (maxAge === 0) {\n      //\u56e0\u70ba\u9019\u984c\u5fc5\u9808\u8981\u5728 LocalStorage \u5be6\u73fe\u5931\u6548\u6642\u9593\u7684\u529f\u80fd\uff0c\u56e0\u6b64\u5982\u679c maxAge \u5931\u6548\u6642\u9593\u662f0\u7684\u8a71\u5c31\u4ee3\u8868\u5c31\u662f\u5931\u6548\u4e86\uff0c\u76f4\u63a5\u79fb\u9664\u8a72\u9805\u76ee\n      window.localStorage.removeItem(key);\n    }\n    //\u8a08\u7b97\u51fa\u904e\u671f\u7684\u6642\u9593\n    const expiry = maxAge > 0 ? Date.now() + maxAge : null;\n    //\u5c07\u904e\u671f\u7684\u6642\u9593\u8ddf\u8cc7\u6599\u5132\u5b58\n    const data = {\n      value: value,\n      expiry: expiry,\n    };\n    // \u5132\u5b58 JSON \u5b57\u4e32\u5230 localStorage\n    window.localStorage.setItem(key, JSON.stringify(data));\n  },\n\n  removeItem(key) {\n    window.localStorage.removeItem(key);\n  },\n\n  clear() {\n    window.localStorage.clear();\n  },\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>l});var a=o(6540);const t={},s=a.createContext(t);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);