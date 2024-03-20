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
import { useScreenWidth } from "shared/hooks/useScreenWidth";

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
  const windowWidth = useScreenWidth();

  const baseSizes = {
    LargePresentBox: { width: 150, height: 168 },
    MidlePresentBox: { width: 120, height: 140 },
    SemiSmallPresentBox: { width: 90, height: 105 },
    SmallPresentBox: { width: 80, height: 90 }, // Assuming SmallPresentBox has a base size
    QuestionMark: { width: 50, height: 76 },
  };

  const largeSizes = {
    LargePresentBox: { width: 200, height: 218 },
    MidlePresentBox: { width: 150, height: 200 },
    SemiSmallPresentBox: { width: 120, height: 140 },
    QuestionMark: { width: 100, height: 152 },
  };

  return (
    <div className="relative min-h-[100vh] min-w-full overflow-hidden bg-transparent">
      <motion.div
        initial={initial}
        animate={animate}
        transition={slowTransition}
        className="absolute left-[1vw] top-[1vh] rotate-[0deg] transform-gpu object-contain object-center"
      >
        {windowWidth < 1024 ? (
          <LargePresentBox
            width={baseSizes.LargePresentBox.width.toString()}
            height={baseSizes.LargePresentBox.height.toString()}
          />
        ) : (
          <LargePresentBox
            width={largeSizes.LargePresentBox.width.toString()}
            height={largeSizes.LargePresentBox.height.toString()}
          />
        )}
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
        {windowWidth < 1024 ? (
          <MidlePresentBox
            width={baseSizes.MidlePresentBox.width.toString()}
            height={baseSizes.MidlePresentBox.height.toString()}
          />
        ) : (
          <MidlePresentBox
            width={largeSizes.MidlePresentBox.width.toString()}
            height={largeSizes.MidlePresentBox.height.toString()}
          />
        )}
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={slowTransition}
        // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
        className="absolute top-[1vh] left-[48vw] rotate-[10deg] transform-gpu object-contain object-center"
      >
        {windowWidth < 1024 ? (
          <MidlePresentBox
            width={baseSizes.MidlePresentBox.width.toString()}
            height={baseSizes.MidlePresentBox.height.toString()}
          />
        ) : (
          <MidlePresentBox
            width={largeSizes.MidlePresentBox.width.toString()}
            height={largeSizes.MidlePresentBox.height.toString()}
          />
        )}
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        className="absolute left-[92vw] top-[3vh] rotate-[-110deg] transform-gpu object-contain object-center"
      >
        <SmallPresentBox />
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        className="absolute left-[70vw] top-[59vh] rotate-[20deg] transform-gpu object-contain object-center"
      >
        {windowWidth < 1024 ? (
          <MidlePresentBox
            width={baseSizes.MidlePresentBox.width.toString()}
            height={baseSizes.MidlePresentBox.height.toString()}
          />
        ) : (
          <MidlePresentBox
            width={largeSizes.MidlePresentBox.width.toString()}
            height={largeSizes.MidlePresentBox.height.toString()}
          />
        )}
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={fastTransition}
        className="absolute left-[70vw] top-[81vh] rotate-[-10deg] transform-gpu object-contain object-center"
      >
        {windowWidth < 1024 ? (
          <SemiSmallPresentBox
            width={baseSizes.SemiSmallPresentBox.width.toString()}
            height={baseSizes.SemiSmallPresentBox.height.toString()}
          />
        ) : (
          <SemiSmallPresentBox
            width={largeSizes.SemiSmallPresentBox.width.toString()}
            height={largeSizes.SemiSmallPresentBox.height.toString()}
          />
        )}
      </motion.div>
      <motion.div
        className="absolute left-[6vw] top-[85vh] h-[5vw] w-[3vw] rotate-[180deg] transform-gpu object-contain object-center"
        initial={initial}
        animate={animate}
        transition={slowTransition}
      >
        {windowWidth < 1024 ? (
          <QuestionMark
            width={baseSizes.QuestionMark.width.toString()}
            height={baseSizes.QuestionMark.height.toString()}
          />
        ) : (
          <QuestionMark
            width={largeSizes.QuestionMark.width.toString()}
            height={largeSizes.QuestionMark.height.toString()}
          />
        )}
      </motion.div>
      <motion.div
        className="absolute left-[16vw] top-[46vh] h-[16vw] w-[10vw] rotate-[0deg] transform-gpu object-contain object-center"
        initial={initial}
        animate={animate}
        transition={mediumTransition}
      >
        {windowWidth < 1024 ? (
          <QuestionMark
            width={baseSizes.QuestionMark.width.toString()}
            height={baseSizes.QuestionMark.height.toString()}
          />
        ) : (
          <QuestionMark
            width={largeSizes.QuestionMark.width.toString()}
            height={largeSizes.QuestionMark.height.toString()}
          />
        )}
      </motion.div>
      <motion.div
        className="absolute left-[36vw] top-[14vh] h-[18vw] w-[12vw] rotate-[0deg] transform-gpu object-contain object-center"
        initial={initial}
        animate={animate}
        transition={fastTransition}
      >
        {windowWidth < 1024 ? (
          <QuestionMark
            width={baseSizes.QuestionMark.width.toString()}
            height={baseSizes.QuestionMark.height.toString()}
          />
        ) : (
          <QuestionMark
            width={largeSizes.QuestionMark.width.toString()}
            height={largeSizes.QuestionMark.height.toString()}
          />
        )}
      </motion.div>
      <motion.div
        className="absolute left-[56vw] top-[61vh] h-[23vw] w-[16vw] rotate-[0deg] transform-gpu object-contain object-center"
        initial={initial}
        animate={animate}
        transition={slowTransition}
      >
        {windowWidth < 1024 ? (
          <QuestionMark
            width={baseSizes.QuestionMark.width.toString()}
            height={baseSizes.QuestionMark.height.toString()}
          />
        ) : (
          <QuestionMark
            width={largeSizes.QuestionMark.width.toString()}
            height={largeSizes.QuestionMark.height.toString()}
          />
        )}
      </motion.div>
      <motion.div
        className="absolute left-[70vw] top-[19vh] h-[12vw] w-[8vw] rotate-[0deg] transform-gpu object-contain object-center"
        initial={initial}
        animate={animate}
        transition={mediumTransition}
      >
        {windowWidth < 1024 ? (
          <QuestionMark
            width={baseSizes.QuestionMark.width.toString()}
            height={baseSizes.QuestionMark.height.toString()}
          />
        ) : (
          <QuestionMark
            width={largeSizes.QuestionMark.width.toString()}
            height={largeSizes.QuestionMark.height.toString()}
          />
        )}
      </motion.div>
      <motion.div
        className="absolute left-[85vw] top-[38vh] h-[18vw] w-[12vw] rotate-[0deg] transform-gpu object-contain object-center"
        initial={initial}
        animate={animate}
        transition={fastTransition}
      >
        {windowWidth < 1024 ? (
          <QuestionMark
            width={baseSizes.QuestionMark.width.toString()}
            height={baseSizes.QuestionMark.height.toString()}
          />
        ) : (
          <QuestionMark
            width={largeSizes.QuestionMark.width.toString()}
            height={largeSizes.QuestionMark.height.toString()}
          />
        )}
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
