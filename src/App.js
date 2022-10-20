import './App.css';
import {Route, Switch, withRouter} from "react-router-dom";
import DialogueAnalytics from './pages/DialogueAnalytics/TotalStats/DialogueAnalytics';
import LeftBar from './components/LeftBar/Index';
import RightBar from './components/RightBar/Index';
import Header from './components/Header/Index';

function App() {

  return (
    <div className='wrapper'>
         <LeftBar />
         
            <Header />
            <Switch>
                <Route exact path={'/'}><DialogueAnalytics /></Route> 
            </Switch>

        <div className="right-bar-position">
          <RightBar />
        </div>

    </div>
  );
}

export default withRouter(App);
