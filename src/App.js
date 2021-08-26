import logo from './logo.svg';
import './components/Reset.css';
// import './App.css';
import appClass from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className={appClass.wrap}>
      <Header />
      <div className={appClass.main}>
        <Navbar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
