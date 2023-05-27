import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ScrollToTopOnRouting from './components/ScrollToTopOnRouting.tsx';
import MovieDetails from './components/pages/MovieDetails.tsx';
import ErrorPage from './components/pages/ErrorPage.tsx';
import store from "./redux/store";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTopOnRouting />   {/* This is component used to scroll to top on changing the Route */}

        <Routes>
          <Route path='/' element={<App />} />
          <Route path='movieDetails' element={<MovieDetails />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)
