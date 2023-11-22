"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[41887],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(83117),r=n(67294),o=n(86010),i=n(12466),s=n(16550),l=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,s.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function f(e){var t,n,a,o,i=e.defaultValue,s=e.queryString,l=void 0!==s&&s,u=e.groupId,p=m(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),v=f[0],g=f[1],b=h({queryString:l,groupId:u}),y=b[0],k=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],S=w[1],T=function(){var e=null!=y?y:N;return d({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){T&&g(T)}),[T]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),S(e)}),[k,S,p]),tabValues:p}}var v=n(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,s=e.selectedValue,l=e.selectValue,u=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),l(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function k(e){var t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){var t=(0,v.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},73981:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=(n(74866),n(85162),["components"]),s={id:"MST-integration",title:"Integrating with MobX State Tree",sidebar_label:"MobX State Tree integration"},l=void 0,u={unversionedId:"MST-integration",id:"version-7.x/MST-integration",title:"Integrating with MobX State Tree",description:"This guide is incomplete. Please help improve this by sending pull requests.",source:"@site/versioned_docs/version-7.x/MST-integration.md",sourceDirName:".",slug:"/MST-integration",permalink:"/docs/7.x/MST-integration",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/MST-integration.md",tags:[],version:"7.x",frontMatter:{id:"MST-integration",title:"Integrating with MobX State Tree",sidebar_label:"MobX State Tree integration"},sidebar:"version-7.x/docs",previous:{title:"Redux integration",permalink:"/docs/7.x/redux-integration"},next:{title:"Upgrading from 6.x",permalink:"/docs/7.x/upgrading-from-6.x"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Guide",id:"guide",level:2},{value:"Navigation params",id:"navigation-params",level:3},{value:"Summary",id:"summary",level:2}],m={toc:p},d="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This guide is incomplete. Please help improve this by sending pull requests.")),(0,o.kt)("p",null,"This guide explores possible way to use React Navigation in a React Native project that uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mobxjs/mobx-state-tree"},"MobX State Tree"),"(MST) for state management. The guide is accompanied by a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vonovak/react-navigation-mst-demo"},"sample app"),". Parts of the guide may be relevant also for users of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mobxjs/mobx"},"MobX")," but please be aware of the fact that MobX does not come with a built-in solution for (de)serializing its state."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Please note that in this guide, Mobx State Tree is not used to manage the navigation state itself - just the navigation params!")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Our goal with this guide is to use MST with React Navigation and achieve optimal developer experience. In the scope of this guide, this means allowing us to do a full JS reload and be brought back to the state before the reload happened."),(0,o.kt)("p",null,"We will do this by persisting the ",(0,o.kt)("a",{parentName:"p",href:"/docs/7.x/navigation-state"},"navigation state")," using the React Navigation's ",(0,o.kt)("a",{parentName:"p",href:"/docs/7.x/state-persistence"},"built-in mechanism"),". We also need to persist the app state and navigation params - that way, when you're working on a screen in your app and do a full JS reload, you will be brought back to the same screen, with the same data in it."),(0,o.kt)("h2",{id:"guide"},"Guide"),(0,o.kt)("p",null,"First, start by creating initial navigation structure and React components. When you're done with that, continue with modelling your state in MST. If you want to learn more about this, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://egghead.io/lessons/react-describe-your-application-domain-using-mobx-state-tree-mst-models"},"egghead.io course"),"."),(0,o.kt)("p",null,"At this point, you're probably wondering how to connect your MST objects with the components. The answer is in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mobxjs/mobx-react"},"mobx-react package")," that contains React bindings for MobX (they also work for MST). You will likely be using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider")," component and the ",(0,o.kt)("inlineCode",{parentName:"p"},"inject")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"observer")," functions."),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider")," to wrap what you return from your root component's render method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Provider myObject={this.myObject}>\n  <NavigationContainer>{/* Screen configuration */}</NavigationContainer>\n</Provider>\n")),(0,o.kt)("p",null,"this will allow you to access ",(0,o.kt)("inlineCode",{parentName:"p"},"myObject")," from any React component in the application through the ",(0,o.kt)("inlineCode",{parentName:"p"},"inject")," function which can be quite useful."),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"observer")," function to wrap all components that render observable data. This will make sure the components re-render once the data they render changes."),(0,o.kt)("h3",{id:"navigation-params"},"Navigation params"),(0,o.kt)("p",null,"Screens in your application often depend on params. React Navigation allows you to ",(0,o.kt)("a",{parentName:"p",href:"/docs/7.x/params"},"send params")," from one screen to another. These params are stored in the navigation state. However, in order to persist the navigation state, it needs to be serializable. This requirement does not play well with MST, because the MST objects are complex objects and React Navigation doesn't know how to (de)serialize them. In this guide, we will work around this by storing the navigation params ourselves."),(0,o.kt)("p",null,"This means that rather than sending the params from one screen to another (eg. with ",(0,o.kt)("inlineCode",{parentName:"p"},"props.navigation.navigate('MyScreen', { complexMSTObject })"),") we will store the params to a navigation store, then navigate without sending any params, and on the target screen, we'll pick the params up from the navigation store."),(0,o.kt)("p",null,"To give an example, the navigation store may look similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { types, onSnapshot, getRoot } from 'mobx-state-tree';\nimport { Product } from '../models/Product';\nimport { User } from '../models/User';\n\nexport const NavigationStore = types\n  .model('NavigationStore', {\n    productDetailScreenParams: types.map(\n      types.model('ProductDetailScreenParams', {\n        product: types.optional(types.safeReference(Product)),\n      })\n    ),\n    userProfileScreenParams: types.model('UserProfileScreenParams', {\n      user: types.maybe(types.safeReference(User)),\n    }),\n  })\n  .actions(self => ({\n    ...\n  }));\n")),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"userProfileScreenParams")," is a simple model with a ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," entry, while ",(0,o.kt)("inlineCode",{parentName:"p"},"productDetailScreenParams")," is a map of ",(0,o.kt)("inlineCode",{parentName:"p"},"ProductDetailScreenParams")," model. The reason we chose this shape of data is that we only have a single user profile screen in our app which reads its params from ",(0,o.kt)("inlineCode",{parentName:"p"},"userProfileScreenParams"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"productDetailScreenParams")," is a map because the app can have several product screens on a stack. Each screen points to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Product")," instance saved in the map. The keys into the map are the React Navigation ",(0,o.kt)("a",{parentName:"p",href:"/docs/7.x/navigation-state"},"keys"),": think of the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," as of an identifier of the route."),(0,o.kt)("p",null,"Your navigation store may also be just one map where for each screen (regardless if it is a product or user profile screen), we store its navigation params. This is the approach taken in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vonovak/react-navigation-mst-demo"},"sample app"),"."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"you can use React Navigation with MobX State Tree in a React Native app"),(0,o.kt)("li",{parentName:"ul"},"use the ",(0,o.kt)("inlineCode",{parentName:"li"},"Provider")," component and the ",(0,o.kt)("inlineCode",{parentName:"li"},"inject")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"observer")," functions to wire up MobX or MST with React"),(0,o.kt)("li",{parentName:"ul"},"it's possible to persist the entire application state and restore it upon JS reload")))}h.isMDXComponent=!0}}]);