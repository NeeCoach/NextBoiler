import React from "react";
import Image from "next/image";
import { LoginForm, Title } from "~/components/custom";

const page = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-rose-950 to-fuchsia-900">
      <LoginForm />
    </div>
  );
};

export default page;
