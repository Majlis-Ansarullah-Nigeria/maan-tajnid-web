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
// MAAN Portal React components
import './style.css'
import MDBox from "components/MDBox";
// MAAN Portal React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDButton from "components/MDButton";
// react-router-dom components

// @mui material components
import Card from "@mui/material/Card";
// MAAN Portal React components
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import { useEffect, useState } from 'react';
import {fetchMuqaam, viewMembers} from 'gateway'

function MuqamDetail() {
  const muq = {
    "name": "ABIDOGUN",
    "dila": "null",
    "zone": "null"
  }
  const id = window.location.href.split('=')[1];
  const[muqaam, setMuqaam] = useState(muq)
  useEffect(async () => {
    console.log("esing")
    const muqami = await fetchMuqaam(id);
    setMuqaam(muqami.data)
  }, [])
  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <div className="card-container">
      <Card>
          <MDBox
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
            mx={2}
            mt={-3}
            p={2}
            mb={1}
            textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Muqaam Detail
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <MDBox mb={2}>
                <MDInput type="text" value={muqaam.name} fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="text" value={muqaam.dila} fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="text" value={muqaam.zone} fullWidth />
              </MDBox>
              <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={() => viewMembers(id, "muqaam")}>
                      View Members
                  </MDButton>
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default MuqamDetail;
