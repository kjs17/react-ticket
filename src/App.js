import logo from './logo.svg';
import './App.css';
import { HomePage, SubmitPage, ViewPage } from './components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/submit' component={SubmitPage}/>
        <Route exact path='/view' component={ViewPage}/>
      </Switch>
    {/* <HomePage/>
    <SubmitPage/>
    <ViewPage/> */}
    </div>
    </Router>

  );
}

export default App;
