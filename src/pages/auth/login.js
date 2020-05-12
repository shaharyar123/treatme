import React, { useState } from "react";
import { Login } from "../../services/auth";
import history from "../../history/history";
import { showToast } from "../../utilis/constants";
import Loading from '../../components/loading'

import '../../styles/auth.scss';

const LoginPage = () => {

    const [loading, setLoading] = useState(false);



    const login = async (ev) => {
        console.log('login')

        ev.preventDefault();

        setLoading(true);
        setTimeout(async () => {
            try {

                const response = await Login();
                history.push('/');


            } catch (err) {
                console.log('err ', err)
                setLoading(false);
                showToast.error(err, { className: "custom-toast" });
            }
        }, 3000);
    }

    return (
        <div className='container-fluid public-route-container'>
            <div className="row align-items-center h-100">

                {loading && <Loading></Loading>

                }

                <div className="col-12">
                    <div className='logo-container'>
                        Treat<span>Me</span>
                    </div>
                    <div className='auth-container'>
                        <div className="logo mb-2">
                            Log In
                            </div>
                        <img
                            src={require("../../assets/images/stravaBtn.png")}
                            height="80" width="100%"
                            alt='Continue with Strava'
                            onClick={login}
                        />
                    </div>


                </div>
            </div>
        </div>


    );
};

export default LoginPage;