---
sidebar_position: 3
---

# AceTabBarNavigator

<img src="https://github.com/orjiAce/rn-slick-bottom-tabs/blob/master/ezgif.com-gif-maker%20(3).gif?raw=true" width="300"/>



# Usage

 **Below is a simple usage or example** of one of the react slick bottom tab variants `AceTabBarNavigator`

```tsx title="/BottomTab.tsx"
import React from 'react'
import {
    AceTabBarNavigator,
    DotSize
} from '../components'
import {Ionicons as Icon} from '@expo/vector-icons'
import TabOne from "../screen/TabOne";
import TabTwo from "../screen/TabTwo";
import TabThree from "../screen/TabThree";
import FourthScreen from "../screen/FourthScreen";

const Tabs = AceTabBarNavigator()

const TabBarIcon = (props: any) => {
    return (
        <Icon
            name={props.name}
            size={props.size ? props.size : 24}
            color={props.tintColor}
        />
    )
}

export default () => (
    <Tabs.Navigator backBehavior='history'
    screenOptions={{
        animation: 'slide_from_right'
    }}
                    initialRouteName="TabOne"
                    tabBarOptions={{
                    labelStyle: {fontSize: 12, marginTop: 5, fontWeight: 'bold'},
                    activeTintColor: "#7A28CB",
                    inactiveTintColor: "#9e9e9e",
                    activeBackgroundColor: "#e5cfff",
                    }}

    >
        <Tabs.Screen
            name="TabOne"
            component={TabOne}
            options={{
                tabBarIcon: ({focused, color}: any) => (
                    <TabBarIcon
                        focused={focused}
                        tintColor={color}
                        name="home-sharp"
                    />
                ),

            }}
        />

        <Tabs.Screen
            name="TabTwo"
            component={TabTwo}
            options={{
                tabBarIcon: ({focused, color}: any) => (
                    <TabBarIcon
                        focused={focused}
                        tintColor={color}
                        name="person"
                    />
                ),
            }}
        />
        <Tabs.Screen
            name="TabThree"
            component={TabThree}
            options={{
                tabBarIcon: ({focused, color}: any) => (
                    <TabBarIcon
                        focused={focused}
                        tintColor={color}
                        name="rocket"
                    />
                ),
            }}
        />

        <Tabs.Screen
            name="FourthTab"
            component={FourthScreen}
            options={{
                tabBarIcon: ({focused, color}: any) => (
                    <TabBarIcon
                        focused={focused}
                        tintColor={color}
                        name="ios-notifications"
                    />
                ),
            }}
        />
    </Tabs.Navigator>
)

//On your navigation index

<Stack.Screen name="Root" component={BottomTab} options={{headerShown: true}}/>


```


