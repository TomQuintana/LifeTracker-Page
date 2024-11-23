'use client'
import React from "react";
import { Login } from "../../components/ui/login";
import { SessionProvider } from "next-auth/react";

const page = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default page;
