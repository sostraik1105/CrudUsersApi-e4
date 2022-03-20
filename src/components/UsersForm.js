import React, { useEffect, useState } from "react";

export const UsersForm = ({
    createUser,
    edit,
    selectUser,
    updateUser
}) => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const clear = () => {
        setFirstName('')
        setLastName('')
        setBirthday('')
        setPassword('')
        setEmail('')
    }

    const submit = (e) => {
        e.preventDefault();

        const usersObj = {
            first_name,
            last_name,
            birthday,
            password,
            email
        }

        if(edit){
            usersObj.id = edit.id;
            updateUser(usersObj)
        } else { 
            createUser(usersObj)
            clear()
        }
    }

    useEffect(()=>{
        if(edit){
            setFirstName(edit.first_name);
            setLastName(edit.last_name);
            setBirthday(edit.birthday);
            setPassword(edit.password);
            setEmail(edit.email);
        } else {
            clear()
        }
    }, [edit])

    return(
    <>
        <form onSubmit={submit} className="usersForm">
            <h2>New User</h2>
            <div className="input-container">
                <label htmlFor="first_name"><i className="fa-solid fa-user"></i></label> 
                <input 
                    type="text"
                    id="first_name"
                    placeholder="First name"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={first_name}
                    required
                />
                <input 
                    type="text"
                    id="last_name"
                    placeholder="Last name"
                    onChange={(e) => setLastName(e.target.value)}
                    value={last_name}
                />
            </div>
            <div className="input-container">
                <label htmlFor="birthday"><i className="fa-solid fa-cake-candles"></i></label>
                <input 
                    type="date"
                    id="birthday"
                    min="1920-01-01" 
                    onChange={(e) => setBirthday(e.target.value)}
                    value={birthday}
                />
            </div>
            <div className="input-container">
                <label htmlFor="password"><i className="fa-solid fa-lock"></i></label>
                <input 
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>
            <div className="input-container">
                <label htmlFor="email"><i className="fa-solid fa-at"></i></label>
                <input 
                    type="email"
                    placeholder="Email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>

            <button>Submit</button>
            {edit && 
                <button id='cancel' onClick={()=>selectUser(null)}>Cancel</button>
            }
        </form>
    </>
    )
}