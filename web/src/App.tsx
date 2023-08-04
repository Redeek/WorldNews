import './App.css';
import Header from './header/Header';
import Main from './routes/Main';
import { NewsContextProvider } from './context/NewsContext';


const App: React.FC = () => {
  return (
  <NewsContextProvider>
    <Header />
    <Main />
  </NewsContextProvider>
    
    );
}

export default App;
