// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    < >
      <Navbar />
      <Banner/>
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
