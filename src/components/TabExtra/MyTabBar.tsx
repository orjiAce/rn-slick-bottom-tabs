import React, {useCallback, useEffect, useState} from 'react';
import {
    CommonActions,
    Descriptor,
    NavigationState,
    PartialState,
    Route,
    TabNavigationState
} from "@react-navigation/native";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Animated,
    Dimensions,
    TextStyle,
    ViewStyle, Platform, BackHandler
} from 'react-native';

import {TabFourAppearanceOptions} from "../../types";
import {ScreenContainer} from "react-native-screens";
import ResourceSavingScene from "../ResourceSavingsScene";
import { LabelFour} from "../UIComponents";


const width = Dimensions.get('screen').width;

interface tabBarOptionsProps {
    labelStyle: TextStyle,
    tabStyle: ViewStyle,
    activeTintColor: string,
    inactiveTintColor: string,
    activeBackgroundColor: string
}

interface TabBarElementProps {
    state: TabNavigationState<Record<string, object | undefined>>;
    navigation: any;

    // @ts-ignore
    descriptors: Record<string, Descriptor<Record<string, object | undefined>, string, TabNavigationState<Record<string, object | undefined>>, any, {}>>;
    appearance: TabFourAppearanceOptions;
    tabBarOptions: tabBarOptionsProps;
    lazy?: boolean;
}

export default ({state, descriptors, navigation, appearance,   tabBarOptions, lazy
}:
TabBarElementProps
) =>
{


    // Appearance options destruction
    const {

        tabBarBackground,
        activeColors,
    } = appearance;

    const {
        activeTintColor,
        inactiveTintColor,
        labelStyle
    } = tabBarOptions;



    const [loaded, setLoaded] = useState([state.index]);
    const translateValue = ((width - 5) / state.routes.length);
    const [tabTranslate, setTabTranslate] = React.useState(new Animated.Value(0));

    const [tabIndex, setTabIndex] = React.useState(0);
    const handleTabsChange = (index: number) => {
        setTabIndex(index);
    };


    useEffect(() => {
        // Animating the active index based current index
        Animated.spring(tabTranslate, {
            toValue: tabIndex * translateValue,
            stiffness: 180,
            damping: 20,
            mass: 1,
            useNativeDriver: true
        }).start()
    }, [state.index])



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

            animation(tabTranslate).start(() => {
                handleTabsChange(state.index)
            });
        }
    });

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
     * @returns true if current orientation is Portrait, false otherwise
     */
    const didChangeToPortrait = () => {
        const dim = Dimensions.get("screen");
        return dim.height >= dim.width;
    };


    useEffect(() => {
        const {index} = state;
        setLoaded(loaded.includes(index) ? loaded : [...loaded, index]);
    }, [state]);


    /**
     * Handles physical button press for Android
     */
    const handleBackPress = () => {
        const {index} = state;
      handleTabsChange(index)
        return false;
    };

    useEffect(() => {
        const {index} = state;
        handleTabsChange(index)

        if (Platform.OS === "android") {
            BackHandler.addEventListener("hardwareBackPress", handleBackPress);
        }

        return () => {
            if (Platform.OS === "android") {
                BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
            }
        };
    }, []);


    // Compute activeBackgroundColor, if array provided, use array otherwise fallback to
    // default tabBarOptions property activeTintColor (fallbacks for all unspecified tabs)
    const activeColor = activeColors
        ? Array.isArray(activeColors)
            ? activeColors[state.index] || activeTintColor
            : activeColors
        : activeTintColor;


    // useCallBack with an empty array as input, which will call inner lambda only once and memoize the reference for future calls
    const memoizedTabPressCallback = useCallback(
        (index) => {
            handleTabsChange(index);
        },
        []
    );

    const createTab = (route: (Route<string> & { state?: NavigationState | PartialState<NavigationState> | undefined; }), routeIndex: number) => {

        const focused = routeIndex == state.index;
        const {options} = descriptors[route.key];
        const tintColor = focused ? activeColor : inactiveTintColor;
        const icon = options.tabBarIcon;



            const label =
                options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                        ? options.title
                        : route.name;

            const isFocused = state.index === routeIndex;

            const onPress = () => {
                memoizedTabPressCallback(routeIndex)
                const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                });

                if (!isFocused && !event.defaultPrevented) {

                    navigation.dispatch({
                        ...CommonActions.navigate(route.name),
                        target: state.key,
                    });
                }
            };

            const onLongPress = () => {
                navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                });
            };
            const renderIcon = () => {
                if (icon === undefined) {
                    return null;
                }

                let defaultIconSize = 20;
                return icon({focused, color: tintColor, size: defaultIconSize});
            };

            const renderLabel = () => {
                if (typeof label === "string") {
                    return (
                        <LabelFour
                            style={labelStyle}
                            activeColor={tintColor}>
                            {label}
                        </LabelFour>
                    );
                } else {
                    return label({focused, color: activeColor});
                }
            };


            return (

                <TouchableOpacity

                    key={route.key}
                    accessibilityRole="button"
                    accessibilityState={isFocused ? {selected: true} : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style={{
                        flex: 1,
                        alignItems: 'center', justifyContent: 'center',


                    }}
                >

                    {renderIcon()}

                    {renderLabel()}

                </TouchableOpacity>
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
                    <View style={{
                        flexDirection: 'row',
                        height: 100,
                        backgroundColor: tabBarBackground,
                    }}>
                        <Animated.View
                            style={[StyleSheet.absoluteFill, {
                                position: "absolute",
                                width: (width - 5) / state.routes.length,
                                top: -5,
                                height: 2,
                                marginVertical: 2,
                                backgroundColor: activeColor,
                                borderRadius: 10,
                            },
                                {
                                    transform: [
                                        {
                                            translateX: tabTranslate
                                        }
                                    ]
                                }]}
                        >
                        </Animated.View>

                            {state.routes.map(createTab)}
                        {/* Animated Dot / Background */}
                    </View>
                </View>
            )}
        </React.Fragment>
    );


}
;




