
import Dashboard from "layouts/dashboard";
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

let routes = [
  
  {
    type: "collapse",
    name: "Profile",
    key: "prof",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/profile",
    component: <MemberInformation />,
  },
];
let division = localStorage.getItem("division");
console.log(division , "division")
if(division === "muqaam")
{
  let dilaatView = [
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
      name: "Members",
      key: "members-list",
      icon: <GroupsIcon />,
      route: "/members",
      component: <Members />,
    },
  ]
  routes = [...dilaatView, ...routes]
}
else if(division === "dilaat")
{
  let dilaatView = [
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
      name: "Muqaamat",
      key: "muqam-list",
      icon: <Icon fontSize="small">table_view</Icon>,
      route: "/muqaamat",
      component: <Muqaamat />,
    },
  {
    type: "collapse",
    name: "Members",
    key: "members-list",
    icon: <GroupsIcon />,
    route: "/members",
    component: <Members />,
  },
  ]
  routes = [...routes, ...dilaatView]
}
else if(division === "national"){
  let nationalView = [
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
      name: "Profile Member",
      key: "sign-up",
      icon: <Icon fontSize="small">assignment</Icon>,
      route: "/authentication/sign-up",
      component: <SignUp />,
    },
    {
      type: "collapse",
      name: "Manage Post",
      key: "add-role",
      icon: <AddBoxIcon/>,
      route: "/authentication/addRole",
      component: <CreateRole />,
    },
    
  ]
  routes = [...nationalView]
}
else if(division === "zones"){
  let nationalView = [
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
      name: "Dilaat",
      key: "dilas-list",
      icon: <ApartmentIcon />,
      route: "/dilaat",
      component: <Dilaat />,
    },
  ]
  routes = [...routes, ...nationalView]
}

routes = [...routes, {
  type: "collapse",
  name: "Log out",
  key: "sign-in",
  icon: <Icon fontSize="small">login</Icon>,
  route: "/authentication/sign-in",
  component: <SignIn />,
},]

export default routes;
