import {
  LargePresentBox,
  QuestionMark,
  Cloths,
  Accessories,
  Books,
  Cup,
  Food,
  Knowledge,
  Technique,
} from "@src/shared/assets/svg/SecretGift";

export default function SecretGiftAnimation(): JSX.Element {
  return (
    <div className="min-h-[100vh] min-w-full bg-[#CBCFDA]">
      <LargePresentBox />
      <QuestionMark />
      <Accessories />
      <Books />
      <Cup />
      <Food />
      <Knowledge />
      <Technique />
      <Cloths />
    </div>
  );
}
