import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext<any>(null);

export function ThemeContextProvider({ children }: any) {
    const [theme, setTheme] = useState("light");

    function updateTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{ theme, updateTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);