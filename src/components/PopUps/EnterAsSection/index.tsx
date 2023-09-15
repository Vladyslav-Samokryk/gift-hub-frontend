import { useTypedTranslation } from "@src/shared";

export default function EnterAsSection ({ icon }: { icon: JSX.Element; }): JSX.Element {
  const t = useTypedTranslation();
  return (
    <>
      <div className="relative mx-2 h-[90%] w-[2px] py-5">
        <div className="h-full w-[1.5px] bg-gray-900"/>
        <p className="absolute top-[30%] -translate-x-1/2 bg-white">{t("or")}</p>
      </div>

      <div className="mt-6">
        <h5>{t("enter_as")}</h5>
        <button>Google</button>
        <button>Facebook</button>
        {icon}
      </div>
    </>

  );
}
