import { GoogleLogin } from 'react-google-login';

const clientId = "837835029168-2qeaslt2cf7lcc8osu5mdqclpujhq8kt.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res) => {
        console.log("Login Success! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login Failed!", res);
    }

    return(
        <div id="signInButton">
            <GoogleLogin
                clientId = {clientId}
                buttonText = {"Login"}
                onSuccess = {onSuccess}
                onFailure = {onFailure}
                cookiePolicy = {'single_host_origin'}
                isSignedIn = {true}
            />
        </div>
    )
}

export default Login;