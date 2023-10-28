import {
  LargePresentBox,
  Cloths,
  Accessories,
  Books,
  Cup,
  Food,
  Knowledge,
  Technique,
  MidlePresentBox,
  SemiSmallPresentBox,
  SmallPresentBox,
} from "@src/shared/assets/svg/SecretGift";

export default function SecretGiftAnimation(): JSX.Element {
  return (
    <div className="relative min-h-[100vh] min-w-full overflow-hidden bg-[#CBCFDA]">
      <div className="absolute left-[85px] top-[25px]  rotate-[0deg] transform-gpu object-contain object-center">
        <LargePresentBox />
      </div>
      <div className="absolute bottom-[75px] left-[350px]   object-contain object-center">
        <SmallPresentBox />
      </div>
      <div className="absolute left-[740px] top-[-90px]   rotate-[110deg] transform-gpu object-contain object-center">
        <MidlePresentBox />
      </div>
      <div className="absolute left-[620px] top-[212px]   rotate-[10deg] transform-gpu object-contain object-center">
        <MidlePresentBox />
      </div>
      <div className="absolute right-[20px] top-[35px] rotate-[-110deg] transform-gpu object-contain object-center">
        <SmallPresentBox />
      </div>
      <div className="absolute right-[-80px] top-[206px]  rotate-[20deg] transform-gpu object-contain object-center">
        <MidlePresentBox />
      </div>
      <div className="absolute bottom-[20px] right-[30px]   rotate-[-10deg] transform-gpu object-contain object-center">
        <SemiSmallPresentBox />
      </div>

      <div className=" absolute right-[380px] top-[50px] object-contain object-center">
        <Accessories />
      </div>
      <div className=" absolute left-[530px] top-[420px] object-contain object-center">
        <Books />
      </div>
      <div className="absolute right-[200px]  top-[250px] object-contain object-center">
        <Cup />
      </div>
      <div className="absolute left-[350px] top-[40px] object-contain object-center">
        <Food />
      </div>
      <div className=" absolute right-[400px] top-[450px] object-contain object-center">
        <Knowledge />
      </div>
      <div className=" absolute bottom-[40px] left-[650px] object-contain object-center">
        <Technique />
      </div>
      <div className=" absolute left-[30px] top-[400px] object-contain object-center">
        <Cloths />
      </div>
    </div>
  );
}
