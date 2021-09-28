import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'



class updateForm extends React.Component{

    render(){
        return(
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control  name ="name"type="email" placeholder="enter the name" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Photo</Form.Label>
    <Form.Control name ="photo"type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>price</Form.Label>
    <Form.Control name ="price"type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>)}}

export default updateForm