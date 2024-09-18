import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import About from './components/About';
function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <Button onClick={handleClick} />
    </div>
  )
};
export default App;
