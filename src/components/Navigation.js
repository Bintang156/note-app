import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { LocaleConsumer } from "../contexts/LocaleContext";
import Theme from "../pages/Theme";

function Navigation({ logout, name }) {
    return (
        <LocaleConsumer>
            {
                () => {
                    return (
                        <nav className="navigation">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><button onClick={logout} className="button-logout">{name} <AiOutlineLogout /></button></li>
                                <li><Theme /></li>
                            </ul>
                        </nav>
                    )
                }
            }
        </LocaleConsumer>
    )
}
Navigation.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}



export default Navigation;