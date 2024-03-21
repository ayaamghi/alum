import Home from './components/Home';
 import Footer from './components/Footer';
import About from './components/About';

  import ShareYourNews from './components/Forms/ConnectPage';
 import ProfileTemp from './components/ProfileTemp';
 import ScrollToTop from './components/ScrollToTop';
import EventCalendar from './components/EventCalendar';
import UpdateForm from './components/Forms/UpdateForm';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

 // import { useAuth0 } from '@auth0/auth0-react';
import { CssBaseline } from '@mui/material';
import TopNav from './components/TopNav';
 import AlumniDisplay from './AlumniDisplay/AlumniDisplay';

const App = () => {
  // const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return <Loading />
  // }

    return (  
    <div>
      <CssBaseline />
      <ScrollToTop />
       <TopNav /> 
         <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/alumni-spotlight" element={<AlumniDisplay />} />
        <Route path="/share-your-news" element={<ShareYourNews />} />
        <Route path="/event-calendar" element={<EventCalendar />} />
        <Route path="/profile" element={<ProfileTemp />} />
        <Route path="/UpdateForm" element={<UpdateForm />} />
      </Routes>
       <Footer />

    </div>
  );
}

export default App