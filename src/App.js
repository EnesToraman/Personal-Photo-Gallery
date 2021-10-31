import { Container } from "react-bootstrap"
import { SignUp } from "./components/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { LogIn } from "./components/LogIn";

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <div className="container-div">
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={LogIn} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container >
  );
}

export default App;
