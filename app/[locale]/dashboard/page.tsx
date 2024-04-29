import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="container" dir="ltr">
      <p className="text-red-700 font-bold text-2xl">
        Forms (Forms are divided into two parts: server-side forms - client-side
        forms)
      </p>
      <Link href={"/dashboard/Formik"}>
        Forms with Formik
      </Link>
      <Link href={"/dashboard/Zod"}>
        Forms with Zod
      </Link>
      <Link href={"/dashboard/Server-side"}>
        Server-Side Forms
      </Link>
      <Link href={"/dashboard/Zod/samples/auth"}>
        login form with zod
      </Link>
      <Link href={"/dashboard/Zod/samples/complete"}
      >
        complete form with zod
      </Link>

      <p className="text-red-700 font-bold text-2xl">Auth in Next.js</p>
      <Link href={'/dashboard/auth'}>Cookie-based Next.js Authentication</Link>

    </div>
  );
};

export default Dashboard;
