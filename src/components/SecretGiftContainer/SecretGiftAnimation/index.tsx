import {
  LargePresentBox,
  Cloths,
  Accessories,
  Books,
  Cup,
  Food,
  Knowledge,
  Technique,
  MidlePresentBox,
  SemiSmallPresentBox,
  SmallPresentBox,
  QuestionMark,
} from "shared/assets/svg/SecretGift";
import { motion } from "framer-motion";
interface SecretGiftAnimationProps {
  initial: { y: number; opacity: number };
  animate: { y: number; opacity: number };
  transition: { duration: number };
}

export default function SecretGiftAnimation({
  initial,
  animate,
  transition,
}: SecretGiftAnimationProps): JSX.Element {
  const fastTransition = { duration: 0.5 }; // Define a fast transition
  const mediumTransition = { duration: 1 }; // Define a medium transition
  const slowTransition = { duration: 2 }; // Define a slow transition
  return (
    <div className="relative min-h-[100vh] min-w-full overflow-hidden bg-transparent">
      <motion.div
        initial={initial}
        animate={animate}
        transition={slowTransition}
        className="absolute left-[1vw] top-[1vh] rotate-[0deg] transform-gpu object-contain object-center"
      >
        <LargePresentBox width="150" height="168" />
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        className="absolute left-[43vw] top-[83vh] object-contain object-center"
      >
        <SmallPresentBox />
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={mediumTransition}
        className="absolute left-[43vw] top-[30vh] rotate-[110deg] transform-gpu object-contain object-center"
      >
        <MidlePresentBox width="120" height="140" />
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={slowTransition}
        // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
        className="absolute top-[1vh] left-[48vw] rotate-[10deg] transform-gpu object-contain object-center"
      >
        <MidlePresentBox width="120" height="140" />
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        className="absolute left-[95vw] top-[3vh] rotate-[-110deg] transform-gpu object-contain object-center"
      >
        <SmallPresentBox />
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        className="absolute left-[70vw] top-[59vh] rotate-[20deg] transform-gpu object-contain object-center"
      >
        <MidlePresentBox width="120" height="140" />
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={fastTransition}
        className="absolute left-[70vw] top-[81vh] rotate-[-10deg] transform-gpu object-contain object-center"
      >
        <SemiSmallPresentBox width="90" height="105" />
      </motion.div>
      <motion.div
        className="absolute left-[6vw] top-[85vh] h-[5vw] w-[3vw] rotate-[180deg] transform-gpu object-contain object-center"
        initial={initial}
        animate={animate}
        transition={slowTransition}
      >
        <QuestionMark width="50" height="76" />
      </motion.div>
      <motion.div
        className="absolute left-[16vw] top-[46vh] h-[16vw] w-[10vw] rotate-[0deg] transform-gpu object-contain object-center"
        initial={initial}
        animate={animate}
        transition={mediumTransition}
      >
        <QuestionMark width="50" height="76" />
      </motion.div>
      <motion.div
        className="absolute left-[36vw] top-[14vh] h-[18vw] w-[12vw] rotate-[0deg] transform-gpu object-contain object-center"
        initial={initial}
        animate={animate}
        transition={fastTransition}
      >
        <QuestionMark width="50" height="76" />
      </motion.div>
      <motion.div
        className="absolute left-[56vw] top-[61vh] h-[23vw] w-[16vw] rotate-[0deg] transform-gpu object-contain object-center"
        initial={initial}
        animate={animate}
        transition={slowTransition}
      >
        <QuestionMark width="50" height="76" />
      </motion.div>
      <motion.div
        className="absolute left-[70vw] top-[19vh] h-[12vw] w-[8vw] rotate-[0deg] transform-gpu object-contain object-center"
        initial={initial}
        animate={animate}
        transition={mediumTransition}
      >
        <QuestionMark width="50" height="76" />
      </motion.div>
      <motion.div
        className="absolute left-[85vw] top-[38vh] h-[18vw] w-[12vw] rotate-[0deg] transform-gpu object-contain object-center"
        initial={initial}
        animate={animate}
        transition={fastTransition}
      >
        <QuestionMark width="50" height="76" />
      </motion.div>
      <div className=" absolute left-[73vw] top-[5vh] object-contain object-center">
        <Accessories />
      </div>
      <div className=" absolute left-[68vw] top-[45vh] object-contain object-center">
        <Books />
      </div>
      <div className="absolute left-[87vw] top-[21vh] object-contain object-center">
        <Cup />
      </div>
      <div className="absolute left-[24vw] top-[6vh] object-contain object-center">
        <Food />
      </div>
      <div className=" absolute left-[37vw] top-[58vh] object-contain object-center">
        <Knowledge />
      </div>
      <div className=" absolute left-[43vw] top-[93vh] object-contain object-center">
        <Technique />
      </div>
      <div className=" absolute left-[3vw] top-[44vh] object-contain object-center">
        <Cloths />
      </div>
    </div>
  );
}
