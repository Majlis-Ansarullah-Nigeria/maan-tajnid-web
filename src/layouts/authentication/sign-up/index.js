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

// react-router-dom components
import { Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import { useState } from 'react';
import {post, profileUser} from "gateway";
import "./style.css"
// MAAN Portal React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";
import Grid from "@mui/material/Grid";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover() {
  const succesMessage = "User profiled successfully"
  const errorMessage = "Profiling fail! try again"
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
    let p = await post()
    setPosts(p)
  }
  dropdowns();
  let addUser = async () => {
    const memNo = document.querySelector("#memNo")
    const po = document.querySelector("#post")
    const selectedPost = po.options[po.selectedIndex].value;
    const data = {
      "memberNumber": memNo.value,
      "roleName": selectedPost,
    };
    console.log(data);
      const profilUser = await profileUser(data)
      console.log(profilUser)
      if(profilUser.succeeded)
      {
        setSuccessSB(true)
      }
      else{
        setErrorSB(true);
      }
  }
  return (
    <CoverLayout image={bgImage}>
      <Grid item xs={12} sm={6} lg={3}>
        {renderSuccessSB}
        {renderErrorSB}
      </Grid>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Profile A Member
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="Member Number" id="memNo" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
                <InputLabel id="demo-multiple-name-label">Post</InputLabel>
                <select id="post" className='sel'>
                    {
                      posts &&
                      posts.map((po) => <option key={po} value={po}>{po}</option>)
                      }
                  </select>
                
                </MDBox>
                
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={addUser}>
                Submit
              </MDButton>
            </MDBox>
            
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
