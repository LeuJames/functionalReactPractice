import React from 'react';

const UserForm = (props) => {
    const {inputs, setInputs} = props;

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form>
            <h1>Form:</h1>
            <div className="form-group">
                <label>First Name:</label>
                <input 
                    type="text" 
                    name='firstName'
                    onChange={onChange} 
                />
            </div>
            <div className="form-group">
                <label>Last Name:</label>
                <input 
                    type="text" 
                    name="lastName"
                    onChange={onChange} 
                />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input 
                    type="text" 
                    name = 'email'
                    onChange={onChange} 
                />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input 
                    type="password" 
                    name='password'
                    onChange={onChange}  
                />
            </div>
            <div className="form-group">
                <label>Confirm Password:</label>
                <input 
                    type="password" 
                    name = 'cPassword'
                    onChange={onChange} 
                />
            </div>
        </form>
    );
}

export default UserForm;