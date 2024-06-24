import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import QueryProvider from './lib/react-query/QueryProvider.tsx'
import ContextProvider from './context/UserContext.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <QueryProvider>
    <ContextProvider>
    <Provider store={store}>
    
    <App />
    </Provider>
    </ContextProvider>
    </QueryProvider>
  </React.StrictMode>,
)
