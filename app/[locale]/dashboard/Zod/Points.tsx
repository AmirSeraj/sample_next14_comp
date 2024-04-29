import Image from "next/image";
import React from "react";

const Points = () => {
  return (
    <div className="p-5 flex flex-col gap-2" dir="ltr">
      <h1 className="text-left text-red-500 text-2xl">
        Forms with Zod and Shadcn
      </h1>
      <p>site: https://ui.shadcn.com/docs/installation/next</p>
      <p>initailize shadcn in your project</p>
      <ul className="flex flex-col bg-red-400 p-5">
        <li>1) npx shadcn-ui@latest init</li>
        <li>style:New York</li>
        <li>color:Slate</li>
        <Image src="/shadcn.png" width={500} height={500} alt="shadcn" />
        <li>
          each component should be installed one by one for example:
          <br />
          npx shadcn-ui@latest add button
        </li>
        <li>a ui folder will be make in components folder</li>
        <li>Customize componetns like button</li>
        <p className="font-bold text-2xl">
          In this guide, we will take a look at building forms with
          <b>react-hook-form and zod</b>. We're going to use a FormField
          component to compose accessible forms using Radix UI components.
        </p>
        <p className="font-bold text-2xl text-red-500">
          npx shadcn-ui@latest add form
          <br />
          npx shadcn-ui@latest add input
        </p>
        <p className="font-bold text-2xl text-red-500">
          All files are in folder: auth >>> loginComp.
        </p>
        <p className="font-bold text-2xl text-red-500">
          The files of this form are located in components >> auth >> loginComp
        </p>
      </ul>
    </div>
  );
};

export default Points;
