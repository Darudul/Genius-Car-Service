import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate('');

    const navigateLogin = () => {
        navigate('/Login')
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your First Name</Form.Label>
                    <Form.Control type="text" name="firstName" placeholder="Enter First Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" placeholder="Enter Last Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Already have an account? <Link to="/login" className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        </div>
    );
};

export default Register;