

import { CiLinkedin } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

import { useScreenWidth } from "shared/hooks/useScreenWidth";

export default function IconsBlock(): JSX.Element {
    const screenWidth = useScreenWidth();
    const iconSize = screenWidth <= 1024 ? 24 : 36;
    
    
  return (
    <div className="flex items-center mx-auto gap-3 w-fit">
      <CiLinkedin size={iconSize} />
      <MdAlternateEmail size={iconSize} />
      <FaInstagram size={iconSize} />
      <FaGithub size={iconSize} />
    </div>
  );
}
