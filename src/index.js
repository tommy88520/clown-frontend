import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './App';
// import { UserProvider } from './contexts/user.context'
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import { Provider } from 'react-redux'
import { store } from './store/store'
import { GoogleOAuthProvider } from '@react-oauth/google';

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <GoogleOAuthProvider clientId="939675599306-sho66ii70mupvekc9aae233a9n2q1rki.apps.googleusercontent.com">
    <Provider store={store}>
      {/* <ApolloProvider client={client}> */}
      <BrowserRouter>
        {/* <UserProvider> */}
        <App />
        {/* </UserProvider> */}
      </BrowserRouter>
      {/* </ApolloProvider>, */}

    </Provider>
  </GoogleOAuthProvider>
);
