import { GoogleLogin } from 'react-google-login';
import React from "react";

const clientId= "1069422158574-in2iou05qd9hh8bomhdrev5rdlrip6he.apps.googleusercontent.com";

function GglLogin () {
    const onSuccess = (res) => {
        console.log("Login success as:", res.profileObj)
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
            isSignedIn={true}        
        />
    </div>
    )
}

export default GglLogin;