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
import { useState } from "react";
import MDSnackbar from "components/MDSnackbar";
// react-router-dom components

// @mui material components
import Card from "@mui/material/Card";
// MAAN Portal React components
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import {createZoneFetch} from "../../gateway";
import Grid from "@mui/material/Grid";
// import { SnackbarProvider, useSnackbar } from 'notistack';
// Authentication layout components

// Images

// Overview page components

// Data
// Images

function CreateZone() {
  const succesMessage = "Zone created successfully"
  const errorMessage = "Zone with the same name or code already exist"
  const [successSB, setSuccessSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

const closeErrorSB = () => setErrorSB(false);
const closeSuccessSB = () => setSuccessSB(false);
  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Majlis Ansarullah"
      content= {succesMessage}
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );
  const renderErrorSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Majlis Ansarullah"
      content= {errorMessage}
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );


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
    if(createZoneResponse.status == false)
    {
      setErrorSB(true);
    }
    else{
      createZoneResponse.messages.forEach(element => {
        setSuccessSB(true)
      });
    }
   
    
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Grid item xs={12} sm={6} lg={3}>
        {renderSuccessSB}
        {renderErrorSB}
      </Grid>
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
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default CreateZone;
