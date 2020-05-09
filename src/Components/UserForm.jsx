import React, {useState} from 'react';

const UserForm = (props) => {
    const {inputs, setInputs} = props;
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [fNameError, setFNameError] = useState('');
    const [lNameError, setLNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [cPasswordError, setCPasswordError] = useState('');

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName: inputs.firstName, lastName: inputs.lastName, email: inputs.email, password: inputs.password, cPassword: inputs.cPassword };
        alert(`Welcome, ${newUser.firstName}!`);
        setHasBeenSubmitted(true);
    }


    const handleField = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value 
        })

        if (e.target.name === 'firstName') {
            if (e.target.value.length < 2) {
                setFNameError( "First name field must be at least 2 characters");
            }
            else {
                setFNameError( "");
            };
        }

        else if (e.target.name === 'lastName') {
            if (e.target.value.length < 2) {
                setLNameError( "Last name field must be at least 2 characters");
            }
            else {
                setLNameError( "");
            };
        }

        else if (e.target.name === 'email') {
            if (e.target.value.length < 5) {
                setEmailError( "Email field must be at least 2 characters");
            }
            else {
                setEmailError( "");
            };
        }
    
        else if (e.target.name === 'password' || e.target.name === 'cPassword') {
            if (inputs.password.length < 8) {
                setPasswordError("Password must be at least 8 characters");
            }
            else {
                setPasswordError("");
            }
            if( e.target.value !== inputs.password) {
                setCPasswordError('Passwords do not match')
            }
            else{
                setCPasswordError("")
            }
        };

    }


    return (
        <form onSubmit={createUser}>
            {
                hasBeenSubmitted ? 
                <h2>Thank you for submitting the form!</h2> :
                <h2>Welcome, please submit the form</h2>
            }
            <div className="form-group">
                <label>First Name:</label>
                <input 
                    type="text" 
                    name='firstName'
                    onChange={handleField} 
                />
                {
                    fNameError ?
                    <p style={{color:'red'}}> {fNameError}</p>  : ""
                }
            </div>
            <div className="form-group">
                <label>Last Name:</label>
                <input 
                    type="text" 
                    name="lastName"
                    onChange={handleField} 
                />
                {
                    lNameError ?
                    <p style={{color:'red'}}> {lNameError}</p>  : ""
                }
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input 
                    type="text" 
                    name = 'email'
                    onChange={handleField} 
                />
                {
                    emailError ?
                    <p style={{color:'red'}}> {emailError}</p>  : ""
                }
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input 
                    type="password" 
                    name='password'
                    onChange={handleField}  
                />
                {
                    passwordError ?
                    <p style={{color:'red'}}> {passwordError}</p>  : ""
                }
            </div>
            <div className="form-group">
                <label>Confirm Password:</label>
                <input 
                    type="password" 
                    name = 'cPassword'
                    onChange={handleField} 
                />
                {
                    cPasswordError ?
                    <p style={{color:'red'}}> {cPasswordError}</p>  : ""
                }
            </div>
            <input type="submit" value="Create User"/>
        </form>
    );
}

export default UserForm;