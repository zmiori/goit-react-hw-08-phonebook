import { useEffect, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { getCurrentUser } from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import './App.css';
import NavBar from './components/NavBar';
import Container from './components/Container';
// import HomeView from './views/HomeView';
// import ContactsView from './views/ContactsView';
// import LoginView from './views/LoginView';
// import RegisterView from './views/RegisterView';

const HomeView = lazy(() => import('./views/HomeView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
const LoginView = lazy(() => import('./views/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView'));

function App({ onGetCurrentUser }) {
  useEffect(() => {
    onGetCurrentUser();
  }, [onGetCurrentUser]);

  return (
    <Container>
      <NavBar />

      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <PrivateRoute path="/contacts" component={ContactsView} />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterView}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginView}
          />
        </Switch>
      </Suspense>
    </Container>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onGetCurrentUser: value => dispatch(getCurrentUser(value)),
  };
};

export default connect(null, mapDispatchToProps)(App);
