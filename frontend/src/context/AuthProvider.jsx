import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const initialAuthUser = localStorage.getItem("Users");
    let parsedAuthUser;

    try {
        parsedAuthUser = initialAuthUser ? JSON.parse(initialAuthUser) : undefined;
    } catch (error) {
        console.error("Failed to parse initialAuthUser:", error);
        parsedAuthUser = undefined;
    }

    const [authUser, setAuthUser] = useState(parsedAuthUser);

    useEffect(() => {
        if (authUser) {
            localStorage.setItem("Users", JSON.stringify(authUser));
        } else {
            localStorage.removeItem("Users");
        }
    }, [authUser]);

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
