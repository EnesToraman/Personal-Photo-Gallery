import { Container } from "react-bootstrap"
import { SignUp } from "./components/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { LogIn } from "./components/LogIn";
import { PrivateRoute } from './components/PrivateRoute'
import { Profile } from "./components/Profile";
import { ForgotPassword } from "./components/ForgotPassword";

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <div className="container-div">
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Profile} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={LogIn} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container >
  );
}

export default App;
