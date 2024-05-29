import { CiLinkedin } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SCREEN } from "shared/constants/screens";
import { PAGE_OPTIONS } from "shared/constants/pageOptions";

import { useScreenWidth } from "shared/hooks/useScreenWidth";

export default function IconsBlock(): JSX.Element {
  const screenWidth = useScreenWidth();
  const iconSize = screenWidth <= SCREEN.LG ? PAGE_OPTIONS[3] : PAGE_OPTIONS[2];

  return (
    <div className="flex items-center mx-auto gap-3 w-fit">
      <CiLinkedin
        className="hover:text-blue-800 cursor-pointer transition-colors	duration-500 ease-in-out"
        size={iconSize}
      />
      <MdAlternateEmail
        className="hover:text-blue-800 cursor-pointer transition-colors	duration-500 ease-in-out"
        size={iconSize}
      />
      <FaInstagram
        className="hover:text-blue-800 cursor-pointer transition-colors	duration-500 ease-in-out"
        size={iconSize}
      />
      <FaGithub
        className="hover:text-blue-800 cursor-pointer transition-colors	duration-500 ease-in-out"
        size={iconSize}
      />
    </div>
  );
}
