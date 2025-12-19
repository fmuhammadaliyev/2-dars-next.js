import React from "react";
import SSR from "./components/SSR";
import Loading from "./loading";
import SSG from "./components/SSG";
import IRS from "./components/IRS";
import CSR from "./components/CSR";
import SelectDemo from "./components/SelectDemo";

export default function page() {
  return (
    <div>
      <SelectDemo />
      <SSR />
      <SSG />
      <IRS />
      <CSR />
      <Loading />
    </div>
  );
}
