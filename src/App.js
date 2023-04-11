import './App.css';
import AuthDetails from './components/AuthDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <div className="App">
      <SignUp />
     <SignIn />
     <AuthDetails />
    </div>
  );
}

export default App;
