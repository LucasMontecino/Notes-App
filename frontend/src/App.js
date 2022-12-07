import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navegation from './components/Navegation';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <BrowserRouter>
      <Navegation />
      
      
        <div className='container p-4'>
        <Routes>
        <Route exact path='/' element={<NotesList/>}/>
        <Route path='/edit/:id' element={<CreateNote/>}/>
        <Route path='/create' element={<CreateNote/>}/>
        <Route path='/user' element={<CreateUser/>}/>
        </Routes>
        </div>
      
    </BrowserRouter>
  );
}

export default App;
