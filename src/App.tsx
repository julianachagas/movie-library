import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router.tsx';
import { GlobalProvider } from './contexts/GlobalContext.tsx';

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Router />
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
