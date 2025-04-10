import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col} from 'react-bootstrap';
import FormContainer  from '../components/FormContainer';
import axios from "axios";
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });
      localStorage.setItem("email",res.data.user.email);
      localStorage.setItem("token", res.data.token); 
      // Store token
      console.log("Logged in!");

      // Navigate to the user's dashboard or home page
      navigate("/dashboard"); // Example: Redirect to dashboard after login
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
    }
  };
  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='email' placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-3">
          Sign In
        </Button>

        <Row className="py-3">
          <Col>
            New User? <Link to='/register'>Register</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
};

export default LoginScreen;