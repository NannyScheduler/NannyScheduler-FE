import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/Header.js";
import NannyList from "./components/NannyList";
import WelcomePage from "./components/WelcomePage";
import NannyForm from './components/NannyForm';
import ParentForm from './components/ParentForm';
import About from './components/About';



export default function App() {
  
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/about" component={About} />
      <Route path="/nannies" component={NannyList} />
      <Route path="/nanny-signup" component={NannyForm} />
      <Route path="/parent-signup" component={ParentForm} />
    </main>
  );
}
