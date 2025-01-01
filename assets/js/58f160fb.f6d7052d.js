"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[7201],{745:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>r,toc:()=>x});const r=JSON.parse('{"id":"react/React \u4e2d useContext \u8ddf React-MobX \u7684\u5dee\u7570","title":"React \u4e2d useContext \u8ddf React-MobX \u7684\u5dee\u7570","description":"useContext","source":"@site/docs/react/React \u4e2d useContext \u8ddf React-MobX \u7684\u5dee\u7570.mdx","sourceDirName":"react","slug":"/react/useContext-MobX","permalink":"/frontend-notes/docs/react/useContext-MobX","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/React \u4e2d useContext \u8ddf React-MobX \u7684\u5dee\u7570.mdx","tags":[{"inline":true,"label":"2024iT\u9435\u4eba\u8cfd","permalink":"/frontend-notes/docs/tags/2024-i-t\u9435\u4eba\u8cfd"},{"inline":true,"label":"React","permalink":"/frontend-notes/docs/tags/react"},{"inline":true,"label":"useContext","permalink":"/frontend-notes/docs/tags/use-context"},{"inline":true,"label":"React-MobX","permalink":"/frontend-notes/docs/tags/react-mob-x"}],"version":"current","frontMatter":{"slug":"useContext-MobX","title":"React \u4e2d useContext \u8ddf React-MobX \u7684\u5dee\u7570","authors":["ashley"],"tags":["2024iT\u9435\u4eba\u8cfd","React","useContext","React-MobX"],"keywords":["2024iT\u9435\u4eba\u8cfd","React","useContext","React-MobX"]},"sidebar":"notesSidebar","previous":{"title":"useCallback \u8207 useMemo \u7684\u6b63\u78ba\u4f7f\u7528\u6642\u6a5f","permalink":"/frontend-notes/docs/react/react-zet-book/useCallback-useMemo"},"next":{"title":"useRef \u7684\u4f7f\u7528\u60c5\u5883","permalink":"/frontend-notes/docs/react/useRef"}}');var o=t(6070),s=t(5248),c=t(2360);const d={slug:"useContext-MobX",title:"React \u4e2d useContext \u8ddf React-MobX \u7684\u5dee\u7570",authors:["ashley"],tags:["2024iT\u9435\u4eba\u8cfd","React","useContext","React-MobX"],keywords:["2024iT\u9435\u4eba\u8cfd","React","useContext","React-MobX"]},l="React \u4e2d useContext \u8ddf React-MobX \u7684\u5dee\u7570",i={},x=[{value:"<code>useContext</code>",id:"usecontext",level:2},{value:"\u900f\u904e Context \u50b3\u905e\u8cc7\u6599",id:"\u900f\u904e-context-\u50b3\u905e\u8cc7\u6599",level:3},{value:"\u66f4\u65b0 <code>Context</code> \u7684\u503c",id:"\u66f4\u65b0-context-\u7684\u503c",level:3},{value:"\u7576 <code>Context</code> \u7684\u503c\u6539\u8b8a\u6642\uff0c\u6703 re-render \u5b50\u5143\u4ef6",id:"\u7576-context-\u7684\u503c\u6539\u8b8a\u6642\u6703-re-render-\u5b50\u5143\u4ef6",level:3},{value:"React-MobX",id:"react-mobx",level:2},{value:"<code>useContext</code> \u548c React-MobX \u7684\u5dee\u7570",id:"usecontext-\u548c-react-mobx-\u7684\u5dee\u7570",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsxs)(n.h1,{id:"react-\u4e2d-usecontext-\u8ddf-react-mobx-\u7684\u5dee\u7570",children:["React \u4e2d ",(0,o.jsx)(n.code,{children:"useContext"})," \u8ddf React-MobX \u7684\u5dee\u7570"]})}),"\n",(0,o.jsx)(n.h2,{id:"usecontext",children:(0,o.jsx)(n.code,{children:"useContext"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"useContext"})," \u662f react \u63d0\u4f9b\u7684\u4e00\u500b hook\uff0c\u53ef\u4ee5\u8b93\u6211\u5011\u900f\u904e\u8b80\u53d6\u548c\u8a02\u95b1\u5143\u4ef6\u4e2d ",(0,o.jsx)(n.code,{children:"context"})," \u5171\u4eab\u5143\u4ef6\u4e4b\u9593\u7684\u8cc7\u6599\uff0c\u4e3b\u8981\u662f\u7528\u4f86\u89e3\u6c7a\u72c0\u614b\u63d0\u5347\u548c prop drilling \u7684\u554f\u984c\uff08\u5373\u5c64\u5c64\u50b3\u905e props\uff09\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="App.jsx"',children:'import { createContext, useContext, useRef, useState } from "react";\n\nconst AuthContext = createContext(null);\n\nexport default function App() {\n  const [currentUser, setCurrentUser] = useState("");\n  console.log("App rendered");\n  return (\n    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>\n      <Form />\n    </AuthContext.Provider>\n  );\n}\n\nfunction WelcomeCard() {\n  const { currentUser, setCurrentUser } = useContext(AuthContext);\n  console.log("WelcomeCard rendered");\n  return (\n    <div>\n      <h1>Welcome, {currentUser}!</h1>\n      <button onClick={() => setCurrentUser("")}>Log out</button>\n    </div>\n  );\n}\n\nfunction News() {\n  console.log("News rendered");\n  return (\n    <div>\n      <h1>Latest News</h1>\n      <ul>\n        <li>ewrweorjewoirj</li>\n        <li>ewwwwwrj</li>\n        <li>wjwirjwi</li>\n      </ul>\n    </div>\n  );\n}\n\nfunction Form() {\n  const { currentUser, setCurrentUser } = useContext(AuthContext);\n  const [name, setName] = useState("");\n\n  function handleSubmit(event) {\n    event.preventDefault();\n    setCurrentUser(name);\n  }\n  console.log("Form rendered");\n  return (\n    <section>\n      {currentUser && <WelcomeCard />}\n      {!currentUser && (\n        <form onSubmit={handleSubmit}>\n          <div>\n            <label name="username">\n              username\n              <input\n                type={"text"}\n                id="username"\n                onChange={(event) => setName(event.target.value)}\n              />\n            </label>\n          </div>\n          <button type="submit">Log in</button>\n        </form>\n      )}\n      <News />\n    </section>\n  );\n}\n'})}),"\n",(0,o.jsx)(c.A,{codeSandboxId:"5lfkj4"}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u9019\u4f8b\u5b50\u4e2d\uff0c\u4f7f\u7528 useContext \u5be6\u4f5c\u4e86\u4e00\u500b\u7c21\u55ae\u7684\u767b\u5165\u8868\u55ae\uff0c\u7576\u4f7f\u7528\u8005\u8f38\u5165\u540d\u7a31\u5f8c\uff0c\u9ede\u64ca\u767b\u5165\u6309\u9215\uff0c\u5c31\u6703\u986f\u793a\u6b61\u8fce\u5361\u7247\uff0c\u4e26\u4e14\u53ef\u4ee5\u767b\u51fa\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728 App \u5143\u4ef6\u4e2d\uff0c\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"AuthContext.Provider"})," \u63d0\u4f9b\u4e86 ",(0,o.jsx)(n.code,{children:"currentUser"})," \u548c ",(0,o.jsx)(n.code,{children:"setCurrentUser"})," \u5169\u500b\u65b9\u6cd5\uff0c\u900f\u904e ",(0,o.jsx)(n.code,{children:"useContext"})," \u53ef\u4ee5\u5728\u5b50\u5143\u4ef6\u4e2d\u53d6\u5f97\u9019\u5169\u500b\u65b9\u6cd5\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5b50\u5143\u4ef6\u900f\u904e ",(0,o.jsx)(n.code,{children:"setCurrentUser"})," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u6539\u8b8a ",(0,o.jsx)(n.code,{children:"AuthContext"})," \u7684 ",(0,o.jsx)(n.code,{children:"currentUser"})," \u7684\u503c\uff0c\u4e26\u4e14\u91cd\u65b0 render \u5b50\u5143\u4ef6\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"\u900f\u904e-context-\u50b3\u905e\u8cc7\u6599",children:"\u900f\u904e Context \u50b3\u905e\u8cc7\u6599"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728 ",(0,o.jsx)(n.code,{children:"WelcomeCard"})," \u4e2d\uff0c\u6211\u5011\u900f\u904e ",(0,o.jsx)(n.code,{children:"useContext"})," \u53d6\u5f97 ",(0,o.jsx)(n.code,{children:"currentUser"})," \u548c ",(0,o.jsx)(n.code,{children:"setCurrentUser"}),"\uff0c\u4e0d\u9700\u8981\u900f\u904e props \u50b3\u905e\u8cc7\u6599\uff0c\u5c31\u53ef\u4ee5\u53d6\u5f97 ",(0,o.jsx)(n.code,{children:"currentUser"})," \u7684\u503c\u3002"]}),"\n",(0,o.jsxs)(n.h3,{id:"\u66f4\u65b0-context-\u7684\u503c",children:["\u66f4\u65b0 ",(0,o.jsx)(n.code,{children:"Context"})," \u7684\u503c"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5728 App \u5143\u4ef6\u4e2d\uff0c",(0,o.jsx)(n.code,{children:"<AuthContext.Provider value={{ currentUser, setCurrentUser }}></<AuthContext.Provider>"}),"\u5411\u4e0b\u5b50\u5143\u4ef6\u63d0\u4f9b ",(0,o.jsx)(n.code,{children:"AuthContext"})," \u7684\u521d\u59cb\u503c ",(0,o.jsx)(n.code,{children:"currentUser"})," \u8207\u66f4\u65b0\u65b9\u6cd5 setCurrentUser \u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5728 ",(0,o.jsx)(n.code,{children:"Form"})," \u5143\u4ef6\u4e2d\uff0c\u6211\u5011\u900f\u904e",(0,o.jsx)(n.code,{children:"const { currentUser, setCurrentUser } = useContext(AuthContext);"})," \u53bb\u53d6\u5f97 ",(0,o.jsx)(n.code,{children:"currentUser"})," \u548c ",(0,o.jsx)(n.code,{children:"setCurrentUser"}),"\uff0c\u4e26\u4e14\u5728 ",(0,o.jsx)(n.code,{children:"handleSubmit"})," \u65b9\u6cd5\u4e2d\uff0c\u900f\u904e ",(0,o.jsx)(n.code,{children:"setCurrentUser(name)"})," \u53bb\u66f4\u65b0 ",(0,o.jsx)(n.code,{children:"AuthContext"}),"\u7684",(0,o.jsx)(n.code,{children:"currentUser"})," \u7684\u503c\u3002"]}),"\n",(0,o.jsxs)(n.h3,{id:"\u7576-context-\u7684\u503c\u6539\u8b8a\u6642\u6703-re-render-\u5b50\u5143\u4ef6",children:["\u7576 ",(0,o.jsx)(n.code,{children:"Context"})," \u7684\u503c\u6539\u8b8a\u6642\uff0c\u6703 re-render \u5b50\u5143\u4ef6"]}),"\n",(0,o.jsxs)(n.p,{children:["\u63a5\u7e8c\u4e0a\u65b9\uff0c\u7576\u63d0\u4ea4\u8868\u55ae\u5f8c\uff0c",(0,o.jsx)(n.code,{children:"currentUser"})," \u7684\u503c\u6539\u8b8a\uff0c",(0,o.jsx)(n.code,{children:"AuthContext"})," \u7684 ",(0,o.jsx)(n.code,{children:"currentUser"})," \u7684\u503c\u4e5f\u6703\u6539\u8b8a\uff0c\u9019\u6642\u5019\u5f9e ",(0,o.jsx)(n.code,{children:"AuthContext"})," \u6240\u5728\u7684\u5143\u4ef6 ",(0,o.jsx)(n.code,{children:"App"})," \u5411\u4e0b\u958b\u59cb re-render\uff0c\u4e26\u4e14\u63a5\u7e8c re-render \u5b50\u5143\u4ef6 ",(0,o.jsx)(n.code,{children:"Form"}),"\u3001 ",(0,o.jsx)(n.code,{children:"WelcomeCard"}),"\u3001",(0,o.jsx)(n.code,{children:"News"}),"\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"react-mobx",children:"React-MobX"}),"\n",(0,o.jsx)(n.p,{children:"React-MobX \u662f\u4e00\u500b React \u61c9\u7528\u7a0b\u5f0f\u72c0\u614b\u7ba1\u7406\u7684\u5de5\u5177\uff0c\u900f\u904e\u89c0\u5bdf\u8005\u6a21\u5f0f\uff0c\u7576 MobX \u72c0\u614b\u8b8a\u66f4\u6642\u5143\u4ef6\u53ef\u4ee5\u81ea\u52d5\u66f4\u65b0 UI\uff0c\u4e0d\u9700\u8981\u624b\u52d5\u53bb\u66f4\u65b0\u5143\u4ef6\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="App.jsx"',children:'import Counter from "./Counter";\nimport counterStore from "./counterStore";\nimport { observer } from "mobx-react-lite";\n\nconst Board = observer(() => {\n  console.log("Board rendered");\n  return <h1>Count: {counterStore.count}</h1>;\n});\n\nexport default function App() {\n  console.log("App rendered");\n  return (\n    <div>\n      <h1>MobX-State-Tree \u8a08\u6578\u5668\u7bc4\u4f8b</h1>\n      <Board />\n      <Counter />\n    </div>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="counterStore.js"',children:'import { types } from "mobx-state-tree";\n\n// \u5b9a\u7fa9\u4e00\u500b Counter \u6a21\u578b\nconst CounterModel = types\n  .model({\n    count: types.number, // \u53ef\u89c0\u5bdf\u7684\u72c0\u614b\n  })\n  .actions((self) => ({\n    // \u5b9a\u7fa9 action \u4f86\u4fee\u6539\u72c0\u614b\n    increment() {\n      self.count += 1;\n    },\n    decrement() {\n      self.count -= 1;\n    },\n  }));\n\n// \u5275\u5efa\u6a21\u578b\u5be6\u4f8b\nconst counterStore = CounterModel.create({\n  count: 0,\n});\n\nexport default counterStore;\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u4f7f\u7528\u4e86 mobx-state-tree \u4f86\u5b9a\u7fa9\u4e00\u500b\u7d50\u69cb\u5316\u7684\u72c0\u614b\u6a39 ",(0,o.jsx)(n.code,{children:"CounterModel"}),"\uff0c\u5176\u4e2d\u6709\u4e00\u500b ",(0,o.jsx)(n.code,{children:"count"})," \u72c0\u614b\u548c\u5169\u500b\u4fee\u6539\u8a72\u72c0\u614b\u7684 action (",(0,o.jsx)(n.code,{children:"increment"})," \u548c ",(0,o.jsx)(n.code,{children:"decrement"}),")\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"types.model"})," \u5b9a\u7fa9 MobX-State-Tree \u6a21\u578b\uff0c\u7136\u5f8c\u901a\u904e actions \u4f86\u5b9a\u7fa9\u4fee\u6539\u72c0\u614b\u7684\u65b9\u6cd5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="Counter.jsx"',children:'import React from "react";\nimport { observer } from "mobx-react-lite"; // observer \u4f7f React \u5143\u4ef6\u80fd\u89c0\u5bdf MobX \u7684\u72c0\u614b\u8b8a\u66f4\nimport counterStore from "./counterStore"; // \u5f15\u5165\u525b\u624d\u5b9a\u7fa9\u7684 store\n\nconst Counter = observer(() => {\n  console.log("Counter rendered");\n  return (\n    <div>\n      <button onClick={() => counterStore.increment()}>Increment</button>\n      <button onClick={() => counterStore.decrement()}>Decrement</button>\n    </div>\n  );\n});\n\nexport default Counter;\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u4f7f\u7528 observer \u8b93 React \u5143\u4ef6\u80fd\u5920\u89c0\u5bdf\u4e26\u53cd\u61c9 MobX-State-Tree \u72c0\u614b\u7684\u8b8a\u5316\u3002\u7576 ",(0,o.jsx)(n.code,{children:"counterStore.count"})," \u6539\u8b8a\u6642\uff0cReact \u5143\u4ef6\u6703\u81ea\u52d5\u91cd\u65b0\u6e32\u67d3\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u900f\u904e\u6309\u9215\u9ede\u64ca\u4f86\u89f8\u767c ",(0,o.jsx)(n.code,{children:"increment"})," \u548c ",(0,o.jsx)(n.code,{children:"decrement"})," action\uff0c\u9019\u4e9b\u65b9\u6cd5\u6703\u81ea\u52d5\u66f4\u65b0\u72c0\u614b\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u5728\u9019\u500b\u4f8b\u5b50\u4e2d\uff0c\u53ea\u6703\u91cd\u65b0\u6e32\u67d3 ",(0,o.jsx)(n.code,{children:"Board"})," \u5143\u4ef6\uff0c\u4e0d\u6703\u50cf\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"useContext"})," \u4e00\u6a23\u5411\u4e0b\u66f4\u65b0\u4f7f\u7528\u8a72 ",(0,o.jsx)(n.code,{children:"context"}),"\u7684\u5b50\u5143\u4ef6\u3002"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://codesandbox.io/p/sandbox/5lkzr4",children:"https://codesandbox.io/p/sandbox/5lkzr4"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(c.A,{codeSandboxId:"5lkzr4"}),"\n",(0,o.jsxs)(n.h2,{id:"usecontext-\u548c-react-mobx-\u7684\u5dee\u7570",children:[(0,o.jsx)(n.code,{children:"useContext"})," \u548c React-MobX \u7684\u5dee\u7570"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"\u7279\u6027"}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.code,{children:"useContext "})}),(0,o.jsx)(n.th,{children:"React-MobX"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"\u72c0\u614b\u7ba1\u7406\u7bc4\u570d"}),(0,o.jsx)(n.td,{children:"\u53ef\u4ee5\u5305\u88f9\u5728\u7279\u5b9a component tree \uff0c\u7bc4\u570d\u9748\u6d3b"}),(0,o.jsx)(n.td,{children:"\u53ea\u80fd\u5728\u5168\u57df\u6700\u4e0a\u5c64"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"\u72c0\u614b\u8b8a\u66f4\u8207\u66f4\u65b0\u6a5f\u5236"}),(0,o.jsxs)(n.td,{children:["\u7576 ",(0,o.jsx)(n.code,{children:"context"})," \u7684\u503c\u66f4\u65b0\u6642\uff0c\u6240\u6709\u4f7f\u7528\u8a72 ",(0,o.jsx)(n.code,{children:"context"})," \u7684\u5143\u4ef6\u90fd\u6703\u91cd\u65b0\u6e32\u67d3\uff0c\u7121\u8ad6\u9019\u4e9b\u7d44\u4ef6\u662f\u5426\u5be6\u969b\u4f9d\u8cf4\u88ab\u66f4\u65b0\u7684\u503c\u3002"]}),(0,o.jsx)(n.td,{children:"\u50c5\u91cd\u65b0\u6e32\u67d3\u89c0\u5bdf\u5230\u72c0\u614b\u8b8a\u66f4\u7684\u5143\u4ef6\uff0c\u7cbe\u7d30\u63a7\u5236\u6e32\u67d3\u7c92\u5ea6"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"\u61c9\u7528\u5834\u666f"}),(0,o.jsx)(n.td,{children:"\u9069\u5408\u591a\u8a9e\u7cfb\u3001\u4e3b\u984c\u7b49\u8f03\u7c21\u55ae\u7684\u5168\u57df\u6027\u7684\u72c0\u614b\u7ba1\u7406"}),(0,o.jsx)(n.td,{children:"\u9069\u5408\u8f03\u5927\u578b\u7684\u61c9\u7528\u7a0b\u5f0f\uff0c\u9700\u8981\u66f4\u7d30\u7c92\u5ea6\u7684\u72c0\u614b\u7ba1\u7406"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},2360:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(5248),o=t(2397),s=t(6070);function c(e){return(0,s.jsx)(r.x,{children:(0,s.jsx)(o.dH,{...e})})}}}]);