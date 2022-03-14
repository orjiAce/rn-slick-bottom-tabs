import {Animated, TextStyle, TouchableOpacity, View, StyleSheet} from "react-native";

import {DotSize, TabButtonLayout, TabElementDisplayOptions} from "../types";
import {isIphoneX} from "../utils/isIphoneX";
import React from "react";


// Config
const BOTTOM_PADDING = 20;
const BOTTOM_PADDING_IPHONE_X = 30;

interface IBottomTabBarWrapper {
    floating?: boolean;
    shadow?: boolean;
    tabBarBackground: string;
    topPadding: number;
    horizontalPadding: number;
    bottomPadding: number;
    children: any;
}

/*const BottomTabBarWrapper = Styled.View<IBottomTabBarWrapper>`
	flex-direction: row;
	${(p) => p.floating && floatingMarginHorizontal};
    elevation: 2;
	${(p) => p.floating && floatingMarginBottom};
	${(p) => p.floating && floatingRoundCorner};
  padding-bottom: ${(p) =>
    p.floating
        ? p.bottomPadding
        : isIphoneX()
            ? BOTTOM_PADDING_IPHONE_X + p.bottomPadding
            : p.bottomPadding}px;
  padding-top: ${(p) => p.topPadding}px;
  padding-horizontal: ${(p) => p.horizontalPadding}px;
  background-color: ${(p) => p.tabBarBackground};
	${(p) => p.shadow && SHADOW};
  `;*/

let value = isIphoneX() ? BOTTOM_PADDING_IPHONE_X : BOTTOM_PADDING

const BottomTabBarWrapper = ({
                                 floating,
                                 tabBarBackground,
                                 topPadding,
                                 horizontalPadding,
                                 bottomPadding,
                                 children
                             }: IBottomTabBarWrapper) => (


    <View style={[{
        flexDirection: "row",
        marginHorizontal: floating ? 20 : 0,
        elevation: 2,
        marginBottom: floating  ? value : 0 ,
        borderRadius: floating ? 40 : 0,
        paddingBottom: floating ? bottomPadding
            : isIphoneX()
                ? BOTTOM_PADDING_IPHONE_X + bottomPadding
                : bottomPadding,
        paddingTop: topPadding,
        paddingHorizontal: horizontalPadding,
        backgroundColor: tabBarBackground,
    }]}>
        {children}
    </View>
)

const calculateDotSize = (size: DotSize) => {
    switch (size) {
        case DotSize.SMALL:
            return 40;
        case DotSize.MEDIUM:
            return 10;
        case DotSize.LARGE:
            return 5;
        default:
            return 50;
    }
};


interface ILabelProps {
    whenInactiveShow?: TabElementDisplayOptions;
    whenActiveShow?: TabElementDisplayOptions;
    tabButtonLayout?: TabButtonLayout;
    activeColor: string;
    children: any,
    style: TextStyle
}

interface ITabButton {
    tabButtonLayout: TabButtonLayout;
    focused: boolean;
    labelLength: number;
    dotSize?: DotSize;
    children: any,
    props: any,
}


const TabButton = ({tabButtonLayout, focused, labelLength, dotSize, children, props}: ITabButton) => (
    <TouchableOpacity  {...props} style={[styles.tabButton, {
        flexDirection: tabButtonLayout == TabButtonLayout.VERTICAL
            ? "column"
            : tabButtonLayout == TabButtonLayout.HORIZONTAL
                ? "row"
                : "row",
         justifyContent:'space-evenly',
        // @ts-ignore
        flexGrow: focused ? labelLength / calculateDotSize(dotSize) + 1 : 1,
    }]}>
        {children}
    </TouchableOpacity>
)

const RoundTabButton = ({tabButtonLayout, focused, labelLength, dotSize, children, props}: ITabButton) => (
    <TouchableOpacity {...props} style={[styles.tabButton, {
        flexDirection: tabButtonLayout == TabButtonLayout.VERTICAL
            ? "column"
            : tabButtonLayout == TabButtonLayout.HORIZONTAL
                ? "row"
                : "row",
        // @ts-ignore
        flexGrow: focused ? labelLength / calculateDotSize(dotSize) + 1 : 1,
    }]}>
        {children}
    </TouchableOpacity>
)

const Label = ({style, activeColor, tabButtonLayout, whenActiveShow, whenInactiveShow, children}: ILabelProps) => (
    <Animated.Text style={[style, {
        color: activeColor,

       // fontSize: whenInactiveShow == TabElementDisplayOptions.BOTH || whenActiveShow == TabElementDisplayOptions.BOTH ? 10 : 12,
        marginLeft: whenActiveShow == TabElementDisplayOptions.BOTH || whenInactiveShow == TabElementDisplayOptions.BOTH
        && tabButtonLayout == TabButtonLayout.HORIZONTAL ? 8 : 0
    }]}>
        {children}
    </Animated.Text>
)


const LabelFour = ({style, activeColor, children}: ILabelProps) => (
    <Animated.Text style={[style, {
        color: activeColor,

    }]}>
        {children}
    </Animated.Text>
)


const TabThreeLabel = ({style, activeColor, children}: ILabelProps) => (
    <Animated.Text style={[style, {
        color: activeColor,
        fontSize: 10,

    }]}>
        {children}
    </Animated.Text>
)


interface IDotProps {
    topPadding: number;
    marginHorizontal?: number;
    width: number;
    height: number;
    dotCornerRadius: number;
    activeTabBackground: string;
    style: any
}

const Dot = ({topPadding, marginHorizontal,style, width, height, dotCornerRadius, activeTabBackground}: IDotProps) => (
    <Animated.View style={[style, {
       marginHorizontal,
        position: 'absolute',
        top: topPadding,
        width: width,
        height: height,
        borderRadius: dotCornerRadius,
        backgroundColor: activeTabBackground,
        zIndex: -1,
    }]}/>
)


const SHADOW = {
  shadowColor: "#000000",
  shadowOffset: "0px 5px",
  shadowOpacity: "0.05",
  elevation: 1,
  shadowRadius: 20,
}

const styles = StyleSheet.create({
    tabButton: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 10,
        paddingVertical: 10,

    },

})

export {BottomTabBarWrapper,LabelFour, Label, TabButton, RoundTabButton, calculateDotSize, Dot, SHADOW,TabThreeLabel};
