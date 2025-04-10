import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import LoginScreen from './screens/LoginScreen.jsx';
import SignUpScreen from './screens/SignUpScreen.jsx';
import DashBoard from './screens/DashBoard.jsx';
const Home = () => <h1>Home Page</h1>;
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<App />}>
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<SignUpScreen />} />
      <Route path='/dashboard' element={<DashBoard />} />
    </Route>

    </>
  )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
