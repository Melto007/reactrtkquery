import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store, persistor } from './app/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { extendApiSlice } from './features/posts/postSlice'
import { selectAllUsers } from './features/users/userSlice'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

store.dispatch(extendApiSlice.endpoints.getPosts.initiate())
store.dispatch(selectAllUsers())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
