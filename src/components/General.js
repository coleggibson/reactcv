import React from "react";

const General = ({name, email, phone}) => {
    return (
    <div>
        <div>{name}</div>
        <div>{email}</div>
        <div>{phone}</div>
    </div>
    );
};

export default General
