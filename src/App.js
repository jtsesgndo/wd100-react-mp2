import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/navigationbar";
import Banner from "./img/spotify.jpg"
import BodyContent from "./components/bodycontent";
import './App.css'
import Footer from "./components/footer";
import FetchData from "./components/fetchData";
import GridCard from "./components/gridCard";





function App() {
  return (
    <div className="App">
      <NavigationBar img={Banner}></NavigationBar>

      <FetchData></FetchData>
      <GridCard></GridCard>
      <BodyContent></BodyContent>
      <Footer></Footer> 
    </div>
  );
}

export default App;