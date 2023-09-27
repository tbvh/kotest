"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[20681],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>u});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),m=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},d=function(t){var e=m(t.components);return a.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=m(r),u=n,k=c["".concat(i,".").concat(u)]||c[u]||p[u]||o;return r?a.createElement(k,s(s({ref:e},d),{},{components:r})):a.createElement(k,s({ref:e},d))}));function u(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,s=new Array(o);s[0]=c;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:n,s[1]=l;for(var m=2;m<o;m++)s[m]=r[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7450:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));const o={},s=void 0,l={unversionedId:"assertions/matchers",id:"version-5.7/assertions/matchers",title:"matchers",description:'For the extension function style, each function has an equivalent negated version, for example, a.shouldNotStartWith("boo").',source:"@site/versioned_docs/version-5.7/assertions/matchers.md",sourceDirName:"assertions",slug:"/assertions/matchers",permalink:"/docs/assertions/matchers",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.7/assertions/matchers.md",tags:[],version:"5.7",frontMatter:{},sidebar:"assertions",previous:{title:"Assertions",permalink:"/docs/assertions/assertions.html"},next:{title:"Custom Matchers",permalink:"/docs/assertions/custom-matchers.html"}},i={},m=[{value:"Kotest Matcher Modules",id:"kotest-matcher-modules",level:3},{value:"Kotest External Matcher Modules",id:"kotest-external-matcher-modules",level:3},{value:"Community Provided Matchers",id:"community-provided-matchers",level:3}],d={toc:m};function p(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"For the extension function style, each function has an equivalent negated version, for example, ",(0,n.kt)("inlineCode",{parentName:"p"},'a.shouldNotStartWith("boo")'),"."),(0,n.kt)("h3",{id:"kotest-matcher-modules"},"Kotest Matcher Modules"),(0,n.kt)("p",null,"These modules provide the core matcher experience. They are hosted in the main Kotest repo, and are released on the same cadence as the\nKotest framework."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Module"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/assertions/core-matchers.html"},"kotest-assertions-core")),(0,n.kt)("td",{parentName:"tr",align:null},"Provides matchers for standard libary types."),(0,n.kt)("td",{parentName:"tr",align:null},"Multiplatform")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/assertions/collection-matchers.html"},"kotest-assertions-collections")),(0,n.kt)("td",{parentName:"tr",align:null},"Provides matchers for Collection, Iterable, and Array types."),(0,n.kt)("td",{parentName:"tr",align:null},"Multiplatform")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/assertions/json/json-overview.html"},"kotest-assertions-json")),(0,n.kt)("td",{parentName:"tr",align:null},"Provides matchers for testing json objects."),(0,n.kt)("td",{parentName:"tr",align:null},"JVM")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/assertions/kotlinx-datetime-matchers.html"},"kotest-assertions-kotlinx-time")),(0,n.kt)("td",{parentName:"tr",align:null},"Provides matchers for Kotlin's date / time library."),(0,n.kt)("td",{parentName:"tr",align:null},"Multiplatform")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/assertions/sql-matchers.html"},"kotest-assertions-sql")),(0,n.kt)("td",{parentName:"tr",align:null},"Provides matchers for JDBC."),(0,n.kt)("td",{parentName:"tr",align:null},"JVM")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/assertions/ktor-matchers.html"},"kotest-assertions-ktor")),(0,n.kt)("td",{parentName:"tr",align:null},"Provides matchers for Ktor server test and client libraries."),(0,n.kt)("td",{parentName:"tr",align:null},"Multiplatform")))),(0,n.kt)("h3",{id:"kotest-external-matcher-modules"},"Kotest External Matcher Modules"),(0,n.kt)("p",null,"These modules are hosted in the kotest organization but in separate repositories from the main kotest project. They are released on an independent\ncadence from the Kotest framework. They provide matchers for third party libraries."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Module"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/assertions/arrow.html"},"kotest-assertions-arrow")),(0,n.kt)("td",{parentName:"tr",align:null},"Provides matchers for the Arrow functional programming library."),(0,n.kt)("td",{parentName:"tr",align:null},"JVM")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/assertions/compiler-matchers.html"},"kotest-assertions-compiler")),(0,n.kt)("td",{parentName:"tr",align:null},"Provides matchers that test for compilable code."),(0,n.kt)("td",{parentName:"tr",align:null},"JVM")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/assertions/klock-matchers.html"},"kotest-assertions-klock")),(0,n.kt)("td",{parentName:"tr",align:null},"Providers matchers for Klock."),(0,n.kt)("td",{parentName:"tr",align:null},"Multiplatform")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/assertions/konform-matchers.html"},"kotest-assertions-konform")),(0,n.kt)("td",{parentName:"tr",align:null},"Provides matchers for Konform."),(0,n.kt)("td",{parentName:"tr",align:null},"Multiplatform")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/assertions/jsoup-matchers.html"},"kotest-assertions-jsoup")),(0,n.kt)("td",{parentName:"tr",align:null},"Provides matchers JSoup."),(0,n.kt)("td",{parentName:"tr",align:null},"JVM")))),(0,n.kt)("h3",{id:"community-provided-matchers"},"Community Provided Matchers"),(0,n.kt)("p",null,"This is a list of projects that provide Kotest matchers. They are maintained outside of the Kotest organization."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Library"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/LeoColman/kotest-android"},"Android")),(0,n.kt)("td",{parentName:"tr",align:null},"Toolbox for working with Kotest and Android")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/http4k/http4k/tree/master/http4k-testing/kotest"},"Http4k")),(0,n.kt)("td",{parentName:"tr",align:null},"Functional toolkit for Kotlin HTTP applications")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/micronaut-projects/micronaut-test"},"Micronaut")),(0,n.kt)("td",{parentName:"tr",align:null},"JVM-based, full-stack framework for building modular, easily testable microservice")))))}p.isMDXComponent=!0}}]);