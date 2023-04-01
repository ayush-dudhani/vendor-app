import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {Container,Button,Form} from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import '../index.css'

export default function SigninPage() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form >
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
           
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
          New customer?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
        <div className="mb-3">
          Forget Password? <Link to={`/forget-password`}>Reset Password</Link>
        </div>
      </Form>
    </Container>
  );
}