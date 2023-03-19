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
import {createRole} from "../../gateway";
import Grid from "@mui/material/Grid";
import InputLabel from '@mui/material/InputLabel';
import {postLevel} from "gateway";
// import { SnackbarProvider, useSnackbar } from 'notistack';
// Authentication layout components

// Images

// Overview page components

// Data
// Images

function CreateRole() {
  const succesMessage = "Role created successfully"
  const errorMessage = "Role with the same name or code already exist"
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
  const [posts, setPosts] = useState([]);
  let dropdowns = async () => {
    let p = await postLevel()
    setPosts(p)
  }
  dropdowns();

  const handleClick = async () => {
        let name = document.querySelector("#name")
        let email = document.querySelector("#email")
        let desc = document.querySelector("#desc")
        const po = document.querySelector("#post")
        const selectedPost = po.options[po.selectedIndex].value;
        const data = {
          "name": name.value,
          "email": email.value,
          "description": desc.value,
          "postLevel": Number.parseInt(selectedPost)
        };
        console.log(data)
        let response = await createRole(data);
        console.log(response);
        if(response.messages == undefined)
        {
          setErrorSB(true);
        }
        else{
          response.messages.forEach(element => {
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
              Create Role
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <MDBox mb={2}>
                <MDInput type="text" id="name" label="Name" fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="text" id="email" label="Email" fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="text" id="desc" label="Description" fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <InputLabel id="demo-multiple-name-label">Post Level</InputLabel>
                <select id="post" className='sel'>
                    {
                      posts &&
                      posts.map((po) => <option key={po.value} value={po.value}>{po.name}</option>)
                      }
                  </select>
                
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

export default CreateRole;
