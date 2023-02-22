import MaterialTable from "material-table";
import LongMenu from './components/ThreeDotsMenu/LongMenu';
import displaySelect from "displaySelects"
import "./style.css"
import { useRef, useState  } from "react";

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


export const updateDila = async (zoneId, dilaId) => {
    const settings = {
        
        method:"PUT",
        headers:{
            'Content-Type': 'application/json'
        }
    };
    const postZone = await fetch(`https://localhost:7078/api/Utility/dila/${dilaId}?zoneId=${zoneId}`, settings);
    return postZone.json();
}
export const fetchZone = async (id) => {

    const postZone = await fetch(`https://localhost:7078/api/Utility/zones/${id}`);
    return postZone.json();
}

export const fetchZonesDropdown = async () => {

    const postZone = await fetch(`https://localhost:7078/api/Utility/zones/nopagination`);
    return postZone.json();
}

export const getDila = async (id) => {

    const postZone = await fetch(`https://localhost:7078/api/Utility/dilaat/${id}`);
    return postZone.json();
}

export function Zones() {

  const columns = [
    {title: "Name", field:"name"},
    {title: "Code", field:"code"},
    {title: "Number Of Dil'a", field:"numberOfDila"},
    {title: "Actions", render:rowData => <LongMenu domainId={rowData.id} domain="zone" actions={["View", "Edit"]} />},
  ];
  return (
    <div className="app">
      <div className="container">
        <MaterialTable
        title="Zones"
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
export function Muqaamat() {

  const columns = [
    {title: "Name", field:"name"},
    {title: "Actions", render:rowData => <LongMenu domainId={rowData.id} domain="muqaam" actions={["View", "Edit"]} />},
  ];
  return (
    <div className="app">
      <div className="container">
        <MaterialTable
        title="Zones"
        columns = {columns}
        data={(query) => new Promise((resolve, reject) => {
          
          let url = "https://localhost:7078/api/Utility/muqamaat?";
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

export function Dilaat() {

  const columns = [
    {title: "Name", field:"name"},
    {title: "Actions", render:rowData => <LongMenu domainId={rowData.id} domain="dila" actions={["Edit"]} />},
  ];
  return (
    <div className="app">
      <div className="container">
        <MaterialTable
        title="Dilaat"
        columns = {columns}
        data={(query) => new Promise((resolve, reject) => {
          
          let url = "https://localhost:7078/api/Utility/dilaat?";
          url += `PageNumber=${query.page + 1}&PageSize=${query.pageSize}`
          fetch(url).then(resp => resp.json()).then(resp => {
            console.log(resp);
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

export function DilaMuqaam(props) {

  const columns = [
    {title: "Name", field:"name"},
  ];
  return (
    <div className="app">
      <div className="container">
        <MaterialTable
        title="Muqamaat"
        columns = {columns}
        data={(query) => new Promise((resolve, reject) => {
          
          let url = `https://localhost:7078/api/Utility/dilaat/${props.dilaId}/muqamaat?`;
          url += `PageNumber=${query.page + 1}&PageSize=${query.pageSize}`
          fetch(url).then(resp => resp.json()).then(resp => {
            console.log(resp);
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

export function Members() {
  let [url, setUrl] = useState(`https://localhost:7078/api/Member`);
  const tableRef = useRef();
  const setSelects = () => {
    // tableRef.current.onQueryChange()
    displaySelect(tableRef);
    
  }
  const columns = [
    {title: "Member Number", field:"chandaNo"},
    {title: "Name", render:rowData => (`${rowData.firstName} ${rowData.surname}`)},
    {title: "Muqaam", field:"jamaatName"},
    {title: "Dil'a", field:"circuitName"},
    {title: "Category", field:"info.category"},
    {title: "Actions", render:rowData => <LongMenu domainId={rowData.id} domain="member" actions={["Edit", "View"]} />},
  ];
  return (
    <div className="app">
      <div className="container">
       <div>
       <select id="zones" onClick={setSelects}  className="my-select">
        </select>
        <select id="dilas" style={{display : 'none'}} className="my-select">
        </select>
        <select id="muqam" style={{display : 'none'}} className="my-select">
        </select>
       </div>
        <MaterialTable
        title="Members"
        columns = {columns}
        tableRef={tableRef}
        data={(query) => new Promise((resolve, reject) => {
          if((localStorage.getItem("url")) != undefined || (localStorage.getItem("url")))
          {
            setUrl((localStorage.getItem("url")));
          }
          const webPath = url +`?PageNumber=${query.page + 1}&PageSize=${query.pageSize}`
          fetch(webPath).then(resp => resp.json()).then(resp => {
            localStorage.removeItem("url");
            console.log(webPath);
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

