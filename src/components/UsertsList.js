import React from "react";

export const UsersList = ({
    users,
    selectUser,
    deleteUser,
    edit
}) => {
    return(
    <>
        <h2 className="usersh2">Users</h2>
        <section className={'UsersList'}>
            {users.map(el=>(
                <article key={el.id} className={'userCard'}>
                    <h2>{`${el.first_name} ${el.last_name}`}</h2>
                    <div className="userdata">
                        <h3>Birthday</h3>
                        <p><i>{el.birthday}</i></p>
                    </div>
                    <div className="userdata">
                        <h3>Email</h3>
                        <p><i>{el.email}</i></p>
                    </div>
                    <div className="btnsAction"> 
                        <button onClick={() => selectUser(el)}><i className="fa-solid fa-pen-to-square"></i></button> <br />
                        <button onClick={() => deleteUser(el.id)}><i className="fa-solid fa-trash"></i></button>
                    </div>
                </article>
            ))}
        </section>
    </>
    )
}