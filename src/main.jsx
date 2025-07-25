import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DataContext from './dataContext.jsx'


function RootFunction(){
  const [name, setName] = useState('Abhay')

  return(
    <DataContext.Provider value={{name, setName}}>
      <StrictMode>
        <App />
      </StrictMode>
    </DataContext.Provider>
  )
}



createRoot(document.getElementById('root')).render(<RootFunction/>)
