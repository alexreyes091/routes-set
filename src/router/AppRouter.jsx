import { Routes, Route} from 'react-router-dom';

// Components
import { HeroRoutes } from '../heroes';
import { LoginPage } from '../auth';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='login' element={<LoginPage/>}/>
            <Route path="/*" element={<HeroRoutes/>} />
        </Routes>
    </>
  )
}
