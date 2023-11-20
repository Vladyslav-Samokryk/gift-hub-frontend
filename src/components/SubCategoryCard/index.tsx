import { Link } from "react-router-dom";

interface SubcategoryCardProps {
  subTitle: string;
  subImg: string;
  subUrl: string;
  onClick: (() => void) | undefined;
}

export default function SubcategoryCard({
  subTitle,
  subImg,
  subUrl,
  onClick,
}: SubcategoryCardProps): JSX.Element {
  return (
    <Link
      to={"/catalog/" + subUrl}
      className="mb-2 ml-7 flex w-full items-center lg:block lg:w-36 lg:text-center"
      onClick={onClick}
    >
      <img
        src={subImg}
        alt={subTitle}
        className="mr-2 h-20 w-20 lg:h-36 lg:w-full"
      />
      <p className="additional">{subTitle}</p>
    </Link>
  );
}
