import Image from "next/image";
import Navbar from "./component/navbar";
import HeroSection from "./component/hero";
import BrowseTheRange from "./component/card";
import Products from "./component/products";
import Slides from "./component/slides";
import Gallery from "./component/furniture";
import Footer from "./component/footer";
import Hero from "./component/hero";

export default function Home() {
  return (
    <div>
      <section>
      <div className="m-52"><Hero/></div>
      <div className="m-52"><BrowseTheRange/></div>
      <div><Products/></div>
      <div><Slides/></div>
      <div><Gallery/></div>
      </section>
    </div>
  );
}
