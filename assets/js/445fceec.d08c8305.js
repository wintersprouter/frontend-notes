"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[2326],{1347:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var o=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:n,children:t})}},3384:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(6540),r=n(4164),o=n(5236),l=n(6347),s=n(8385),c=n(5793),u=n(7422),i=n(4100);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,d]=f({queryString:n,groupId:r}),[h,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,i.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),v=(()=>{const e=u??h;return m({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{v&&c(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=n(195);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function x(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),i=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==a&&(u(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:d,onClick:i,...o,className:(0,r.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:o}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=h(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(4848),r=n(8453),o=n(3384),l=n(1347);const s={},c=void 0,u={id:"front-end-practice/Lodash \u624b\u5beb\u984c/compact/compact",title:"compact",description:"\ud83d\udd38\xa0\u984c\u76ee\u63cf\u8ff0",source:"@site/docs/front-end-practice/Lodash \u624b\u5beb\u984c/03-compact/03-compact.mdx",sourceDirName:"front-end-practice/Lodash \u624b\u5beb\u984c/03-compact",slug:"/front-end-practice/Lodash \u624b\u5beb\u984c/compact/",permalink:"/frontend-notes/docs/front-end-practice/Lodash \u624b\u5beb\u984c/compact/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-end-practice/Lodash \u624b\u5beb\u984c/03-compact/03-compact.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"notesSidebar",previous:{title:"inRange",permalink:"/frontend-notes/docs/front-end-practice/Lodash \u624b\u5beb\u984c/inRange/"},next:{title:"difference",permalink:"/frontend-notes/docs/front-end-practice/Lodash \u624b\u5beb\u984c/difference/"}},i={},d=[{value:"Tests",id:"tests",level:2},{value:"Solutions",id:"solutions",level:2}];function p(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["\ud83d\udd38\xa0",(0,a.jsx)(t.strong,{children:"\u984c\u76ee\u63cf\u8ff0"})]}),"\n",(0,a.jsxs)(t.p,{children:["\u8acb\u5be6\u4f5c\u4e00\u500b ",(0,a.jsx)(t.code,{children:"compact"})," \u6548\u7528\u51fd\u5f0f\u3002 ",(0,a.jsx)(t.code,{children:"compact"})," \u80fd\u5c07\u8f38\u5165\u7684\u9663\u5217\u4e2d\u7684 ",(0,a.jsx)(t.code,{children:"false"}),"\u3001",(0,a.jsx)(t.code,{children:"null"}),"\u30010\u3001\u7a7a\u5b57\u4e32\u3001",(0,a.jsx)(t.code,{children:"undefined"})," \u548c NaN \u90fd\u53bb\u9664\uff0c\u4e26\u8f38\u51fa\u4e00\u500b\u65b0\u7684\u9663\u5217\u3002\u8acb\u5be6\u4f5c\u6b64 ",(0,a.jsx)(t.code,{children:"compact"})," \u51fd\u5f0f\u3002"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'// \u7bc4\u4f8b\u4e00\ncompact([0, 1, false, 2, "", 3, "hello"]);\n// => [1, 2, 3, \'hello\']\n\n// \u7bc4\u4f8b\u4e8c\ncompact([null, undefined, NaN, " "]);\n// =>[\' \']\n\n// \u7bc4\u4f8b\u4e09\ncompact([{ name: "Alice" }, null, { age: 30 }, undefined]);\n// =>[{ name: \'Alice\' }, { age: 30 }]\n'})}),"\n",(0,a.jsx)(t.h2,{id:"tests",children:"Tests"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="test.ts"',children:'import { describe, expect, test } from "@jest/globals";\nimport compact from "./compact";\n\ndescribe("compact", () => {\n  test("removes all falsy values from the array", () => {\n    expect(compact([0, 1, false, 2, "", 3, "hello"])).toEqual([\n      1,\n      2,\n      3,\n      "hello",\n    ]);\n    expect(compact([null, undefined, NaN, " "])).toEqual([" "]);\n    expect(compact([{ name: "Alice" }, null, { age: 30 }, undefined])).toEqual([\n      { name: "Alice" },\n      { age: 30 },\n    ]);\n  });\n\n  test("does not remove non-falsy values", () => {\n    expect(compact([1, 2, 3])).toEqual([1, 2, 3]);\n    expect(compact(["hello", "world"])).toEqual(["hello", "world"]);\n    expect(compact([{ name: "Alice" }, { age: 30 }])).toEqual([\n      { name: "Alice" },\n      { age: 30 },\n    ]);\n  });\n});\n'})}),"\n",(0,a.jsx)(t.h2,{id:"solutions",children:"Solutions"}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{value:"solution1",label:"\u89e3\u6cd5\u4e00",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:'title="solution1.ts"',children:"const compact = <T>(arr: T[]): T[] => {\n    return arr.filter(Boolean);\n    //false\u3001null\u30010\u3001\u7a7a\u5b57\u4e32\u3001undefined \u548c NaN \u90fd\u662f falsy value\n};\nexport default compact;\n"})})}),(0,a.jsx)(l.A,{value:"solution2",label:"\u89e3\u6cd5\u4e8c",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:'title="solution2.ts"',children:"function compact(array: T[]) : T[] {\nconst result = []\nfor (const value of array) {\n    if (value) {\n    result.push(value)\n    }\n}\nreturn result\n}\nexport default compact;\n"})})})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var a=n(6540);const r={},o=a.createContext(r);function l(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);