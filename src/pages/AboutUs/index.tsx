import { useTranslation } from "react-i18next";
import TeamList from "components/TeamList";
import teamChallengLable from "../../shared/assets/img/team-challenge.jpg";
import TrickedLine from "components/TrickedLine";
import ReactPlayer from "react-player";

export default function AboutUs(): JSX.Element {
  const { t } = useTranslation();
  return (
    <section className="pl-32 pr-32">
      <div className="relative">
        <h2 className="mb-10 mx-auto text-center">
          {t("about_as_section.title")}
        </h2>
        <TeamList />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[400px] w-[33.3%]">
          <img src={teamChallengLable} alt="team challenge" />
        </div>
      </div>
      <TrickedLine />
      <div className="flex items-center justify-center">
        <ReactPlayer className="w-1/2" url="https://www.youtube.com/watch?v=rC62xnx6w80"  muted/>
        <p className=" pl-9 pt-28 pb-28 w-1/2">{t("about_as_section.project_info")}</p>
      </div>
      <div>
        <p>{ t("about_as_section.regards")}</p>
      </div>
    </section>
  );
}
