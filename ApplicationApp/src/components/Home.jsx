import React from "react";
import section_one_lorem from "../assets/home-pic/section_one_lorem.png";
import Gallery from "./Gallery";
import Section from "./section";
import Speaker from "./Speaker";
import Sponsor from "./Sponsor";
import Vanue from "./Vanue";
import Faq from "./Faq";

function Home() {
  return (
  <>
      <section
        className="py-16 text-center bg-cover bg-no-repeat w-full h-full"
        style={{ backgroundImage: `url(${section_one_lorem})` }}
      >
        <h1 className="text-4xl font-bold mb-4 text-[#2C4DE2]">Lorem Ipsum</h1>
        <p className="text-black max-w-2xl mx-auto">
          When an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </section>
        <Section />
        <Speaker />
        <Faq />
        <Sponsor />
        <Gallery />
        <Vanue/>
  </>
  );
};

export default Home;
