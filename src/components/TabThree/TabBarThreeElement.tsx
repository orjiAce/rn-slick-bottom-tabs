// UI Components imports
import {
    CommonActions,
    Descriptor,
    NavigationState,
    PartialState,
    Route,
    TabNavigationState
} from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import {
    Animated,
    BackHandler,
    Dimensions,
    I18nManager,
    Platform,
    StyleSheet,
    TextStyle,
    View,
    ViewStyle
} from "react-native";
import {ScreenContainer} from "react-native-screens";
import ResourceSavingScene from "../ResourceSavingsScene";
import { TabTwoAppearanceOptions} from "../../types";
import {BottomTabBarWrapper, Dot, TabButton, TabThreeLabel} from "../UIComponents";


interface tabBarOptionsProps {
    labelStyle: TextStyle,
    tabStyle: ViewStyle,
    activeTintColor: string,
    activeTabColor: string,
    inactiveTintColor: string,
    activeBackgroundColor: string
}

interface TabBarElementProps {
    state: TabNavigationState<Record<string, object | undefined>>;
    navigation: any;
    // @ts-ignore
    descriptors: Record<string, Descriptor<Record<string, object | undefined>, string, TabNavigationState<Record<string, object | undefined>>, any, {}>>;
    appearance: TabTwoAppearanceOptions;
    tabBarOptions: tabBarOptionsProps;
    lazy?: boolean;
}



/**
 * @name TabBarElement
 * React Navigation v5 custom navigation (bottom tab bar) builder with an
 * an interactive animation, and easily customizable.
 *
 * @param state Navigation state
 * @param navigation Navigation object
 * @param descriptors
 * @param appearance Object with appearance configurations (see readme)
 * @param rest
 *
 * @return function that creates the custom tab bar
 */



