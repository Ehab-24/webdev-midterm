import React, { useState } from "react";
type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>(
    {} as ThemeContext
);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");
    const toggleTheme = () => {
        console.log("current theme: ", theme)
        setTheme(theme === "light" ? "dark" : "light");
    };

    const color = theme === "light" ? "#333" : "#FFF";
    const backgroundColor = theme === "light" ? "#FFF" : "#333";

    document.body.style.color = color;
    document.body.style.backgroundColor = backgroundColor;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
