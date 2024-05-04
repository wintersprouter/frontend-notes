"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[3768],{279:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=t(4848),l=t(8453),a=t(1470),s=t(9365);const o={},i=void 0,u={id:"front-end-practice/Lodash \u624b\u5beb\u984c/fill/fill",title:"fill",description:"\ud83d\udd38\xa0\u984c\u76ee\u63cf\u8ff0",source:"@site/docs/front-end-practice/Lodash \u624b\u5beb\u984c/07-fill/07-fill.mdx",sourceDirName:"front-end-practice/Lodash \u624b\u5beb\u984c/07-fill",slug:"/front-end-practice/Lodash \u624b\u5beb\u984c/fill/",permalink:"/frontend-notes/docs/front-end-practice/Lodash \u624b\u5beb\u984c/fill/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-end-practice/Lodash \u624b\u5beb\u984c/07-fill/07-fill.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"notesSidebar",previous:{title:"dropRightWhile",permalink:"/frontend-notes/docs/front-end-practice/Lodash \u624b\u5beb\u984c/dropRightWhile/"}},c={},d=[{value:"Tests",id:"tests",level:2},{value:"Solutions",id:"solutions",level:2}];function h(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\ud83d\udd38\xa0",(0,r.jsx)(n.strong,{children:"\u984c\u76ee\u63cf\u8ff0"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5be6\u4f5c ",(0,r.jsx)(n.code,{children:"fill"})," \u51fd\u5f0f\uff0c\u6b64\u51fd\u5f0f\u63a5\u6536\u56db\u500b\u53c3\u6578\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e00\u500b\u9663\u5217"}),"\n",(0,r.jsxs)(n.li,{children:["\u8981\u66ff\u63db\u7684 ",(0,r.jsx)(n.code,{children:"value"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"start"})," \u7d22\u5f15"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"end"})," \u7d22\u5f15"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8a72\u51fd\u5f0f\u6703\u5f9e ",(0,r.jsx)(n.code,{children:"start"})," \u5230 ",(0,r.jsx)(n.code,{children:"end"})," \u7d22\u5f15 (\u5305\u542b ",(0,r.jsx)(n.code,{children:"start"})," \u4f46\u4e0d\u5305\u542b ",(0,r.jsx)(n.code,{children:"end"}),") \u4f86\u628a\u9663\u5217\u7684\u5143\u7d20\u63db\u6210 ",(0,r.jsx)(n.code,{children:"value"})," \u3002\u5982\u679c\u672a\u63d0\u4f9b ",(0,r.jsx)(n.code,{children:"start"})," \u7d22\u5f15\uff0c\u5247\u61c9\u9810\u8a2d\u70ba 0\u3002\u5982\u679c\u672a\u63d0\u4f9b ",(0,r.jsx)(n.code,{children:"end"})," \u7d22\u5f15\uff0c\u5247\u5269\u9918\u5143\u7d20\u6703\u88ab\u66ff\u63db\u70ba ",(0,r.jsx)(n.code,{children:"value"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"fill([1, 2, 3], \"_\");\n// => ['_', '_', '_']\n\nfill([1, 2], \"*\", 2, 3);\n// => [1, 2]\n\nfill([1, 2, 3, 4, 5], \"_\", 1, -1);\n// => [1, '_', '_', '_', 5]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"tests",children:"Tests"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { describe, expect, test } from "@jest/globals";\nimport fill from "./fill"; // adjust this to your actual file path\n\ndescribe("fill", () => {\n  test("fills all elements with the provided value when start and end are not provided", () => {\n    expect(fill([1, 2, 3], "_")).toEqual(["_", "_", "_"]);\n  });\n\n  test("does not fill any elements when start is equal to or greater than the array length", () => {\n    expect(fill([1, 2], "*", 2, 3)).toEqual([1, 2]);\n  });\n\n  test("fills elements from start to end with the provided value", () => {\n    expect(fill([1, 2, 3, 4, 5], "_", 1, -1)).toEqual([1, "_", "_", "_", 5]);\n  });\n\n  test("fills remaining elements with the provided value when end is not provided", () => {\n    expect(fill([1, 2, 3], "_", 1)).toEqual([1, "_", "_"]);\n  });\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"solutions",children:"Solutions"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(s.A,{value:"solution1",label:"\u89e3\u6cd5\u4e00",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="solution1.js"',children:"function fill(array, value, start = 0, end = array.length) {\n    if (start < 0) {\n        start = array.length + start;\n    }\n\n    if (end < 0) {\n        end = array.length + end;\n    }\n\n    if (end > array.length) {\n        end = array.length;\n    }\n\n    for (let i = start; i < end; i++) {\n        array[i] = value;\n    }\n\n    return array;\n}\n\nexport default inRange;\n"})})}),(0,r.jsx)(s.A,{value:"solution2",label:"\u89e3\u6cd5\u4e8c",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="solution2.js"',children:"function fill(array, value, start = 0, end = array.length) {\n    return array.fill(value, start, end);\n}\n"})})})]})]})}function f(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(4164);const l={tabItem:"tabItem_Ymn6"};var a=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>_});var r=t(6540),l=t(4164),a=t(3104),s=t(6347),o=t(205),i=t(7485),u=t(1682),c=t(9466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:l}}=e;return{value:n,label:t,attributes:r,default:l}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const l=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(l.location.search);n.set(a,e),l.replace({...l.location,search:n.toString()})}),[a,l])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,a=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[u,d]=p({queryString:t,groupId:l}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,a]=(0,c.Dv)(t);return[l,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:l}),v=(()=>{const e=u??m;return f({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),l=o[t].value;l!==r&&(u(n),s(l))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,l.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:l}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,l.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function _(e){const n=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(6540);const l={},a=r.createContext(l);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);