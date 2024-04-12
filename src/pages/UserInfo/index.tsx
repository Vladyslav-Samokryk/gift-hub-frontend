import UserInfoForm from "components/Forms/UserInfoForm";

function UserInfoPage(): JSX.Element {
  const userData = {
    firstName: "string;",
    lastName: "strin",
    email: "string@nure.com",
    birthday: new Date("10-20-2003"),
    tel: "+380971812923",
  };

  return (
    <>
      <UserInfoForm isDisable={true} userInfo={userData} />
    </>
  );
}

export default UserInfoPage;
