import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web development"
          des="Web development is the creation of functional and interactive websites."
         
        />
        <Card
          title="Graphic Design"
          des="Graphic design is the creative use of text and images to communicate ideas visually."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Video editing"
          des="Video editing is the process of arranging and enhancing video clips to create a polished and engaging final product."
          icon={<SiProgress />}
        />
        {/* <Card
          title="App development"
          des="App development is the process of creating software applications for mobile or desktop devices to provide useful and interactive features."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaGlobe />}
        /> */}
      </div>
    </section>
  );
}

export default Features
