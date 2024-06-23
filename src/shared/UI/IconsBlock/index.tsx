import { CiLinkedin } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SCREEN } from "shared/constants/screens";
import { ICON_SIZES } from "shared/constants/iconSizes";

import { useScreenWidth } from "shared/hooks/useScreenWidth";

const iconBlockClass="hover:text-blue-800 cursor-pointer transition-colors	duration-500 ease-in-out"

export default function IconsBlock(): JSX.Element {
  const screenWidth = useScreenWidth();
  const iconSize = screenWidth <= SCREEN.LG ? ICON_SIZES[0] : ICON_SIZES[1];

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
