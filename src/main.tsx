import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import MovieDetails from './components/MovieDetails.tsx';
import store from "./redux/store"
import { Provider } from 'react-redux'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "movieDetails",
    element: <MovieDetails />

  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
