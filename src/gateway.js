import MaterialTable from "material-table";
// import LinearProgress from '@mui/material/LinearProgress';
import LongMenu from './components/ThreeDotsMenu/LongMenu';
import Button from '@mui/material/Button';
import "./style.css"

export const createZoneFetch = async (bodyObj) => {
    
    const settings = {
        
        method:"POST",
        body: JSON.stringify(bodyObj),
        headers:{
            'Content-Type': 'application/json'
        }
        
    };
    const postZone = await fetch("https://localhost:7078/api/Utility/zone", settings);
    if(postZone.status == 400)
    {
        return false;
    }
    return postZone.json();
}
export const updateZoneFetch = async (bodyObj, id) => {
    const settings = {
        
        method:"PUT",
        body: JSON.stringify(bodyObj),
        headers:{
            'Content-Type': 'application/json'
        }
    };
    const postZone = await fetch(`https://localhost:7078/api/Utility/zones/${id}`, settings);
    return postZone.json();
}
export const fetchZone = async (id) => {

    const postZone = await fetch(`https://localhost:7078/api/Utility/zones/${id}`);
    return postZone.json();
}




export function Zones() {

  const columns = [
    {title: "Name", field:"name"},
    {title: "Code", field:"code"},
    {title: "Number Of Dil'a", field:"numberOfDila"},
    {title: "Actions", render:rowData => <LongMenu zoneId={rowData.id} actions={["View\n", "Edit"]} />},
  ];
  return (
    <div className="app">
      <div className="container">
        <MaterialTable
        title="Members"
        columns = {columns}
        data={(query) => new Promise((resolve, reject) => {
          
          let url = "https://localhost:7078/api/Utility/zones?";
          url += `PageNumber=${query.page + 1}&PageSize=${query.pageSize}`
          fetch(url).then(resp => resp.json()).then(resp => {
              resolve({
                data:resp.data.data,
                page: query.page,
                totalCount: resp.data.totalCount
              })
          })
        })
        }
         />
      </div>
    </div>
  );
}