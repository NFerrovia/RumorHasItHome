import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://www.warcraftlogs.com/api/v2/client',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NzZhNzAwYS1iMWM0LTRkZWMtOWQyOC00YzE0OGNiODEwOWMiLCJqdGkiOiIwY2NjMjc0MmFmZmVlM2UxODBmNTI0OTViYTlkOGNjZDNlNTM1NTA5ZDRkOGM3NmQxYTRiZWZlMjA1YTQ2OTg5MDQ5OTRmMzU3YmI0MGUzYyIsImlhdCI6MTY2NDgzNDQ2NC42NTg2NDUsIm5iZiI6MTY2NDgzNDQ2NC42NTg2NDcsImV4cCI6MTY5NTkzODQ2NC42NTMzOTcsInN1YiI6IiIsInNjb3BlcyI6WyJ2aWV3LXVzZXItcHJvZmlsZSIsInZpZXctcHJpdmF0ZS1yZXBvcnRzIl19.XJDoeEr2yhgZK6srvGtCQiqtFGdoMqUbiVKO1l9M2p5TGdLi13pHX9eyG36yTHAcZWKNIZW5ajIqrDkiH0hMweH58rvrmp8aIfdLRvLUCLzn21LEv664qsbLk8uMNRbprtPgzrH6ox8K4sUTXSQtySTgRjzLPCxcOYlqRDe9dJvmeNlf_0ZBqD_KK9CQokrWzxnXNPCBrjS3_6_Jwnz7lWPBJv-Mk-UkISUM5SICnoQmfxf_osaJM_k6z6KJTe6RndtG9h8UJIKj35npWopreoU5XfPEQHlV9Csd_Euv8hap5l-t5L5X0u1mSqlxYyV1f2jGU7JYqhNuMMdVo9ctAZxOv8oWBnGm4hC_m-he_taIkVCQ8XWsNld26CZipnOsGWHzRbfkBgFHAadXElUEsdHhzZMRqTHv08PgsSgpnHPOYGIqhKjla00D91tadHQexmEiabbUQjazlMc2QYINPT5LnHR19z2tYi2kM0tz5eCeFldxJ6zNZoQ5ym2RPuj_Ji57jV8N8MhWS2odhgfmOsDl9C8Ri5nf6yHe8v5TNQWj1zgq9vObYkXAdy8bJHScTbJN9--sviTTcuRxPqYFoxrv8lfV8tY0HfzQcwIoWoLllQ-lOynXxWt-tnT0dliFc6qg09j6vadOB9ou6LnIuWooYdBr2rpEk89t6-X4imA';
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
