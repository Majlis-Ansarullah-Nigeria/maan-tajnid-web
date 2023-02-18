/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
// Material Dashboard 2 React components
import './style.css'
import MDBox from "components/MDBox";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// react-router-dom components

// @mui material components
import Card from "@mui/material/Card";
// Material Dashboard 2 React components
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import {createZoneFetch} from "../../gateway";
import Alert from '@mui/material/Alert';

// import { SnackbarProvider, useSnackbar } from 'notistack';
// Authentication layout components

// Images

// Overview page components

// Data
// Images

function CreateZone() {
  const handleClick = async () => {
    const zoneName = document.querySelector("#zoneName")
    const zoneCode = document.querySelector("#zoneCode")
    const zoneNameValue = zoneName.value;
    const zoneCodeValue = zoneCode.value;
    const data = {
      "name": zoneNameValue,
      "code": zoneCodeValue
    };
    let createZoneResponse = await createZoneFetch(data);
    console.log(createZoneResponse);
    if(createZoneResponse == false)
    {
      // enqueueSnackbar(element, "error");
    }
    else{
      createZoneResponse.messages.forEach(element => {
        // enqueueSnackbar(element, "success");
      });
    }
    
  }
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
              Create Zone
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <MDBox mb={2}>
                <MDInput type="text" label="Name" id="zoneName" fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="text" label="Code" id="zoneCode" fullWidth />
              </MDBox>
              
              <MDBox mt={4} mb={1}>
                <MDButton variant="gradient" color="info" fullWidth  onClick={handleClick}>
                  Submit
                </MDButton>
                <MDButton variant="gradient" color="info" fullWidth  onClick={handleClick}>
                  Cancel
                </MDButton>
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default CreateZone;
