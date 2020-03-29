import React, { useState } from 'react';
import Head from 'next/head';
import { useMutation } from '@apollo/react-hooks';

import { LOGIN_MUTATION } from '../graphql/auth.query.js';
import { Button, Form } from "react-bootstrap";

const Home = () => {
  // Create a query hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { loading, data }] = useMutation(LOGIN_MUTATION);
  
  if (loading) {
    return <p>Loading...</p>;
  }

  // if (error) {
  //   return <p>Error: {JSON.stringify(error)}</p>;
  // }

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    login({ variables: { email, password} });
  }

  return (
    <div>
      <Head>
        <title>Project Tap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        {/* <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit" disabled={!validateForm()}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Home;