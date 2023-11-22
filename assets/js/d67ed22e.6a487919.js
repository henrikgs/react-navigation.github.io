"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[90446],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),o=n(86010),r={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(83117),o=n(67294),r=n(86010),i=n(12466),p=n(16550),s=n(91980),l=n(67392),c=n(50012);function u(e){return function(e){return o.Children.map(e,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:u(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,r=(0,p.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,o.useCallback)((function(e){if(i){var t=new URLSearchParams(r.location.search);t.set(i,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[i,r])]}function k(e){var t,n,a,r,i=e.defaultValue,p=e.queryString,s=void 0!==p&&p,l=e.groupId,u=m(e),k=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:i,tabValues:u})})),f=k[0],v=k[1],h=g({queryString:s,groupId:l}),y=h[0],N=h[1],b=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:l}.groupId),n=(0,c.Nk)(t),a=n[0],r=n[1],[a,(0,o.useCallback)((function(e){t&&r.set(e)}),[t,r])]),P=b[0],S=b[1],C=function(){var e=null!=y?y:P;return d({value:e,tabValues:u})?e:null}();return(0,o.useLayoutEffect)((function(){C&&v(C)}),[C]),{selectedValue:f,selectValue:(0,o.useCallback)((function(e){if(!d({value:e,tabValues:u}))throw new Error("Can't select invalid tab value="+e);v(e),N(e),S(e)}),[N,S,u]),tabValues:u}}var f=n(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,n=e.block,p=e.selectedValue,s=e.selectValue,l=e.tabValues,c=[],u=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=c.indexOf(t),a=l[n].value;a!==p&&(u(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,o=c.indexOf(e.currentTarget)+1;n=null!=(a=c[o])?a:c[0];break;case"ArrowLeft":var r,i=c.indexOf(e.currentTarget)-1;n=null!=(r=c[i])?r:c[c.length-1]}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:p===t?0:-1,"aria-selected":p===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:m},i,{className:(0,r.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":p===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var r=n.find((function(e){return e.props.value===a}));return r?(0,o.cloneElement)(r,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function N(e){var t=k(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",v.tabList)},o.createElement(h,(0,a.Z)({},e,t)),o.createElement(y,(0,a.Z)({},e,t)))}function b(e){var t=(0,f.Z)();return o.createElement(N,(0,a.Z)({key:String(t)},e))}},17308:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=(n(74866),n(85162),["components"]),p={id:"typescript",title:"Type checking with TypeScript",sidebar_label:"Type checking with TypeScript"},s=void 0,l={unversionedId:"typescript",id:"version-6.x/typescript",title:"Type checking with TypeScript",description:"React Navigation is written with TypeScript and exports type definitions for TypeScript projects.",source:"@site/versioned_docs/version-6.x/typescript.md",sourceDirName:".",slug:"/typescript",permalink:"/docs/typescript",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/typescript.md",tags:[],version:"6.x",frontMatter:{id:"typescript",title:"Type checking with TypeScript",sidebar_label:"Type checking with TypeScript"},sidebar:"version-6.x/docs",previous:{title:"Testing with Jest",permalink:"/docs/testing"},next:{title:"Redux integration",permalink:"/docs/redux-integration"}},c={},u=[{value:"Type checking the navigator",id:"type-checking-the-navigator",level:3},{value:"Type checking screens",id:"type-checking-screens",level:3},{value:"Nesting navigators",id:"nesting-navigators",level:3},{value:"Type checking screens and params in nested navigator",id:"type-checking-screens-and-params-in-nested-navigator",level:4},{value:"Combining navigation props",id:"combining-navigation-props",level:4},{value:"Annotating <code>useNavigation</code>",id:"annotating-usenavigation",level:3},{value:"Annotating <code>useRoute</code>",id:"annotating-useroute",level:3},{value:"Annotating <code>options</code> and <code>screenOptions</code>",id:"annotating-options-and-screenoptions",level:3},{value:"Annotating <code>ref</code> on <code>NavigationContainer</code>",id:"annotating-ref-on-navigationcontainer",level:3},{value:"Specifying default types for <code>useNavigation</code>, <code>Link</code>, <code>ref</code> etc",id:"specifying-default-types-for-usenavigation-link-ref-etc",level:3},{value:"Organizing types",id:"organizing-types",level:3}],m={toc:u},d="wrapper";function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"React Navigation is written with TypeScript and exports type definitions for TypeScript projects."),(0,r.kt)("h3",{id:"type-checking-the-navigator"},"Type checking the navigator"),(0,r.kt)("p",null,"To type check our route name and params, the first thing we need to do is to create an object type with mappings for route name to the params of the route. For example, say we have a route called ",(0,r.kt)("inlineCode",{parentName:"p"},"Profile")," in our root navigator which should have a param ",(0,r.kt)("inlineCode",{parentName:"p"},"userId"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type RootStackParamList = {\n  Profile: { userId: string };\n};\n")),(0,r.kt)("p",null,"Similarly, we need to do the same for each route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type RootStackParamList = {\n  Home: undefined;\n  Profile: { userId: string };\n  Feed: { sort: 'latest' | 'top' } | undefined;\n};\n")),(0,r.kt)("p",null,"Specifying ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," means that the route doesn't have params. A union type with ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"SomeType | undefined"),") means that params are optional."),(0,r.kt)("p",null,"After we have defined the mappings, we need to tell our navigator to use it. To do that, we can pass it as a generic to the ",(0,r.kt)("inlineCode",{parentName:"p"},"createXNavigator")," functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createStackNavigator } from '@react-navigation/stack';\n\nconst RootStack = createStackNavigator<RootStackParamList>();\n")),(0,r.kt)("p",null,"And then we can use it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<RootStack.Navigator initialRouteName="Home">\n  <RootStack.Screen name="Home" component={Home} />\n  <RootStack.Screen\n    name="Profile"\n    component={Profile}\n    initialParams={{ userId: user.id }}\n  />\n  <RootStack.Screen name="Feed" component={Feed} />\n</RootStack.Navigator>\n')),(0,r.kt)("p",null,"This will provide type checking and intelliSense for props of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigator")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen")," components."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The type containing the mappings must be a type alias (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"type RootStackParamList = { ... }"),"). It cannot be an interface (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"interface RootStackParamList { ... }"),"). It also shouldn't extend ",(0,r.kt)("inlineCode",{parentName:"p"},"ParamListBase")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"interface RootStackParamList extends ParamListBase { ... }"),"). Doing so will result in incorrect type checking where it allows you to pass incorrect route names.")),(0,r.kt)("h3",{id:"type-checking-screens"},"Type checking screens"),(0,r.kt)("p",null,"To type check our screens, we need to annotate the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," prop and the ",(0,r.kt)("inlineCode",{parentName:"p"},"route")," prop received by a screen. The navigator packages in React Navigation export a generic types to define types for both the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"route")," props from the corresponding navigator."),(0,r.kt)("p",null,"For example, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"NativeStackScreenProps")," for the Native Stack Navigator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import type { NativeStackScreenProps } from '@react-navigation/native-stack';\n\ntype RootStackParamList = {\n  Home: undefined;\n  Profile: { userId: string };\n  Feed: { sort: 'latest' | 'top' } | undefined;\n};\n\ntype Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;\n")),(0,r.kt)("p",null,"The type takes 3 generics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The param list object we defined earlier"),(0,r.kt)("li",{parentName:"ul"},"The name of the route the screen belongs to"),(0,r.kt)("li",{parentName:"ul"},"The ID of the navigator (optional)")),(0,r.kt)("p",null,"If you have an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," prop for your navigator, you can do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type Props = NativeStackScreenProps<RootStackParamList, 'Profile', 'MyStack'>;\n")),(0,r.kt)("p",null,"This allows us to type check route names and params which you're navigating using ",(0,r.kt)("inlineCode",{parentName:"p"},"navigate"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"push")," etc. The name of the current route is necessary to type check the params in ",(0,r.kt)("inlineCode",{parentName:"p"},"route.params")," and when you call ",(0,r.kt)("inlineCode",{parentName:"p"},"setParams"),"."),(0,r.kt)("p",null,"Similarly, you can import ",(0,r.kt)("inlineCode",{parentName:"p"},"StackScreenProps")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-navigation/stack"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DrawerScreenProps")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-navigation/drawer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"BottomTabScreenProps")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-navigation/bottom-tabs")," and so on."),(0,r.kt)("p",null,"Then you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Props")," type you defined above to annotate your component."),(0,r.kt)("p",null,"For function components:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function ProfileScreen({ route, navigation }: Props) {\n  // ...\n}\n")),(0,r.kt)("p",null,"For class components:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class ProfileScreen extends React.Component<Props> {\n  render() {\n    // ...\n  }\n}\n")),(0,r.kt)("p",null,"You can get the types for ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"route")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Props")," type as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type ProfileScreenNavigationProp = Props['navigation'];\n\ntype ProfileScreenRouteProp = Props['route'];\n")),(0,r.kt)("p",null,"Alternatively, you can also annotate the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"route")," props separately."),(0,r.kt)("p",null,"To get the type for the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," prop, we need to import the corresponding type from the navigator. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"NativeStackNavigationProp")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-navigation/native-stack"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import type { NativeStackNavigationProp } from '@react-navigation/native-stack';\n\ntype ProfileScreenNavigationProp = NativeStackNavigationProp<\n  RootStackParamList,\n  'Profile'\n>;\n")),(0,r.kt)("p",null,"Similarly, you can import ",(0,r.kt)("inlineCode",{parentName:"p"},"StackNavigationProp")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-navigation/stack"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DrawerNavigationProp")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-navigation/drawer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"BottomTabNavigationProp")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-navigation/bottom-tabs")," etc."),(0,r.kt)("p",null,"To get the type for the ",(0,r.kt)("inlineCode",{parentName:"p"},"route")," prop, we need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"RouteProp")," type from ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-navigation/native"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import type { RouteProp } from '@react-navigation/native';\n\ntype ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;\n")),(0,r.kt)("p",null,"We recommend creating a separate ",(0,r.kt)("inlineCode",{parentName:"p"},"types.tsx")," file where you keep the types and import them in your component files instead of repeating them in each file."),(0,r.kt)("h3",{id:"nesting-navigators"},"Nesting navigators"),(0,r.kt)("h4",{id:"type-checking-screens-and-params-in-nested-navigator"},"Type checking screens and params in nested navigator"),(0,r.kt)("p",null,"You can ",(0,r.kt)("a",{parentName:"p",href:"/docs/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator"},"navigate to a screen in a nested navigator")," by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"screen")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," properties for the nested screen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"navigation.navigate('Home', {\n  screen: 'Feed',\n  params: { sort: 'latest' },\n});\n")),(0,r.kt)("p",null,"To be able to type check this, we need to extract the params from the screen containing the nested navigator. This can be done using the ",(0,r.kt)("inlineCode",{parentName:"p"},"NavigatorScreenParams")," utility:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { NavigatorScreenParams } from '@react-navigation/native';\n\ntype TabParamList = {\n  Home: NavigatorScreenParams<StackParamList>;\n  Profile: { userId: string };\n};\n")),(0,r.kt)("h4",{id:"combining-navigation-props"},"Combining navigation props"),(0,r.kt)("p",null,"When you nest navigators, the navigation prop of the screen is a combination of multiple navigation props. For example, if we have a tab inside a stack, the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," prop will have both ",(0,r.kt)("inlineCode",{parentName:"p"},"jumpTo")," (from the tab navigator) and ",(0,r.kt)("inlineCode",{parentName:"p"},"push")," (from the stack navigator). To make it easier to combine types from multiple navigators, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"CompositeScreenProps")," type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { CompositeScreenProps } from '@react-navigation/native';\nimport type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';\nimport type { StackScreenProps } from '@react-navigation/stack';\n\ntype ProfileScreenProps = CompositeScreenProps<\n  BottomTabScreenProps<TabParamList, 'Profile'>,\n  StackScreenProps<StackParamList>\n>;\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CompositeScreenProps")," type takes 2 parameters, first parameter is the type of props for the primary navigation (type for the navigator that owns this screen, in our case the tab navigator which contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"Profile")," screen) and second parameter is the type of props for secondary navigation (type for a parent navigator). The primary type should always have the screen's route name as its second parameter."),(0,r.kt)("p",null,"For multiple parent navigators, this secondary type should be nested:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type ProfileScreenProps = CompositeScreenProps<\n  BottomTabScreenProps<TabParamList, 'Profile'>,\n  CompositeScreenProps<\n    StackScreenProps<StackParamList>,\n    DrawerScreenProps<DrawerParamList>\n  >\n>;\n")),(0,r.kt)("p",null,"If annotating the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," prop separately, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"CompositeNavigationProp")," instead. The usage is similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"CompositeScreenProps"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { CompositeNavigationProp } from '@react-navigation/native';\nimport type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';\nimport type { StackNavigationProp } from '@react-navigation/stack';\n\ntype ProfileScreenNavigationProp = CompositeNavigationProp<\n  BottomTabNavigationProp<TabParamList, 'Profile'>,\n  StackNavigationProp<StackParamList>\n>;\n")),(0,r.kt)("h3",{id:"annotating-usenavigation"},"Annotating ",(0,r.kt)("inlineCode",{parentName:"h3"},"useNavigation")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Annotating ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigation")," isn't type-safe because the type parameter cannot be statically verified.\nPrefer ",(0,r.kt)("a",{parentName:"p",href:"#specifying-default-types-for-usenavigation-link-ref-etc"},"specifying a default type")," instead.")),(0,r.kt)("p",null,"To annotate the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," prop that we get from ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigation"),", we can use a type parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const navigation = useNavigation<ProfileScreenNavigationProp>();\n")),(0,r.kt)("h3",{id:"annotating-useroute"},"Annotating ",(0,r.kt)("inlineCode",{parentName:"h3"},"useRoute")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Annotating ",(0,r.kt)("inlineCode",{parentName:"p"},"useRoute")," isn't type-safe because the type parameter cannot be statically verified.\nPrefer using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/route-prop"},(0,r.kt)("inlineCode",{parentName:"a"},"route")," prop")," instead when possible. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"useRoute")," for generic code that doesn't need specific route type.")),(0,r.kt)("p",null,"To annotate the ",(0,r.kt)("inlineCode",{parentName:"p"},"route")," prop that we get from ",(0,r.kt)("inlineCode",{parentName:"p"},"useRoute"),", we can use a type parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const route = useRoute<ProfileScreenRouteProp>();\n")),(0,r.kt)("h3",{id:"annotating-options-and-screenoptions"},"Annotating ",(0,r.kt)("inlineCode",{parentName:"h3"},"options")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"screenOptions")),(0,r.kt)("p",null,"When you pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"screenOptions")," prop to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigator")," component, they are already type-checked and you don't need to do anything special. However, sometimes you might want to extract the options to a separate object, and you might want to annotate it."),(0,r.kt)("p",null,"To annotate the options, we need to import the corresponding type from the navigator. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"StackNavigationOptions")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-navigation/stack"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { StackNavigationOptions } from '@react-navigation/stack';\n\nconst options: StackNavigationOptions = {\n  headerShown: false,\n};\n")),(0,r.kt)("p",null,"Similarly, you can import ",(0,r.kt)("inlineCode",{parentName:"p"},"DrawerNavigationOptions")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-navigation/drawer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"BottomTabNavigationOptions")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-navigation/bottom-tabs")," etc."),(0,r.kt)("p",null,"When using the function form of ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"screenOptions"),", you can annotate the arguments with the same type you used to annotate the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"route")," props."),(0,r.kt)("h3",{id:"annotating-ref-on-navigationcontainer"},"Annotating ",(0,r.kt)("inlineCode",{parentName:"h3"},"ref")," on ",(0,r.kt)("inlineCode",{parentName:"h3"},"NavigationContainer")),(0,r.kt)("p",null,"If you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"createNavigationContainerRef()")," method to create the ref, you can annotate it to type-check navigation actions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createNavigationContainerRef } from '@react-navigation/native';\n\n// ...\n\nconst navigationRef = createNavigationContainerRef<RootStackParamList>();\n")),(0,r.kt)("p",null,"Similarly, for ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigationContainerRef()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { useNavigationContainerRef } from '@react-navigation/native';\n\n// ...\n\nconst navigationRef = useNavigationContainerRef<RootStackParamList>();\n")),(0,r.kt)("p",null,"If you're using a regular ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," object, you can pass a generic to the ",(0,r.kt)("inlineCode",{parentName:"p"},"NavigationContainerRef")," type.."),(0,r.kt)("p",null,"Example when using ",(0,r.kt)("inlineCode",{parentName:"p"},"React.useRef")," hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { NavigationContainerRef } from '@react-navigation/native';\n\n// ...\n\nconst navigationRef =\n  React.useRef<NavigationContainerRef<RootStackParamList>>(null);\n")),(0,r.kt)("p",null,"Example when using ",(0,r.kt)("inlineCode",{parentName:"p"},"React.createRef"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { NavigationContainerRef } from '@react-navigation/native';\n\n// ...\n\nconst navigationRef =\n  React.createRef<NavigationContainerRef<RootStackParamList>>();\n")),(0,r.kt)("h3",{id:"specifying-default-types-for-usenavigation-link-ref-etc"},"Specifying default types for ",(0,r.kt)("inlineCode",{parentName:"h3"},"useNavigation"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"Link"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"ref")," etc"),(0,r.kt)("p",null,"Instead of manually annotating these APIs, you can specify a global type for your root navigator which will be used as the default type."),(0,r.kt)("p",null,"To do this, you can add this snippet somewhere in your codebase:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"declare global {\n  namespace ReactNavigation {\n    interface RootParamList extends RootStackParamList {}\n  }\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"RootParamList")," interface lets React Navigation know about the params accepted by your root navigator. Here we extend the type ",(0,r.kt)("inlineCode",{parentName:"p"},"RootStackParamList")," because that's the type of params for our stack navigator at the root. The name of this type isn't important."),(0,r.kt)("p",null,"Specifying this type is important if you heavily use ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigation"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," etc. in your app since it'll ensure type-safety. It will also make sure that you have correct nesting on the ",(0,r.kt)("inlineCode",{parentName:"p"},"linking")," prop."),(0,r.kt)("h3",{id:"organizing-types"},"Organizing types"),(0,r.kt)("p",null,"When writing types for React Navigation, there are a couple of things we recommend to keep things organized."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"It's good to create a separate files (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"navigation/types.tsx"),") which contains the types related to React Navigation."),(0,r.kt)("li",{parentName:"ol"},"Instead of using ",(0,r.kt)("inlineCode",{parentName:"li"},"CompositeNavigationProp")," directly in your components, it's better to create a helper type that you can reuse."),(0,r.kt)("li",{parentName:"ol"},"Specifying a global type for your root navigator would avoid manual annotations in many places.")),(0,r.kt)("p",null,"Considering these recommendations, the file containing the types may look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type {\n  CompositeScreenProps,\n  NavigatorScreenParams,\n} from '@react-navigation/native';\nimport type { StackScreenProps } from '@react-navigation/stack';\nimport type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';\n\nexport type RootStackParamList = {\n  Home: NavigatorScreenParams<HomeTabParamList>;\n  PostDetails: { id: string };\n  NotFound: undefined;\n};\n\nexport type RootStackScreenProps<T extends keyof RootStackParamList> =\n  StackScreenProps<RootStackParamList, T>;\n\nexport type HomeTabParamList = {\n  Popular: undefined;\n  Latest: undefined;\n};\n\nexport type HomeTabScreenProps<T extends keyof HomeTabParamList> =\n  CompositeScreenProps<\n    BottomTabScreenProps<HomeTabParamList, T>,\n    RootStackScreenProps<keyof RootStackParamList>\n  >;\n\ndeclare global {\n  namespace ReactNavigation {\n    interface RootParamList extends RootStackParamList {}\n  }\n}\n")),(0,r.kt)("p",null,"Now, when annotating your components, you can write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { HomeTabScreenProps } from './navigation/types';\n\nfunction PopularScreen({ navigation, route }: HomeTabScreenProps<'Popular'>) {\n  // ...\n}\n")),(0,r.kt)("p",null,"If you're using hooks such as ",(0,r.kt)("inlineCode",{parentName:"p"},"useRoute"),", you can write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { HomeTabScreenProps } from './navigation/types';\n\nfunction PopularScreen() {\n  const route = useRoute<HomeTabScreenProps<'Popular'>['route']>();\n\n  // ...\n}\n")))}g.isMDXComponent=!0}}]);