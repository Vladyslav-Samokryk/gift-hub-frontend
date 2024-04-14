import UserInfoForm from "components/Forms/UserInfoForm";
import { useState } from "react";

function UserInfoPage(): JSX.Element {
  const userData = {
    firstName: "string;",
    lastName: "strin",
    email: "string@nure.com",
    birthday: new Date("10-20-2003"),
    tel: "+380971812923",
  };
  const [isDisable, setIsDisabled] = useState(true);

  return (
    <>
      <UserInfoForm
        isDisable={isDisable}
        setIsDisabled={setIsDisabled}
        userInfo={userData}
      />
    </>
  );
}

export default UserInfoPage;
