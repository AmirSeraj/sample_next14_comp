"use server";

import { getSession } from "../getSession";

/***PATH */
const path = process.env.NEXT_APP_URL + "api/user/edit/";

/**fetch user */
export const EditUser = async (values: {
  values: {
    email: string;
    name: string;
    status: string;
    id: number;
  };
}) => {
    console.log('val',values);
  try {
    const session = await getSession();
    const response = await fetch(path + values?.id, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${session.token}`,
      },
    });
    const user = await response.json();
    return user;
  } catch (error) {
    console.log(error);
  }
};
