---
sidebar_position: 1
---

# React Native Slick Bottom Tabs

![GitHub package.json version](https://img.shields.io/github/package-json/v/orjiace/rn-slick-bottom-tabs?color=blue&style=for-the-badge)
![NPM](https://img.shields.io/npm/l/express?color=red&style=for-the-badge)
![npm](https://img.shields.io/npm/dw/rn-slick-bottom-tabs?color=hunter%20green&style=for-the-badge)

 **A fully customizable react native Animated Bottom navigation tabs 🚀**.

## Getting Started

<img src="https://github.com/orjiAce/rn-slick-bottom-tabs/blob/master/ezgif.com-gif-maker.gif?raw=true" width="300"/>




### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.


## Features

- Light/dark support
- Fast
- Written Typescript
- Runs on Expo
- Smooth gesture interactions & snapping animations
- Accessibility support.

## Variants

- `AceTabBarNavigator`
- `JanmTabBarNavigator`
- `SlickTabBarNavigator`
- `BerlinTabBarNavigator`

## Some props you need to be aware of
- **Props may vary according to the navigation variant you choose to use for your app**

The navigation component takes two main props which help you customize your navigation. `tabBarOptions` is the default prop from React Navigation which you can use to specify different tint colors and more (see available options below). for all the details. The second prop is `appearance`. Here you'll be able to adjust several properties of the tab bar as you wish. See the available properties above.

- **tabBarOptions**

  - ✅`activeTintColor` - Label and icon color of the active tab item.
  - ✅`inactiveTintColor` - Label and icon color of the inactive tab item.
  - ✅`activeBackgroundColor` - Background color of the active tab item.
  - ✅`tabStyle` - Style object for the tab wrapper (**Note!** it overrides the properties in `appearance` prop (see below).
  - ✅`labelStyle` - Style object for the tab label text, inherits all props from react native Text.
  - ✅`activeTabColor` - String (Color).

- **appearance**

  - ✅`topPadding` (default: 20) - Space between the tab button and the wrapper (top)
  - ✅`horizontalPadding` (default: 20) - Vertical space between for the tab buttons
  - ✅`tabBarBackground` (default: "white") - Background color for the wrapper that contains the navigation tabs
  - ✅`shadow` (default: false) - If set to true, the wrapper has a light shadow

  - ✅`activeTabBackgrounds` - Array of hex colours for the background of each tab when active. (if not specified, falls back to the `activeBackgroundColor` from `tabBarOptions`)
  - ✅`activeColors` - Array of hex colours for the tint of each tab when active. (if not specified, falls back to the `activeTintColor` from `tabBarOptions`)

  - ✅`whenActiveShow` (default: "both") Configure the appearance of the active tab. Available values `both`, `label-only`, `icon-only`.
  - ✅`whenInactiveShow` (default: "icon-only") Configure the appearance of the inactive tabs. Available values `both`, `label-only`, `icon-only`.
  - ✅`tabButtonLayout` (default: "horizontal") Configure the layout of the tab button. Available values `vertical`, `horizontal`.

  - ✅`dotCornerRadius` (default: 100) Corner radius for the active background / dot.
  - ✅`dotSize` (default: "medium") Size of dot for the active tab. Available values `small`, `medium`, `large`.




## Installation


```bash
npm i rn-slick-bottom-tabs
```
```bash
yarn add rn-slick-bottom-tabs
```
You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.


## Dependencies

This library needs these dependencies to be installed in your project before you can use it:

```bash
npm i react-native-safe-area-context @react-navigation/native-stack @react-navigation/native react-native-screens
```

```bash
yarn add react-native-safe-area-context @react-navigation/native-stack @react-navigation/native react-native-screens
```

## Sponsor and support 🙂


To keep this library maintained and up-to-date you can [Buy me a coffee](https://www.buymeacoffee.com/orjiace)


