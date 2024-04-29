import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdArticle,
  MdGroups,
} from "react-icons/md";
import { ImProfile } from "react-icons/im";

const MenuItems = (t: any) => {
  return [
    {
      title: t("pages"),
      list: [
        {
          title: t("dashboard"),
          path: "/dashboard",
          icon: <MdDashboard />,
        }
      ],
    },
  ];
};

export default MenuItems;
