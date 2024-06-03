import './App.css';
import Navbar from './components/navbar';
import MainContent from './components/mainContent';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <MainContent />
        <Footer />
        <div className="copyright">
                <p>Copryright © 2014 Tintaru Andrei (Shyfter).
                     All rights reserved.
                </p>
        </div>
    </div>
  );
}

export default App;
