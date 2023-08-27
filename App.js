

import React, { useState, useEffect,useContext } from 'react';

import StopwatchOne from "./components/StopwatchOne";
import Location7 from "./components/Location7";
import GenerateToken8 from './components/GenerateToken8';
import Search9 from './components/Search9';
import SearchInput10 from './components/SearchInput10';
import ImageUpload11 from './components/ImageUpload11';
import Promise12 from './components/Promise12'
import MyComponent13 from './components/MyComponent13'; 
import {CounterProvider, Counter} from './components/Counter14';
import AsynAwait15 from './components/AsynAwait15';
import CounterApp16 from './components/CounterApp16';
import UserList18 from './components/UserList18';
import SessionStorage19 from './components/SessionStorage19';
import Countdown20 from './components/CountDown20';
import MUI21 from './components/MUI21';
import ToDo17 from './components/Todo17';



function App() {

  const items = ["Apple", "Banana", "Cherry", "Durian", "Elderberry"];

  return(
    <div>
      {/* <StopwatchOne/> */}
      {/* <Location7/> */}
      {/* <GenerateToken8/> */}
      {/* <Search9 items={items}/> */}
      {/* <SearchInput10/> */}
      {/* <ImageUpload11/> */}
      {/* <Promise12/> */}
      {/* <MyComponent13/> */}

      {/* <CounterProvider>
       <Counter />
      </CounterProvider> */}

      {/* <AsynAwait15/> */}
      {/* <CounterApp16/> */}
      {/* <UserList18/> */}
      {/* <SessionStorage19/> */}
      {/* <Countdown20/> */}
      {/* <MUI21/> */}
      <ToDo17/>
    </div>
  )
}

export default App;

