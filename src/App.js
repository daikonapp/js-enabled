import React, { useState, useEffect } from 'react';
import './App.css';
import {Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom';
import Feed from './routes/Feed';
import Home from './routes/Home';
import Profile from './routes/Profile';
import Create from './routes/Create';
import Navbar from './Components/General/Navbar';

function App() {
  const [firstRun, updateFirstRun] = useState(true);
  const [food, updateFood] = useState([]);

  // const getFood = async () => {}

  // useEffect(() => {
  //   if (firstRun) {
  //     getFood();
  //     updateFirstRun(false);
  //   }

//   async function getFood() {
//     try {
//       const fetchedFood = await fetch('./food.json');
//       console.log('stil promise', fetchedFood);
//       const food = await fetchedFood.json();
//       console.log('fetched food', food);
//       updateFood(food.food);
//     } catch (err) {
//       console.warn(err);
//     }
//   }
// }, []);
  
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/create" component={Create}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/feed" component={Feed}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
