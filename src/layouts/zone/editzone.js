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
import authorsTableData from "layouts/tables/data/authorsTableData";
import './style.css'
import MDBox from "components/MDBox";
// MAAN Portal React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import {fetchZone, updateZoneFetch, viewMembers} from "../../gateway";
import SubLevelByLevelTable from "examples/Tables/DataTable/subLevelByLevel";

// react-router-dom components

// @mui material components
import Card from "@mui/material/Card";
// MAAN Portal React components
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { useState } from "react";
import MDSnackbar from "components/MDSnackbar";
import Grid from "@mui/material/Grid";


function EditZone() {
  const succesMessage = "Zone updated successfully"
  const errorMessage = "Error occured"
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
  const { columns, rows } = authorsTableData();
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
      setZone(zone.data)
    }
    getZone();


  const handleClick = async () => {
    setSuccessSB(true)
    console.clear()
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
      <Grid item xs={12} sm={6} lg={3}>
        {renderSuccessSB}
        {renderErrorSB}
      </Grid>
      <div className="cont">
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
                <input type={"text"} id="zoneName" defaultValue={zone.name} />
              </MDBox>
              <MDBox mb={2}>
                <input type={"text"} id="zoneCode" defaultValue={zone.code} />
              </MDBox>
              
              <MDBox mt={4} mb={1}>
                <MDButton variant="gradient" color="info" fullWidth onClick={handleClick}>
                  Save Changes
                </MDButton>
                <MDButton variant="gradient" color="info" fullWidth onClick={() => viewMembers(id, "zones")}>
                  View Members
                </MDButton>
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
        </div>
        <SubLevelByLevelTable
          table={{ columns, rows }}
          isSorted={false}
          entriesPerPage={false}
          showTotalEntries={false}
          noEndBorder
          dilaId = {id}
          level = "zones"
          sublevel = "dilaat"
        />
      </div>
    </DashboardLayout>
  );
}

export default EditZone;
