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
import {fetchZone, updateZoneFetch} from "../../gateway";

// react-router-dom components

// @mui material components
import Card from "@mui/material/Card";
// MAAN Portal React components
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { useState } from 'react';
// Authentication layout components

// Images

// Overview page components

// Data
// Images

function EditZone() {
  const zoneName = document.querySelector("#zoneName")
    const zoneCode = document.querySelector("#zoneCode")
    const id = window.location.href.split("=")[1];
    let initInfo = {
      name: "",
      code: "",
    };
    const [zone, setZone] = useState(initInfo);
    const getZone = async () => {
      const zone = await fetchZone(id);
      console.log(zone);
      setZone(zone.data)
    }
    getZone();


  const handleClick = async () => {
    const zoneNameValue = zoneName.value;
    const zoneCodeValue = zoneCode.value;
    const data = {
      "name": zoneNameValue,
      "code": zoneCodeValue
    };
    let updateZoneResponse = await updateZoneFetch(data, id);
    console.log(updateZoneResponse);
    
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
              Edit Zone
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <MDBox mb={2}>
                <MDInput type="text" label="Name" id="zoneName" value={zone.name} fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="text" label="Code" id="zoneCode" value={zone.code} fullWidth />
              </MDBox>
              
              <MDBox mt={4} mb={1}>
                <MDButton variant="gradient" color="info" fullWidth onClick={handleClick}>
                  Save Changes
                </MDButton>
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default EditZone;
