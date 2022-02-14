

import React from "react"
import Header from "./Headers"
import { useOktaAuth } from '@okta/okta-react';


const Home = () => {
    const {authService } = useOktaAuth();

    const login = () => { authService.login('/search'); }
    return (
        <React.Fragment>
            <Header />
            <main>
                <h1>Welcome to Books with Hooks</h1>
                <p>You need to signin to use the application</p>
                <button className="linkbuttons" onClick={login} >Signin</button>
            </main>
        </React.Fragment>
    )
}

export default Home