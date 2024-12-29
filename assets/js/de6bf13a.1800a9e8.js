"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[365],{4488:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"Javascript/VarConstLet","title":"let, var ,const \u7684\u5dee\u7570","description":"\u4f7f\u7528 let\u3001var \u548c const \u5ba3\u544a\u8b8a\u6578\u6642\u5206\u5225\u5728\uff1a\u4f5c\u7528\u57df\u3001\u521d\u59cb\u5316\u3001\u91cd\u8907\u5ba3\u544a\u3001\u91cd\u65b0\u8ce6\u503c\u3001\u63d0\u5347\u6642\u6709\u4e0d\u540c\u7684\u884c\u70ba\u3002","source":"@site/docs/Javascript/02-VarConstLet.md","sourceDirName":"Javascript","slug":"/Javascript/variables","permalink":"/frontend-notes/docs/Javascript/variables","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Javascript/02-VarConstLet.md","tags":[{"inline":true,"label":"2024iT\u9435\u4eba\u8cfd","permalink":"/frontend-notes/docs/tags/2024-i-t\u9435\u4eba\u8cfd"},{"inline":true,"label":"variables","permalink":"/frontend-notes/docs/tags/variables"},{"inline":true,"label":"JavaScript","permalink":"/frontend-notes/docs/tags/java-script"},{"inline":true,"label":"let","permalink":"/frontend-notes/docs/tags/let"},{"inline":true,"label":"var","permalink":"/frontend-notes/docs/tags/var"},{"inline":true,"label":"const","permalink":"/frontend-notes/docs/tags/const"}],"version":"current","sidebarPosition":2,"frontMatter":{"slug":"variables","title":"let, var ,const \u7684\u5dee\u7570","authors":["ashley"],"tags":["2024iT\u9435\u4eba\u8cfd","variables","JavaScript","let","var","const"],"keywords":["2024iT\u9435\u4eba\u8cfd","variables","JavaScript","let","var","const"]},"sidebar":"notesSidebar","previous":{"title":"Hosting \u63d0\u5347","permalink":"/frontend-notes/docs/Javascript/hosting"},"next":{"title":"== \u548c === \u7684\u5dee\u7570","permalink":"/frontend-notes/docs/Javascript/equality-operator"}}');var c=s(6070),i=s(5248);const t={slug:"variables",title:"let, var ,const \u7684\u5dee\u7570",authors:["ashley"],tags:["2024iT\u9435\u4eba\u8cfd","variables","JavaScript","let","var","const"],keywords:["2024iT\u9435\u4eba\u8cfd","variables","JavaScript","let","var","const"]},o="JavaScript \u4e2d let, var , const \u7684\u5dee\u7570",l={},a=[{value:"\u4f5c\u7528\u57df scope",id:"\u4f5c\u7528\u57df-scope",level:2},{value:"\u521d\u59cb\u5316 Initialization",id:"\u521d\u59cb\u5316-initialization",level:2},{value:"\u91cd\u8907\u5ba3\u544a",id:"\u91cd\u8907\u5ba3\u544a",level:2},{value:"\u91cd\u65b0\u8ce6\u503c",id:"\u91cd\u65b0\u8ce6\u503c",level:2},{value:"\u63d0\u5347",id:"\u63d0\u5347",level:2},{value:"\u5be6\u4f8b\u7df4\u7fd2",id:"\u5be6\u4f8b\u7df4\u7fd2",level:2},{value:"\u89e3\u984c",id:"\u89e3\u984c",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsxs)(n.h1,{id:"javascript-\u4e2d-let-var--const-\u7684\u5dee\u7570",children:["JavaScript \u4e2d ",(0,c.jsx)(n.code,{children:"let"}),", ",(0,c.jsx)(n.code,{children:"var"})," , ",(0,c.jsx)(n.code,{children:"const"})," \u7684\u5dee\u7570"]})}),"\n",(0,c.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"let"}),"\u3001",(0,c.jsx)(n.code,{children:"var"})," \u548c ",(0,c.jsx)(n.code,{children:"const"})," \u5ba3\u544a\u8b8a\u6578\u6642\u5206\u5225\u5728\uff1a\u4f5c\u7528\u57df\u3001\u521d\u59cb\u5316\u3001\u91cd\u8907\u5ba3\u544a\u3001\u91cd\u65b0\u8ce6\u503c\u3001\u63d0\u5347\u6642\u6709\u4e0d\u540c\u7684\u884c\u70ba\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4f5c\u7528\u57df-scope",children:"\u4f5c\u7528\u57df scope"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"var"})," \u7684\u4f5c\u7528\u57df\u662f\u5168\u57df\u6216\u662f\u5728 function \u4e2d\uff0c",(0,c.jsx)(n.code,{children:"var"})," \u5ba3\u544a\u7684\u8b8a\u6578\u6703\u88ab\u63d0\u5347\u5230\u6574\u500b\u51fd\u5f0f\u7684\u9802\u7aef;"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"let"})," \u8ddf ",(0,c.jsx)(n.code,{children:"const"})," \u5247\u662f\u5340\u584a(block)\u4f5c\u7528\u57df\uff0c\u9019\u88e1\u7684 block \u6307\u7684\u662f function \u4e2d\u6216 if-else block \u6216 for-loop block\uff0c",(0,c.jsx)(n.code,{children:"let"})," \u8ddf ",(0,c.jsx)(n.code,{children:"const"})," \u53ea\u5728\u5b83\u5011\u6240\u5728\u7684\u5340\u584a\u5167\u6709\u6548\uff0c\u4f7f\u5b83\u5011\u66f4\u5177\u9810\u6e2c\u6027\uff0c\u6e1b\u5c11\u8b8a\u6578\u610f\u5916\u88ab\u8986\u84cb\u7684\u53ef\u80fd\u6027\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u521d\u59cb\u5316-initialization",children:"\u521d\u59cb\u5316 Initialization"}),"\n",(0,c.jsxs)(n.p,{children:["\u521d\u59cb\u5316\u5c31\u662f\u6307\u8b8a\u6578\u7b2c\u4e00\u6b21\u7684\u8ce6\u503c\u3002\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"var"})," \u8ddf ",(0,c.jsx)(n.code,{children:"let"})," \u5ba3\u544a\u7684\u8b8a\u6578\u521d\u59cb\u5316\u53ef\u4ee5\u4e0d\u9700\u8981\u8ce6\u503c;"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"const"})," \u521d\u59cb\u5316\u5247\u9700\u8981\u5fc5\u9808\u8ce6\u503c\uff0c\u5426\u5247\u6703\u62cb\u51fa: SyntaxError: Missing initializer in const declaration \u7684\u932f\u8aa4\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"var a;\nlet b;\nconst c; // SyntaxError: Missing initializer in const declaration\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u91cd\u8907\u5ba3\u544a",children:"\u91cd\u8907\u5ba3\u544a"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"var"})," \u53ef\u4ee5\u91cd\u8907\u5ba3\u544a\uff0c",(0,c.jsx)(n.code,{children:"var"})," \u91cd\u8907\u5ba3\u544a\u6642\u6703\u8986\u84cb\u524d\u9762\u7684\u8b8a\u6578; ",(0,c.jsx)(n.code,{children:"let"})," \u8ddf ",(0,c.jsx)(n.code,{children:"const"})," \u5247\u4e0d\u53ef\u4ee5\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u91cd\u65b0\u8ce6\u503c",children:"\u91cd\u65b0\u8ce6\u503c"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"var"})," \u8ddf ",(0,c.jsx)(n.code,{children:"let"})," \u53ef\u4ee5\u91cd\u65b0\u8ce6\u503c; ",(0,c.jsx)(n.code,{children:"const"})," \u5247\u4e0d\u884c\uff0c",(0,c.jsx)(n.code,{children:"const"})," \u4ee3\u8868\u7684\u662f\u53c3\u8003 (reference) \u7684\u4e0d\u53ef\u8b8a\u6027 (immutable)\uff0c\u7576\u7269\u4ef6\u548c\u9663\u5217\u88ab\u6307\u6d3e\u7d66 ",(0,c.jsx)(n.code,{children:"const"})," \u6642\uff0c\u53c3\u8003\u7684\u662f\u5176\u8a18\u61b6\u9ad4\u7684\u4f4d\u7f6e\uff0c\u7269\u4ef6\u548c\u9663\u5217\u7684\u5167\u5bb9\u5c6c\u6027\u662f\u53ef\u4ee5\u4fee\u6539\u7684\uff0c\u4f46\u4e0d\u80fd\u91cd\u65b0\u6307\u6d3e\u70ba\u65b0\u7684\u7269\u4ef6\u6216\u9663\u5217\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"var a = 1;\na = 2;\n\nlet b = 3;\nb = 4;\n\nconst c = 5;\nc = 6; //error \u56e0\u70ba 'c' \u70ba\u5e38\u6578\uff0c\u6240\u4ee5\u7121\u6cd5\u6307\u6d3e\u81f3 'c'\u3002\n\nconst person = {\n    id:1 ;\n    name:'Ashley';\n}\nperson.id = 2; //\u53ef\u4ee5\u4fee\u6539 person \u7684 id \uff0c\u56e0\u70ba\u4ecd\u662f\u53c3\u8003\u540c\u4e00\u500b\u8a18\u61b6\u9ad4\u4f4d\u7f6e\u3002\nconsole.log(person.id); // 2\n\nperson  = {\n    id:5 ;\n    name:'Andy';\n}; // TypeError: Assignment to constant variable. \u9019\u6642\u8a66\u5716\u6307\u6d3e\u4e00\u500b\u5168\u65b0\u7684\u7269\u4ef6\u7d66 person\uff08\u4e5f\u5c31\u4ee3\u8868\u53c3\u8003\u7684\u8a18\u61b6\u4f4d\u7f6e\u6539\u8b8a\u4e86\uff09\uff0c\u56e0\u53c3\u8003\u4e0d\u53ef\u8b8a\u6027\u6240\u4ee5\u5831\u932f\u3002\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u63d0\u5347",children:"\u63d0\u5347"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"var"})," \u5ba3\u544a\u7684\u8b8a\u6578\u6703\u81ea\u52d5\u521d\u59cb\u5316\uff0c\u521d\u59cb\u503c\u70ba ",(0,c.jsx)(n.code,{children:"undefined"}),";\n",(0,c.jsx)(n.code,{children:"let"})," \u8ddf ",(0,c.jsx)(n.code,{children:"const"})," \u5ba3\u544a\u7684\u8b8a\u6578\u6703\u9032\u5230\u66ab\u6642\u6b7b\u5340 \uff08TDZ, Temporal Dead Zone\uff09\uff0c\u76f4\u5230\u57f7\u884c\u5230\u5ba3\u544a\u7684\u90a3\u4e00\u884c\u3002"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"\u5be6\u4f8b\u7df4\u7fd2",children:"\u5be6\u4f8b\u7df4\u7fd2"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.a,{href:"https://bigfrontend.dev/quiz/var-vs-let",children:["100. ",(0,c.jsx)(n.code,{children:"var"})," vs ",(0,c.jsx)(n.code,{children:"let"})]})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'var a = "BFE";\nlet b = "bigfrontend";\nconsole.log(this.a);\nconsole.log(this.b);\n'})}),"\n",(0,c.jsx)(n.h2,{id:"\u89e3\u984c",children:"\u89e3\u984c"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'var a = "BFE";\nlet b = "bigfrontend";\nconsole.log(this.a); //"BFE"\nconsole.log(this.b); //undefined\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u56e0\u70ba ",(0,c.jsx)(n.code,{children:"var"})," \u7684\u4f5c\u7528\u57df\u662f\u5168\u57df\uff0c",(0,c.jsx)(n.code,{children:"var"})," \u7684\u8b8a\u6578\u6703\u88ab\u52a0\u5230\u5168\u57df\u7269\u4ef6\uff0c\u5728\u700f\u89bd\u5668\u4e2d\u662f ",(0,c.jsx)(n.code,{children:"window"})," \u7269\u4ef6\uff0c",(0,c.jsx)(n.code,{children:"this"})," \u901a\u5e38\u6307\u5411\u5168\u57df\u7269\u4ef6\uff0c\u56e0\u6b64 ",(0,c.jsx)(n.code,{children:"this.a"})," \u7b49\u540c\u65bc ",(0,c.jsx)(n.code,{children:"window.a"}),' \u4e5f\u5c31\u662f"BFE"\u3002']}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"let"})," \u5247\u662f\u5340\u584a\u7684\u4f5c\u7528\u57df\uff0c",(0,c.jsx)(n.code,{children:"let"})," \u7684\u8b8a\u6578\u7121\u6cd5\u88ab\u52a0\u5230\u5168\u57df\u7269\u4ef6\uff0c\u56e0\u6b64 ",(0,c.jsx)(n.code,{children:"this.b"})," \u662f ",(0,c.jsx)(n.code,{children:"undefined"}),"\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},5248:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var r=s(758);const c={},i=r.createContext(c);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);