import { GoogleLogin } from 'react-google-login';
import React, { useContext } from "react";
import { Context } from '../store/appContext';

const clientId= "1069422158574-in2iou05qd9hh8bomhdrev5rdlrip6he.apps.googleusercontent.com"

function GglLogin () {
    const { actions } = useContext(Context)

    const onSuccess = (res) => {
        actions.gglogin(res.profileObj.email);
    }

    const onFailure = (res) => {
        console.log("Login failed! res:", res);
    }

    return(


    <div id="loginButton">
        <GoogleLogin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}   
        />
    </div>
    )
}

export default GglLogin;