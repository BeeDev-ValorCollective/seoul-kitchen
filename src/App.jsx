import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer_Component/Footer'
import ErrorPage from './views/ErrorPageView/ErrorPage'
import Index from './views/Index'
import About from './views/About'
import './static/css/style.css'


function App() {


  return (
    <>
      <Header />
      <main>
        <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/about/" element={ <About /> } />
        <Route path="/:bad/*" element={<ErrorPage/>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
