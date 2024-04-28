import Link from "next/link";
import React from "react";

const FormsPage = () => {
  return (
    <div className="flex flex-col gap-3" dir="ltr">
        <p className="text-red-700 font-bold text-2xl my-3">Forms are divided into two parts: server-side forms - client-side forms</p>
        <p className="text-red-700 font-bold text-2xl">Client-side Forms: Zod - Formik</p>
      <div className="flex flex-col gap-2">
        <Link className="underline" href={"/dashboard/forms/Formik"}>Forms with Formik</Link>
        <Link className="underline" href={"/dashboard/forms/Zod"}>Forms with Zod</Link>
        <Link className="underline" href={"/dashboard/forms/Server-side"}>Server-Side Forms</Link>
      </div>
      <p className="text-3xl text-red-500">Samples</p>
      <Link className="underline" href={"/dashboard/forms/Zod/samples/auth"}>login form with zod</Link>
      <Link className="underline" href={"/dashboard/forms/Zod/samples/complete"}>complete form with zod</Link>
    </div>
  );
};

export default FormsPage;
