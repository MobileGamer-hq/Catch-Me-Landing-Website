import './App.css';
import Header from "./sections/header/Header.jsx"; // new
import Hero from "./sections/hero/Hero.jsx";
import Footer from "./sections/footer/Footer.jsx";
import Audience from "./sections/audience/Audience.jsx";
import Product from "./sections/product/Product.jsx";
import Features from "./sections/features/Features.jsx";
import Problem from "./sections/problem/Problem.jsx";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Problem />
            <Features/>
            <Audience />
            <Product />
            <Footer/>
        </>
    )
}

export default App;
