import AppRoutes from './routes/routes.jsX'
import './App.css'
import { AuthProvider } from './components/auth/useAuth'



function App() {
  return(
    <AuthProvider>
    <AppRoutes/>
    </AuthProvider>
    
  )
}

export default App
