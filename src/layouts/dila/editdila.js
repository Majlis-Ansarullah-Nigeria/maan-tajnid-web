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
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme } from '@mui/material/styles';
import './style.css'
import MDBox from "components/MDBox";
// MAAN Portal React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import {fetchZonesDropdown, getDila, updateDila} from "../../gateway";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// react-router-dom components

// @mui material components
import Card from "@mui/material/Card";
// MAAN Portal React components
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MultipleSelect from "components/Dropdown";
import { useState } from 'react';
import authorsTableData from "layouts/tables/data/authorsTableData";
import MuqaamDilaTable from "examples/Tables/DataTable/dilaMuqaam";
import InputLabel from '@mui/material/InputLabel';

// Authentication layout components

// Images

// Overview page components

// Data
// Images

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
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

  const theme = useTheme();
  const [personName, setPersonName] = React.useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(value == undefined ? "ase" : value
    );
  };

  const zoneName = document.querySelector("#dilaName")
    const zoneCode = document.querySelector("#zoneName")
    const id = window.location.href.split("=")[1];
    const data = {
        name : "",
        zoneName : "ade"
    }
    const ar = [
      {
        "name" : "alimosho",
        "zoneName" : "apata"
      },
      {
        "name" : "alimosho",
        "zoneName" : "apata"
      },
      {
        "name" : "alimosho",
        "zoneName" : "apata"
      },
      {
        "name" : "alimosho",
        "zoneName" : "apata"
      },
    ]
    const [dilaInfo, setdilaInfo] = useState(data);
    const [zones, setZones] = useState(ar);
    const getDilaInfo = async () => {
        const dila = await getDila(id);
        setPersonName(zone.data.zoneName)
        setdilaInfo(dila.data)
        const zone = await fetchZonesDropdown();
        setZones(zone.data);
    }
    // getDilaInfo();
  const handleClick = async () => {
    if(dilaInfo.name != personName)
    {
      const update = await updateDila(personName, id);
      console.log(update);
    }
  }

  const { columns, rows } = authorsTableData();
  return (
    <DashboardLayout>
      <DashboardNavbar />
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
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
        >
          {zones.map((name) => (
            <MenuItem
              key={name.name}
              value={name.name}
              style={getStyles(name.name, personName, theme)}
            >
              {name.name}
            </MenuItem>
          ))}
        </Select>
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
        <MuqaamDilaTable
          table={{ columns, rows }}
          isSorted={false}
          entriesPerPage={false}
          showTotalEntries={false}
          noEndBorder
          dilaId = {id}
        />
      </div>
      
    </DashboardLayout>
  );
}

export default EditDila;
