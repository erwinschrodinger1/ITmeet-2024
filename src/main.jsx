import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AboutPage from './pages/AboutPage';
import PreEventPage from './pages/Pre-eventPage';
import MainEventPage from './pages/Main-eventPage';
import SponsorPage from './pages/SponsorsPage';
import FAQ from './pages/FAQ-Page';
import NotFoundPage from './pages/NotFoundPage';
import LocationPage from './pages/Location';
import Footer from './components/custom/Footer';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/abouts",
    element: <AboutPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/pre-events",
    element: <PreEventPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/main-events",
    element: <MainEventPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/sponsors",
    element: <SponsorPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/FAQs",
    element: <FAQ />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/locations",
    element: <LocationPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/contacts",
    element: <Footer />,
    errorElement: <NotFoundPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
