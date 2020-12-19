import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import MovieListScreen from './screens/MovieListScreen';
function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/movielist' exact component={MovieListScreen} />
      <Route path='/' exact component={HomeScreen} />
    </Router>
  );
}

export default App;
