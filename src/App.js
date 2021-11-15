import './components/Reset.css';
// import './App.css';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
    <div className="wrap">
      <HeaderContainer />
      <div className="main">
        <NavbarContainer />
        <div className="app__content">
          <Route path="/profile/:userId?" render={() => 
            <ProfileContainer /> } />
          <Route path="/dialogs" render={ () => 
            <DialogsContainer /> } />
          
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/users" render={() => 
            <UsersContainer/> } />
          
        </div>
      </div>
    </div>
    
  );
}

export default App;
