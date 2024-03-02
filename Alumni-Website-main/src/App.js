import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';

import AlumniSpotlight from './components/AlumniSpotlight';
import AlumniNews from './components/AlumniNews';
import ShareYourNews from './components/Forms/ShareYourNews';
import Profile from './components/Profile';
import ProfileTemp from './components/ProfileTemp';
import Loading from './components/loading';
import ScrollToTop from './components/ScrollToTop';
import EventCalendar from './components/EventCalendar';
import UpdateForm from './components/Forms/UpdateForm';


import {Switch, Route} from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
import { CssBaseline } from '@material-ui/core';

const App = () => {
  // const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return <Loading />
  // }

  return (  
    <div>
      <CssBaseline />
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/alumni-spotlight" component={AlumniSpotlight} /> 
        <Route path="/alumni-news" component={AlumniNews} />
        <Route path="/share-your-news" component={ShareYourNews} />
        <Route path="/event-calendar" component={EventCalendar} />
        <Route path="/profile" component={ProfileTemp} />
        <Route path = "/UpdateForm" component={UpdateForm} />
      </Switch>
      <Footer />

    </div>
  );
}

export default App