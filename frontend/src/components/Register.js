import React from "react";

const RegisterPage = () =>{
    return (
        <div>
            <h1>Register Page</h1>
            <form action="">
                <label htmlFor="">First Name</label>
                <input type="text" />
                <label htmlFor="">Last Name</label>
                <input type="text" />
                <label htmlFor="">Email Id</label>
                <input type="email" />

                <label htmlFor="">Enter password</label>
                <input type="password" />

                <label htmlFor="">Re-Enter password</label>
                <input type="password" />

            </form>
        </div>
    )
}

export default RegisterPage;