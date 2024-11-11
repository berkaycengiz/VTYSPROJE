import { GoogleLogout } from "react-google-login";

const clientId = "837835029168-2qeaslt2cf7lcc8osu5mdqclpujhq8kt.apps.googleusercontent.com";

function Logout() {

    const onSuccess = () => {
        console.log("Logout Success!");
    }
    return(
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;