export default ({
                    state,
                    navigation,
                    descriptors,
                    appearance,
                    tabBarOptions,
                    lazy,
                }: TabBarElementProps) => {
    // Appearance options destruction
    const {
        topPadding,
        bottomPadding,
        horizontalPadding,
        tabBarBackground,
        activeColors,
        tabButtonLayout,
    } = appearance;

    const {
        activeTintColor,
        inactiveTintColor,
        activeBackgroundColor,
        activeTabColor,
        labelStyle
    } = tabBarOptions;

    // State
    const [prevPos, setPrevPos] = useState(horizontalPadding);
    const [pos, setPos] = useState(prevPos);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [animatedPos] = useState(() => new Animated.Value(1));
    const [loaded, setLoaded] = useState([state.index]);


    let dotNumber = 40;
if(state.routes.length === 1){
    dotNumber = 40
}else if(state.routes.length === 2){
    dotNumber = 100
}else if(state.routes.length === 3){
    dotNumber = -160
}else if(state.routes.length === 4){
    dotNumber = -340
}else if(state.routes.length === 5){
    dotNumber = -500
}


    useEffect(() => {
        const {index} = state;
        setLoaded(loaded.includes(index) ? loaded : [...loaded, index]);
    }, [state]);

    // false = Portrait
    // true = Landscape
    const [isPortrait, setIsPortrait] = useState(true);

    // Reset animation when changing screen orientation
    Dimensions.addEventListener("change", () => {
        if (
            (isPortrait && !didChangeToPortrait()) ||
            (!isPortrait && didChangeToPortrait())
        ) {
            setIsPortrait(!isPortrait);
            animation(animatedPos).start(() => {
                updatePrevPos();
            });
        }
    });

    /**
     * @returns true if current orientation is Portrait, false otherwise
     */
    const didChangeToPortrait = () => {
        const dim = Dimensions.get("screen");
        return dim.height >= dim.width;
    };

    /**
     * Dot animation
     * @param {*} val animation value
     * @returns Animated.CompositeAnimation
     * Use .start() to start the animation
     */
    const animation = (val: Animated.Value) =>
        Animated.spring(val, {
            toValue: 1,
            useNativeDriver: false,
        });

    /**
     * Helper function that updates the previous position
     * of the tab to calculate the new position.
     */
    const updatePrevPos = () => {
        setPos((pos) => {
            setPrevPos(pos);
            return pos;

        });
        animatedPos.setValue(0);
    };

    /**
     * Handles physical button press for Android
     */
    const handleBackPress = () => {
        animation(animatedPos).start(() => {
            updatePrevPos();
        });
        return false;
    };

    useEffect(() => {
        animation(animatedPos).start(() => {
            updatePrevPos();
        });

        if (Platform.OS === "android") {
            BackHandler.addEventListener("hardwareBackPress", handleBackPress);
        }

        return () => {
            if (Platform.OS === "android") {
                BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
            }
        };
    }, []);

    /**
     * Animate whenever the navigation state changes
     */
    useEffect(() => {
        animation(animatedPos).start(() => {
            updatePrevPos();
        });
    }, [state.index]);

    // Compute activeBackgroundColor, if array provided, use array otherwise fallback to
    // default tabBarOptions property activeBackgroundColor (fallbacks for all unspecified tabs)
    /*const activeTabBackground = activeTabBackgrounds
        ? Array.isArray(activeTabBackgrounds)
            ? activeTabBackgrounds[state.index] || activeBackgroundColor
            : activeTabBackgrounds
        : activeBackgroundColor;*/

    // Compute activeBackgroundColor, if array provided, use array otherwise fallback to
    // default tabBarOptions property activeTintColor (fallbacks for all unspecified tabs)
    const activeColor = activeColors
        ? Array.isArray(activeColors)
            ? activeColors[state.index] || activeTintColor
            : activeColors
        : activeTintColor;

    /**
     * Create a tab button given a route and route index
     * @param {*} route
     * @param {*} routeIndex
     * @returns React.Node with the button component
     */
    const createTab = (
        route: (Route<string> & { state?: NavigationState | PartialState<NavigationState> | undefined; }),
        routeIndex: number) => {
        const focused = routeIndex == state.index;
        const {options} = descriptors[route.key];
        const tintColor = focused ? activeColor : inactiveTintColor;
        const activeLabelColor = focused ? activeTabColor : inactiveTintColor;

        const icon = options.tabBarIcon;

        const label =
            options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                    ? options.title
                    : route.name;

        const accessibilityLabel =
            options.tabBarAccessibilityLabel !== undefined
                ? options.tabBarAccessibilityLabel
                : typeof label === "string"
                    ? `${label}, tab, ${routeIndex + 1} of ${state.routes.length}`
                    : undefined;

        // Render the label next to the icon
        // only if showLabel is true

            // Render the label next to the icon
        // only if showLabel is true
        const renderLabel = () => {
            if (typeof label === "string") {
                return (
                    <TabThreeLabel
                        tabButtonLayout={tabButtonLayout}
                        style={labelStyle}
                        activeColor={activeLabelColor}>
                    {label}
                    </TabThreeLabel>
                );
            } else {
                return label({focused, color: activeColor});
            }
        };

        /**
         * Helper function to render the icon
         */
        const renderIcon = () => {
            if (icon === undefined) {
                return null;
            }

            let defaultIconSize = 20;
            return icon({focused, color: tintColor, size: defaultIconSize});
        };

        /**
         * On Press Handler
         * Emits an event to the navigation
         */
        const onPress = () => {
            animation(animatedPos).start(() => {
                updatePrevPos();
            });

            const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
            });

            if (!focused && !event.defaultPrevented) {
                navigation.dispatch({
                    ...CommonActions.navigate(route.name),
                    target: state.key,
                });
            }
        };

        /**
         * On Long Press Handler
         * Emits an event to the navigation
         */
        const onLongPress = () => {
            animation(animatedPos).start(() => {
                updatePrevPos();
            });

            navigation.emit({
                type: "tabLongPress",
                target: route.key,
            });
        };

        /**
         * Read the position and dimension of a tab.
         * and update animation state
         * @param {*} e
         */
        const onLayout = (e: any) => {
            if (focused) {
                setPos(e.nativeEvent.layout.x);
                setWidth(e.nativeEvent.layout.width);
                setHeight(e.nativeEvent.layout.height);
            }
        };


        return (

            <TabButton
                key={route.key}
                focused={focused}
                props={{accessibilityLabel, onLayout,onPress,onLongPress}}
                labelLength={label.length}
                tabButtonLayout={tabButtonLayout}
           >

                {renderIcon()}
                {renderLabel()}
            </TabButton>
        );
    };

    const {overlayStyle} = StyleSheet.create({
        overlayStyle: {
            top: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            position: "absolute",
        }
    });

    const {options} = descriptors[state.routes[state.index].key];
    const tabBarVisible =
        options.tabBarVisible == undefined ? true : options.tabBarVisible;
    return (
        <React.Fragment>
            {/* Current Screen */}
            <View
                style={{
                    flex: 1,
                    overflow: "hidden",
                }}
            >
                <ScreenContainer style={{flex: 1}}>
                    {state.routes.map((route, index) => {
                        const descriptor = descriptors[route.key];
                        const {unmountOnBlur} = descriptor.options;
                        const isFocused = state.index === index;

                        if (unmountOnBlur && !isFocused) {
                            return null;
                        }

                        if (lazy && !loaded.includes(index) && !isFocused) {
                            // Don't render a screen if we've never navigated to it
                            return null;
                        }

                        return (
                            <ResourceSavingScene
                                key={route.key}
                                isVisible={isFocused}
                                style={StyleSheet.absoluteFill}
                            >
                                <View
                                    accessibilityElementsHidden={!isFocused}
                                    importantForAccessibility={
                                        isFocused ? "auto" : "no-hide-descendants"
                                    }
                                    style={{flex: 1}}
                                >
                                    {descriptor.render()}
                                </View>
                            </ResourceSavingScene>
                        );
                    })}
                </ScreenContainer>
            </View>
            {/* Tab Bar */}
            {tabBarVisible && (
                <View pointerEvents={"box-none"} style={overlayStyle}>
                    <BottomTabBarWrapper

                        topPadding={topPadding}
                        bottomPadding={bottomPadding}
                        horizontalPadding={horizontalPadding}
                        tabBarBackground={tabBarBackground}

                    >
                        {state.routes.map(createTab)}
                        {/* Animated Dot / Background */}
                        <Dot
                         marginHorizontal={(width -  dotNumber / state.routes.length)  /state.routes.length}
                            dotCornerRadius={8}
                            topPadding={70}
                            activeTabBackground={activeColor}
                            style={
                                I18nManager.isRTL
                                    ? {
                                        right: animatedPos.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [prevPos, pos],
                                        }),
                                    }
                                    : {
                                        left: animatedPos.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [prevPos, pos],
                                        }),
                                    }}
                            width={5}
                            height={5}
                        />
                    </BottomTabBarWrapper>
                </View>
            )}
        </React.Fragment>
    );
}
