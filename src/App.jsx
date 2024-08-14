import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import About from './components/about'
import Features from './components/features'
import Services from './components/services'
import Morefeatures from './components/morefeatures'
import Pricing from './components/pricing'
import Faq from './components/faq'
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <div>
      <Navbar/>
    </div>

    <section className="container2 content text-white text-center">
        <h1>Başlık</h1>
        <p className="px-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur esse, ipsam, necessitatibus deleniti mollitia cum corporis obcaecati sit amet inventore porro, eum aliquid? Consectetur sunt expedita nostrum ratione eveniet quam.</p>
        <div className="links pt-3">
            <button type="button" className="btn text-white ">Learn More</button>
            <button type="button" className="btn text-white">Social Media</button>

        </div>
    </section>

    <div>
      <About/>
    </div>

    <div>
      <Features/>
    </div>

    <div>
      <Services/>
    </div>

    <div>
      <Morefeatures/>
    </div>

    <div>
      <Pricing/>
    </div>

    <div>
      <Faq/>
    </div>


    <div>
      <Footer/>
    </div>


   




    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </>
  )
}

export default App
