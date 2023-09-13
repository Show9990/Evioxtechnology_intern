import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const root = createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-mtrras8wa4ynb5h6.us.auth0.com"
    clientId="Ip80W1Ain0KBJh64jsHc3BLpGOMAkUJp"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);
