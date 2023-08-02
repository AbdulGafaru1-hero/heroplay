
import './App.css';
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="app">
     <Sidebar/>
     <Feed />
     <Footer/>
    </div>
  );
}

export default App;
