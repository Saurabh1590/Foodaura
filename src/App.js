(function() {
  const cors_api_host = 'cors-anywhere.herokuapp.com';
  const cors_api_url = `https://${cors_api_host}/`;

  // Patch XMLHttpRequest
  const open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function() {
      const args = [].slice.call(arguments);
      const targetUrl = args[1];
      if (!targetUrl.startsWith(cors_api_url)) {
          args[1] = cors_api_url + targetUrl;
      }
      return open.apply(this, args);
  };

  // Patch fetch
  const originalFetch = window.fetch;
  window.fetch = function(url, options) {
      if (!url.startsWith(cors_api_url)) {
          url = cors_api_url + url;
      }
      return originalFetch(url, options);
  };
})();


import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Contact from "./components/Contact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
