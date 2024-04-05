"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[646],{9606:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>D,contentTitle:()=>N,default:()=>B,frontMatter:()=>T,metadata:()=>S,toc:()=>E});var r=t(5893),a=t(1151),l=t(7294),s=t(512),o=t(3735),u=t(6550),c=t(613),i=t(4423),d=t(636),p=t(9200);function m(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return m(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,u.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(a),(0,l.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[s,o]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[u,i]=f({queryString:t,groupId:r}),[d,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,p.Nk)(t);return[r,(0,l.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),x=(()=>{const e=u??d;return b({value:e,tabValues:a})?e:null})();(0,c.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),m(e)}),[i,m,a]),tabValues:a}}var g=t(5730);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function j(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=u[t].value;r!==a&&(i(n),l(r))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:u.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:p,onClick:d,...l,className:(0,s.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=x(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,r.jsx)(j,{...e,...n}),(0,r.jsx)(w,{...e,...n})]})}function k(e){const n=(0,g.Z)();return(0,r.jsx)(y,{...e,children:m(e.children)},String(n))}const V={tabItem:"tabItem_Ymn6"};function I(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(V.tabItem,a),hidden:t,children:n})}const T={},N=void 0,S={id:"front-end-practice/Day1-clamp/clamp",title:"clamp",description:"\ud83d\udd38\xa0\u984c\u76ee\u63cf\u8ff0",source:"@site/docs/front-end-practice/Day1-clamp/clamp.mdx",sourceDirName:"front-end-practice/Day1-clamp",slug:"/front-end-practice/Day1-clamp/clamp",permalink:"/frontend-notes/docs/front-end-practice/Day1-clamp/clamp",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-end-practice/Day1-clamp/clamp.mdx",tags:[],version:"current",frontMatter:{},sidebar:"notesSidebar",previous:{title:"\u524d\u7aef\u7a0b\u5f0f\u7df4\u7fd2",permalink:"/frontend-notes/docs/category/\u524d\u7aef\u7a0b\u5f0f\u7df4\u7fd2"}},D={},E=[{value:"Tests",id:"tests",level:2},{value:"Solutions",id:"solutions",level:2}];function q(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\ud83d\udd38\xa0",(0,r.jsx)(n.strong,{children:"\u984c\u76ee\u63cf\u8ff0"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f60\u6b63\u5728\u958b\u767c\u4e00\u500b\u8655\u7406\u6578\u503c\u8cc7\u6599\u7684\u7cfb\u7d71\u3002\u8acb\u5beb\u4e00\u500b\u540d\u70ba ",(0,r.jsx)(n.code,{children:"clamp"})," \u7684\u51fd\u5f0f\uff0c\u5b83\u9700\u8981\u4e09\u500b\u53c3\u6578\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4e00\u500b\u6578\u503c ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u4e00\u500b\u6700\u5c0f\u503c ",(0,r.jsx)(n.code,{children:"lower"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u4e00\u500b\u6700\u5927\u503c ",(0,r.jsx)(n.code,{children:"upper"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u51fd\u5f0f\u61c9\u78ba\u4fdd\u8f38\u51fa\u7684 ",(0,r.jsx)(n.code,{children:"number"})," \u59cb\u7d42\u843d\u5728\u6307\u5b9a\u7684\u7bc4\u570d\u5185\uff0c\u5305\u62ec\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\u672c\u8eab\u3002\u4f60\u6703\u5982\u4f55\u5be6\u4f5c\u9019\u500b ",(0,r.jsx)(n.code,{children:"clamp"})," \u5462?"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"// \u5728\u7bc4\u570d\u4e2d\uff0c\u8fd4\u56de\u539f\u503c\nclamp(7, 0, 9); // => 7\n\n// \u5c0f\u65bc lower\uff0c\u8fd4\u56de lower\nclamp(-12, -4, 5); // => -4\n\n// \u5927\u65bc upper\uff0c\u8fd4\u56de upper\nclamp(18, 3, 9); // => 9\n"})}),"\n",(0,r.jsx)(n.h2,{id:"tests",children:"Tests"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="test.ts"',children:'import { expect, test } from "@jest/globals";\nimport clamp from "./clamp";\n\ntest("should return the input number when it is within the specified range", () => {\n  expect(clamp(7, 0, 9)).toBe(7);\n  expect(clamp(3, -5, 5)).toBe(3);\n  expect(clamp(-2, -10, 10)).toBe(-2);\n});\n\ntest("should return the lower bound when the input number is less than the lower bound", () => {\n  expect(clamp(-5, 0, 9)).toBe(0);\n  expect(clamp(-10, -5, 5)).toBe(-5);\n  expect(clamp(-15, -10, 10)).toBe(-10);\n});\n\ntest("should return the upper bound when the input number is greater than the upper bound", () => {\n  expect(clamp(10, 0, 9)).toBe(9);\n  expect(clamp(6, -5, 5)).toBe(5);\n  expect(clamp(15, -10, 10)).toBe(10);\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"solutions",children:"Solutions"}),"\n",(0,r.jsxs)(k,{children:[(0,r.jsx)(I,{value:"solution1",label:"\u89e3\u6cd5\u4e00",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="solution1.js"',children:"function clamp(number: number, lower: number, upper: number) {\nif (number < lower) {\n    return lower;\n} else if (number > upper) {\n    return upper;\n} else {\n    return number;\n}\n"})})}),(0,r.jsx)(I,{value:"solution2",label:"\u89e3\u6cd5\u4e8c",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="solution2.js"',children:"function clamp(number: number, lower: number, upper: number) {\n  return Math.min(upper, Math.max(lower, number));\n}\n//\u4f7f\u7528 Math.max \u51fd\u6578\u4f86\u78ba\u4fdd\u6578\u503c\u4e0d\u6703\u4f4e\u65bc\u4e0b\u9650\uff0c\u7136\u5f8c\u4f7f\u7528 Math.min \u51fd\u6578\u4f86\u78ba\u4fdd\u6578\u503c\u4e0d\u6703\u8d85\u904e\u4e0a\u9650\n"})})})]})]})}function B(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(q,{...e})}):q(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var r=t(7294);const a={},l=r.createContext(a);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);