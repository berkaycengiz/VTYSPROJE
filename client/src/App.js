import LoginButton from './Components/login';
import LogoutButton from './Components/logout';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = "837835029168-2qeaslt2cf7lcc8osu5mdqclpujhq8kt.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start);
  })

  return (
    <div className="GoogleButton">
      <LoginButton/>
    </div>
  );
}

export default App;
