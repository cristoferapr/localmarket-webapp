import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/login.css"
import GglLogin from "../component/glogin";
import { gapi } from "gapi-script";

const clientId= "1069422158574-in2iou05qd9hh8bomhdrev5rdlrip6he.apps.googleusercontent.com";

export const Login = () => {
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope:""
            })
        };

        gapi.load('client:auth2', start);
    });


	const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    console.log("this token", store.token )

    const handleClick = () => {
        actions.login(email, password);
    };

    if (store.token && store.token != "" && store.token != undefined) navigate("/");
    

	return (
		<><div className="text-center mt-5">
            <h1>Login</h1>
            {store.token && store.token != "" && store.token != undefined ? ("You are logged in with this token" + store.token
            ) : (
                <div>
                    <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleClick}>Login</button>
                    <GglLogin />   
                </div>
                
            )}
        </div><div>
            <p className="text-center mt-5">Doesn't have an account? <Link to="/signup">Sign Up!</Link></p>
            <p className="text-center mt-5"><Link to="/signup">Forgot your Password?</Link></p>
            </div></>
	);
};
