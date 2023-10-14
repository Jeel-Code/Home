// Css Import Link
import './Elements/Login/Login.css'
import './App.css';

// Page Import Link
import Home from './View/Home/Home';

// Header
import Header from './Components/Header/Header';

// Router Import Link
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

// Size Section
import S from './View/Size/S/S'
import Xxl from './View/Size/Xxl/Xxl';
import Xl from './View/Size/Xl/Xl';
import L from './View/Size/L/L';
import Xs from './View/Size/Xs/Xs';
import M from './View/Size/M/M';
import Ml from './View/Size/Ml/Ml';

// Color Section
import Blue from './View/Color/Blue/Blue';
import Wine from './View/Color/Wine/Wine';
import Gray from './View/Color/Gray/Gray';
import Black from './View/Color/Black/Black';
import White from './View/Color/White/White';

// Gender Section
import Boys from './View/Gender/Boys/Boys';
import Girl from './View/Gender/Girls/Girl';

// Login Page
import Login from './Elements/Login/Login'

// Buying Section
import B1 from './Buy/B1/B1';
import B2 from './Buy/B2/B2';
import B3 from './Buy/B3/B3';
import B4 from './Buy/B4/B4';

import B5 from './Buy/B5/B5';
import B6 from './Buy/B6/B6';
import B7 from './Buy/B7/B7';
import B8 from './Buy/B8/B8';

import B9 from './Buy/B9/B9';
import B10 from './Buy/B10/B10';
import B11 from './Buy/B11/B11';
import B12 from './Buy/B12/B12';

import B13 from './Buy/B13/B13';
import B14 from './Buy/B14/B14';
import B15 from './Buy/B15/B15';
import B16 from './Buy/B16/B16';



function App() {
  return (
    <>

      <Router>
        <Header />
        <Routes>

          {/* All Imported Files */}

          {/* Default Page Section */}
          <Route path='/' element={<Home />}></Route>

          {/* Home Section */}
          <Route path='/Home' element={<Home />}></Route>

          {/* Size Section */}
          <Route path='/S' element={<S />}></Route>
          <Route path='/M' element={<M />}></Route>
          <Route path='/L' element={<L />}></Route>
          <Route path='/XL' element={<Xl />}></Route>
          <Route path='/XS' element={<Xs />}></Route>
          <Route path='/ML' element={<Ml />}></Route>
          <Route path='/XXL' element={<Xxl />}></Route>

          {/* Color Section */}
          <Route path='/Gray' element={<Gray />}></Route>
          <Route path='/Blue' element={<Blue />}></Route>
          <Route path='/Wine' element={<Wine />}></Route>
          <Route path='/Black' element={<Black />}></Route>
          <Route path='/White' element={<White />}></Route>

          {/* Gender Section */}
          <Route path='/Boys' element={<Boys />}></Route>
          <Route path='/Girl' element={<Girl />}></Route>

          {/* Login Page */}
          <Route path='/Login' element={<Login />}></Route>

          {/* Buying Section */}
          <Route path='/B1' element={<B1 />}></Route>
          <Route path='/B2' element={<B2 />}></Route>
          <Route path='/B3' element={<B3 />}></Route>
          <Route path='/B4' element={<B4 />}></Route>

          <Route path='/B5' element={<B5 />}></Route>
          <Route path='/B6' element={<B6 />}></Route>
          <Route path='/B7' element={<B7 />}></Route>
          <Route path='/B8' element={<B8 />}></Route>

          <Route path='/B9' element={<B9 />}></Route>
          <Route path='/B10' element={<B10 />}></Route>
          <Route path='/B11' element={<B11 />}></Route>
          <Route path='/B12' element={<B12 />}></Route>

          <Route path='/B13' element={<B13 />}></Route>
          <Route path='/B14' element={<B14 />}></Route>
          <Route path='/B15' element={<B15 />}></Route>
          <Route path='/B16' element={<B16 />}></Route>

        </Routes>
      </Router>
    </>

  );
}

export default App;