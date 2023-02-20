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

// react-router-dom components

// @mui material components
import Card from "@mui/material/Card";
// MAAN Portal React components
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
// Authentication layout components

// Images

// Overview page components

// Data
// Images

function Details() {
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
              Dil'a Detail
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <MDBox mb={2}>
                <MDInput type="text" label="Name" value="Alakia" fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="text" label="Zone" value="Monatan" fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="text" label="Dil'a" value="Monatan" fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="text" label="Number of Members" value="500" fullWidth />
              </MDBox>
              
              <MDBox mt={4} mb={1}>
                
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default Details;
