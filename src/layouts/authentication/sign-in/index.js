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
import MDSnackbar from "components/MDSnackbar";
import { useState } from "react";
// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";

// MAAN Portal React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import {login} from "gateway"
// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Basic() {
  console.log("login")
  let handleSignIn = async () => {                      
    let memberNumber = document.querySelector("#memberNumber")
      let password = document.querySelector("#password")
    const data = {
      "memberNumber": memberNumber.value,
      "password": password.value,
    };
    let response = await login(data);
    console.log(response);
    setName(`${response.data.firstName}${response.data.lastName}`)
    if(response.status)
    {

      setSuccessSB(true);
      const nationalRole = ["sadr","naib sadr awwal","naib sadr saf dom","naib sadran","qaid tajneed",];
      const dilaatRole = ["nazim ala", "naib nazim ala", "nazim tajneed"];
      const muqamRole = ["zaim ala", "naib zaim ala", "muntazim tajneed"];
      if(response.data.roles.length == 1)
      {
        localStorage.setItem("division", "member");
        localStorage.setItem("memberId", response.data.userName);
      }
      const national = response.data.roles.some(x => nationalRole.includes(x.name.toLowerCase()));
      const zone = response.data.roles.some(x => x.name.toLowerCase() === "coordinator");
      const dilaat = response.data.roles.some(x => dilaatRole.includes(x.name.toLowerCase()));
      const muqam = response.data.roles.some(x => muqamRole.includes(x.name.toLowerCase()));
      if(national)
      {
        localStorage.setItem("division", "national");
      }
      else if(zone)
      {
        localStorage.setItem("division", "zones");
        localStorage.setItem("divisionId", response.data.zoneId);
      }
      else if(dilaat)
      {
        localStorage.setItem("division", "dilaat");
        localStorage.setItem("divisionId", response.data.dilaatId);
      }
      else if(muqam)
      {
        localStorage.setItem("division", "muqaam");
        localStorage.setItem("divisionId", response.data.muqaamId);
      }
      localStorage.setItem("isLogin", true);
      window.location.href = "/dashboard";
    }
    else{
      setErrorSB(true);
    }
  }
  const succesMessage = "Login successfull"
  const errorMessage = "Invalid login credentials"
  const [successSB, setSuccessSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);
  const [name, setName] = useState("Majlis Ansarullah");

const closeErrorSB = () => setErrorSB(false);
const closeSuccessSB = () => setSuccessSB(false);
  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Majlis Ansarullah"
      content = {name}
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
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <BasicLayout image={bgImage}>
      <Grid item xs={12} sm={6} lg={3}>
        {renderSuccessSB}
        {renderErrorSB}
      </Grid>
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
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="Member Number" fullWidth id="memberNumber" />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" fullWidth id="password" />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleSignIn}>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
