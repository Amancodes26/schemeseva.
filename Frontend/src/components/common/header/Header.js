// import combineLogoText from "../../utils/images/logo/combine-logo-text-white.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import userAuthenticatedAxiosInstance from "../../../services/users/userAuthenticatedAxiosInstance";

const Header = () => {
    const { isUserLoggedIn, setIsUserLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await userAuthenticatedAxiosInstance.post("/logout");
            console.log(response);
            console.log("User logged out successfully");
        } catch (error) {
            console.error("An error occurred", error.message);
        } finally {
            localStorage.removeItem("accessToken");
            setIsUserLoggedIn(false); // Update login state
            navigate("/");
            console.log("User logged out unsuccessfully");
        }
    };

    return (
        <div className="bg-black h-20 flex items-center justify-between gap-4 px-8 w-full border-b-4 border-white">
            <Link className="flex items-center" to={"/"}>
                <h1 className="text-white text-3xl font-bold font-mono">SCHEME SEVA</h1>
            </Link>

            <div className="flex gap-4 items-center">
                <Link to={isUserLoggedIn ? "#" : "/login"} className="" onClick={isUserLoggedIn ? handleLogout : null}>
                    <div className="neu-button bg-white hover:bg-violet-200 px-6 py-2 font-bold">
                        {isUserLoggedIn ? "Logout" : "Login"}
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
