import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register ";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import ParivateRoute from "./Pages/Login/ParivateRoute/ParivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <ParivateRoute path="/appointment">
              <Appointment />
            </ParivateRoute>
            <ParivateRoute path="/dashboard">
              <Dashboard />
            </ParivateRoute>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
