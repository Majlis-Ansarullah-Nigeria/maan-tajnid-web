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