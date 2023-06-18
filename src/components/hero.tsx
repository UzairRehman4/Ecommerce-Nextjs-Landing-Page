import Image from "next/image";
import { Button } from "./ui/button";
import { AiFillShopping } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="mb-[100px]">
      <div className="hero min-h-[80vh] custom-img bg-fixed bg-center bg-no-repeat ">
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl text-white ">
              Futuristic Clothes
            </h1>
            <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-white">
              Upgrade your wardrobe with sleek and stylish Apparels and Top
              Notch Shoes..
            </p>
            <Button className="outline outline-offset-2 outline-1 bg-transparent hove:bg-transparent duration-300 group h-12 w-42 text-xl">
              <AiFillShopping className="mr-2 h-7 w-7 group-hover:text-blue-400 group-hover:animate-bounce" />
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
