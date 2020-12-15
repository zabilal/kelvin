import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Join, Chat } from "./components";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import Parks from "./components/Parks";
import CovidStats from "./components/CovidStats";

import './App.css';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-12">
//             <Router>
//               <NavigationBar />
//               <Route exact path="/" component={Home} />
//               <Route path="/home" component={Home} />
//               <Route path="/login" component={LoginForm} />
//               <Route path="/parks" component={Parks} />
//               <Route path="/covid-stats" component={CovidStats} />
//               <Route path="/chat" component={Chat} />
//               {/* <Route path="/chat-room" component={ChatRoom} /> */}
//               {/* this fuction if you load anything but the defined route will redirect to registration */}
//               {/*{<Redirect from="*" to="/home" />}*/}
//               <Footer />
//             </Router>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

const App = () => (
  <Router>
    <NavigationBar />
    <Route exact path="/" component={Home} />
    <Route path="/join" exact component={Join} />
    <Route path="/chat" component={Chat} />
    <Route path="/home" component={Home} />
    <Route path="/login" component={LoginForm} />
    <Route path="/parks" component={Parks} />
    <Route path="/covid-stats" component={CovidStats} />
    {/* this fuction if you load anything but the defined route will redirect to registration */}
    {/*{<Redirect from="*" to="/home" />}*/}
    <Footer />
  </Router>
);

export default App;
