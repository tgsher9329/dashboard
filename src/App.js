import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import YoutubeDetail from './components/YoutubeDetail';
import InstagramDetail from './components/InstagramDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact >
            <Dashboard />
          </Route>
          <Route path="/youtubeDetail" >
            <YoutubeDetail />
          </Route>
          <Route path="/instagramDetail" >
            <InstagramDetail />
          </Route>
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;
