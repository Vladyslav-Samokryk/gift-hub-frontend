import className from "classnames";

interface StarIconProps {
  rated: boolean;
}

export const StarIcon = ({ rated }: StarIconProps): JSX.Element => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path className={className({ "fill-gray-600": !rated })} d="M12 2L14.2451 8.90983H21.5106L15.6327 13.1803L17.8779 20.0902L12 15.8197L6.12215 20.0902L8.36729 13.1803L2.48944 8.90983H9.75486L12 2Z" fill="#FFD805"/>
</svg>;
