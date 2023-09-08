import { useState } from 'react';
import './App.css';
import SignUpForm from './components/signupform';
import Authenticate from './components/authenitcate';

function App() {
  const [count, setCount] = useState(0)

  return SignUpForm();
}

export default App
