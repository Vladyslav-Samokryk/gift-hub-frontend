import { AnimatePresence, motion } from "framer-motion";
import Photo from "../../shared/assets/png/leaders/Photo.webp";
import { useState } from "react";

const title =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dolor. Laudantium tempore eligendi quasi, nobis facilis distinctio! Minus dolorem tempora enim, iure eveniet deleniti provident. Aliquid voluptatum blanditiis ipsum consequatur";

interface LeaderCart {
  id: number;
  name: string;
  position: string;
  description: string;
  links: {
    linkedin: string;
    github: string;
  };
  photo: {
    big: string;
  };
  opened: boolean;
}

const defaultLeaders = [
  {
    id: 1,
    name: "Kate Shevchenko",
    position: "Product designer",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dolor. Laudantium tempore eligendi quasi, nobis facilis distinctio! Minus dolorem tempora enim, iure eveniet deleniti provident. Aliquid voluptatum blanditiis ipsum consequatur",
    links: {
      linkedin: "https://www.linkedin.com",
      github: "https://github.com/",
    },
    photo: {
      big: Photo,
    },
    opened: false,
  },
  {
    id: 2,
    name: "Kate Shevchenko",
    position: "Product designer",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dolor. Laudantium tempore eligendi quasi, nobis facilis distinctio! Minus dolorem tempora enim, iure eveniet deleniti provident. Aliquid voluptatum blanditiis ipsum consequatur",
    links: {
      linkedin: "https://www.linkedin.com",
      github: "https://github.com/",
    },
    photo: {
      big: Photo,
    },
    opened: false,
  },
  {
    id: 3,
    name: "Kate Shevchenko",
    position: "Product designer",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dolor. Laudantium tempore eligendi quasi, nobis facilis distinctio! Minus dolorem tempora enim, iure eveniet deleniti provident. Aliquid voluptatum blanditiis ipsum consequatur",
    links: {
      linkedin: "https://www.linkedin.com",
      github: "https://github.com/",
    },
    photo: {
      big: Photo,
    },
    opened: false,
  },
  {
    id: 4,
    name: "Kate Shevchenko",
    position: "Product designer",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dolor. Laudantium tempore eligendi quasi, nobis facilis distinctio! Minus dolorem tempora enim, iure eveniet deleniti provident. Aliquid voluptatum blanditiis ipsum consequatur",
    links: {
      linkedin: "https://www.linkedin.com",
      github: "https://github.com/",
    },
    photo: {
      big: Photo,
    },
    opened: false,
  },
  {
    id: 5,
    name: "Kate Shevchenko",
    position: "Product designer",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dolor. Laudantium tempore eligendi quasi, nobis facilis distinctio! Minus dolorem tempora enim, iure eveniet deleniti provident. Aliquid voluptatum blanditiis ipsum consequatur",
    links: {
      linkedin: "https://www.linkedin.com",
      github: "https://github.com/",
    },
    photo: {
      big: Photo,
    },
    opened: false,
  },
  {
    id: 6,
    name: "Kate Shevchenko",
    position: "Product designer",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dolor. Laudantium tempore eligendi quasi, nobis facilis distinctio! Minus dolorem tempora enim, iure eveniet deleniti provident. Aliquid voluptatum blanditiis ipsum consequatur",
    links: {
      linkedin: "https://www.linkedin.com",
      github: "https://github.com/",
    },
    photo: {
      big: Photo,
    },
    opened: false,
  },
  {
    id: 7,
    name: "Kate Shevchenko",
    position: "Product designer",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dolor. Laudantium tempore eligendi quasi, nobis facilis distinctio! Minus dolorem tempora enim, iure eveniet deleniti provident. Aliquid voluptatum blanditiis ipsum consequatur",
    links: {
      linkedin: "https://www.linkedin.com",
      github: "https://github.com/",
    },
    photo: {
      big: Photo,
    },
    opened: false,
  },
  {
    id: 8,
    name: "Kate Shevchenko",
    position: "Product designer",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dolor. Laudantium tempore eligendi quasi, nobis facilis distinctio! Minus dolorem tempora enim, iure eveniet deleniti provident. Aliquid voluptatum blanditiis ipsum consequatur",
    links: {
      linkedin: "https://www.linkedin.com",
      github: "https://github.com/",
    },
    photo: {
      big: Photo,
    },
    opened: false,
  },
];

export const AboutUs = (): JSX.Element => {
  const [leaders, updateLeaders] = useState<LeaderCart[]>(defaultLeaders);
  const [isOpened, setIsOpened] = useState(false);

  const descriptionWidth = 450;

  const handleOpenCart = (id: number): void => {
    // updateLeaders((prev) => prev.map((leader) => ({ ...leader, opened: leader.id === id ? !leader.opened : false })));
    updateLeaders(
      isOpened
        ? (prev) => {
            const current = prev.filter((leader) => leader.id === id)[0];
            return [
              {
                ...current,
                opened: !current.opened,
              },
            ];
          }
        : defaultLeaders,
    );
  };
  return (
    <div className="">
      <p className="p-20 text-center text-2xl font-medium">{title}</p>
      <div className="mb-5 flex flex-wrap justify-center">
        <AnimatePresence initial={false}>
          {leaders.map(
            ({ id, opened, description, links, name, photo, position }) => {
              return (
                <motion.section
                  key={id}
                  layout
                  initial={{
                    scale: 0.8,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  exit={{
                    scale: 0.8,
                    opacity: 0,
                  }}
                  transition={{ duration: 0.7 }}
                  className={
                    "flex p-6 " + (opened ? "order-first" : `order-${id + 1}`)
                  }
                >
                  <img src={photo.big} className="z-10" />
                  <motion.div
                    className="flex w-36 items-center justify-end rounded-r-2xl border bg-red-300"
                    initial={{
                      x: -descriptionWidth + 40,
                      width: descriptionWidth,
                    }}
                    animate={{
                      x: opened ? -15 : -descriptionWidth + 400,
                      width: opened ? 500 : 100,
                    }}
                    transition={{ duration: 0.5 }}
                    onClick={() => {
                      handleOpenCart(id);
                      setIsOpened((prev) => !prev);
                    }}
                  >
                    <button className="absolute">
                      {opened ? "<" : ">"}
                      {id}
                    </button>
                  </motion.div>
                </motion.section>
              );
            },
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
