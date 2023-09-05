export default function UpArrow (): JSX.Element {
  return (
    <button className="absolute -top-10 right-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary-linear shadow-drop-2" onClick={() => window.scrollTo(0, 0)}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.8482 7.14899L22 16.8802L20.8357 18L11.7117 8.29833L2.13618 17.9817L1 16.8327L11.712 6L12.8482 7.14899Z" fill="white"/>
      </svg>
    </button>

  );
}
