import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

function LoginForm() {
    const userId = localStorage.getItem("userId");
    let { LoginWithCredential, setLogin } = useAuth();

    const [UserDetails, setUserDetails] = useState({
        email: "",
        password: "",
    });


    const InputChangehandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserDetails({ ...UserDetails, [name]: value });
    }

    const SubmitHandler = (e) => {
        e.preventDefault();
        const newRecord = { ...UserDetails };
        if (newRecord.email === "" && newRecord.password === "") {
            console.log("fill all fileds");
        } else {
            LoginWithCredential(newRecord.email, newRecord.password);
        }
    }

    return (
        <form action="" onSubmit={SubmitHandler}>
            <div className="form-frame">
                <span>Sign In</span>
                <div>
                    <label>Email address</label>
                    <input
                        type="text"
                        value={UserDetails.email}
                        onChange={InputChangehandler}
                        name="email"
                        autoComplete="off"
                        placeholder="Enter email"
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={UserDetails.password}
                        onChange={InputChangehandler}
                        name="password"
                        autoComplete="off"
                        placeholder="Enter password"
                    />
                </div>

                <div>
                    <section>
                        <input type="checkbox" name="remember" />
                        <label style={{ fontWeight: "700" }}> Remember me</label>
                    </section>
                </div>

                <div>
                    {" "}
                    <button type="submit">Login</button>{" "}
                </div>

                <div>
                    <Link to="/signup" className="textDecorationNone">
                        Not having account ?
                        <span style={{ color: "#3498db", display: "inline" }}>
                            {" "}
                            SignUp
                        </span>
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default LoginForm
