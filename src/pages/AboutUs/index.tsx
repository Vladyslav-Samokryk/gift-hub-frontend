import { motion } from "framer-motion";
import Photo from "../../shared/assets/png/leaders/Photo.webp";
import { useState } from "react";

const title = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dolor. Laudantium tempore eligendi quasi, nobis facilis distinctio! Minus dolorem tempora enim, iure eveniet deleniti provident. Aliquid voluptatum blanditiis ipsum consequatur";

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

export const AboutUs = (): JSX.Element => {
  const [leaders, updateLeaders] = useState<LeaderCart[]>([
    {
      id: 1,
      name: "Kate Shevchenko",
      position: "Product designer",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dolor. Laudantium tempore eligendi quasi, nobis facilis distinctio! Minus dolorem tempora enim, iure eveniet deleniti provident. Aliquid voluptatum blanditiis ipsum consequatur",
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dolor. Laudantium tempore eligendi quasi, nobis facilis distinctio! Minus dolorem tempora enim, iure eveniet deleniti provident. Aliquid voluptatum blanditiis ipsum consequatur",
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dolor. Laudantium tempore eligendi quasi, nobis facilis distinctio! Minus dolorem tempora enim, iure eveniet deleniti provident. Aliquid voluptatum blanditiis ipsum consequatur",
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dolor. Laudantium tempore eligendi quasi, nobis facilis distinctio! Minus dolorem tempora enim, iure eveniet deleniti provident. Aliquid voluptatum blanditiis ipsum consequatur",
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dolor. Laudantium tempore eligendi quasi, nobis facilis distinctio! Minus dolorem tempora enim, iure eveniet deleniti provident. Aliquid voluptatum blanditiis ipsum consequatur",
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dolor. Laudantium tempore eligendi quasi, nobis facilis distinctio! Minus dolorem tempora enim, iure eveniet deleniti provident. Aliquid voluptatum blanditiis ipsum consequatur",
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dolor. Laudantium tempore eligendi quasi, nobis facilis distinctio! Minus dolorem tempora enim, iure eveniet deleniti provident. Aliquid voluptatum blanditiis ipsum consequatur",
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dolor. Laudantium tempore eligendi quasi, nobis facilis distinctio! Minus dolorem tempora enim, iure eveniet deleniti provident. Aliquid voluptatum blanditiis ipsum consequatur",
      links: {
        linkedin: "https://www.linkedin.com",
        github: "https://github.com/",
      },
      photo: {
        big: Photo,
      },
      opened: false,
    },
  ]);

  const descriptionWidth = 450;

  const handleOpenCart = (id: number): void => {
    updateLeaders((prev) => prev.map((leader) => ({ ...leader, opened: leader.id === id ? !leader.opened : false })));
  };
  return (
    <div>
      <p className="p-20 text-center text-2xl font-medium">
        {title}
      </p>
      <div className="flex flex-wrap justify-center">
        {leaders.map(({ id, opened, description, links, name, photo, position }) => {
          return (
            <motion.section
              key={id}
              initial={{
                width: "auto",
                justifyContent: "initial",
              }}
              animate={{
                width: opened ? "100%" : "auto",
                justifyContent: opened ? "center" : "initial",
              }}
              className="flex p-6"
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
                }}
              >
                <button className='absolute'>
                  {opened ? "<" : ">"}
                </button>
              </motion.div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
};
