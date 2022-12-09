import React from "react";
import ToggleTheme from "../components/ToggleTheme";
import { LocaleConsumer } from "../contexts/LocaleContext";

function Content() {
    return (
        <LocaleConsumer>
            {
                () => {
                    return (
                        <nav className="navigation">
                            <ul>
                                <li><ToggleTheme /></li>
                            </ul>
                        </nav>
                    )
                }
            }
        </LocaleConsumer>
    )
}




export default Content;