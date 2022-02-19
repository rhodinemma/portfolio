import './App.scss'
import {About, Footer, Header, Skills, Work } from './container';
import { Navbar } from "./components";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
