import { useTranslation } from "react-i18next";
import TeamList from "components/TeamList";
import teamChallengLable from "../../shared/assets/img/team-challenge.jpg";
import TrickedLine from "components/TrickedLine";
import ReactPlayer from "react-player";
import LeftParticipants from "components/LeftParticipantsList";

export default function AboutUs(): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <section className="pl-24 lg:pl-48 pr-24 lg:pr-48 pb-12 lg:pb-20 font-rubik">
        <div className="relative">
          <h2 className="font-medium text-xl lg:text-5xl mb-10 mx-auto text-center">
            {t("about_as_section.title")}
          </h2>
          <TeamList />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[350px] w-1/2 lg:w-[30%]">
            <img src={teamChallengLable} alt="team challenge" />
          </div>
        </div>
      </section>
      <section className="pl-16 lg:pl-28 pr-16 lg:pr-28 font-rubik pb-12 lg:pb-20">
        <div className="flex items-center justify-center">
          <ReactPlayer
            className="w-1/2"
            url="https://www.youtube.com/watch?v=rC62xnx6w80"
            muted
          />
          <p className="pl-9 pt-28 pb-28 w-1/2 text-base lg:text-2xl text-gray-900">
            {t("about_as_section.project_info")}
          </p>
        </div>
      </section>
      <section className="pb-12 lg:pb-20">
        <TrickedLine />
      </section>
      <section className="pl-16 lg:pl-28 pr-16 lg:pr-28 font-rubik pb-12 lg:pb-20">
        <div className="flex items-center justify-center">
          <p className="pr-4 w-1/2 text-blue-700 font-semibold text-2xl lg:text-5xl">{t("about_as_section.regards")}</p>
          <LeftParticipants />
        </div>
      </section>
    </>
  );
}
