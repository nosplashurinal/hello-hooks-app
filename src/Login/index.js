import React from "react";
import { Input, Button } from "antd";
import Form from './Form';

function Login() {
  return (
    <Form>
      <h4>Login</h4>
      <Input placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button type="primary" className="submit-btn">Submit</Button>
    </Form>
  );
}

export default Login;
