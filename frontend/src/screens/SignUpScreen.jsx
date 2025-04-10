
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { Alert } from 'react-bootstrap';



const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);
const SignUpScreen = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",

  });
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(`${API_URL}/auth/register`, formData);
      console.log("User registered:", res.data);

      // Redirect to the login page after successful registration
      navigate("/login");
    } catch (err) {
      console.error("Registration error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Registration failed.");
    }
  }
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <FormContainer>
      <h1>Register</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            placeholder='Enter name'
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder='Enter email'
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            name='password'
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            name='passwordConfirmation'
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='mt-3'>
          Register
        </Button>

        {/* {isLoading && <Loader />} */}
      </Form>

      <Row className='py-3'>
        <Col>
          Already have an account? <Link to={`/login`}>Login</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default SignUpScreen