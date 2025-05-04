import React from "react";

interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

const AuthForm = ({ type }: AuthFormProps) => {
  return (
    <div className="border rounded-md lg:min-w-[556px]">
      <div className="flex flex-col"></div>
    </div>
  );
};

export default AuthForm;
