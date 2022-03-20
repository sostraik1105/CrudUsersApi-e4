import React from "react";

export const UsersList = ({
    users,
    selectUser,
    deleteUser,
}) => {
    return(
        <section>
            {users.map(el=>(
                <article key={el.id}>
                    <h2>{el.first_name}</h2>
                    <button onClick={() => selectUser(el)}>Update</button>
                    <button onClick={() => deleteUser(el.id)}>Delete</button>
                </article>
            ))}
        </section>
    )
}