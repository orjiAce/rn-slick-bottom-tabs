import * as React from "react";

import { DotSize, TabFourAppearanceOptions, TabButtonLayout } from '../types';
import {
    TabRouter,
    createNavigatorFactory,
    useNavigationBuilder,
} from "@react-navigation/native";


import MyTabBar from "../components/TabExtra/MyTabBar";

const defaultAppearance: TabFourAppearanceOptions = {
    tabButtonLayout: TabButtonLayout.HORIZONTAL,
    tabBarBackground: "#FFFFFF",
    activeColors: undefined,
    activeTabBackgrounds: undefined
};

const defaultTabBarOptions = {
    activeTintColor: "black",
    inactiveTintColor: "black",
    activeBackgroundColor: "#FFCF64",
    labelStyle: {

    },
};

interface IBottomTabNavigatorProps {
    initialRouteName?: string;
    backBehavior?: "history" | "initialRoute" | "order" | "none" | undefined;
    children: React.ReactNode;
    screenOptions?: any;
    tabBarOptions?: any;
    appearance: Partial<TabFourAppearanceOptions>;
}

const BottomTabNavigator = ({
                                initialRouteName,
                                backBehavior,
                                children,
                                screenOptions,
                                tabBarOptions,
                                appearance,
                                ...rest
                            }: IBottomTabNavigatorProps) => {

    const { state, descriptors, navigation } = useNavigationBuilder(TabRouter, {
        initialRouteName,
        backBehavior,
        children,
        screenOptions,
    });

    const finalAppearance: TabFourAppearanceOptions = {
        ...defaultAppearance,
        ...appearance
    }

    const finalTabBarOptions = {
        ...defaultTabBarOptions,
        ...tabBarOptions
    }

    return (
        <MyTabBar
            {...rest}
            state={state}
            navigation={navigation}
            descriptors={descriptors}
            tabBarOptions={finalTabBarOptions}
            appearance={finalAppearance}
        />
    );
}

BottomTabNavigator.defaultProps = {
    lazy: true,
};

//Custom navigators need to wrap the navigator component in createNavigatorFactory before exporting.
export default createNavigatorFactory(BottomTabNavigator);
