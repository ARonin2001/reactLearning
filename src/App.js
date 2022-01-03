
import React from 'react';
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
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Preloader from './components/common/preloader/preloader';
import { initizalizeApp } from './redux/appReducer';

class App extends React.Component {

  componentDidMount() {
    this.props.initizalizeApp();
  }
  
  render() {
    if(!this.props.initialized)
      return <Preloader />;

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
            <Route path="/login" component={Login}/>
            
          </div>
        </div>
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {initizalizeApp})
) (App);
