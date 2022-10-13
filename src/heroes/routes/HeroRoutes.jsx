import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../../ui";
import { MarvelPages, DcPage, SearchPage, HeroPage } from "../pages";

export const HeroRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPages/>}/>
                <Route path="dc" element={<DcPage/>}/>

                <Route path="search" element={<SearchPage/>}/>
                <Route path="heroe" element={<HeroPage/>}/>
                
                <Route path='/' element={<Navigate to="marvel"/>}/>
            </Routes>
        </div>
    </>

  )
}
