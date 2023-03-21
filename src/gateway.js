import MaterialTable from "material-table";
import LongMenu from './components/ThreeDotsMenu/LongMenu';
import "./style.css"
import Button from '@mui/material/Button';

import { useRef, useState, useEffect } from "react";
let baseUrl = "http://nurudeenadeyemi-001-site1.ftempurl.com"
export const createZoneFetch = async (bodyObj) => {

  const settings = {

    method: "POST",
    body: JSON.stringify(bodyObj),
    headers: {
      'Content-Type': 'application/json'
    }

  };
  const postZone = await fetch(`${baseUrl}/api/Utility/zone`, settings);
  if (postZone.status == 400) {
    return false;
  }
  return postZone.json();
}
export const createRole = async (bodyObj) => {

  const settings = {

    method: "POST",
    body: JSON.stringify(bodyObj),
    headers: {
      'Content-Type': 'application/json'
    }

  };
  const postZone = await fetch(`${baseUrl}/api/User/Roles`, settings);
  if (postZone.status == 400) {
    return false;
  }
  return postZone.json();
}
export const login = async (bodyObj) => {

  const settings = {

    method: "POST",
    body: JSON.stringify(bodyObj),
    headers: {
      'Content-Type': 'application/json'
    }

  };

  const response = await fetch(`${baseUrl}/api/User/login`, settings);
  if (response.status == 400) {
    return false;
  }
  
  return response.json();
}
export const profileUser = async (bodyObj) => {

  const settings = {

    method: "POST",
    body: JSON.stringify(bodyObj),
    headers: {
      'Content-Type': 'application/json'
    }

  };

  const postZone = await fetch(`${baseUrl}/api/User/ProfileUser`, settings);
  if (postZone.status == 400) {
    return false;
  }
  return postZone.json();
}
export const newUser = async (bodyObj) => {

  const settings = {

    method: "POST",
    body: JSON.stringify(bodyObj),
    headers: {
      'Content-Type': 'application/json'
    }

  };

  const postZone = await fetch(`${baseUrl}/api/User/login`, settings);
  if (postZone.status == 400) {
    return false;
  }
  return postZone.json();
}
export const updateZoneFetch = async (bodyObj, id) => {
  const settings = {

    method: "PUT",
    body: JSON.stringify(bodyObj),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const postZone = await fetch(`${baseUrl}/api/Utility/zones/${id}`, settings);
  return postZone.json();
}


export const updateDila = async (zoneId, dilaId) => {
  const settings = {

    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const dilaupdate = await fetch(`${baseUrl}/api/Utility/dila/${dilaId}?zoneId=${zoneId}`, settings);
  console.log(dilaupdate);
  return dilaupdate.json();
}
export const fetchZone = async (id) => {

  const postZone = await fetch(`${baseUrl}/api/Utility/zones/${id}`);
  return postZone.json();
}


export const fetchMemberInfo = async (id) => {

  const postZone = await fetch(`${baseUrl}/api/Member/${id}`);
  return postZone.json();
}
export const fetchMuqaam = async (id) => {

  const postZone = await fetch(`${baseUrl}/api/Utility/muqamaat/${id}`);
  return postZone.json();
}

export const fetchZonesDropdown = async () => {

  const postZone = await fetch(`${baseUrl}/api/Utility/zones/nopagination`);
  return postZone.json();
}
export const postLevel = async () => {

  const postl = await fetch(`${baseUrl}/api/User/postlevels`);
  return postl.json();
}
export const post = async () => {

  const postl = await fetch(`${baseUrl}/api/User/posts`);
  return postl.json();
}

export const getDila = async (id) => {

  const postZone = await fetch(`${baseUrl}/api/Utility/dilaat/${id}`);
  return postZone.json();
}

export function Zones() {

  const columns = [
    { title: "Name", field: "name" },
    { title: "Code", field: "code" },
    { title: "Number Of Dil'a", field: "numberOfDila" },
    { title: "Actions", render: rowData => <LongMenu domainId={rowData.id} domain="zone" actions={["View"]} /> },
  ];
  return (
    <div className="app">
      <div className="container">
        <MaterialTable
          title="Zones"
          options={{ debounceInterval: 500, padding: "dense" }}
          columns={columns}
          data={(query) => new Promise((resolve, reject) => {

            let url = `${baseUrl}/api/Utility/zones?`;
            url += `PageNumber=${query.page + 1}&PageSize=${query.pageSize}`
            if (query.search) {
              url += `&Keyword=${query.search}`
            }
            fetch(url).then(resp => resp.json()).then(resp => {
              console.log(resp.data.data)
              resolve({
                data: resp.data.data,
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
  let url = `${baseUrl}/api/Utility/muqamaat?`;
  let division = localStorage.getItem("division");
  if(division === "dilaat")
  {
    let divisionId = localStorage.getItem("divisionId");
    url = `${baseUrl}/api/Utility/dilaat/${divisionId}/muqamaat?`
  }
  const columns = [
    { title: "Name", field: "name" },
    { title: "Zone", field: "zone" },
    { title: "Dila", field: "dila" },
    { title: "Actions", render: rowData => <LongMenu domainId={rowData.id} domain="muqaam" actions={["View"]} /> },
  ];
  return (
    <div className="app">
      <div className="container">
        <MaterialTable
          title="Muqaam"
          options={{ debounceInterval: 500, padding: "dense" }}
          columns={columns}
          data={(query) => new Promise((resolve, reject) => {

            
            url += `PageNumber=${query.page + 1}&PageSize=${query.pageSize}`
            if (query.search) {
              url += `&Keyword=${query.search}`
            }
            fetch(url).then(resp => resp.json()).then(resp => {
              resolve({
                data: resp.data.data,
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
  let url = `${baseUrl}/api/Utility/dilaat?`;
  let division = localStorage.getItem("division");
  if(division === "zones")
  {
    let divisionId = localStorage.getItem("divisionId");
    url = `${baseUrl}/api/Utility/zones/${divisionId}/muqamaat?`
  }
  const columns = [
    { title: "Name", field: "name" },
    { title: "Zone", field: "zoneName" },
    { title: "Number Of Muqam", field: "numberOfMuqaam" },
    { title: "Actions", render: rowData => <LongMenu domainId={rowData.id} domain="dila" actions={["View"]} /> },
  ];
  return (
    <div className="app">
      <div className="container">
        <MaterialTable
          title="Dilaat"
          options={{ debounceInterval: 500, padding: "dense" }}
          columns={columns}
          data={(query) => new Promise((resolve, reject) => {

           
            url += `PageNumber=${query.page + 1}&PageSize=${query.pageSize}`
            if (query.search) {
              url += `&Keyword=${query.search}`
            }
            fetch(url).then(resp => resp.json()).then(resp => {
              console.log(resp.data.data);
              resolve({
                data: resp.data.data,
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
    { title: "Name", field: "name" },
    {title: "Members", field:"name", render:rowData => {
      
      return (<Button variant="contained"
         style={{
          backgroundColor: "green",
      }} onClick={() => viewMembers(props.id, props.level)}>
          Members
      </Button>)
    }},
  ];
  return (
    <div className="app">
      <div className="container">
        <MaterialTable
          title="Muqamaat"
          options={{ debounceInterval: 500, padding: "dense" }}
          columns={columns}
          data={(query) => new Promise((resolve, reject) => {

            let url = `${baseUrl}/api/Utility/${props.level}/${props.id}/${props.sublevel}?`;
            url += `PageNumber=${query.page + 1}&PageSize=${query.pageSize}`
            if (query.search) {
              url += `&Keyword=${query.search}`
            }
            fetch(url).then(resp => resp.json()).then(resp => {
              console.log(resp);
              resolve({
                data: resp.data.data,
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
  let [url, setUrl] = useState(`${baseUrl}/api/Member`);
    let division = localStorage.getItem("division");
    if( division != "national")
    {
      if(division !== null || division !== undefined)
      {
        let divisionId = localStorage.getItem("divisionId");
        url += `/${division}/${divisionId}`
      }
    }
        
  const tableRef = useRef();
  const columns = [
    { title: "Member Number", field: "chandaNo" },
    { title: "Name", render: rowData => (`${rowData.firstName} ${rowData.surname}`) },
    { title: "Muqaam", field: "jamaatName" },
    { title: "Dil'a", field: "circuitName" },
    { title: "Category", field: "category" },
    { title: "Actions", render: rowData => <LongMenu domainId={rowData.chandaNo} domain="member" actions={["View"]} /> },
  ];

  return (
    <div className="app">
      <div className="container">
        <MaterialTable
          title="Members"
          columns={columns}
          options={{ debounceInterval: 500, padding: "dense" }}
          tableRef={tableRef}
          data={(query) => new Promise((resolve, reject) => {
            let webPath = url + `?PageNumber=${query.page + 1}&PageSize=${query.pageSize}`
            if (query.search) {
              webPath += `&Keyword=${query.search}`
            }
            fetch(webPath).then(resp => resp.json()).then(resp => {
              localStorage.removeItem("url");
              console.log(webPath);
              resolve({
                data: resp.data.data,
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

export function MembersByLevel(props) {
  
  let [url, setUrl] = useState(`${baseUrl}/api/Member/${props.level}/${props.levelId}`);
  
  const tableRef = useRef();
  
  const columns = [
    { title: "Member Number", field: "chandaNo" },
    { title: "Name", render: rowData => (`${rowData.firstName} ${rowData.surname}`) },
    { title: "Muqaam", field: "jamaatName" },
    { title: "Dil'a", field: "circuitName" },
    { title: "Category", field: "category" },
    { title: "Actions", render: rowData => <LongMenu domainId={rowData.chandaNo} domain="member" actions={["View"]} /> },
  ];


  return (
    <div className="app">
      <div className="container">
        <MaterialTable
          title="Members"
          columns={columns}
          options={{ debounceInterval: 500, padding: "dense" }}
          tableRef={tableRef}
          data={(query) => new Promise((resolve, reject) => {
            let webPath = url + `?PageNumber=${query.page + 1}&PageSize=${query.pageSize}`
            if (query.search) {
              webPath += `&Keyword=${query.search}`
            }
            fetch(webPath).then(resp => resp.json()).then(resp => {
              localStorage.removeItem("url");
              console.log(webPath);
              localStorage.removeItem("levelId")
              localStorage.removeItem("level")
              resolve({
                data: resp.data.data,
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

export const viewMembers = async (id, level) => {
  localStorage.setItem("level", level);
  localStorage.setItem("levelId", id);
  window.location.href = "/members"
}