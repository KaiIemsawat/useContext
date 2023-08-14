import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function FunctionContextComponent() {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const themeStyle = {
        backgroundColor: darkTheme ? "#282233" : "#d1c8c2",
        color: darkTheme ? "#d1c8c2" : "#282233",
        padding: "2rem",
        margin: "2rem",
    };
    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyle}>Function Theme</div>
        </>
    );
}
