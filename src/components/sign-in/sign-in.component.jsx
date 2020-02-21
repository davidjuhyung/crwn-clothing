import React, { Component } from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
	state = {
		email: '',
		password: ''
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.setState({ email: '', password: '' });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account!</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						handleChange={this.handleChange}
						name="email"
						type="email"
						value={this.state.email}
						label="Email"
						required
					/>
					<FormInput
						handleChange={this.handleChange}
						name="password"
						type="password"
						value={this.state.password}
						label="Password"
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign in</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
