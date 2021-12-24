import React, { useState } from 'react'
import { postData } from '../../FetchingApi/fetchApi';
import { toast } from "react-toastify";

import { Link } from "react-router-dom";
function SignUpForm() {
    const [UserRegistration, setUserRegistration] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const RegisterInputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserRegistration({ ...UserRegistration, [name]: value });
    }

    const SubmitButtonHandler = (e) => {
        e.preventDefault();
        const newRegistraion = { ...UserRegistration };

        if (
            newRegistraion.email === "" &&
            newRegistraion.password === "" &&
            newRegistraion.email === ""
        ) {
            toast.error("All field must be filled");
        } else {
            RegisterUser({
                email: newRegistraion.email,
                password: newRegistraion.password,
                fullName: newRegistraion.fullName,
            });
        }
    }

    const RegisterUser = async ({ email, password, fullName }) => {
        const body = {
            email: email,
            password: password,
            name: fullName,
        };
        try {
            let response = await postData(body, `/users/signup`);
            if (response["success"]) {
                toast.success(response.message);
            } else {
                toast.error(response.message);
            }
        } catch (e) {
            console.error("Error in catch ", e);
        }
    };
    return (
        <div>
            <form action="" onSubmit={SubmitButtonHandler}>
                <div className="form-frame">
                    <span>Sign Up</span>
                    <div>
                        <label>Full name</label>
                        <input
                            type="text"
                            value={UserRegistration.fullName}
                            onChange={RegisterInputHandler}
                            name="fullName"
                            autoComplete="off"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div>
                        <label>Email address</label>
                        <input
                            type="text"
                            value={UserRegistration.email}
                            onChange={RegisterInputHandler}
                            name="email"
                            autoComplete="off"
                            placeholder="Enter email"
                        />
                    </div>

                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            value={UserRegistration.password}
                            onChange={RegisterInputHandler}
                            name="password"
                            autoComplete="off"
                            placeholder="Enter password"
                        />
                    </div>
                    <div>
                        {" "}
                        <button type="submit">Register</button>{" "}
                    </div>
                    <Link to="/login" className='textDecorationNone colorBlack'>
                        Already have an account ?
                        <span style={{ color: "#3498db", display: "inline" }}>
                            {" "}
                            Login
                        </span>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm
