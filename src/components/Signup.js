import React from 'react';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'
import { Redirect, Link } from 'react-router-dom'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: '',
            name: '',
            email: '',
            UIDError: null,
            errors: null,
            redirect: false,
            isLoading: false
        };
    }
    //... other class methods
    render() {
        if (this.state.redirect) return ;
        return (
            <React.Fragment>
            <Row
        className='d-flex justify-content-center align-items-center w-100 mt-5'
        style={{
            minHeight: '100%'
        }}
    >
    >Col>
        {this.state.errors !== null && (
                <Alert variant='danger'>
            <ul>
            {this.showErrors().map(err => (
                    <li key={err}>{err</li>
    ))}
    </ul>
        </Alert>
    )}
    <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId='username'>
            <Form.Label>User ID</Form.Label>
        <Form.Control
        required
        type='text'
        name='uid'
        value={this.state.uid}
        placeholder='Choose a username'
        onChange={this.handleChange}
        />
        {this.state.UIDError !== null && (
        <Form.Control.Feedback
            style={{ display: 'block' }}
            type='invalid'
                >
                {this.state.UIDError}
                </Form.Control.Feedback>
        )}
    </Form.Group>
        <Form.Group controlId='display-name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
        required
        type='text'
        name='name'
        value={this.state.name}
        placeholder='What is your name?'
        onChange={this.handleChange}
        />
        </Form.Group>
        <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
        <Form.Control
        required
        type='email'
        name='email'
        value={this.state.email}
        placeholder='Your email address'
        onChange={this.handleChange}
        />
        </Form.Group>
        <Button
        disabled={this.state.isLoading}
        variant='primary'
        type='submit'
        className='btn-block'
            >
            {this.state.isLoading ? (
                    <>
                    <Spinner
                    as='span'
                    animation='grow'
                size='sm'
                role='status'
                aria-hidden='true'
                    />
                    Please wait...
            </>
    ) : (
        <span>Create My Account</span>
    )}
    </Button>
        <p className='pt-3'>
            Already have an account? <Link to='/'>Login</Link>
            </p>
            </Form>
            </Col>
            </Row>
            </React.Fragment>
    );
    }
}
export default Signup;