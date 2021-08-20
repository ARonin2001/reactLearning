import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className="wrap">
      <Header />
      <div className="main">
        <Navbar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
