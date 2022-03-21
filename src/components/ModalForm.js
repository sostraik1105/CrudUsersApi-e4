import React from "react";

export const ModalForm = (props) => {
    return(
        <>
        <h1>hola</h1>
        <ModalForm 
            createUser={props.createUser}
            edit={props.edit}
            selectUser={props.selectUser}
            updateUser={props.updateUser}
        />
        </>
    )
}