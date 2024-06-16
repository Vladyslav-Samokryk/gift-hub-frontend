import { CiLinkedin } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SCREEN } from "shared/constants/screens";
import { PAGE_OPTIONS } from "shared/constants/pageOptions";

import { useScreenWidth } from "shared/hooks/useScreenWidth";

const iconBlockClass="hover:text-blue-800 cursor-pointer transition-colors	duration-500 ease-in-out"

export default function IconsBlock(): JSX.Element {
  const screenWidth = useScreenWidth();
  const iconSize = screenWidth <= SCREEN.LG ? PAGE_OPTIONS[3] : PAGE_OPTIONS[2];

  return (
    <div className="flex items-center mx-auto gap-3 w-fit">
      <CiLinkedin
        className={iconBlockClass}
        size={iconSize}
      />
      <MdAlternateEmail
        className={iconBlockClass}
        size={iconSize}
      />
      <FaInstagram
        className={iconBlockClass}
        size={iconSize}
      />
      <FaGithub
        className={iconBlockClass}
        size={iconSize}
      />
    </div>
  );
}
