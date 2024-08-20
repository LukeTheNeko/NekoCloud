"use client";

import About from "@/components/About/About";
import BannerDiscord from "@/components/BannerDiscord/BannerDiscord";
import ContactUs from "@/components/ContatUs/ContatUs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Faq from "@/components/Faq/Faq";
import Testimonials from "@/components/Testimonials/Testimonials";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Icons from "@/components/Icons/Icons";
import ShowCase from "@/components/ShowCase/ShowCase";

export default function Home() {

  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <About />
      <BannerDiscord />
      <Testimonials />
      <ShowCase />
      <Faq />
      <ContactUs />
      <Footer />
    </>
  );
}