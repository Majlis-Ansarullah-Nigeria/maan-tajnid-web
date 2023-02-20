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
// import "./DilaTable.css"
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// MAAN Portal React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// MAAN Portal React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DilaTable from "examples/Tables/DataTable/dila";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
function Dilaat() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Dilaat
                </MDTypography>
                <MDTypography variant="h6" color="white">
                <Button variant="outlined" href="/zone/create">
                  <AddLocationAltIcon/>  New Zone
                </Button>
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DilaTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dilaat;
