"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[97],{4659:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(5893),i=r(1151);const a={},o=void 0,l={id:"react/react-zet-book/DOM \u8207 Virtual DOM",title:"DOM \u8207 Virtual DOM",description:"DOM",source:"@site/docs/react/react-zet-book/DOM \u8207 Virtual DOM.md",sourceDirName:"react/react-zet-book",slug:"/react/react-zet-book/DOM \u8207 Virtual DOM",permalink:"/frontend-notes/docs/react/react-zet-book/DOM \u8207 Virtual DOM",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/react-zet-book/DOM \u8207 Virtual DOM.md",tags:[],version:"current",frontMatter:{},sidebar:"notesSidebar",previous:{title:"\u300aReact \u601d\u7dad\u9032\u5316\u300b\u8b80\u66f8\u7b46\u8a18",permalink:"/frontend-notes/docs/category/react-\u601d\u7dad\u9032\u5316\u8b80\u66f8\u7b46\u8a18"},next:{title:"2023 it \u9435\u4eba\u8cfd React Native CLI \u958b\u767c\u5fc3\u6cd5",permalink:"/frontend-notes/docs/category/2023-it-\u9435\u4eba\u8cfd-react-native-cli-\u958b\u767c\u5fc3\u6cd5"}},c={},s=[{value:"DOM",id:"dom",level:2},{value:"\u64cd\u4f5c DOM \u5c0d\u6548\u80fd\u7684\u5f71\u97ff",id:"\u64cd\u4f5c-dom-\u5c0d\u6548\u80fd\u7684\u5f71\u97ff",level:2},{value:"Virtual DOM",id:"virtual-dom",level:2},{value:"Virtual DOM \u5c0d\u65bc\u6548\u80fd\u7684\u512a\u5316",id:"virtual-dom-\u5c0d\u65bc\u6548\u80fd\u7684\u512a\u5316",level:2}];function d(e){const t={h2:"h2",li:"li",ol:"ol",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"dom",children:"DOM"}),"\n",(0,n.jsx)(t.p,{children:"DOM (Document Object Model) \u662f\u4e00\u500b\u7db2\u9801\u6a39\u72c0\u8cc7\u6599\u7d50\u69cb\u7684\u7269\u4ef6\uff0c\u7528\u4f86\u5448\u73fe\u700f\u89bd\u5668\u4e2d\u7684\u756b\u9762\u7d50\u69cb\u3002\u7576\u9801\u9762\u7522\u751f\u8b8a\u5316\u6642\uff0c\u4fbf\u662f\u900f\u904e\u64cd\u4f5c DOM \u5f8c\u85c9\u7531\u700f\u89bd\u5668\u7684\u6e32\u67d3\u5f15\u64ce\u91cd\u7e6a\u4f86\u5448\u73fe\u756b\u9762\uff0c\u4e00\u65e6\u5c0d DOM \u9032\u884c\u64cd\u4f5c\uff0c\u6e32\u67d3\u5f15\u64ce\u5c31\u6703\u81ea\u52d5\u5730\u5c07\u6574\u500b\u756b\u9762\u91cd\u7e6a\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u64cd\u4f5c-dom-\u5c0d\u6548\u80fd\u7684\u5f71\u97ff",children:"\u64cd\u4f5c DOM \u5c0d\u6548\u80fd\u7684\u5f71\u97ff"}),"\n",(0,n.jsx)(t.p,{children:"\u64cd\u4f5c DOM \u672c\u8eab\u662f\u4e00\u500b\u6602\u8cb4\u7684\u6548\u80fd\u8ca0\u64d4\uff0c\u5982\u679c\u5728\u77ed\u6642\u9593\u5167\u983b\u7e41\u6216\u5927\u91cf\u7684\u66f4\u65b0 DOM \u5143\u7d20\uff0c\u53ef\u80fd\u6703\u9020\u6210\u756b\u9762\u5361\u9813\uff0c\u56e0\u70ba\u700f\u89bd\u5668\u7684\u6e32\u67d3\u5f15\u64ce\u4e5f\u6703\u8ddf\u8457\u4e0d\u65b7\u91cd\u7e6a\u756b\u9762\u3002\u56e0\u6b64\uff0c\u5728\u524d\u7aef\u7684\u91dd\u5c0d DOM \u7684\u6548\u80fd\u512a\u5316\u5c31\u662f\u76e1\u91cf\u7e2e\u5c0f\u64cd\u4f5c DOM \u7684\u7bc4\u570d\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"virtual-dom",children:"Virtual DOM"}),"\n",(0,n.jsx)(t.p,{children:"\u56e0\u6b64\u70ba\u4e86\u7e2e\u5c0f\u64cd\u4f5c DOM \u7684\u7bc4\u570d Virtual DOM \u7684\u6982\u5ff5\u5c31\u7522\u751f\u4e86\uff0c\u7c21\u55ae\u4f86\u8aaa\uff0cVirtual DOM \u5c31\u662f\u4e00\u500b\u865b\u64ec\u7684\u756b\u9762\u7d50\u69cb\uff0c\u540c\u6642\u4e5f\u662f\u63cf\u8ff0\u771f\u5be6\u7684 DOM \u7d50\u69cb\u3002\u4ed6\u672c\u8eab\u5c31\u662f\u7531\u4e00\u500b\u500b\u7684 Dom \u5143\u7d20\u662f Javascript \u7269\u4ef6\uff0c\u9032\u800c\u7d44\u6210\u7684\u6a39\u72c0\u7d50\u69cb\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u8207 DOM \u7684\u95dc\u4fc2\uff0c\u53ef\u4ee5\u6bd4\u55bb\u6210 Virtual DOM \u662f DOM \u7684\u8a66\u505a\u54c1\uff0c\u5728\u66f4\u65b0 DOM \u4e4b\u524d\uff0c\u5148\u7522\u751f\u958b\u767c\u8005\u671f\u671b\u4e2d\u865b\u64ec\u7684\u756b\u9762\u7d50\u69cb\uff0c\u7136\u5f8c\u518d\u7528\u9019\u500b\u865b\u64ec\u7684\u756b\u9762\u7d50\u69cb\u53bb\u5be6\u969b\u64cd\u4f5c DOM \u3002"}),"\n",(0,n.jsx)(t.h2,{id:"virtual-dom-\u5c0d\u65bc\u6548\u80fd\u7684\u512a\u5316",children:"Virtual DOM \u5c0d\u65bc\u6548\u80fd\u7684\u512a\u5316"}),"\n",(0,n.jsx)(t.p,{children:"\u7576\u700f\u89bd\u5668\u7b2c\u4e00\u6b21\u7e6a\u88fd\u756b\u9762\u6642\u6703\u7522\u751f\u5be6\u969b\u7684 DOM \u7d50\u69cb\uff0c\u540c\u6642\u4e5f\u6703\u7522\u751f\u4e00\u500b Virtual DOM \u7684\u7d50\u69cb\uff0c\u56e0\u6b64\u7576\u6211\u5011\u8981\u518d\u66f4\u65b0\u756b\u9762\u6703\u662f\u9019\u6a23\u7684\uff1a"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"\u6839\u64da\u8cc7\u6599\u7522\u751f\u4e00\u7d44\u65b0\u7684 Virtual DOM \u7d50\u69cb"}),"\n",(0,n.jsx)(t.li,{children:"\u5c07\u65b0\u7684 Virtual DOM \u7d50\u69cb\u8207\u820a\u7684 Virtual DOM \u7d50\u69cb\u505a\u6bd4\u8f03"}),"\n",(0,n.jsx)(t.li,{children:"\u65b0\u820a\u4e4b\u9593\u5dee\u7570\u7684\u90e8\u5206\u66f4\u65b0\u5728\u771f\u5be6\u7684 DOM \u4e0a"}),"\n",(0,n.jsx)(t.li,{children:"\u700f\u89bd\u5668\u7684\u6e32\u67d3\u5f15\u64ce\u6703\u81ea\u52d5\u91cd\u7e6a\u756b\u9762"}),"\n",(0,n.jsx)(t.li,{children:"\u82e5\u65b0\u820a\u7684 Virtual DOM \u7d50\u69cb\u4e00\u6a23\uff0c\u5247\u4e0d\u6703\u91cd\u7e6a\u756b\u9762"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"\u9019\u6a23\u7684\u505a\u7684\u597d\u8655\u53ef\u4ee5\uff0c\u7e2e\u5c0f\u64cd\u4f5c DOM \u7684\u7bc4\u570d\uff0c\u53ea\u9700\u8981\u64cd\u4f5c\u771f\u6b63\u9700\u8981\u66f4\u65b0\u7684 DOM \u5143\u7d20\uff0c\u53ef\u4ee5\u5927\u5927\u7684\u964d\u4f4e\u6548\u80fd\u7684\u8ca0\u64d4\uff0c\u53e6\u5916\uff0c\u4f7f\u7528 Virtual DOM \u7684\u53e6\u4e00\u500b\u597d\u8655\u662f\uff0cVirtual DOM \u4e26\u4e0d\u6703\u5411\u771f\u5be6\u7684 DOM \u8207\u700f\u89bd\u5668\u7684\u6e32\u67d3\u5f15\u64ce\u505a\u7d81\u5b9a\uff0c\u7522\u751f\u7684 JavaScript \u7269\u4ef6\u8f03\u70ba\u55ae\u7d14\uff0c\u4e5f\u56e0\u6b64\u7bc0\u7701\u4e86\u6548\u80fd\u3002"})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>o});var n=r(7294);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);