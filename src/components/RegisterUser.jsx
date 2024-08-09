import { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/';

const RegisterUser = () => {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const registerUser = async () => {
    try {
      const response = await axios.post(`${BASE_URL}api/users/register`, user);
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={event => {event.preventDefault(); registerUser();}}>
        <input name="firstname" placeholder="First Name" onChange={handleChange} />
        <input name="lastname" placeholder="Last Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterUser;
