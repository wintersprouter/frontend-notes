"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[6474],{915:(e,n,o)=>{o.d(n,{Z:()=>s});var t=o(1151),c=o(6222),r=o(5893);function s(e){return(0,r.jsx)(t.Z,{children:(0,r.jsx)(c.Xs,{...e})})}},4675:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var t=o(5893),c=o(1151),r=o(915);const s={},d=void 0,l={id:"react/react-zet-book/\u756b\u9762\u7d44\u88dd\u7684\u85cd\u5716\uff1acomponent \u521d\u63a2",title:"\u756b\u9762\u7d44\u88dd\u7684\u85cd\u5716\uff1acomponent \u521d\u63a2",description:"component",source:"@site/docs/react/react-zet-book/07-\u756b\u9762\u7d44\u88dd\u7684\u85cd\u5716\uff1acomponent \u521d\u63a2.mdx",sourceDirName:"react/react-zet-book",slug:"/react/react-zet-book/\u756b\u9762\u7d44\u88dd\u7684\u85cd\u5716\uff1acomponent \u521d\u63a2",permalink:"/frontend-notes/docs/react/react-zet-book/\u756b\u9762\u7d44\u88dd\u7684\u85cd\u5716\uff1acomponent \u521d\u63a2",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/react-zet-book/07-\u756b\u9762\u7d44\u88dd\u7684\u85cd\u5716\uff1acomponent \u521d\u63a2.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"notesSidebar",previous:{title:"\u55ae\u5411\u8cc7\u6599\u6d41\u8207\u4e00\u5f8b\u91cd\u7e6a\u6e32\u67d3\u7b56\u7565",permalink:"/frontend-notes/docs/react/react-zet-book/\u55ae\u5411\u8cc7\u6599\u6d41\u8207\u4e00\u5f8b\u91cd\u7e6a\u6e32\u67d3\u7b56\u7565"},next:{title:"React \u756b\u9762\u66f4\u65b0\u7684\u767c\u52d5\u6a5f\uff0dstate \u521d\u63a2",permalink:"/frontend-notes/docs/react/react-zet-book/React \u756b\u9762\u66f4\u65b0\u7684\u767c\u52d5\u6a5f\uff0dstate \u521d\u63a2"}},i={},p=[{value:"component",id:"component",level:2},{value:"props\uff1f \u70ba\u4ec0\u9ebc props \u662f\u552f\u8b80\u7684\uff1f",id:"props-\u70ba\u4ec0\u9ebc-props-\u662f\u552f\u8b80\u7684",level:2},{value:"component \u7684 render \u8207 re-render",id:"component-\u7684-render-\u8207-re-render",level:2},{value:"re-render \u7684\u6642\u6a5f\u9ede\uff1a",id:"re-render-\u7684\u6642\u6a5f\u9ede",level:3},{value:"\u70ba\u4ec0\u9ebc component \u547d\u540d\u4e2d\u7684\u9996\u5b57\u6bcd\u5fc5\u9808\u70ba\u5927\u5beb\uff1f",id:"\u70ba\u4ec0\u9ebc-component-\u547d\u540d\u4e2d\u7684\u9996\u5b57\u6bcd\u5fc5\u9808\u70ba\u5927\u5beb",level:2},{value:"\u6b63\u78ba\u547c\u53eb component \u7684\u65b9\u5f0f",id:"\u6b63\u78ba\u547c\u53eb-component-\u7684\u65b9\u5f0f",level:2},{value:"React \u5ef6\u9072\u547c\u53eb\u7279\u6027",id:"react-\u5ef6\u9072\u547c\u53eb\u7279\u6027",level:3},{value:"React \u5982\u4f55\u5224\u65b7\u662f\u4e0d\u662f\u4e00\u500b component \u5be6\u4f8b",id:"react-\u5982\u4f55\u5224\u65b7\u662f\u4e0d\u662f\u4e00\u500b-component-\u5be6\u4f8b",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"component",children:"component"}),"\n",(0,t.jsx)(n.p,{children:"\u7c21\u55ae\u4f86\u8aaa\u5c31\u662f\u756b\u9762\u7684\u85cd\u5716\uff0ccomponent \u5c31\u662f\u7531\u958b\u767c\u8005\u81ea\u884c\u5b9a\u7fa9\u597d\u7684\u5546\u696d\u908f\u8f2f\u3001\u7279\u5b9a\u7684\u6a23\u5f0f\u3001React Element \u756b\u9762\u6240\u7d44\u6210\u7684\uff0c\u5c31\u5982\u540c\u84cb\u623f\u5b50\u4e00\u6a23\uff0c\u5982\u679c\u8aaa\u61c9\u7528\u7a0b\u5f0f\u662f\u4e00\u68df\u623f\u5b50\uff0c\u90a3\u9ebc component \u5c31\u662f\u642d\u5efa\u6210\u623f\u5b50\u7684\u4e0d\u540c\u5efa\u6750\uff1a\u92fc\u7b4b\u3001\u6c34\u6ce5\u3001\u78da\u982d...\uff0c\u900f\u904e\u7d44\u5408\u9019\u4e9b component \u800c\u9010\u6b65\u7d44\u6210\u61c9\u7528\u7a0b\u5f0f\u7684\u756b\u9762\uff0c\u540c\u6642 component \u662f\u53ef\u4ee5\u91cd\u8907\u4f7f\u7528\u7684\uff0c\u8b93\u7a0b\u5f0f\u78bc\u8b8a\u5f97\u66f4\u5bb9\u6613\u7dad\u8b77\u8207\u7ba1\u7406\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f8b\u5982\uff1a\u8a2d\u8a08\u4e00\u500b TodoList \u7684\u61c9\u7528\u7a0b\u5f0f\uff0c\u53ef\u4ee5\u5c07 TodoList \u62c6\u5206\u6210\u7531\u591a\u500b ",(0,t.jsx)(n.code,{children:"<TodoItem />"})," \u5143\u4ef6\u6240\u7d44\u6210\u7684 ",(0,t.jsx)(n.code,{children:"<TodoList/>"})," \u5143\u4ef6\uff0c\u96d6\u7136 ",(0,t.jsx)(n.code,{children:"<TodoItem />"}),"\u9019\u500b\u5143\u4ef6\u662f\u91cd\u7528\u7684\uff0c\u4f46\u6bcf\u4e00\u500b ",(0,t.jsx)(n.code,{children:"<TodoItem />"})," \u90fd\u6709\u5176\u5404\u81ea\u7684\u5143\u4ef6\u72c0\u614b\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="TodoItem.jsx"',children:"const TodoItem = ({ todo }) => {\n  return <li>{todo}</li>;\n};\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="TodoList.jsx"',children:'const TodoList = () => {\n  const todos = ["Todo 1", "Todo 2", "Todo 3"];\n  return (\n    <div>\n      <h1>Todo List</h1>\n      <ul>\n        {todos.map((todo, index) => (\n          <TodoItem key={`${todo}-${index}`} todo={todo} />\n        ))}\n      </ul>\n    </div>\n  );\n};\n'})}),"\n",(0,t.jsx)(n.h2,{id:"props-\u70ba\u4ec0\u9ebc-props-\u662f\u552f\u8b80\u7684",children:"props\uff1f \u70ba\u4ec0\u9ebc props \u662f\u552f\u8b80\u7684\uff1f"}),"\n",(0,t.jsx)(n.p,{children:"props \u6307\u7684\u5c31\u662f\u547c\u53eb component \u6642\u6703\u50b3\u5165 component \u7684\u5c6c\u6027\uff0c\u800c props \u7684\u8cc7\u6599\u578b\u5225\u5728 React \u4e2d\u6c92\u6709\u4efb\u4f55\u9650\u5236\u3002\u7576 component \u63a5\u6536\u5230\u5f9e\u5916\u90e8\u50b3\u5165\u7684 props \u5f8c\uff0c\u5c31\u53ef\u4ee5\u6839\u64da props \u53bb\u7522\u751f\u76f8\u5c0d\u61c9\u7684\u5ba2\u88fd\u5316\u7684\u756b\u9762\u6216\u662f\u5546\u696d\u908f\u8f2f\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="TodoItem.jsx"',children:"// highlight-next-line\nconst TodoItem = ({ title, isDone }) => {\n  //\u5c07\u63a5\u6536\u5230\u7684 props \u4f7f\u7528\u89e3\u69cb\u53d6\u51fa\u5c6c\u6027\u8cc7\u6599\uff0c\u9019\u6a23\u4e5f\u5c31\u53ef\u4ee5\u8ce6\u503c\u5230\u5340\u57df\u8b8a\u6578\u4e2d\n  return(\n    <li>\n      <input type='checkbox' id={title} name={title} checked={isDone} />\n      <label htmlFor={title}>{title}</label>\n    </li>;\n  )\n};\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="TodoList.jsx"',children:'const TodoList = () => {\n  const todos = [\n    {\n      title: "Todo 1",\n      isDone: false,\n    },\n    {\n      title: "Todo 2",\n      isDone: true,\n    },\n    {\n      title: "Todo 3",\n      isDone: false,\n    },\n  ];\n  return (\n    <div>\n      <h1>Todo List</h1>\n      <ul>\n        {todos.map((todo, index) => (\n          <TodoItem\n            key={`${todo}-${index}`}\n            // highlight-start\n            title={todo.title} //\u5c07 title \u5c6c\u6027\u50b3\u5165 <TodoItem/>\n            isDone={todo.isDone} //\u5c07 isDone \u5c6c\u6027\u50b3\u5165 <TodoItem/>\n            // highlight-end\n          />\n        ))}\n      </ul>\n    </div>\n  );\n};\n'})}),"\n",(0,t.jsx)(n.p,{children:"props \u7684\u7279\u6027\u662f\u552f\u8b80\u7684\uff0c\u9019\u662f\u56e0\u70ba React \u7684\u6838\u5fc3\u6982\u5ff5\u662f\u55ae\u5411\u8cc7\u6599\u6d41\uff0c\u6240\u4ee5\u7576\u8cc7\u6599\u4ee5 props \u5c6c\u6027\u50b3\u905e\u5230 components \u5167\u90e8\u6642\uff0c\u70ba\u4e86\u78ba\u4fdd\u8cc7\u6599\u7684\u6e90\u982d\u8207\u53ef\u8ffd\u8e64\u6027\uff0c\u4ee5\u7dad\u6301\u55ae\u5411\u8cc7\u6599\u6d41\u7684\u7279\u6027\uff0c\u6240\u4ee5 props \u662f\u4e0d\u53ef\u4ee5\u88ab\u4fee\u6539\u7684\uff0c\u56e0\u70ba\u7576 props \u88ab\u624b\u52d5\u4fee\u6539\u6642\uff0c\u6211\u5011\u5c31\u7121\u6cd5\u78ba\u5b9a\u8cc7\u6599\u7684\u4f86\u6e90\u662f\u5f9e\u54ea\u88e1\u4f86\u7684\uff0c\u4e5f\u53ef\u80fd\u6703\u51fa\u73fe\u7121\u6cd5\u9810\u671f\u7684\u932f\u8aa4\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"component-\u7684-render-\u8207-re-render",children:"component \u7684 render \u8207 re-render"}),"\n",(0,t.jsx)(n.p,{children:"component \u7684\u4e00\u6b21 render \u6307\u7684\u662f react \u547c\u53eb component function \u5f8c\u7522\u751f\u63cf\u8ff0\u4e00\u6bb5\u756b\u9762\u7684 React Element \u7684\u7d50\u679c\u3002\u53c8 react virtual dom \u70ba\u6a39\u72c0\u8cc7\u6599\u7d50\u69cb\uff0c\u7576\u7236 component \u4e2d\u5305\u542b\u4e00\u500b\u6216\u662f\u591a\u500b\u5b50 component \u6642\uff0c\u7576\u7236 component render \u6642\uff0c\u5176\u6240\u5305\u542b\u7684\u5b50 component \u5c31\u6703\u8ddf\u8457\u9032\u884c\u4e00\u6b21\u7684 render \uff0c\u5c07\u6240 render \u5b8c\u6210\u7684 react element \u88dd\u56de\u4e0a\u4e00\u5c64\u7684\u7236 component \u4e0a\uff0c\u6574\u500b\u904e\u7a0b\u662f\u7531\u4e0a\u800c\u4e0b\uff0c\u6703\u4e00\u76f4\u6301\u7e8c\u904d\u6b77\u5230\u6700\u5e95\u5c64\u7684 component\uff0c\u6700\u5f8c\u6703\u62fc\u88dd\u6210\u4e00\u500b\u5b8c\u6574\u6a39\u72c0\u7d50\u69cb\u7684 react element\u3002"}),"\n",(0,t.jsx)(n.p,{children:"re-render \u5247\u6307\u7684\u662f\u7576 component \u7684 props \u6216 state \u8cc7\u6599\u767c\u751f\u8b8a\u5316\u6642\uff0creact \u6703\u91cd\u65b0\u547c\u53eb component function \u4e26\u91cd\u65b0 render \u4e00\u6b21\uff0c\u6703\u6839\u64da\u65b0\u7684\u539f\u59cb\u8cc7\u6599\u91cd\u65b0\u7522\u751f\u4e00\u4efd\u65b0\u7684 react element\uff0c\u4e26\u900f\u904e diff \u6f14\u7b97\u6cd5\u6bd4\u5c0d\u65b0\u820a\u7684 react element\uff0c\u627e\u51fa\u5dee\u7570\u7684\u90e8\u5206\uff0c\u6700\u5f8c\u518d\u9032\u884c DOM \u66f4\u65b0\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"re-render-\u7684\u6642\u6a5f\u9ede",children:"re-render \u7684\u6642\u6a5f\u9ede\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["component \u672c\u8eab ",(0,t.jsx)(n.code,{children:"setState"})," \u66f4\u65b0\u8cc7\u6599"]}),"\n",(0,t.jsx)(n.li,{children:"\u7236\u5c64 component \u8cc7\u6599\u66f4\u65b0\u50b3\u5165\u5b50 component"}),"\n",(0,t.jsx)(n.li,{children:"Content provider \u7684 component \u66f4\u65b0\u6642"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u70ba\u4ec0\u9ebc-component-\u547d\u540d\u4e2d\u7684\u9996\u5b57\u6bcd\u5fc5\u9808\u70ba\u5927\u5beb",children:"\u70ba\u4ec0\u9ebc component \u547d\u540d\u4e2d\u7684\u9996\u5b57\u6bcd\u5fc5\u9808\u70ba\u5927\u5beb\uff1f"}),"\n",(0,t.jsx)(n.p,{children:"\u539f\u662f\u8ca0\u8cac\u8f49\u8b6f react jsx transpiler \u7684 babel \u6703\u53bb\u6839\u64da\u9996\u5b57\u6bcd\u7684\u5927\u5c0f\u5beb\u53bb\u6c7a\u5b9a\u8981\u8f49\u8b6f\u6210\u54ea\u4e00\u7a2e\u6a19\u7c64\u985e\u578b\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u9996\u5b57\u6bcd\u70ba\u5c0f\u5beb\uff1a transpiler \u6703\u5c07\u5176\u7576\u4f5c\u662f\u5b57\u4e32\u4e26\u4e14\u50b3\u5165 ",(0,t.jsx)(n.code,{children:"React.createElement()"}),"\u65b9\u6cd5\u4f5c\u70ba\u7b2c\u4e00\u500b\u53c3\u6578\uff0cex: ",(0,t.jsx)(n.code,{children:"React.createElement('div')"}),"\u3002\u6700\u5f8c\u53d6\u5f97\u5be6\u969b\u76f8\u5c0d\u7684 DOM \u5143\u7d20\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u9996\u5b57\u6bcd\u70ba\u5927\u5beb\uff1a transpiler \u6703\u5c07\u5176\u7576\u4f5c\u662f\u8b8a\u6578\u540d\u7a31\uff0c\u6703\u5224\u65b7\u70ba component function \u4e26\u4e14\u50b3\u5165 ",(0,t.jsx)(n.code,{children:"React.createElement()"}),"\u65b9\u6cd5\u4f5c\u70ba\u7b2c\u4e00\u500b\u53c3\u6578\uff0cex: ",(0,t.jsx)(n.code,{children:"React.createElement(Hello)"}),"\u3002\u6700\u5f8c\u53d6\u5f97\u4e00\u6bb5\u63cf\u8ff0\u756b\u9762\u7684 React Element\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6b63\u78ba\u547c\u53eb-component-\u7684\u65b9\u5f0f",children:"\u6b63\u78ba\u547c\u53eb component \u7684\u65b9\u5f0f"}),"\n",(0,t.jsx)(n.p,{children:"\u6709\u4e00\u500b component function \u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"function MyComponent() {\n  return <h1>Hello!</h1>;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<MyComponent />"})," \u548c ",(0,t.jsx)(n.code,{children:"{ MyComponent() }"}),"\u6709\u4ec0\u9ebc\u5dee\u7570\uff1f"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"const element1 = <MyComponent />;\nconsole.log(element1); //\u5370\u51fa\u4f86\u6703\u662f <MyComponent />;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7576 ",(0,t.jsx)(n.code,{children:"const element1 = <MyComponent />;"})," \u9019\u884c\u88ab\u57f7\u884c\u5b8c\u6210\u5f8c\uff0c",(0,t.jsx)(n.code,{children:"MyComponent"})," component function \u5176\u5be6\u9084\u6c92\u6709\u88ab\u547c\u53eb\u5230\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'const element1 = <MyComponent />;\nconst element2 = MyComponent();\nconsole.log("element1", element1);\nconsole.log("element2", element2);\n'})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"<MyComponent />"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'const element1 = <MyComponent />;\nconsole.log("element1", element1);\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(1828).Z+"",width:"1172",height:"380"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"{MyComponent()}"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'const element2 = MyComponent();\nconsole.log("element2", element2);\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(3878).Z+"",width:"1170",height:"400"})}),"\n",(0,t.jsx)(n.p,{children:"\u9019\u5169\u8005\u7a2e\u547c\u53eb\u7684\u65b9\u5f0f\u5dee\u7570\u5728\u65bc\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<MyComponent />"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Component \u985e\u578b\u7684 react component \u6709\u5ef6\u9072\u57f7\u884c\u7684\u7279\u6027\uff0c\n\u7576\u7a0b\u5f0f\u78bc\u57f7\u884c\u5230 ",(0,t.jsx)(n.code,{children:"<MyComponent />"})," \u6703\u5148\u544a\u8a34 react \u9019\u500b\u7236 component \u6709\u4ec0\u9ebc\u7d50\u69cb\uff0c\u5728 return \u5b8c\u6210\u5f8c\u6703\u53bb reconciler \u89c0\u5bdf\u662f\u5426\u8f49\u63db\u6210 DOM element\uff0c\u4e4b\u5f8c\u624d\u6703\u4ea4\u7d66 renderer \u53bb\u8655\u7406 DOM element\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<MyComponent />"}),"\u5728\u9019\u88e1\u7684\u610f\u7fa9\u5c31\u662f\u544a\u8a34 react \u6211\u60f3\u8981\u5728\u9019\u88e1\u7522\u751f\u4e00\u500b MyComponent \u5be6\u4f8b/ Fiber Node\uff0c\u4f46\u5176\u5be6\u9084\u6c92\u6709\u88ab\u547c\u53eb\uff0c\u771f\u6b63\u88ab\u547c\u53eb\u662f\u7b49\u7236 component \u5efa\u7acb React element \u5f8c\u3001\u63cf\u8ff0\u5b8c\u756b\u9762\u624d\u6703\u9032\u884c\u547c\u53eb\u5b50 component\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"MyComponent()"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["React \u6703\u5c07\u5b83\u8996\u70ba\u662f\u4e00\u500b\u666e\u901a\u7684 function\uff0c\u7576\u7a0b\u5f0f\u78bc\u57f7\u884c\u5230 ",(0,t.jsx)(n.code,{children:"MyComponent()"})," \u6703\u7acb\u5373\u57f7\u884c ",(0,t.jsx)(n.code,{children:"MyComponent()"}),"\u3002\u5728 runtime \u6642 JavaScript engine \u5206\u8fa8\u4e0d\u51fa\u4f86\u8981\u5efa\u7acb\u4e00\u500b component \u5be6\u4f8b\uff0c\u53ea\u662f\u6703\u55ae\u7d14\u4f5c\u70ba\u63cf\u8ff0 React element \u7684\u8868\u9054\u5f0f\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["React \u4e26\u4e0d\u6703\u5c07 ",(0,t.jsx)(n.code,{children:"MyComponent()"})," \u8996\u70ba component\uff0c\u800c\u4e14\u4e5f\u4e0d\u61c9\u8a72\u5c07 call ",(0,t.jsx)(n.code,{children:"MyComponent()"})," \u53bb\u547c\u53eb component\uff0c\u539f\u56e0\u5728\u65bc component \u80fd\u5920\u5e36\u6709 state \u662f\u56e0\u70ba react \u5c0d hook \u52a0\u6599\uff0c\u6240\u4ee5\u7576\u4ee5\u4e0d\u6b63\u78ba\u7684\u65b9\u5f0f\u53bb\u547c\u53eb component \u6642\uff0c\u5c31\u4e0d\u662f\u5728 React \u6a5f\u5236\u5e95\u4e0b\u904b\u4f5c\uff0c\u9032\u800c\u5c0e\u81f4 hook \u58de\u6389\uff0c\u7522\u751f\u96e3\u4ee5\u8ffd\u8e64\u7684 bug\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"const MyComponent = () => {\n  return (\n    <div>\n      <h1>Hello World</h1>\n    </div>\n  );\n};\n\nfunction App() {\n  return (\n    <main>\n      {MyComponent()}\n      <MyComponent />\n    </main>\n  );\n}\n\nexport default App;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0a\u65b9\u7684\u7a0b\u5f0f\u78bc\u5176\u5be6\u5c31\u7b49\u540c\u65bc\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"function App() {\n  return (\n    <main>\n      {\n        <div>\n          <h1>Hello World</h1>\n        </div>\n      }\n      <MyComponent />\n    </main>\n  );\n}\n\nexport default App;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"react-\u5ef6\u9072\u547c\u53eb\u7279\u6027",children:"React \u5ef6\u9072\u547c\u53eb\u7279\u6027"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e00\u5b9a\u8981\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"React.createElement()"})," \u7522\u751f component \u624d\u80fd\u8981\u6c42 react \u53bb\u5ef6\u9072\u547c\u53eb component function \u548c\u7522\u751f component \u5be6\u4f8b\uff0c\u5ef6\u9072\u547c\u53eb\u7684\u597d\u8655\u662f\u53ef\u4ee5\u5728\u5167\u5bb9\u672a\u66f4\u52d5\u7684\u60c5\u6cc1\u4e0b\u907f\u514d re-render\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5c07\u5b50 component \u5b9a\u7fa9\u5728 \u7236 component \u7684\u5916\u90e8\u4e26\u4e14\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"{}"})," \u7684\u65b9\u5f0f\u547c\u53eb\uff0c\u7576\u7236 component \u56e0\u72c0\u614b\u66f4\u65b0\u800c re-render \u6642\uff0c\u5b50 component \u6703\u56e0\u88ab react \u5224\u65b7\u70ba\u540c\u4e00\u500b component \u6240\u4ee5\u4e0d\u6703\u91cd\u65b0 render\u3002\n\u4f8b\u5b50\uff1a"]}),"\n",(0,t.jsx)(r.Z,{codeSandboxId:"all-compoent-m36qz8?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clvdx88xq00063b6jopw379v7%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clvdx88xq00023b6jgabzj7lc%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clvdx88xq00033b6j335wgwcz%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clvdx88xq00053b6jnfsof8pq%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clvdx88xq00023b6jgabzj7lc%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clvdx88xp00013b6jgryjlq92%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.js%2522%257D%255D%252C%2522id%2522%253A%2522clvdx88xq00023b6jgabzj7lc%2522%252C%2522activeTabId%2522%253A%2522clvdx88xp00013b6jgryjlq92%2522%257D%252C%2522clvdx88xq00053b6jnfsof8pq%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clvdx88xq00043b6j6s1i1d8u%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clvdx88xq00053b6jnfsof8pq%2522%252C%2522activeTabId%2522%253A%2522clvdx88xq00043b6j6s1i1d8u%2522%257D%252C%2522clvdx88xq00033b6j335wgwcz%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clvdx88xq00033b6j335wgwcz%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f9e\u4e2d\u53ef\u4ee5\u767c\u73fe App component \u56e0\u70ba\u9ede\u64ca\u7684 button \u800c\u66f4\u65b0\u4e86 count \u7684 state\uff0c\u8cc7\u6599\u9a45\u52d5\u756b\u9762\u66f4\u65b0\uff0c\u5728\u57f7\u884c\u5230 ",(0,t.jsx)(n.code,{children:"{Child}"})," \u7684\u6642\u5019 ChildComponent \u4e26\u4e0d\u6703\u8ddf\u8457 re-render\uff0c\u63a5\u8457\u57f7\u884c\u81f3 ",(0,t.jsx)(n.code,{children:"<ChildComponent />"})," ChildComponent \u5c31\u6703\u9032\u884c re-render \u91cd\u65b0\u5efa\u7acb\u4e00\u500b React element \uff0c\u9019\u662f\u56e0\u70ba\u5373\u4f7f ",(0,t.jsx)(n.code,{children:"<ChildComponent />"})," \u9577\u76f8\u4e00\u6a23\uff0c\u4f46\u5176\u6642\u5b83\u5011\u7684 reference \u662f\u4e0d\u540c\u7684\uff0c\u6240\u4ee5 react \u6703\u5224\u65b7\u70ba\u4e0d\u540c\u7684 component\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"react-\u5982\u4f55\u5224\u65b7\u662f\u4e0d\u662f\u4e00\u500b-component-\u5be6\u4f8b",children:"React \u5982\u4f55\u5224\u65b7\u662f\u4e0d\u662f\u4e00\u500b component \u5be6\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u4e0a\u65b9\u66fe\u63d0\u5230\u904e\u8ca0\u8cac\u8f49\u8b6f jsx \u7684 transpiler \u662f\u900f\u904e\u9996\u5b57\u6bcd\u7684\u5927\u5beb\u53bb\u5224\u65b7 component function \uff0c\u4f46\u662f\u5c0d\u65bc React \u4f86\u8aaa\uff0cReact \u5247\u662f\u900f\u904e\u547c\u53eb\u65b9\u5f0f\u4f86\u5224\u65b7\uff0c\u9996\u5b57\u6bcd\u7684\u5927\u5c0f\u5beb\u5b9a\u7fa9\u5c0d React \u4f86\u8aaa\u4e26\u6c92\u6709\u610f\u7fa9\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const foo = () => {\n  return <div />;\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"React.createElement "}),"\u65b9\u6cd5\u4f86\u547c\u53eb ",(0,t.jsx)(n.code,{children:"foo"})," \uff0c\u6703\u88ab React \u8996\u70ba\u662f\u4e00\u500b component \u5be6\u4f8b\u3002\u4f46\u662f\u4e0d\u80fd\u88ab\u653e\u5728 JSX \u8a9e\u6cd5\u4e2d\uff0c\u56e0\u70ba transpiler \u6703\u5c07\u5176\u8996\u70ba\u662f\u4e00\u500b\u5b57\u4e32\uff0c\u8a66\u5716\u8f49\u63db\u6210 DOM element\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6240\u4ee5 React \u5224\u65b7\u70ba\u4e00\u500b component \u5be6\u4f8b\u7684\u65b9\u5f0f\u662f\u4e00\u5b9a\u8981\u900f\u904e React element \u7684\u65b9\u5f0f\u547c\u53eb component function\u3002ex: ",(0,t.jsx)(n.code,{children:"<Component/>"}),"\u3002\u4f7f\u7528 React element \u547c\u53eb\u624d\u80fd\u8b93 react \u53bb ",(0,t.jsx)(n.code,{children:"React.createElement "}),"\u65b9\u6cd5\u7522\u751f component \u5be6\u4f8b\u9054\u6210\u5ef6\u9072\u547c\u53eb\u7684\u7279\u6027\uff0c\u53ef\u4ee5\u5f9e component \u5be6\u4f8b\u53d6\u51fa\u8cc7\u6599\u4e26\u4e14\u8b93 hook \u6b63\u5e38\u904b\u4f5c\uff0c\u53e6\u5916\u4e5f\u53ef\u4ee5\u85c9\u7531 React \u5167\u5efa\u7684\u512a\u5316\u6a5f\u5236\u6aa2\u67e5\u5728\u5169\u6b21 render \u904e\u7a0b\u4e2d\u662f\u5426\u70ba\u540c\u4e00\u500b component \u985e\u578b\uff0c\u8fd1\u800c\u6e1b\u5c11\u907f\u514d\u4e0d\u5fc5\u8981\u7684 re-render\u3002"]})]})}function m(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1828:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/element1-7672cb4296e81eab710d2c044cc24a65.png"},3878:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/element2-73f2f8eab16d07e4f4d46213bcbb0ee6.png"}}]);