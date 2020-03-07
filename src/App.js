import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {
	auth,
	createUserProfileDocument,
	addCollectionsAndDocuments
} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import Checkout from './pages/checkout/checkout.component';
import { selectCollectionsForPreview } from './redux/shop/shop.selector';

class App extends React.Component {
	// by default, this method is null
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		// provides a function to close the subscription
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			console.log(userAuth);
			if (!userAuth) {
				setCurrentUser(userAuth);
			} else {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapshot => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data()
					});
				});
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage}></Route>
					<Route path="/shop" component={Shop}></Route>
					<Route exact path="/checkout" component={Checkout}></Route>
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? (
								<Redirect to="/" />
							) : (
								<SignInAndSignUpPage />
							)
						}
					></Route>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
