import  { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<MyReactComponent ls='ANAS' />} />
        <Route path="about" element={<About />} /> 
      </Route>
    </Routes>
  </BrowserRouter> */}
  </StrictMode>,
)

 