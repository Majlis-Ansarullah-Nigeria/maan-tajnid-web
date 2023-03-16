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

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// MAAN Portal React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// MAAN Portal React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import Header from "layouts/profile/components/Header";
import { useEffect, useState } from "react";
import {fetchMemberInfo} from "gateway"

function MemberInformation() {
    const [info, setInfo] = useState("");
    useEffect(async () => {
        const memberId = window.location.href.split("=")[1];
        const member = await fetchMemberInfo(memberId);
        setInfo(member.data)
    }, [])
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
          <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />

              {
                    info != "" &&
                    <ProfileInfoCard
                    title="profile information"
                    description="Ahmadiyya Muslim Jamaat Member"
                    info={{
                    fullName: `${info.firstName} ${info.surname}`,
                    mobile: info.phoneNo,
                    email: info.email,
                    location: info.address,
                    }}

                    social={[
                  
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
                />
              }
              
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
          <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />

              {
                    info != "" &&
                    <ProfileInfoCard
                    title="Jamaat information"
                    description="Ahmadiyya Muslim Jamaat Member"
                    info={{
                        Muqaaam : info.jamaatName,
                        Dila : info.circuitName
                    }}

                    social={[
                  
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
                />
              }
              
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            
          </Grid>
        </MDBox>
        <MDBox pt={2} px={2} lineHeight={1.25}>
        </MDBox>
        
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default MemberInformation;
