import CustomButton from "../CustomButton";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 padding-x pt-36 max-h-[920px]">
        <h1 className="hero__title">Feel the Freedom, Start the Journey!</h1>
        <p className="hero__subtitle text-gray-200">
          Are you ready for an unforgettable journey with gold standard service?
          Vehicle Crown your rental experience with Gold Options and make every
          moment special. you can make it.
        </p>

        <CustomButton title="Discover Cars" designs="mt-10" />
      </div>
      <div className="w-100 flex justify-center">
        <motion.img
          initial={{ translateX: 200, scale: 0.7 }}
          whileInView={{ translateX: 0, scale: 1 }}
          transition={{ duration: 1 }}
          src="./../../../public/hero.png"
          alt=""
          width={700}
          className="img-fluid object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
