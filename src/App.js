import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';
import Articles from './Views/Articles';
import Footer from './Components/Footer';
import Home from './Views/Home';
import Chat from './Views/Chat';
import Article from './Views/Article';
import './Assets/index.css'
import Category from './Views/Category';
import Login from './Views/Login';
import AboutUs from './Views/AboutUs';
import Page404 from './Views/404Page';


function App() {
  const [counter, setCounter] = useState(0);
  const reloadTaskList = () => {
    setCounter(counter + 1)
  }
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/articles'>
            <Articles />
          </Route>
          <Route path='/articles/category/:categoryId'>
            <Category/>
          </Route>
          <Route path='/articles/:articleId'>
            <Article/>
          </Route>          
          <Route path='/chat'>
            <Chat reloadTaskList={reloadTaskList} counter={counter} />
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/about-us'>
            <AboutUs/>
          </Route>
          <Route>
            <Page404/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
