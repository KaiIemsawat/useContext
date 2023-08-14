import React, { Component } from "react";

export default class ClassContextComponent extends Component {
    themeStyle(dark) {
        return {
            backgroundColor: dark ? "#282233" : "#d1c8c2",
            color: dark ? "#d1c8c2" : "#282233",
            padding: "2rem",
            margin: "2rem",
        };
    }

    render() {
        return (
            // .Consumer is part of React.createContext() is much like 'let value = useContext(contextValue)'
            <ThemeContext.Consumer>
                {(darkTheme) => {
                    return (
                        // this.themeStyle is in this class but (darkTheme) came from App.jsx
                        <div style={this.themeStyle(darkTheme)}>
                            Class Theme
                        </div>
                    );
                }}
            </ThemeContext.Consumer>
        );
    }
}
