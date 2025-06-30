import React, {useEffect, useState, useContext, createContext} from "react";
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import theme from "./theme.jsx";

const defaultContextData = {
    dark: false
};

const ThemeContext = createContext(defaultContextData);
const useTheme = () => useContext(ThemeContext);

const useEffectDarkMode = () => {
    const [themeState, setThemeState] = useState({
        dark: false,
        hasThemeMounted: false
    });
    useEffect(() => {
        const isDark = localStorage.getItem("dark") === "true";
        setThemeState({ ...themeState, dark: isDark, hasThemeMounted: true });
    }, []);

    return [themeState, setThemeState];
};

const ThemeProvider = ({ children }) => {
    const [themeState, setThemeState] = useEffectDarkMode();

    if (!themeState.hasThemeMounted) {
        return <div />;
    }

    const toggle = () => {
        const dark = !themeState.dark;
        localStorage.setItem("dark", JSON.stringify(dark));
        setThemeState({ ...themeState, dark });
    };

    const computedTheme = themeState.dark ? theme("dark") : theme("light");

    return (
        <EmotionThemeProvider theme={computedTheme}>
            <ThemeContext.Provider
                value={{
                    dark: themeState.dark,
                    toggle
                }}
            >
                {children}
            </ThemeContext.Provider>
        </EmotionThemeProvider>
    );
};

export { ThemeProvider, useTheme };
