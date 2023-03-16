import MaterialTable from "material-table";
import LongMenu from './components/ThreeDotsMenu/LongMenu';
import "./style.css"
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
  const postZone = await fetch(`${baseUrl}/api/Utility/dila/${dilaId}?zoneId=${zoneId}`, settings);
  return postZone.json();
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

            let url = `${baseUrl}/api/Utility/muqamaat?`;
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

            let url = `${baseUrl}/api/Utility/dilaat?`;
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
  ];
  return (
    <div className="app">
      <div className="container">
        <MaterialTable
          title="Muqamaat"
          options={{ debounceInterval: 500, padding: "dense" }}
          columns={columns}
          data={(query) => new Promise((resolve, reject) => {

            let url = `${baseUrl}/api/Utility/dilaat/${props.dilaId}/muqamaat?`;
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
  let [url, setUrl] = useState(`{baseUrl}/api/Member`);
  const tableRef = useRef();
  const setSelects = () => {
    // tableRef.current.onQueryChange()
    // displaySelect(tableRef);

  }
  const columns = [
    { title: "Member Number", field: "chandaNo" },
    { title: "Name", render: rowData => (`${rowData.firstName} ${rowData.surname}`) },
    { title: "Muqaam", field: "jamaatName" },
    { title: "Dil'a", field: "circuitName" },
    { title: "Category", field: "info.category" },
    { title: "Actions", render: rowData => <LongMenu domainId={rowData.chandaNo} domain="member" actions={["View"]} /> },
  ];

  const [zones, setZones] = useState([{ key: "zone", value: "" }]);
  const [dilas, setDilas] = useState([{ key: "dila", value: "" }]);
  const [dilasDisplay, setdilasDisplay] = useState(false);
  const [muqamis, setMuqamis] = useState([{ key: "muqami", value: "" }])


  useEffect(async () => {
    const zoneData = await fetch(`${baseUrl}/api/Utility/zones/nopagination`).then(res => res.json()).then(data => data.data)
    let test = []
    zoneData.forEach(z => {
      let data = {
        key: z.name,
        value: z.id,
      }
      test.push(data);
    })
    setZones([...zones, ...test])

  }, [])

  const populateDilas = async(zoneId) => {
    setdilasDisplay(true);
    setUrl(`{baseUrl}/api/Member/zones/${zoneId}`)
    tableRef.current.onQueryChange()
    const dilaData = await fetch(`${baseUrl}/api/Utility/dilaatbyzone/nopagination?zoneId=${zoneId}`).then(res => res.json()).then(data => data.data)
    let test = []
    dilaData.forEach(z=> {
      let data = {
        key: z.name,
        value: z.id,
      }
      test.push(data);
    })
    setDilas([{ key: "dila", value: "" }, ...test])
  }
  const populateMuqaam = async(zoneId) => {
    setdilasDisplay(true);
    setUrl(`${baseUrl}/api/Member/zones/${zoneId}`)
    tableRef.current.onQueryChange()
    const dilaData = await fetch(`${baseUrl}/api/Utility/dilaatbyzone/nopagination?zoneId=${zoneId}`).then(res => res.json()).then(data => data.data)
    let test = []
    dilaData.forEach(z=> {
      let data = {
        key: z.name,
        value: z.id,
      }
      test.push(data);
    })
    setDilas([{ key: "dila", value: "" }, ...test])
  }




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

