/**
=========================================================
* MAAN Portal React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022MAAN(https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
// MAAN Portal React components
import * as React from 'react';
import './style.css'
import MDBox from "components/MDBox";
// MAAN Portal React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import {fetchZonesDropdown, getDila, updateDila, viewMembers} from "../../gateway";
// react-router-dom components

// @mui material components
import Card from "@mui/material/Card";
import MDSnackbar from "components/MDSnackbar";
import Grid from "@mui/material/Grid";

// MAAN Portal React components
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { useState } from 'react';
import authorsTableData from "layouts/tables/data/authorsTableData";
import SubLevelByLevelTable from "examples/Tables/DataTable/subLevelByLevel";
import InputLabel from '@mui/material/InputLabel';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function EditDila() {


  const succesMessage = "Dila updated successfully"
  const errorMessage = "Dila update fail! try again"
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
      dateTime=""
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
      dateTime=""
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

    const zone = document.querySelector("#zoneName")
    const id = window.location.href.split("=")[1];
    const data = {
        name : "",
        zoneName : "ade"
    }
    const ar = [
      {
        "id" : "alimosho",
        "zoneName" : "apata"
      },
      {
        "id" : "alimosho",
        "zoneName" : "apata"
      },
      {
        "id" : "alimosho",
        "zoneName" : "apata"
      },
      {
        "id" : "alimosho",
        "zoneName" : "apata"
      },
    ]
    const [dilaInfo, setdilaInfo] = useState(data);
    const [zones, setZones] = useState(ar);
    const getDilaInfo = async () => {
        const dila = await getDila(id);
        setdilaInfo(dila.data)
        const zone = await fetchZonesDropdown();
        setZones(zone.data);
    }
    getDilaInfo();
  const handleClick = async () => {
    const zoneId = zone.options[zone.selectedIndex].value;
    const dilaId = dilaInfo.id;
      const update = await updateDila(zoneId, dilaId);
      if(update.succeeded)
      {
        setSuccessSB(true)
        
      }
      else{
        setErrorSB(true);
      }
  }

  const { columns, rows } = authorsTableData();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid item xs={12} sm={6} lg={3}>
        {renderSuccessSB}
        {renderErrorSB}
      </Grid>
      <MDBox mb={2} />
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
                Edit Dil'a
              </MDTypography>
            </MDBox>
            <MDBox pt={4} pb={3} px={3}>
              <MDBox component="form" role="form">
                <MDBox mb={2}>
                  <MDInput type="text" label="Name" id="dilaName" value={dilaInfo.name} fullWidth />
                </MDBox>
                <MDBox mb={2}>
                <InputLabel id="demo-multiple-name-label">Zone</InputLabel>
                <select id="zoneName" className='dp'>
                    {zones.map((zo) => (
                      <option value={zo.id}>
                        {zo.name}
                      </option>
                      ))}
                  </select>
                </MDBox>
                
                <MDBox mt={4} mb={1}>
                  <MDButton variant="gradient" color="info" fullWidth onClick={handleClick}>
                    Save Changes
                  </MDButton>
                  <MDButton variant="gradient" color="info" fullWidth onClick={() => viewMembers(id, "dilaat")}>
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
          level = "dilaat"
          sublevel = "muqamaat"
        />
      </div>
      
    </DashboardLayout>
  );
}

export default EditDila;
