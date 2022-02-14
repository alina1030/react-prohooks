import { LoginCallback, Security } from '@okta/okta-react';
import Home from './Home';
import Search from './Search';
import { Routes, Route } from 'react-router-dom';

const Main = () => {


    const restoreOriginalUri = () => {
        // Callback function to restore URI during login
    };
    return (

        <Security
            clientId={`0oa3svmlfhtCEHi0K5d7`}
            issuer={`https://dev-04888206.okta.com/oauth2/default`}
            redirectUri={`http://${window.location.host}/search`}
            scopes={['openid', 'profile', 'email']}
            pkce={true}
            restoreOriginalUri={restoreOriginalUri}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path={`http://${window.location.host}/search`} element={<LoginCallback />} />
            </Routes>
        </Security>
    )



}

export default Main