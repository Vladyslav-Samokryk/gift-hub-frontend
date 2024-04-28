interface IProps {
  classname?: string;
  fill: string;
}

export function Warning({ classname, fill }: IProps): JSX.Element {
  return (
    <svg
      className={classname}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M1.143 8c0 3.771 3.086 6.857 6.857 6.857 3.771 0 6.857-3.086 6.857-6.856 0-3.774-3.086-6.858-6.857-6.858-3.771 0-6.857 3.084-6.857 6.857zm1.143 0c0-3.143 2.571-5.715 5.714-5.715 3.143 0 5.715 2.572 5.715 5.715S11.143 13.714 8 13.714 2.286 11.143 2.286 8zM8.57 4.572H7.43v4.572H8.57V4.572zM8 12.002a.858.858 0 100-1.715.858.858 0 000 1.714z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
