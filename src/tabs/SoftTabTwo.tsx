import * as React from "react";

import { DotSize, TabTwoAppearanceOptions, TabButtonLayout } from '../types';
import {
    TabRouter,
    createNavigatorFactory,
    useNavigationBuilder,
} from "@react-navigation/native";

import TabBarTwoElement from "../components/TabTwo/TabBarTwoElement";
import {TextStyle, ViewStyle} from "react-native";

const defaultAppearance: TabTwoAppearanceOptions = {
    topPadding: 10,
    bottomPadding: 10,
    horizontalPadding: 10,
    tabBarBackground: "#FFFFFF",
    dotSize: DotSize.SMALL,
    tabButtonLayout: TabButtonLayout.HORIZONTAL,
    activeColors: undefined,
    activeTabBackgrounds: undefined,
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
    tabBarOptions: {
        tabStyle?: ViewStyle,
        activeTintColor: string,
        inactiveTintColor: string,
        activeBackgroundColor: string
    };
    appearance: Partial<TabTwoAppearanceOptions>;
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

    const finalAppearance: TabTwoAppearanceOptions = {
        ...defaultAppearance,
        ...appearance
    }

    const finalTabBarOptions = {
        ...defaultTabBarOptions,
        ...tabBarOptions
    }

    return (
        <TabBarTwoElement
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
