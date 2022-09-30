import ReactDOM from 'react-dom/client';
import App from './App';
import { AppContextProvider } from './context/appContext';
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  // </React.StrictMode>
)
