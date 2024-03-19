import { ThemeProvider } from './components/theme-provider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Milkshake from './pages/Milkshake'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Milkshake />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
