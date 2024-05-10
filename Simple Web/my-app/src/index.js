import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';

import PageForm from './PageForm.jsx'
import LastPage from './LastPage.jsx';
import NoPage from "./pages/NoPage.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<BrowserRouter>

  <Routes>
    <Route exact  path='/' element={<App />} />

<Route  path='/form' element={<PageForm/>}/>
<Route  path='/form/lastpage' element={<LastPage/>}/>
<Route path="*" element={<NoPage />} />


  </Routes>

</BrowserRouter>
 
);

