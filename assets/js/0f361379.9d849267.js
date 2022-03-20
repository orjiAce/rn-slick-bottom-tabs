"use strict";(self.webpackChunkrn_slick_bottom_tabs=self.webpackChunkrn_slick_bottom_tabs||[]).push([[140],{3905:function(n,e,t){t.d(e,{Zo:function(){return b},kt:function(){return m}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=r.createContext({}),l=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},b=function(n){var e=l(n.components);return r.createElement(s.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,s=n.parentName,b=c(n,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return t?r.createElement(f,i(i({ref:e},b),{},{components:t})):r.createElement(f,i({ref:e},b))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=n,c.mdxType="string"==typeof n?n:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8831:function(n,e,t){t.r(e),t.d(e,{assets:function(){return b},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={sidebar_position:3},s="AceTabBarNavigator",l={unversionedId:"tutorial-basics/AceTabBarNavigator",id:"tutorial-basics/AceTabBarNavigator",title:"AceTabBarNavigator",description:"Below is a simple usage or example of one of the react slick bottom tab variants AceTabBarNavigator",source:"@site/docs/tutorial-basics/AceTabBarNavigator.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/AceTabBarNavigator",permalink:"/rn-slick-bottom-tabs/docs/tutorial-basics/AceTabBarNavigator",editUrl:"https://github.com/orjiace/rn-slick-bottom-tabs/docs/tutorial-basics/AceTabBarNavigator.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/rn-slick-bottom-tabs/docs/Usage"},next:{title:"BerlinTabBarNavigator",permalink:"/rn-slick-bottom-tabs/docs/tutorial-basics/BerlinTabBarNavigator"}},b={},u=[],p={toc:u};function m(n){var e=n.components,t=(0,o.Z)(n,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"acetabbarnavigator"},"AceTabBarNavigator"),(0,a.kt)("img",{src:"https://github.com/orjiAce/rn-slick-bottom-tabs/blob/master/ezgif.com-gif-maker%20(3).gif?raw=true",width:"300"}),(0,a.kt)("h1",{id:"usage"},"Usage"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Below is a simple usage or example")," of one of the react slick bottom tab variants ",(0,a.kt)("inlineCode",{parentName:"p"},"AceTabBarNavigator")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/BottomTab.tsx"',title:'"/BottomTab.tsx"'},'import React from \'react\'\nimport {\n    AceTabBarNavigator,\n    DotSize\n} from \'../components\'\nimport {Ionicons as Icon} from \'@expo/vector-icons\'\nimport TabOne from "../screen/TabOne";\nimport TabTwo from "../screen/TabTwo";\nimport TabThree from "../screen/TabThree";\nimport FourthScreen from "../screen/FourthScreen";\n\nconst Tabs = AceTabBarNavigator()\n\nconst TabBarIcon = (props: any) => {\n    return (\n        <Icon\n            name={props.name}\n            size={props.size ? props.size : 24}\n            color={props.tintColor}\n        />\n    )\n}\n\nexport default () => (\n    <Tabs.Navigator backBehavior=\'history\'\n    screenOptions={{\n        animation: \'slide_from_right\'\n    }}\n                    initialRouteName="TabOne"\n                    tabBarOptions={{\n                    labelStyle: {fontSize: 12, marginTop: 5, fontWeight: \'bold\'},\n                    activeTintColor: "#7A28CB",\n                    inactiveTintColor: "#9e9e9e",\n                    activeBackgroundColor: "#e5cfff",\n                    }}\n\n    >\n        <Tabs.Screen\n            name="TabOne"\n            component={TabOne}\n            options={{\n                tabBarIcon: ({focused, color}: any) => (\n                    <TabBarIcon\n                        focused={focused}\n                        tintColor={color}\n                        name="home-sharp"\n                    />\n                ),\n\n            }}\n        />\n\n        <Tabs.Screen\n            name="TabTwo"\n            component={TabTwo}\n            options={{\n                tabBarIcon: ({focused, color}: any) => (\n                    <TabBarIcon\n                        focused={focused}\n                        tintColor={color}\n                        name="person"\n                    />\n                ),\n            }}\n        />\n        <Tabs.Screen\n            name="TabThree"\n            component={TabThree}\n            options={{\n                tabBarIcon: ({focused, color}: any) => (\n                    <TabBarIcon\n                        focused={focused}\n                        tintColor={color}\n                        name="rocket"\n                    />\n                ),\n            }}\n        />\n\n        <Tabs.Screen\n            name="FourthTab"\n            component={FourthScreen}\n            options={{\n                tabBarIcon: ({focused, color}: any) => (\n                    <TabBarIcon\n                        focused={focused}\n                        tintColor={color}\n                        name="ios-notifications"\n                    />\n                ),\n            }}\n        />\n    </Tabs.Navigator>\n)\n\n//On your navigation index\n\n<Stack.Screen name="Root" component={BottomTab} options={{headerShown: true}}/>\n\n\n')))}m.isMDXComponent=!0}}]);