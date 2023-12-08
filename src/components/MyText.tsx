import { motion } from "framer-motion";

function MyText({
  content,
  delay,
  med = false,
  center = false,
}: {
  content: string;
  delay: number;
  med?: boolean;
  center?: boolean;
}) {
  const TEXT_MED = "sm:text-base text-sm";
  const TEXT_SM = "sm:text-sm text-xs";
  return (
    <motion.div
      whileInView={{
        y: [20, 0],
        opacity: [0, 1],
        transition: {
          delay: delay,
          duration: 0.4,
          type: "spring",
          stiffness: 100,
        },
      }}
      className={`info tracking-wide md:text-base sm:text-sm text-xs uppercase ${
        center ? "text-center" : ""
      } text-gray-200`}
    >
      <p>{content}</p>
    </motion.div>
  );
}

export default MyText;
