import { Icon } from "@iconify/react";

import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Master",
    path: "/master",
    icon: <Icon icon="lucide:folder" width="20" height="20" />,
    submenu: true,
    subMenuItems: [
      { title: "Reference", path: "/master/reference" },
      { title: "Doc. Numbering", path: "/master/doc-numbering" },
      { title: "Period", path: "/master/period" },
    ],
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Account", path: "/settings/account" },
      { title: "Privacy", path: "/settings/privacy" },
    ],
  },
  {
    title: "Help",
    path: "/help",
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];
