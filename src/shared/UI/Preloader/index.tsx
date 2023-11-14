import "./index.scss";

export default function Preloader(): JSX.Element {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="dots" />;
    </div>
  );
}
