/**
=========================================================
* MAAN Portal React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the MAAN Portal React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// MAAN Portal React layouts
import Dashboard from "layouts/dashboard";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import MemberInformation from "layouts/profile/memberprofile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Zones from "layouts/zone/zonetable";
import Muqaamat from "layouts/muqam/muqaamatTable";
import Dilaat from "layouts/dila/dilatable";
import AddBoxIcon from '@mui/icons-material/AddBox';
import CreateRole from "layouts/identity/createrole";
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';
import GroupsIcon from '@mui/icons-material/Groups';
import ApartmentIcon from '@mui/icons-material/Apartment';

// @mui icons
import Icon from "@mui/material/Icon";
import Members from "layouts/members/memberlist";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "prof",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/profile",
    component: <MemberInformation />,
  },
  {
    type: "collapse",
    name: "Notification",
    key: "not",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/notification",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Members",
    key: "members-list",
    icon: <GroupsIcon />,
    route: "/members",
    component: <Members />,
  },
  {
    type: "collapse",
    name: "Zones",
    key: "zones-list",
    icon: <SouthAmericaIcon/>,
    route: "/zones",
    component: <Zones />,
  },
  {
    type: "collapse",
    name: "Dilaat",
    key: "dilas-list",
    icon: <ApartmentIcon />,
    route: "/dilaat",
    component: <Dilaat />,
  },
  {
    type: "collapse",
    name: "Muqaamat",
    key: "muqam-list",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/muqaamat",
    component: <Muqaamat />,
  },
 
  {
    type: "collapse",
    name: "Add Role",
    key: "add-role",
    icon: <AddBoxIcon/>,
    route: "/authentication/addRole",
    component: <CreateRole />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;