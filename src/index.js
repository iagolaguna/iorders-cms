import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { injectGlobal } from 'styled-components'

import 'antd/dist/antd.css'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

injectGlobal`
  html, body, #root{
    margin:0;
    padding:0;
    height:100%;
  }
`

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
