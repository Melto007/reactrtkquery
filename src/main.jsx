import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import { extendApiSlice } from './features/posts/postSlice'
import { selectAllUsers } from './features/users/userSlice'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

store.dispatch(extendApiSlice.endpoints.getPosts.initiate())
store.dispatch(selectAllUsers())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>,
)
