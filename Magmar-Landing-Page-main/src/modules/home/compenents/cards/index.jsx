import bg from "../../assets/bg.png";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Button from "../buttons/Button";

const Card = ({
  i,
  title,
  description,
  imageUrl,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex justify-center items-center sticky top-0 w-full  left-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          backgroundImage: `url(${imageUrl})`,
        }}
        className="flex flex-col items-center relative sm:h-[430px] h-[320px] w-full rounded-[25px] sm:p-[50px] p-[5%] origin-top border border-[#353637] bg-cover bg-right sm:bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 sm:bg-transparent bg-black opacity-70 rounded-[40px]"></div>
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center h-full relative z-[100]">
          <div className="col-span-1">
            <div className="flex  flex-col">
              <h2 className="sm:text-[40px] text-[30px] text-white font-bold leading-[40px] ">
                {title}
              </h2>

              <p className="text-white sm:text-base text-sm my-[3%] ">
                {description}
              </p>
              <Button text="Learn More" />
            </div>
          </div>

          <div className="col-span-1">
            <motion.div>
              {/* <img className="w-full h-full " src={bg} alt="image" />
              <img className="w-full h-full " src={`/${src}`} alt="image" /> */}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
