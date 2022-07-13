import { ThemeParams } from "../types/telegram-webapp";
export declare function createThemeSignal(): import("solid-js").Accessor<{
    themeParams: ThemeParams;
    colorScheme: "light" | "dark";
}>;
