import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
         <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">  
            Thanks For Viewing I&apos;m Exited to meet You  
          </h1>  
       <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">  
            "Ready to unleash some creative magic together? Drop me a line! Whether it’s a brilliant project idea, a collaboration, or just a virtual high-five, I’m all ears (and pixels). Let’s get in touch and make some digital dreams come true—no smoke signals or carrier pigeons required!"  
          </p>  
        <a href="mailto:johnorlandsudoy49@gmail.com">
          <MagicButton
            title="Email"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 John Orland Sudoy 
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a href={info.url} key={info.id}> 
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
           </a>  
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
