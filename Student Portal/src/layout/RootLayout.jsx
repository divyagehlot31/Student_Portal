import React from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const RootLayout = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default RootLayout;
