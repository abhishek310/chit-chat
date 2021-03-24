
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";


function App() {

    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;