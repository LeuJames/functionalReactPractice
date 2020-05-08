import React from 'react';

const FormData = ({data}) => {
    return (
        <div>
            <p>First Name: {data.firstName}</p>
            <p>Last Name: {data.lastName}</p>
            <p>Email: {data.email}</p>
            <p>Password: {data.password}</p>
            <p>Confirm Password: {data.cPassword}</p>
        </div>
    )

}

export default FormData;