"use strict";(self.webpackChunkrn_slick_bottom_tabs=self.webpackChunkrn_slick_bottom_tabs||[]).push([[671],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9881:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={sidebar_position:1},p="React Native Slick Bottom Tabs",s={unversionedId:"intro",id:"intro",title:"React Native Slick Bottom Tabs",description:"GitHub package.json version",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/rn-slick-bottom-tabs/docs/intro",editUrl:"https://github.com/orjiace/rn-slick-bottom-tabs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Usage",permalink:"/rn-slick-bottom-tabs/docs/Usage"}},c={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Features",id:"features",level:2},{value:"Variants",id:"variants",level:2},{value:"Some props you need to be aware of",id:"some-props-you-need-to-be-aware-of",level:2},{value:"Installation",id:"installation",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Sponsor and support \u2764\ufe0f",id:"sponsor-and-support-\ufe0f",level:2}],m={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"react-native-slick-bottom-tabs"},"React Native Slick Bottom Tabs"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/github/package-json/v/orjiace/rn-slick-bottom-tabs?color=blue&style=for-the-badge",alt:"GitHub package.json version"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/npm/l/express?color=red&style=for-the-badge",alt:"NPM"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/npm/dw/rn-slick-bottom-tabs?color=hunter%20green&style=for-the-badge",alt:"npm"})),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"A fully customizable react native Animated Bottom navigation tabs \ud83d\ude80"),"."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("img",{src:"https://github.com/orjiAce/rn-slick-bottom-tabs/blob/master/ezgif.com-gif-maker.gif?raw=true",width:"300"}),(0,i.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 14 or above:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When installing Node.js, you are recommended to check all checkboxes related to dependencies.")))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Light/dark support"),(0,i.kt)("li",{parentName:"ul"},"Fast"),(0,i.kt)("li",{parentName:"ul"},"Written Typescript"),(0,i.kt)("li",{parentName:"ul"},"Runs on Expo"),(0,i.kt)("li",{parentName:"ul"},"Smooth gesture interactions & snapping animations"),(0,i.kt)("li",{parentName:"ul"},"Accessibility support.")),(0,i.kt)("h2",{id:"variants"},"Variants"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AceTabBarNavigator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"JanmTabBarNavigator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SlickTabBarNavigator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BerlinTabBarNavigator"))),(0,i.kt)("h2",{id:"some-props-you-need-to-be-aware-of"},"Some props you need to be aware of"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Props may vary according to the navigation variant you choose to use for your app"))),(0,i.kt)("p",null,"The navigation component takes two main props which help you customize your navigation. ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBarOptions")," is the default prop from React Navigation which you can use to specify different tint colors and more (see available options below). for all the details. The second prop is ",(0,i.kt)("inlineCode",{parentName:"p"},"appearance"),". Here you'll be able to adjust several properties of the tab bar as you wish. See the available properties above."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"tabBarOptions")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u2705",(0,i.kt)("inlineCode",{parentName:"li"},"activeTintColor")," - Label and icon color of the active tab item."),(0,i.kt)("li",{parentName:"ul"},"\u2705",(0,i.kt)("inlineCode",{parentName:"li"},"inactiveTintColor")," - Label and icon color of the inactive tab item."),(0,i.kt)("li",{parentName:"ul"},"\u2705",(0,i.kt)("inlineCode",{parentName:"li"},"activeBackgroundColor")," - Background color of the active tab item."),(0,i.kt)("li",{parentName:"ul"},"\u2705",(0,i.kt)("inlineCode",{parentName:"li"},"tabStyle")," - Style object for the tab wrapper (",(0,i.kt)("strong",{parentName:"li"},"Note!")," it overrides the properties in ",(0,i.kt)("inlineCode",{parentName:"li"},"appearance")," prop (see below)."),(0,i.kt)("li",{parentName:"ul"},"\u2705",(0,i.kt)("inlineCode",{parentName:"li"},"labelStyle")," - Style object for the tab label text, inherits all props from react native Text."),(0,i.kt)("li",{parentName:"ul"},"\u2705",(0,i.kt)("inlineCode",{parentName:"li"},"activeTabColor")," - String (Color)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"appearance")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2705",(0,i.kt)("inlineCode",{parentName:"p"},"topPadding")," (default: 20) - Space between the tab button and the wrapper (top)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2705",(0,i.kt)("inlineCode",{parentName:"p"},"horizontalPadding")," (default: 20) - Vertical space between for the tab buttons")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2705",(0,i.kt)("inlineCode",{parentName:"p"},"tabBarBackground"),' (default: "white") - Background color for the wrapper that contains the navigation tabs')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2705",(0,i.kt)("inlineCode",{parentName:"p"},"shadow")," (default: false) - If set to true, the wrapper has a light shadow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2705",(0,i.kt)("inlineCode",{parentName:"p"},"activeTabBackgrounds")," - Array of hex colours for the background of each tab when active. (if not specified, falls back to the ",(0,i.kt)("inlineCode",{parentName:"p"},"activeBackgroundColor")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBarOptions"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2705",(0,i.kt)("inlineCode",{parentName:"p"},"activeColors")," - Array of hex colours for the tint of each tab when active. (if not specified, falls back to the ",(0,i.kt)("inlineCode",{parentName:"p"},"activeTintColor")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBarOptions"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2705",(0,i.kt)("inlineCode",{parentName:"p"},"whenActiveShow"),' (default: "both") Configure the appearance of the active tab. Available values ',(0,i.kt)("inlineCode",{parentName:"p"},"both"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"label-only"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"icon-only"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2705",(0,i.kt)("inlineCode",{parentName:"p"},"whenInactiveShow"),' (default: "icon-only") Configure the appearance of the inactive tabs. Available values ',(0,i.kt)("inlineCode",{parentName:"p"},"both"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"label-only"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"icon-only"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2705",(0,i.kt)("inlineCode",{parentName:"p"},"tabButtonLayout"),' (default: "horizontal") Configure the layout of the tab button. Available values ',(0,i.kt)("inlineCode",{parentName:"p"},"vertical"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"horizontal"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2705",(0,i.kt)("inlineCode",{parentName:"p"},"dotCornerRadius")," (default: 100) Corner radius for the active background / dot.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2705",(0,i.kt)("inlineCode",{parentName:"p"},"dotSize"),' (default: "medium") Size of dot for the active tab. Available values ',(0,i.kt)("inlineCode",{parentName:"p"},"small"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"medium"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"large"),"."))))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i rn-slick-bottom-tabs\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add rn-slick-bottom-tabs\n")),(0,i.kt)("p",null,"You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor."),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"This library needs these dependencies to be installed in your project before you can use it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i react-native-safe-area-context @react-navigation/native-stack @react-navigation/native react-native-screens\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-safe-area-context @react-navigation/native-stack @react-navigation/native react-native-screens\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Shout out!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Special shout out to ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/janm_uiux"},"janm_uiux"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/torgeadelin"},"torgeadelin"),"\nfor their contribution and inspiration"))),(0,i.kt)("h2",{id:"sponsor-and-support-\ufe0f"},"Sponsor and support \u2764\ufe0f"),(0,i.kt)("p",null,"To keep this library maintained and up-to-date you can ",(0,i.kt)("a",{parentName:"p",href:"https://www.buymeacoffee.com/orjiace"},"Buy me a coffee")))}d.isMDXComponent=!0}}]);