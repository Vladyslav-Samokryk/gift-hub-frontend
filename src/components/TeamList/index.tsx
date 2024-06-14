import { useTranslation } from "react-i18next";
import "../../app/styles/index.scss";
import IconsBlock from "shared/UI/IconsBlock";

import foto1 from "../../shared/assets/img/foto1.png";
import foto2 from "../../shared/assets/img/foto2.png";
import foto3 from "../../shared/assets/img/foto3.png";
import foto4 from "../../shared/assets/img/foto4.png";
import foto5 from "../../shared/assets/img/foto5.png";
import foto6 from "../../shared/assets/img/foto6.png";
import foto7 from "../../shared/assets/img/foto7.png";
import foto8 from "../../shared/assets/img/foto8.png";

import bg1 from "../../shared/assets/img/bg1.png";
import bg2 from "../../shared/assets/img/bg2.png";
import bg3 from "../../shared/assets/img/bg3.png";
import bg4 from "../../shared/assets/img/bg4.png";
import bg5 from "../../shared/assets/img/bg5.png";
import bg6 from "../../shared/assets/img/bg6.png";
import bg7 from "../../shared/assets/img/bg7.png";
import bg8 from "../../shared/assets/img/bg8.png";

export default function TeamList() {
  const { t } = useTranslation();

  const participants = [
    {
      name: t("about_as_section.participants")[0],
      image: foto1,
      background: bg1,
      position: "PM",
    },
    {
      name: t("about_as_section.participants")[1],
      image: foto2,
      background: bg2,
      position: "Frontend",
    },
    {
      name: t("about_as_section.participants")[2],
      image: foto3,
      background: bg3,
      position: " UI/UX designer",
    },
    {
      name: t("about_as_section.participants")[3],
      image: foto4,
      background: bg4,
      position: "QA",
    },
    {
      name: t("about_as_section.participants")[4],
      image: foto5,
      background: bg5,
      position: "UI/UX designer",
    },
    {
      name: t("about_as_section.participants")[5],
      image: foto6,
      background: bg6,
      position: "Frontend",
    },
    {
      name: t("about_as_section.participants")[6],
      image: foto7,
      background: bg7,
      position: "QA",
    },
    {
      name: t("about_as_section.participants")[7],
      image: foto8,
      background: bg8,
      position: "Backend",
    },
  ];

  return (
    <ul className="mx-auto  grid-template-custom place-items-end">
      {participants.map((foto, idx) => (
        <li key={idx} className={`grid-area-${idx + 1}`}>
          <div className="mx-auto flex flex-col">
            <div
              className="custom-bg w-full relative mb-3 "
              style={
                {
                  "--bg-image": `url(${foto.background})`,
                } as React.CSSProperties
              }
            >
              <img
                src={foto.image}
                alt={foto.name}
                className="w-full h-auto z-10"
              />
            </div>
            <h4 className="text-center text-xl lg:text-4xl">{foto.name}</h4>
            <p className="text-center text-blue-700 font-light text-sm lg:text-base">{foto.position}</p>
            <IconsBlock />
          </div>
        </li>
      ))}
    </ul>
  );
}
