import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './Components/UserForm';
import FormData from './Components/FormData'

function App() {
  const [ state, setState] = useState ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="App">
      <UserForm
        inputs = {state} 
        setInputs ={setState}
      />
      <FormData
        data = {state}
      />
    </div>
  );
}

export default App;
