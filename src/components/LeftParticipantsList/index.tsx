import { useTranslation } from "react-i18next";

export default function LeftParticipants() {
  const { t } = useTranslation();

 const left_participants = [
    {
      name: t("about_as_section.left_project_participants")[0],
      position: "frontend",
    },
    {
      name: t("about_as_section.left_project_participants")[1],
      position: "frontend",
    },
    {
      name: t("about_as_section.left_project_participants")[2],
      position: "Beckend",
    },
    {
      name: t("about_as_section.left_project_participants")[3],
      position: "UI/UX designer",
    },
    {
      name: t("about_as_section.left_project_participants")[4],
      position: "UI/UX designer",
    },
    {
      name: t("about_as_section.left_project_participants")[5],
      position: "frontend",
    },
    {
      name: t("about_as_section.left_project_participants")[6],
      position: "frontend",
    },
    {
      name: t("about_as_section.left_project_participants")[7],
      position: "Beckend",
    },
    {
      name: t("about_as_section.left_project_participants")[8],
      position: "UI/UX designer",
    },
  ];

  return (
    <ul className="mx-auto w-1/2  grid grid-cols-2">
      {left_participants.map((participant, idx) => (
        <li key={idx} className="">
          <div className="">
                  <p className="font-bold text-sm lg:text-base">{participant.name}</p>
                  <p className="text-blue-700 font-light text-xs lg:text-sm">{participant.position}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
