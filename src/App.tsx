import React from 'react';
import {BrowserRouter,Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Home from './Pages/home/Home';
import Nosotros from './Pages/nosotros/Nosotros';
import PetDetail from './Pages/detail/detail';
import PetShop from './Pages/Tienda/PetShop';
import InicioSesion from './Pages/inicio/InicioSesion';
import Registrate from './Pages/registro/Registrate';
import Navbar from './components/navbar/Navbar';



const App: React.FC = () => {
    
    return (
          
      <BrowserRouter>
        <Navbar/>
               <Routes>
                <Route path ="/" element={<Landing/>}/>
                <Route path="/home" element={<Home />} />
                <Route path="/nosotros" element={<Nosotros /> } />
                <Route path="/tienda" element={<PetShop /> }  />
                <Route path="/inicio-sesion" element={<InicioSesion /> } />
                <Route path="/detail/:id" element={<PetDetail/> } />
                <Route path="/registrate" element={<Registrate /> } />
                </Routes>
            </BrowserRouter>     
    );
};




export default App;