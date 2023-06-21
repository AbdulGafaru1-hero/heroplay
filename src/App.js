
import './App.css';
import Sidebar from './components/Sidebar'
import RightSidebar from './components/RightSidebar'
import Feed from './components/Feed'
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
     <Sidebar/>
     <Feed/>
     < RightSidebar/>
     <Footer/>
    </div>
  );
}

export default App;
