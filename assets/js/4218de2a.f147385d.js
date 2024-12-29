"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[5148],{3681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"react/react-zet-book/React \u756b\u9762\u66f4\u65b0\u7684\u767c\u52d5\u6a5f\uff0dstate \u521d\u63a2","title":"React \u756b\u9762\u66f4\u65b0\u7684\u767c\u52d5\u6a5f\uff0dstate \u521d\u63a2","description":"React state \u7684\u672c\u8cea\uff1f state \u5728 React \u7684\u756b\u9762\u7ba1\u7406\u6a5f\u5236\u4e2d\u626e\u6f14\u7684\u89d2\u8272\u662f\u4ec0\u9ebc\uff1f","source":"@site/docs/react/react-zet-book/08-React \u756b\u9762\u66f4\u65b0\u7684\u767c\u52d5\u6a5f\uff0dstate \u521d\u63a2.mdx","sourceDirName":"react/react-zet-book","slug":"/react/react-zet-book/React \u756b\u9762\u66f4\u65b0\u7684\u767c\u52d5\u6a5f\uff0dstate \u521d\u63a2","permalink":"/frontend-notes/docs/react/react-zet-book/React \u756b\u9762\u66f4\u65b0\u7684\u767c\u52d5\u6a5f\uff0dstate \u521d\u63a2","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/react-zet-book/08-React \u756b\u9762\u66f4\u65b0\u7684\u767c\u52d5\u6a5f\uff0dstate \u521d\u63a2.mdx","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{},"sidebar":"notesSidebar","previous":{"title":"\u756b\u9762\u7d44\u88dd\u7684\u85cd\u5716\uff1acomponent \u521d\u63a2","permalink":"/frontend-notes/docs/react/react-zet-book/\u756b\u9762\u7d44\u88dd\u7684\u85cd\u5716\uff1acomponent \u521d\u63a2"},"next":{"title":"React \u756b\u9762\u66f4\u65b0\u7684\u6d41\u7a0b\u6a5f\u5236\uff1areconcilliation","permalink":"/frontend-notes/docs/react/react-zet-book/reconciliation"}}');var c=n(6070),a=n(5248);const s={},r=void 0,i={},d=[{value:"React state \u7684\u672c\u8cea\uff1f state \u5728 React \u7684\u756b\u9762\u7ba1\u7406\u6a5f\u5236\u4e2d\u626e\u6f14\u7684\u89d2\u8272\u662f\u4ec0\u9ebc\uff1f",id:"react-state-\u7684\u672c\u8cea-state-\u5728-react-\u7684\u756b\u9762\u7ba1\u7406\u6a5f\u5236\u4e2d\u626e\u6f14\u7684\u89d2\u8272\u662f\u4ec0\u9ebc",level:2},{value:"state \u8ddf component \u7684\u95dc\u4fc2\u662f\u4ec0\u9ebc\uff1f",id:"state-\u8ddf-component-\u7684\u95dc\u4fc2\u662f\u4ec0\u9ebc",level:2},{value:"\u70ba\u4ec0\u9ebc <code>useState</code> \u7684\u56de\u50b3\u503c\u662f\u4e00\u500b\u9663\u5217\uff1f",id:"\u70ba\u4ec0\u9ebc-usestate-\u7684\u56de\u50b3\u503c\u662f\u4e00\u500b\u9663\u5217",level:2},{value:"React \u662f\u5982\u4f55\u8fa8\u8b58\u4e26\u5340\u5206\u540c\u4e00\u500b component \u4e2d\u7684\u591a\u500b state\uff1f",id:"react-\u662f\u5982\u4f55\u8fa8\u8b58\u4e26\u5340\u5206\u540c\u4e00\u500b-component-\u4e2d\u7684\u591a\u500b-state",level:2},{value:"\u540c\u4e00\u500b component \u5728\u591a\u500b\u5730\u65b9\u88ab\u547c\u53eb\uff0c\u5b83\u5011\u4e4b\u9593\u7684 state \u8cc7\u6599\u6703\u4e92\u901a\u55ce\uff1f\u70ba\u4ec0\u9ebc\uff1f",id:"\u540c\u4e00\u500b-component-\u5728\u591a\u500b\u5730\u65b9\u88ab\u547c\u53eb\u5b83\u5011\u4e4b\u9593\u7684-state-\u8cc7\u6599\u6703\u4e92\u901a\u55ce\u70ba\u4ec0\u9ebc",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"react-state-\u7684\u672c\u8cea-state-\u5728-react-\u7684\u756b\u9762\u7ba1\u7406\u6a5f\u5236\u4e2d\u626e\u6f14\u7684\u89d2\u8272\u662f\u4ec0\u9ebc",children:"React state \u7684\u672c\u8cea\uff1f state \u5728 React \u7684\u756b\u9762\u7ba1\u7406\u6a5f\u5236\u4e2d\u626e\u6f14\u7684\u89d2\u8272\u662f\u4ec0\u9ebc\uff1f"}),"\n",(0,c.jsx)(t.p,{children:"state \u662f\u4e00\u7a2e\u81e8\u6642\u7684\u4e14\u53ef\u4ee5\u7528\u4f86\u66f4\u65b0\u8a18\u61b6\u61c9\u7528\u7a0b\u5f0f\u7684\u72c0\u614b\u3002\u5728 React \u7684\u756b\u9762\u7ba1\u7406\u6a5f\u5236\u4e2d\uff0cReact \u85c9\u7531\u767c\u73fe state \u7684\u8cc7\u6599\u66f4\u65b0\uff0c\u53bb\u9a45\u52d5\u756b\u9762\u8ddf\u8457 state \u7684\u8b8a\u52d5\u5b8c\u6210\u76f8\u5c0d\u61c9\u7684\u66f4\u65b0\u3002"}),"\n",(0,c.jsx)(t.p,{children:"\u5728 React \u55ae\u5411\u8cc7\u6599\u6d41\u7684\u6a5f\u5236\u4e2d\uff0c\u539f\u59cb\u8cc7\u6599\u7684 state \u662f\u9a45\u52d5\u521d\u59cb\u756b\u9762\u6e32\u67d3\u5b8c\u6210\u7684\u6210\u56e0\uff0c\u53ef\u4ee5\u66f4\u65b0\u7684\u539f\u59cb\u8cc7\u6599 state \u5c31\u662f\u4f5c\u70ba React \u66f4\u65b0\u756b\u9762\u7684\u8b8a\u56e0\uff0c\u662f\u57f7\u884c\u55ae\u5411\u8cc7\u6599\u6d41\u7684\u624b\u6bb5\uff0c\u4f7f\u8cc7\u6599\u7684\u8b8a\u52d5\u8207\u756b\u9762\u66f4\u65b0\u662f\u53ef\u9760\u4e14\u66f4\u5bb9\u6613\u9810\u6e2c\u7684\u3002"}),"\n",(0,c.jsx)(t.h2,{id:"state-\u8ddf-component-\u7684\u95dc\u4fc2\u662f\u4ec0\u9ebc",children:"state \u8ddf component \u7684\u95dc\u4fc2\u662f\u4ec0\u9ebc\uff1f"}),"\n",(0,c.jsx)(t.p,{children:"component \u53ef\u4ee5\u8aaa\u662f state \u7684\u5bb9\u5668\uff0c\u6bcf\u4e00\u500b component \u90fd\u6709\u81ea\u5df1\u7684 state\uff0c\u800c state \u5fc5\u9808\u4f9d\u9644\u5728 component \u4e0a\u53bb\u8a18\u61b6\u539f\u59cb\u8cc7\u6599\u7684\u72c0\u614b\uff0c\u7576 component \u4e2d\u7684 state \u8cc7\u6599\u66f4\u65b0\u7684\u6642\u5019\u5c31\u6703\u91cd\u65b0\u6e32\u67d3\u756b\u9762\uff0c\u8a72 component \u8207\u5176\u4e2d\u7684\u5b50\u5b6b component \u4e5f\u6703\u8ddf\u8457\u91cd\u7e6a\u3001re-render\uff0c\u56e0\u6b64 component \u4e5f\u6709\u9650\u7e2e\u756b\u9762\u91cd\u7e6a\u7684\u7bc4\u570d\u7684\u529f\u80fd\u3002"}),"\n",(0,c.jsxs)(t.p,{children:["\u5728 function component \u4e2d\uff0cstate \u4f7f\u7528 ",(0,c.jsx)(t.code,{children:"useState"})," \u9019\u500b hook \u4f86\u5b9a\u7fa9\u8207\u5b58\u53d6 state \u8cc7\u6599\u3002"]}),"\n",(0,c.jsxs)(t.h2,{id:"\u70ba\u4ec0\u9ebc-usestate-\u7684\u56de\u50b3\u503c\u662f\u4e00\u500b\u9663\u5217",children:["\u70ba\u4ec0\u9ebc ",(0,c.jsx)(t.code,{children:"useState"})," \u7684\u56de\u50b3\u503c\u662f\u4e00\u500b\u9663\u5217\uff1f"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-jsx",children:"const [state, setState] = useState(initialState);\n"})}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"useState"})," hook \u6703\u63a5\u53d7\u4e00\u500b\u521d\u59cb\u503c ",(0,c.jsx)(t.code,{children:"initialState"})," \u4f5c\u70ba state \u7684\u539f\u59cb\u8cc7\u6599\uff0c\u4e26\u4e14\u6703\u56de\u50b3\u4e00\u7d44\u9663\u5217\uff0c\u5728\u9663\u5217\u4e2d\u7b2c\u4e00\u500b\u5143\u7d20 ",(0,c.jsx)(t.code,{children:"state"})," \u6307\u7684\u662f\u6b64\u6b21 render \u7576\u524d\u7684\u503c\uff0c\u7b2c\u4e8c\u500b\u5143\u7d20 ",(0,c.jsx)(t.code,{children:"setState"})," \u662f\u4e00\u500b\u51fd\u5f0f\uff0c\u7528\u4f86\u66f4\u65b0 ",(0,c.jsx)(t.code,{children:"state"})," \u7684\u503c\u3002"]}),"\n",(0,c.jsx)(t.p,{children:"\u4f7f\u7528\u9663\u5217\u89e3\u69cb\u53ef\u4ee5\u8b93\u958b\u767c\u8005\u66f4\u5bb9\u6613\u53d6\u5f97\u8207\u4fbf\u65bc\u8b93\u958b\u767c\u8005\u6839\u64da\u5546\u696d\u908f\u8f2f\u81ea\u884c\u547d\u540d state \u8207 setState \u51fd\u5f0f\u4e26\u4e14\u8ce6\u503c\uff0c\u5982\u6b64\u4e00\u4f86\uff0c\u7576 component \u4e2d\u6709\u591a\u500b state \u6642\uff0c\u958b\u767c\u8005\u53ef\u4ee5\u66f4\u5bb9\u6613\u5340\u5206\u8207\u7ba1\u7406\uff0c\u907f\u514d\u547d\u540d\u885d\u7a81\u3002"}),"\n",(0,c.jsx)(t.h2,{id:"react-\u662f\u5982\u4f55\u8fa8\u8b58\u4e26\u5340\u5206\u540c\u4e00\u500b-component-\u4e2d\u7684\u591a\u500b-state",children:"React \u662f\u5982\u4f55\u8fa8\u8b58\u4e26\u5340\u5206\u540c\u4e00\u500b component \u4e2d\u7684\u591a\u500b state\uff1f"}),"\n",(0,c.jsxs)(t.p,{children:["\u5728\u540c\u4e00\u500b component \u4e2d\uff0c\u6709\u53ef\u80fd\u540c\u6642\u9032\u884c\u547c\u53eb\u591a\u6b21 ",(0,c.jsx)(t.code,{children:"useState"})," hook \u4f86\u5b9a\u7fa9\u591a\u500b state\uff0cReact \u900f\u904e\u56fa\u5b9a\u7684\u547c\u53eb\u9806\u5e8f\u4f86\u5340\u5206\uff0c\u56e0\u6b64\u5728 hook \u5c31\u6703\u6709\u56b4\u683c\u7684\u547c\u53eb\u9650\u5236\uff1ahook \u53ea\u80fd\u5728 function component \u7684\u6700\u4e0a\u5c64\u547c\u53eb\uff0c\u4e0d\u80fd\u5728\u689d\u4ef6\u5f0f\u3001\u8ff4\u5708\u3001\u5de2\u72c0 function component \u4e2d\u547c\u53eb\u3002"]}),"\n",(0,c.jsx)(t.p,{children:"React \u5167\u5efa\u7684\u6a5f\u5236\u6703\u5b58\u5728\u4e00\u500b\u6709\u5e8f\u7684\u8868\u53bb\u6839\u64da\u9019\u4e9b hook \u7684\u547c\u53eb\u9806\u5e8f\u53bb\u7d00\u9304 hook \u7684\u72c0\u614b\uff0c\u56e0\u6b64\u7576 component \u57f7\u884c\u4e00\u6b21 render \u6642\u5c31\u6703\u4f9d\u64da\u9806\u5e8f\u53bb\u53d6\u5f97\u5c0d\u61c9\u7684 state \u8cc7\u6599\u3002"}),"\n",(0,c.jsx)(t.h2,{id:"\u540c\u4e00\u500b-component-\u5728\u591a\u500b\u5730\u65b9\u88ab\u547c\u53eb\u5b83\u5011\u4e4b\u9593\u7684-state-\u8cc7\u6599\u6703\u4e92\u901a\u55ce\u70ba\u4ec0\u9ebc",children:"\u540c\u4e00\u500b component \u5728\u591a\u500b\u5730\u65b9\u88ab\u547c\u53eb\uff0c\u5b83\u5011\u4e4b\u9593\u7684 state \u8cc7\u6599\u6703\u4e92\u901a\u55ce\uff1f\u70ba\u4ec0\u9ebc\uff1f"}),"\n",(0,c.jsx)(t.p,{children:"\u5373\u4f7f\u662f\u540c\u4e00\u500b component\uff0c\u7576\u5176\u5728\u4e0d\u540c\u5730\u65b9\u88ab\u547c\u53eb\u5230\u5c31\u6703\u7522\u4e00\u500b\u65b0\u7684 component \u5be6\u4f8b\uff0c\u96d6\u7136\u9577\u76f8\u985e\u4f3c\u4f46\u5176\u5be6\u662f\u4e0d\u540c\u7684\u500b\u9ad4\uff0c\u5728 component \u4e2d state \u8cc7\u6599\u4e5f\u6703\u662f\u7368\u7acb\u7684\uff0c\u56e0\u6b64\u4e0d\u6703\u4e92\u901a\u3002"})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},5248:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var o=n(758);const c={},a=o.createContext(c);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);