"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[7586],{1670:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"react/react-zet-book/Immutable update","title":"Immutable update","description":"Shallow clone \u8207 deep clone \u7684\u5340\u5225","source":"@site/docs/react/react-zet-book/13-Immutable update.mdx","sourceDirName":"react/react-zet-book","slug":"/react/react-zet-book/immutable-update","permalink":"/frontend-notes/docs/react/react-zet-book/immutable-update","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/react-zet-book/13-Immutable update.mdx","tags":[{"inline":true,"label":"2024iT\u9435\u4eba\u8cfd","permalink":"/frontend-notes/docs/tags/2024-i-t\u9435\u4eba\u8cfd"},{"inline":true,"label":"React","permalink":"/frontend-notes/docs/tags/react"},{"inline":true,"label":"\u300aReact \u601d\u7dad\u9032\u5316\u300b\u8b80\u66f8\u7b46\u8a18","permalink":"/frontend-notes/docs/tags/\u300a-react-\u601d\u7dad\u9032\u5316\u300b\u8b80\u66f8\u7b46\u8a18"},{"inline":true,"label":"immutable update","permalink":"/frontend-notes/docs/tags/immutable-update"},{"inline":true,"label":"shallow clone","permalink":"/frontend-notes/docs/tags/shallow-clone"},{"inline":true,"label":"deep clone","permalink":"/frontend-notes/docs/tags/deep-clone"}],"version":"current","sidebarPosition":13,"frontMatter":{"slug":"immutable-update","title":"Immutable update","authors":["ashley"],"tags":["2024iT\u9435\u4eba\u8cfd","React","\u300aReact \u601d\u7dad\u9032\u5316\u300b\u8b80\u66f8\u7b46\u8a18","immutable update","shallow clone","deep clone"],"keywords":["2024iT\u9435\u4eba\u8cfd","React","\u300aReact \u601d\u7dad\u9032\u5316\u300b\u8b80\u66f8\u7b46\u8a18","immutable update","shallow clone","deep clone"]},"sidebar":"notesSidebar","previous":{"title":"\u7dad\u6301 React \u8cc7\u6599\u6d41\u53ef\u9760\u6027\u7684\u95dc\u9375\uff1aimmutable state","permalink":"/frontend-notes/docs/react/react-zet-book/\u7dad\u6301 React \u8cc7\u6599\u6d41\u53ef\u9760\u6027\u7684\u95dc\u9375\uff1aimmutable state"},"next":{"title":"Component \u7684\u4e09\u5927\u751f\u547d\u9031\u671f","permalink":"/frontend-notes/docs/react/react-zet-book/component-life-cycle"}}');var l=o(6070),s=o(5248),c=o(2360);const r={slug:"immutable-update",title:"Immutable update",authors:["ashley"],tags:["2024iT\u9435\u4eba\u8cfd","React","\u300aReact \u601d\u7dad\u9032\u5316\u300b\u8b80\u66f8\u7b46\u8a18","immutable update","shallow clone","deep clone"],keywords:["2024iT\u9435\u4eba\u8cfd","React","\u300aReact \u601d\u7dad\u9032\u5316\u300b\u8b80\u66f8\u7b46\u8a18","immutable update","shallow clone","deep clone"]},i=void 0,d={},a=[{value:"Shallow clone \u8207 deep clone \u7684\u5340\u5225",id:"shallow-clone-\u8207-deep-clone-\u7684\u5340\u5225",level:2},{value:"Shallow clone",id:"shallow-clone",level:2},{value:"Shallow clone \u7684\u65b9\u6cd5",id:"shallow-clone-\u7684\u65b9\u6cd5",level:3},{value:"spread \u8a9e\u6cd5",id:"spread-\u8a9e\u6cd5",level:4},{value:"Object.assign()",id:"objectassign",level:4},{value:"Deep clone",id:"deep-clone",level:2},{value:"Deep clone \u7684\u65b9\u6cd5",id:"deep-clone-\u7684\u65b9\u6cd5",level:3},{value:"<code>JSON.parse(JSON.stringify(...))</code>",id:"jsonparsejsonstringify",level:4},{value:"<code>structuredClone(value)</code>",id:"structuredclonevalue",level:4},{value:"\u624b\u5beb\u905e\u8ff4\u51fd\u5f0f",id:"\u624b\u5beb\u905e\u8ff4\u51fd\u5f0f",level:4},{value:"\u70ba\u4ec0\u9ebc\u4ee5 deep clone \u4f86\u9032\u884c\u7269\u4ef6\u6216\u9663\u5217\u8cc7\u6599\u7684 immutable update \u4e0d\u662f\u4e00\u500b\u597d\u65b9\u6cd5?",id:"\u70ba\u4ec0\u9ebc\u4ee5-deep-clone-\u4f86\u9032\u884c\u7269\u4ef6\u6216\u9663\u5217\u8cc7\u6599\u7684-immutable-update-\u4e0d\u662f\u4e00\u500b\u597d\u65b9\u6cd5",level:2},{value:"\u4f7f\u7528 deep clone \u9032\u884c state \u66f4\u65b0",id:"\u4f7f\u7528-deep-clone-\u9032\u884c-state-\u66f4\u65b0",level:3},{value:"\u4f7f\u7528 shallow clone \u9032\u884c state \u66f4\u65b0",id:"\u4f7f\u7528-shallow-clone-\u9032\u884c-state-\u66f4\u65b0",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"shallow-clone-\u8207-deep-clone-\u7684\u5340\u5225",children:"Shallow clone \u8207 deep clone \u7684\u5340\u5225"}),"\n",(0,l.jsx)(n.p,{children:"\u9996\u5148\u8981\u8b1b\u5230 Javascript \u300c\u7269\u4ef6\u50b3\u5740\u300d\u7684\u7279\u6027\uff0c\u5728 Javascript \u4e2d\u7269\u4ef6\u5728\u5efa\u7acb\u7684\u6642\u5019\u6703\u5c07\u8a18\u61b6\u9ad4\u7684\u4f4d\u5740\u8ce6\u4e88\u81f3\u8b8a\u6578\u4e0a\uff0c\u5e38\u5e38\u6709\u591a\u500b\u8b8a\u6578\u5171\u7528\u540c\u4e00\u500b\u4f4d\u5740\uff0c\u6240\u4ee5 mutate \u5176\u4e2d\u4e00\u500b\u7269\u4ef6\u7684\u5c6c\u6027\u7684\u5167\u5bb9\u6642\uff0c\u5176\u4ed6\u7684\u8b8a\u6578\u4e5f\u6703\u53d7\u5230\u5f71\u97ff\uff0c\u5c31\u662f\u56e0\u70ba\u4ed6\u5011\u5171\u7528\u540c\u4e00\u500b\u8a18\u61b6\u9ad4\u4f4d\u5740\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"shallow-clone",children:"Shallow clone"}),"\n",(0,l.jsxs)(n.p,{children:["Shallow clone \u53c8\u7a31\u6dfa\u8907\u88fd\uff0c\u7576\u60f3\u8981\u5c07\u7269\u4ef6\u91cd\u65b0\u8ce6\u4e88\u81f3\u53e6\u5916\u4e00\u500b\u7269\u4ef6\u7684\u6642\u5019\u53c8\u4e0d\u60f3\u8981\u4fee\u6539\u5176\u539f\u59cb\u503c\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 Shallow clone ",(0,l.jsx)(n.strong,{children:"\u5c07\u7269\u4ef6\u5167\u7b2c\u4e00\u5c64\u7684\u5c6c\u6027\u8907\u88fd\u5230\u53e6\u5916\u4e00\u500b reference \u4e0a"}),"\uff0c\u9019\u6a23\u65e2\u539f\u4f86\u7684\u7269\u4ef6\u7684 reference \u4e0d\u540c\uff0c\u4e5f\u53ef\u4ee5\u907f\u514d\u4fee\u6539\u5230\u539f\u59cb\u7269\u4ef6\u7684\u5c6c\u6027\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"shallow-clone-\u7684\u65b9\u6cd5",children:"Shallow clone \u7684\u65b9\u6cd5"}),"\n",(0,l.jsx)(n.h4,{id:"spread-\u8a9e\u6cd5",children:(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",children:"spread \u8a9e\u6cd5"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'const memberInfo = {\n  id: 120,\n  name: "Andy",\n  isVip: false,\n  birthday: "1996/01/12",\n  hobbies: ["Photography", "Cooking", "Painting"],\n};\n\nconst copyBySpread = { ...memberInfo }; //\u4f7f\u7528 spread \u8a9e\u6cd5\u8907\u88fd\u7269\u4ef6 memberInfo\n\nconsole.log("copyBySpread === memberInfo", copyBySpread === memberInfo); //false\n//\u53ef\u4ee5\u78ba\u5b9a copyBySpread \u8207 memberInfo \u9019\u5169\u500b\u7269\u4ef6\u7684 reference \u4e0d\u540c\u7684\n\nconsole.log(\n  "copyBySpread.hobbies === memberInfo.hobbies",\n  copyBySpread.hobbies === memberInfo.hobbies,\n); //true\n\n//memberInfo \u4e2d\u7684 hobbies \u5c6c\u6027\u662f\u4e00\u500b\u9663\u5217\uff0c\u7269\u4ef6\u7684\u6bd4\u5c0d === \u5c31\u662f\u5176\u8a18\u61b6\u9ad4\u7684\u4f4d\u5740\uff0c\n//\u53ef\u4ee5\u78ba\u5b9a copyBySpread \u8207 memberInfo \u9019\u5169\u500b\u7269\u4ef6\u7684 hobbies \u9019\u500b\u5c6c\u6027\u90fd\u662f\u6307\u5411\u540c\u4e00\u500b reference \u7684\uff0c\n//\u6240\u4ee5\u7576\u4fee\u6539 copyBySpread.hobbies \u7684\u5167\u5bb9\u6642\uff0c\u4e5f\u6703\u5f71\u97ff\u5230 memberInfo.hobbies \u7684\u5167\u5bb9\u3002\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u90a3\u5982\u679c\u60f3\u8981\u6dfa\u8907\u88fd\u7269\u4ef6\u5167\u5de2\u72c0\u7684\u7269\u4ef6\u6216\u7269\u4ef6\u53ef\u4ee5\u9019\u9ebc\u505a\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'const copyNestBySpread = {\n  ...memberInfo, //\u5148\u6dfa\u8907\u88fd memberInfo \u7b2c\u4e00\u5c64\u7684\u5c6c\u6027\n  hobbies: [...memberInfo.hobbies], //\u5728 copyNestBySpread \u7269\u4ef6\u4e2d\u65b0\u589e hobbies \u5c6c\u6027\uff0c\u7136\u5f8c\u5c07 memberInfo.hobbies \u9663\u5217\u6dfa\u8907\u88fd\u5230 copyNestBySpread.hobbies\n};\n\n//\u9019\u6642\u5019\u518d\u6b21\u6aa2\u67e5 copyNestBySpread.hobbies \u8207 memberInfo.hobbies \u7684 reference \u662f\u5426\u76f8\u540c\nconsole.log(\n  "copyNestBySpread.hobbies === memberInfo.hobbies",\n  copyNestBySpread.hobbies === memberInfo.hobbies,\n); //false\n// \u9019\u6642\u5019\u4fee\u6539 copyNestBySpread.hobbies \u7684\u5167\u5bb9\u5c31\u4e0d\u6703\u5f71\u97ff\u5230 memberInfo.hobbies \u7684\u5167\u5bb9\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528 spread \u5c55\u958b\u904b\u7b97\u7b26\u7684\u597d\u8655\u662f\u8a9e\u6cd5\u76f8\u5c0d\u7c21\u6f54\uff0c\u8b93\u7a0b\u5f0f\u78bc\u5bb9\u6613\u95b1\u8b80\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"objectassign",children:(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",children:"Object.assign()"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'const memberInfo = {\n  id: 120,\n  name: "Andy",\n  isVip: false,\n  birthday: "1996/01/12",\n  hobbies: ["Photography", "Cooking", "Painting"],\n};\n\nconst copyByAssign = Object.assign({}, memberInfo); ////\u4f7f\u7528 Object.assign() \u8907\u88fd\u7269\u4ef6 memberInfo\n\nconsole.log("copyByAssign === memberInfo", copyByAssign === memberInfo); //false\n\nconsole.log(\n  "copyByAssign.hobbies === memberInfo.hobbies",\n  copyByAssign.hobbies === memberInfo.hobbies,\n); //true\n'})}),"\n",(0,l.jsx)(n.h2,{id:"deep-clone",children:"Deep clone"}),"\n",(0,l.jsx)(n.p,{children:"Deep clone \u53c8\u7a31\u6df1\u8907\u88fd\uff0c\u76f8\u5c0d\u6dfa\u8907\u88fd\u50c5\u662f\u5c07\u7269\u4ef6\u7684\u7b2c\u4e00\u5c64\u8907\u88fd\uff0c\u6df1\u8907\u88fd\u5247\u662f\u5c07\u7269\u4ef6\u7684\u6240\u6709\u5c64\u7d1a\u90fd\u8907\u88fd\u4e00\u4efd\uff0c\u6df1\u8907\u88fd\u7576\u9047\u5230\u5de2\u72c0\u7269\u4ef6\u6216\u662f\u9663\u5217\u6642\uff0c\u5c31\u6703\u9032\u884c\u6df1\u5c64\u7684\u904d\u6b77\uff0c\u5c07\u6bcf\u4e00\u6b21\u5c64\u7684\u503c\u90fd\u9032\u884c\u8907\u88fd\uff0c\u5982\u6b64\u4e00\u4f86\u8907\u88fd\u51fa\u4f86\u7684\u7269\u4ef6\u7576\u88ab\u4fee\u6539\u6642\u5c31\u4e0d\u6703\u5f71\u97ff\u5230\u539f\u4f86\u7684\u7269\u4ef6\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"deep-clone-\u7684\u65b9\u6cd5",children:"Deep clone \u7684\u65b9\u6cd5"}),"\n",(0,l.jsx)(n.h4,{id:"jsonparsejsonstringify",children:(0,l.jsx)(n.code,{children:"JSON.parse(JSON.stringify(...))"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'const memberInfo = {\n  id: 120,\n  name: "Andy",\n  isVip: false,\n  birthday: "1996/01/12",\n  hobbies: ["Photography", "Cooking", "Painting"],\n};\n\n//\u5148\u5c07 memberInfo \u7269\u4ef6\u8f49\u63db\u6210 JSON \u5b57\u4e32\uff0c\u518d\u5c07 JSON \u5b57\u4e32\u8f49\u63db\u6210\u7269\u4ef6\nfunction deepCopy(item) {\n  return JSON.parse(JSON.stringify(item));\n}\n\nconst deepCopyByJSON = deepCopy(memberInfo);\n\nconsole.log("deepCopyByJSON === memberInfo", deepCopyByJSON === memberInfo); //false\nconsole.log(\n  "deepCopyByJSON.hobbies === memberInfo.hobbies",\n  deepCopyByJSON.hobbies === memberInfo.hobbies,\n); //false\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u4f46\u662f\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"JSON.parse(JSON.stringify(...))"})," \u9032\u884c\u6df1\u8907\u88fd\u6642\uff0c\u5982\u679c\u7269\u4ef6\u5167\u7684\u5c6c\u6027\u6709\u4e0d\u53ef\u4ee5\u5e8f\u5217\u5316\u7684\u503c\uff0c\u5c31\u6703\u5c0e\u81f4\u6df1\u8907\u88fd\u5931\u6557\u3002ex: ",(0,l.jsx)(n.code,{children:"undefined"}),"\u3001",(0,l.jsx)(n.code,{children:"function"}),"\u3001",(0,l.jsx)(n.code,{children:"symbol"}),"\u3001",(0,l.jsx)(n.code,{children:"BigInt"}),"\u3001",(0,l.jsx)(n.code,{children:"Date"}),"\u3001",(0,l.jsx)(n.code,{children:"RegExp"}),"\u3001",(0,l.jsx)(n.code,{children:"Error"}),"\u3001",(0,l.jsx)(n.code,{children:"Map"}),"\u3001",(0,l.jsx)(n.code,{children:"Set"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'const memberInfo = {\n  id: 120,\n  name: "Andy",\n  isVip: false,\n  birthday: "1996/01/12",\n  hobbies: ["Photography", "Cooking", "Painting"],\n  getMoreInfo: function getMoreInfo() {\n    return null;\n  },\n  createdTime: new Date("2024-06-10"),\n};\n\nfunction deepCopy(item) {\n  return JSON.parse(JSON.stringify(item));\n}\n\nconst deepCopyByJSON = deepCopy(memberInfo);\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.img,{src:o(1727).A+"",width:"740",height:"92"}),"\n",(0,l.jsx)(n.code,{children:"deepCopyByJSON.createdTime"}),"\u8ddf",(0,l.jsx)(n.code,{children:"memberInfo.createdTime"}),"\u7684\u503c\u5c31\u4e0d\u540c\u4e86\uff0c\u56e0\u70ba",(0,l.jsx)(n.code,{children:"Date"}),"\u7269\u4ef6\u7121\u6cd5\u88ab\u5e8f\u5217\u5316\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.img,{src:o(7236).A+"",width:"638",height:"282"}),"\n",(0,l.jsx)(n.code,{children:"deepCopyByJSON.getMoreInfo"}),"\u7684\u503c\u70ba undefined\uff0c\u56e0\u70ba function \u4e5f\u7121\u6cd5\u88ab\u5e8f\u5217\u5316\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"structuredclonevalue",children:(0,l.jsx)(n.code,{children:"structuredClone(value)"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'const memberInfo = {\n  id: 120,\n  name: "Andy",\n  isVip: false,\n  birthday: "1996/01/12",\n  hobbies: ["Photography", "Cooking", "Painting"],\n};\n//\u4f7f\u7528 structuredClone \u6df1\u8907\u88fd\u7269\u4ef6 memberInfo\nconst deepCopyByStructuredClone = structuredClone(memberInfo);\n\nconsole.log(\n  "deepCopyByStructuredClone.hobbies === memberInfo.hobbies",\n  deepCopyByStructuredClone.hobbies === memberInfo.hobbies\n);//false\n\n`deepCopyByStructuredClone.hobbies` \u8ddf `memberInfo.hobbies` \u7684 reference \u4e0d\u540c\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u4f46\u662f\u540c\u6a23\u7684 ",(0,l.jsx)(n.code,{children:"structuredClone"})," \u4e5f\u7121\u6cd5\u8655\u7406 ",(0,l.jsx)(n.code,{children:"function"}),"\u3001",(0,l.jsx)(n.code,{children:"Date"}),"\u3001",(0,l.jsx)(n.code,{children:"RegExp"}),"\u3001",(0,l.jsx)(n.code,{children:"Error"}),"\u3001",(0,l.jsx)(n.code,{children:"Map"}),"\u3001",(0,l.jsx)(n.code,{children:"Set"})," \u7b49\u4e0d\u53ef\u5e8f\u5217\u5316\u7684\u503c\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'const memberInfo = {\n  id: 120,\n  name: "Andy",\n  isVip: false,\n  birthday: "1996/01/12",\n  hobbies: ["Photography", "Cooking", "Painting"],\n  getMoreInfo: function getMoreInfo() {\n    return null;\n  },\n  createdTime: new Date("2024-06-10"),\n};\n\nconst deepCopyByStructuredClone = structuredClone(memberInfo);\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.img,{src:o(3917).A+"",width:"1248",height:"930"}),"\n\u7576\u7269\u4ef6\u5167\u6709\u4e0d\u53ef\u5e8f\u5217\u5316\u7684\u503c\u6642\uff0c\u76f4\u63a5\u4f7f\u7528",(0,l.jsx)(n.code,{children:"structuredClone"})," \u5c31\u6703\u76f4\u63a5\u5831\u932f\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u624b\u5beb\u905e\u8ff4\u51fd\u5f0f",children:"\u624b\u5beb\u905e\u8ff4\u51fd\u5f0f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'//map\uff08\u7528\u65bc\u5b58\u5132\u5df2\u8907\u88fd\u7269\u4ef6\u7684 WeakMap\uff09\uff0c\u5728 WeakMap \u4e2d\uff0c\u9375\u5fc5\u9808\u662f\u7269\u4ef6\u3002\n\nfunction cloneDeep(obj, map = new WeakMap()) {\n  //\u5982\u679c map \u4e2d\u5df2\u7d93\u6709 obj \u7684\u8907\u88fd\uff0c\u5247\u76f4\u63a5\u8fd4\u56de\u8a72\u8907\u88fd\u3002\u9019\u53ef\u4ee5\u9632\u6b62\u5faa\u74b0\u53c3\u7167\u5c0e\u81f4\u7684\u7121\u7aae\u905e\u6b78\u3002\n  if (map.has(obj)) {\n    return map.get(obj);\n  }\n\n  //\u9996\u5148\u6392\u9664\u975e\u7269\u4ef6\u985e\u578b\u7684\uff0c\u6aa2\u67e5\u50b3\u5165\u7684 obj \u662f\u5426\u70ba null \u6216\u662f\u539f\u59cb\u578b\u5225\uff0c\u9019\u662f\u56e0\u70ba\u9019\u4e9b\u985e\u578b\u7684\u503c\u5728 JavaScript \u4e2d\u662f\u6309\u503c\u50b3\u905e\u7684\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u8907\u88fd\u3002\n  if (obj === null || typeof obj !== "object" || typeof value === "function") {\n    return obj;\n  }\n\n  //\u5982\u679c obj \u662f Date \u7684\u5be6\u4f8b\uff0c\u5247\u5275\u5efa\u4e00\u500b\u65b0\u7684\u76f8\u540c\u7684 Date \u5be6\u4f8b\u4e26\u8fd4\u56de\u3002\n  if (obj instanceof Date) return new Date(obj);\n\n  //\u5982\u679c obj \u662f RegExp \u7684\u5be6\u4f8b\uff0c\u5247\u5275\u5efa\u4e00\u500b\u65b0\u7684\u76f8\u540c\u7684 RegExp \u5be6\u4f8b\u4e26\u8fd4\u56de\u3002\n  if (obj instanceof RegExp) return new RegExp(obj);\n\n  //\u51fd\u5f0f\u8f38\u51fa output \u503c\uff0c\u5982\u679c obj \u662f\u9663\u5217\uff0c\u5247\u8f38\u51fa\u70ba\u7a7a\u9663\u5217\uff0c\u5982\u679c obj \u662f\u4e00\u500b\u666e\u901a\u7269\u4ef6\uff0c\u5247 output \u7684\u539f\u578b\u6703\u88ab\u8a2d\u7f6e\u70ba obj \u7684\u539f\u578b\uff0c\u4ee5\u4fdd\u7559\u539f\u578b\u93c8\u3002\n\n  const output = Array.isArray(obj)\n    ? []\n    : Object.create(Object.getPrototypeOf(obj));\n\n  //\u5c07 obj \u548c output \u7684\u5c0d\u61c9\u95dc\u4fc2\u5b58\u5165 map\n  map.set(obj, output);\n\n  //\u4f7f\u7528 Reflect.ownKeys(obj) \u7372\u53d6 obj \u7684\u6240\u6709\u81ea\u6709\u5c6c\u6027\u9375\uff08\u5305\u62ec\u7b26\u865f\u548c\u4e0d\u53ef\u679a\u8209\u7684\u5c6c\u6027\uff09\n  //\u904d\u6b77\u6240\u6709\u7684\u9375\uff0c\u5c0d\u6bcf\u500b\u9375\u5c0d\u61c9\u7684\u503c\u9032\u884c\u6df1\u5ea6\u8907\u88fd\uff0c\u4e26\u5c07\u8907\u88fd\u7684\u7d50\u679c\u5b58\u5165 output\u3002\n  for (const key of Reflect.ownKeys(obj)) {\n    const val = obj[key];\n    //\u5c0d\u7576\u524d\u9375\u5c0d\u61c9\u7684\u503c\u9032\u884c\u6df1\u5ea6\u8907\u88fd\uff0c\u4e26\u5c07\u8907\u88fd\u7684\u7d50\u679c\u5b58\u5165 output\u3002\n    output[key] = cloneDeep(val, map);\n  }\n  return output;\n}\n\nconst memberInfo = {\n  id: 120,\n  name: "Andy",\n  isVip: false,\n  birthday: "1996/01/12",\n  hobbies: ["Photography", "Cooking", "Painting"],\n  getMoreInfo: function getMoreInfo() {\n    return null;\n  },\n  createdTime: new Date("2024-06-10"),\n};\n\nconst cloneDeepMemberInfo = cloneDeep(memberInfo);\n\nconsole.log("cloneDeepMemberInfo.getMoreInfo", cloneDeepMemberInfo.getMoreInfo);\nconsole.log("memberInfo.getMoreInfo", memberInfo.getMoreInfo);\n\nconsole.log("cloneDeepMemberInfo.createdTime", cloneDeepMemberInfo.createdTime);\nconsole.log("memberInfo.createdTime", memberInfo.createdTime);\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.img,{src:o(6018).A+"",width:"812",height:"490"}),"\n",(0,l.jsx)(n.img,{src:o(7147).A+"",width:"804",height:"180"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u70ba\u4ec0\u9ebc\u4ee5-deep-clone-\u4f86\u9032\u884c\u7269\u4ef6\u6216\u9663\u5217\u8cc7\u6599\u7684-immutable-update-\u4e0d\u662f\u4e00\u500b\u597d\u65b9\u6cd5",children:"\u70ba\u4ec0\u9ebc\u4ee5 deep clone \u4f86\u9032\u884c\u7269\u4ef6\u6216\u9663\u5217\u8cc7\u6599\u7684 immutable update \u4e0d\u662f\u4e00\u500b\u597d\u65b9\u6cd5?"}),"\n",(0,l.jsx)(n.p,{children:"\u7c21\u55ae\u4f86\u8aaa\uff0c\u4f7f\u7528 deep clone \u64cd\u4f5c\u7269\u4ef6\u8cc7\u6599\u6703\u4f7f React \u6548\u80fd\u512a\u5316\u6a5f\u5236\u5931\u6548\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u9019\u88e1\u5c31\u8209\u4e00\u500b\u4f8b\u5b50\u4f86\u9032\u884c\u8aaa\u660e"}),"\n",(0,l.jsx)(c.A,{codeSandboxId:"immutable-update-shallow-deep-clone-forked-8rgd8d?file=%2Fsrc%2FApp.jsx%3A20%2C29&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clvkron4200063b6iily2ii69%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clvkron4200023b6if4n611kn%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clvkron4200033b6impvz28zp%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clvkron4200053b6i1eep83jr%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clvkron4200023b6if4n611kn%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clvkron4200013b6iidkrwdor%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.js%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clvlpejjd00023b6i228pr0my%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A20%252C%2522startColumn%2522%253A29%252C%2522endLineNumber%2522%253A20%252C%2522endColumn%2522%253A29%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252FApp.jsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clvkron4200023b6if4n611kn%2522%252C%2522activeTabId%2522%253A%2522clvlpejjd00023b6i228pr0my%2522%257D%252C%2522clvkron4200053b6i1eep83jr%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clvkron4200043b6ibahll584%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clvkron4200053b6i1eep83jr%2522%252C%2522activeTabId%2522%253A%2522clvkron4200043b6ibahll584%2522%257D%252C%2522clvkron4200033b6impvz28zp%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clvkron4200033b6impvz28zp%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"React.memo()"})," \u662f\u4e00\u500b\u6548\u80fd\u512a\u5316\u7684\u65b9\u6cd5\uff0c\u5b83\u5c07 component \u5305\u88f9\u8d77\u4f86\uff0c\u6bcf\u7576\u6709 props \u50b3\u5165 component \u6642\u6703\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"Object.is\uff08\uff09"})," \u6aa2\u67e5\u9019\u6b21\u7684 props \u8207\u524d\u6b21\u7684 props \u662f\u5426\u76f8\u540c\uff0c\u7576 component \u7684 props \u6c92\u6709\u8b8a\u52d5\u6642\uff0c\u5c31\u4e0d\u6703\u91cd\u65b0 render\uff0c\u9019\u6a23\u53ef\u4ee5\u907f\u514d\u4e0d\u5fc5\u8981\u7684 re-render\uff0c\u63d0\u5347\u6548\u80fd\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u9019\u500b\u4f8b\u5b50\u4e2d\uff0cApp component \u4e2d\u6709\u4e00\u500b\u88ab memo() \u5305\u88f9\u4f4f\u7684 Child component\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u4f7f\u7528-deep-clone-\u9032\u884c-state-\u66f4\u65b0",children:"\u4f7f\u7528 deep clone \u9032\u884c state \u66f4\u65b0"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:'import { memo, useState } from "react";\n\nfunction Child({ fooObj }) {\n  console.log("render Child");\n  return <h1>child: {fooObj.b}</h1>;\n}\n\nconst MemoizedChild = memo(Child);\n\nexport default function App() {\n  console.log("render App");\n  const [data, setData] = useState({\n    count: 0,\n    foo: { b: 100 },\n  });\n\n  const updateCountWithDeepClone = () => {\n    // \u4f7f\u7528 deep clone \u8907\u88fd data \u7269\u4ef6\u4e26\u4e14\u8ce6\u503c\u7d66 newData\n    const newData = structuredClone(data);\n    // \u66f4\u65b0 newData \u7684 count \u5c6c\u6027\n    newData.count += 1;\n    // \u66f4\u65b0 data \u7684 state\n    setData(newData);\n  };\n\n  return (\n    <div>\n      <h2>count: {data.count} </h2>\n      <button onClick={updateCountWithDeepClone}>\n        Update Count With Deep Clone\n      </button>\n      <MemoizedChild fooObj={data.foo} />\n    </div>\n  );\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u7576 component \u7b2c\u4e00\u6b21 mounted \u639b\u8f09\u81f3\u700f\u89bd\u5668\u5f8c\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u9ede\u64ca Update Count With Deep Clone button"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u6703\u547c\u53eb ",(0,l.jsx)(n.code,{children:"updateCountWithDeepClone function"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5728 ",(0,l.jsx)(n.code,{children:"updateCountWithDeepClone function"})," \u4e2d\u6703\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"structuredClone"})," \u9032\u884c deep clone data \u7269\u4ef6\u4e26\u4e14\u8ce6\u503c\u7d66 newData"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u66f4\u65b0 newData \u7684 count \u5c6c\u6027"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u66f4\u65b0 data \u7684 state"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["React \u6703\u57f7\u884c ",(0,l.jsx)(n.code,{children:"Object.is() "})," \u6aa2\u67e5\u767c\u73fe state \u66f4\u65b0\u4e86"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u9032\u5165 component reconciliation \u968e\u6bb5\uff0c\u57f7\u884c App function \u7522\u751f\u4ee5 props \u548c state \u63cf\u8ff0 component \u756b\u9762\u7684 react element\uff0c\u9019\u6642\u5c31\u6703\u5370\u51fa ",(0,l.jsx)(n.code,{children:"render App"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5c07\u65b0\u7248\u672c\u6240\u7522\u751f\u7684 react element \u8207\u4e0a\u4e00\u6b21 render \u7684\u820a\u7248 react element \u9032\u884c\u6a39\u72c0\u7d50\u69cb\u7684\u6bd4\u8f03\uff0c\u627e\u51fa\u5dee\u7570\u5c31\u662f state\uff0c\u7136\u5f8c\u66f4\u65b0 ",(0,l.jsx)(n.code,{children:"<h2>count: {data.count} </h2>"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u7576\u57f7\u884c\u5230 ",(0,l.jsx)(n.code,{children:"<MemoizedChild fooObj={data.foo} />"})," \u6642\uff0c\u96d6\u7136 ",(0,l.jsx)(n.code,{children:"data.foo"})," \u7684\u503c\u770b\u4f3c\u6c92\u6709\u6539\u8b8a\uff0c\u4f46\u662f React \u767c\u73fe props \u6709\u8b8a\uff0c\u7576 App Component render \u5b8c\u6210\u5f8c\uff0c\u5c31\u6703\u57f7\u884c memoized Child component function\uff0c\u9019\u6642\u6703\u5370\u51fa ",(0,l.jsx)(n.code,{children:"render Child"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u9019\u662f\u56e0\u70ba\u4f7f\u7528\u4e86 deep Clone \u66f4\u65b0\u4e86 state \u8cc7\u6599\uff0c\u53c8 deep Clone \u6240\u5c07\u7269\u4ef6\u4e2d\u6bcf\u4e00\u5c64\u7684\u6bcf\u4e00\u500b\u5c6c\u6027\u90fd\u7d93\u904e\u904d\u6b77\u8907\u88fd\uff0c\u5373\u4f7f\u6c92\u767c\u751f\u66f4\u65b0\u7684\u5167\u5c64\u8cc7\u6599\u4e5f\u6703\u7522\u751f\u5168\u65b0\u7684\u53c3\u8003\uff0c\u56e0\u6b64\uff0c\u6b64\u6642\u7576\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"object.is()"})," \u6aa2\u67e5\u50b3\u5165 ",(0,l.jsx)(n.code,{children:"<MemoizedChild fooObj={data.foo} />"})," \u7684 props \u6642\uff0c\u5c31\u6703\u767c\u73fe props \u6709\u8b8a\u52d5\uff0c\u6240\u4ee5\u6703\u91cd\u65b0 re-render\uff0c\u9032\u800c\u5370\u51fa ",(0,l.jsx)(n.code,{children:"render Child"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u5f9e\u4e0a\u8ff0\u53ef\u4ee5\u77e5\u9053\uff0c\u5c0d\u65bc React \u4f86\u8aaa\uff0c\u4f7f\u7528 deep clone \u9032\u884c state \u66f4\u65b0\u6703\u4f7f\u5f97\u67d0\u4e9b React \u6548\u80fd\u512a\u5316\u7684\u624b\u6bb5\u5931\u6548\uff0c\u5c0e\u81f4\u6bcf\u4e00\u6b21 state \u7684\u66f4\u65b0\u90fd\u662f\u5168\u65b0\u7684\u7269\u4ef6\u3001\u5168\u65b0\u7684\u53c3\u8003\uff0c\u5373\u4f7f\u8a72\u5c6c\u6027\u7684\u503c\u6c92\u6709\u8b8a\u66f4\uff0c\u800c\u4f7f\u5f97\u6548\u80fd\u512a\u5316\u6a5f\u5236\u5931\u53bb\u53c3\u8003\u76f8\u7b49\u6027\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u4f7f\u7528-shallow-clone-\u9032\u884c-state-\u66f4\u65b0",children:"\u4f7f\u7528 shallow clone \u9032\u884c state \u66f4\u65b0"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:'import { memo, useState } from "react";\n\nfunction Child({ fooObj }) {\n  console.log("render Child");\n  return <h1>child: {fooObj.b}</h1>;\n}\n\nconst MemoizedChild = memo(Child);\n\nexport default function App() {\n  console.log("render App");\n  const [data, setData] = useState({\n    count: 0,\n    foo: { b: 100 },\n  });\n\n  const updateCountWithShallowClone = () => {\n    setData({\n      ...data,\n      count: data.count + 1,\n    });\n  };\n\n  return (\n    <div>\n      <h2>count: {data.count} </h2>\n      <button onClick={updateCountWithShallowClone}>\n        Update Count With Shallow Clone\n      </button>\n      <MemoizedChild fooObj={data.foo} />\n    </div>\n  );\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u7576 component \u7b2c\u4e00\u6b21 mounted \u639b\u8f09\u81f3\u700f\u89bd\u5668\u5f8c\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u9ede\u64ca Update Count With Shallow Clone button"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u6703\u547c\u53eb ",(0,l.jsx)(n.code,{children:"updateCountWithShallowClone function"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5728 ",(0,l.jsx)(n.code,{children:"updateCountWithShallowClone function"})," \u4e2d\u6703\u5c55\u958b\u904b\u7b97\u7b26\u6dfa\u8907\u88fd data \u7269\u4ef6\uff0c\u7136\u5f8c\u66f4\u65b0 count \u5c6c\u6027\uff0c\u6700\u5f8c setState \u66f4\u65b0 data \u7684 state\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u66f4\u65b0 count \u5c6c\u6027"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u6700\u5f8c setState \u66f4\u65b0 data \u7684 state"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["React \u6703\u57f7\u884c ",(0,l.jsx)(n.code,{children:"Object.is()"})," \u6aa2\u67e5\u767c\u73fe state \u66f4\u65b0\u4e86"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u9032\u5165 component reconciliation \u968e\u6bb5\uff0c\u57f7\u884c App function \u7522\u751f\u4ee5 props \u548c state \u63cf\u8ff0 component \u756b\u9762\u7684 react element\uff0c\u9019\u6642\u5c31\u6703\u5370\u51fa ",(0,l.jsx)(n.code,{children:"render App"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5c07\u65b0\u7248\u672c\u6240\u7522\u751f\u7684 react element \u8207\u4e0a\u4e00\u6b21 render \u7684\u820a\u7248 react element \u9032\u884c\u6a39\u72c0\u7d50\u69cb\u7684\u6bd4\u8f03\uff0c\u627e\u51fa\u5dee\u7570\u5c31\u662f state\uff0c\u7136\u5f8c\u66f4\u65b0 ",(0,l.jsx)(n.code,{children:"<h2>count: {data.count} </h2>"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u6700\u5f8c\u7684\u57f7\u884c\u7d50\u679c\u5c31\u662f\u50b3\u5165 ",(0,l.jsx)(n.code,{children:"<MemoizedChild fooObj={data.foo} />"})," \u7684 props \u4e26\u6c92\u6709\u8b8a\u52d5\uff0c\u6240\u4ee5\u4e0d\u6703\u91cd\u65b0 re-render\uff0c\u4e5f\u5c31\u4e0d\u6703\u5370\u51fa ",(0,l.jsx)(n.code,{children:"render Child"}),"\uff0c\u53ea\u6709 App component \u6703\u91cd\u65b0 render\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u5c0d\u65bc React \u4f86\u8aaa\u8cc7\u6599\u6bd4\u8f03\u6a5f\u5236\u5c31\u662f\u70ba\u4e86\u6e1b\u5c11\u91cd\u8907\u7522\u751f react element \u7684\u6b21\u6578\uff0cReact \u4e0d\u9700\u8981\u77e5\u9053\u5be6\u969b\u7684\u8cc7\u6599\u7d30\u7bc0\uff0c\u6aa2\u67e5\u539f\u59cb\u578b\u5225\u6642\u76f4\u63a5\u4e92\u6bd4\u503c\u3001\u6aa2\u67e5\u7269\u4ef6\u6642\u53ea\u9700\u8981\u6bd4\u5c0d\u53c3\u8003\u662f\u5426\u76f8\u540c\uff0c\u7576\u7269\u4ef6\u8cc7\u6599\u7684\u53c3\u8003\u76f8\u540c\uff0cReact \u5c31\u6703\u7576\u4f5c\u8cc7\u6599\u6c92\u8b8a\uff0c\u4e0d\u7ba1\u7269\u4ef6\u5167\u5bb9\u5982\u4f55\u6539\u8b8a\uff0cReact \u90fd\u4e0d\u6703\u91cd\u65b0\u7522\u751f\u65b0\u7684 react element \u4f86 render\uff0c\u56e0\u6b64\u66f4\u65b0 state \u6642\u4e0d\u61c9\u8a72 mutate \u539f\u59cb\u8cc7\u6599\uff0c\u800c\u662f\u61c9\u8a72\u7522\u751f\u65b0\u7684\u7269\u4ef6\u9019\u6a23\u5c31\u6703\u7522\u751f\u4e00\u500b\u65b0\u7684 Reference\uff0c\u900f\u904e shallow clone \u8907\u88fd\u539f\u59cb\u7269\u4ef6\u7684\u5c6c\u6027\u5230\u65b0\u7684\u7269\u4ef6\uff0c\u53ea\u8981\u6839\u64da\u66f4\u65b0\u7684\u90e8\u5206\u53bb\u4fee\u6539\u76f8\u5c0d\u61c9\u7684\u503c\uff0c\u9019\u6a23\u65e2\u4e0d\u6703 mutate \u5230\u539f\u59cb\u8cc7\u6599\uff0c\u7dad\u6301\u7269\u4ef6 immutable\uff0c\u4e5f\u53ef\u4ee5\u63d0\u4f9b React \u6548\u80fd\u512a\u5316\u6a5f\u5236\u53c3\u8003\u7684\u76f8\u7b49\u6027\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},2360:(e,n,o)=>{o.d(n,{A:()=>c});var t=o(5248),l=o(4778),s=o(6070);function c(e){return(0,s.jsx)(t.x,{children:(0,s.jsx)(l.dH,{...e})})}},1727:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/deepClone1-f0ac33055833c450d7ac9d7cf634607b.png"},7236:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/deepClone2-ee97398dbdd43227876a5b37c61e9a15.png"},3917:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/deepClone3-f8792b7b483887fec31a5de0cd14bfdd.png"},6018:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/deepClone4-a27f94390dccf9469a749deef50cb6c6.png"},7147:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/deepClone5-dd63d9682aff31c93caf3293adcef3cb.png"}}]);