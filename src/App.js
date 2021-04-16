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
import React, { useContext } from "react";
import { theme } from "./context/theme";
import { ThemeContext } from "./context/ThemeProvider";
import ThemeSwitch from './components/ThemeSwitch';


const getStyles = (mode) => ({
  app: {
    backgroundColor: theme[mode].backgroundColor
  },
});


function App() {
  const { mode } = useContext(ThemeContext);
  const styles = getStyles(mode);

  return (
    <Router>
      <div className="App" style={styles.app}>
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
      <ThemeSwitch />
    </Router>
  );
}

export default App;
