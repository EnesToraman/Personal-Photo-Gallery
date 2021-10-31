import { SignUp } from "./components/SignUp";
import { AuthProvider } from "./contexts/AuthContext";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <SignUp />
      </AuthProvider>
    </div>
  );
}

export default App;
