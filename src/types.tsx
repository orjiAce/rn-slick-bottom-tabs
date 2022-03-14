
export enum TabElementDisplayOptions {
    ICON_ONLY = "icon-only",
    LABEL_ONLY = 'label-only',
    BOTH = 'both'
}

export enum DotSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    DEFAULT = 'default' // not in docs
}

export enum TabButtonLayout {
    VERTICAL = 'vertical',
    HORIZONTAL = 'horizontal'
}


export interface IAppearanceOptions {
    topPadding: number;
    bottomPadding: number;
    horizontalPadding: number;
    tabBarBackground: string;
    activeTabBackgrounds?: string | string[];
    activeColors?: string | string[];
    floating: boolean;
    dotCornerRadius: number;
    whenActiveShow: TabElementDisplayOptions;
    whenInactiveShow: TabElementDisplayOptions;
    dotSize: DotSize;
    shadow: boolean;
    tabButtonLayout: TabButtonLayout
}
//Soft Tab Two
export interface TabTwoAppearanceOptions {
    topPadding: number;
    bottomPadding: number;
    horizontalPadding: number;
    tabBarBackground: string;
    activeTabBackgrounds?: string | string[];
    activeColors?: string | string[];
    activeTabColors?: string | string[];
    dotSize?: DotSize;
    tabButtonLayout: TabButtonLayout
}
//Soft Tab Two
export interface TabFourAppearanceOptions {
    tabBarBackground: string;
    activeTabBackgrounds?: string | string[];
    activeColors?: string | string[];
    tabButtonLayout: TabButtonLayout
}
