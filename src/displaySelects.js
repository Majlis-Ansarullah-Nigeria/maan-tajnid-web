

const displaySelect = () => {
    const demoFetch = async (url) => {
        const fetc = await fetch(url);
        var fetcJson = fetc.json();
        return fetcJson;
    }
    const zones = document.querySelector("#zones");
    const dilas = document.querySelector("#dilas");
    const muqam = document.querySelector("#muqam");
    
    let display = async (url, tag) => {
        const get = await demoFetch(url);
        console.log(get);
        // tag.innerHTML = "";
        get.data.forEach(element => {
            tag.innerHTML += ` <option value="${element.id}" class="opts">${element.name}</option>`
        });
        
    }
    const displayZone = () => {
        display("http://nurudeenadeyemi-001-site1.ftempurl.com/api/Utility/zones/nopagination", zones)
    }
    displayZone();
    // zones.addEventListener("change", (e) => {
    //     console.log("seen")
    //     localStorage.removeItem("url");
    //     const zoneId = (zones.options[zones.selectedIndex].value)
    //     dilas.style.display = "inline-block";
    //     localStorage.setItem("url", `https://localhost:7078/api/Member/zones/${zoneId}`);
    //     ref.current.onQueryChange()
    //     display(`https://localhost:7078/api/Utility/dilaatbyzone/nopagination?zoneId=${zoneId}`, dilas)
    // })
    
    // dilas.addEventListener("change", (e) => {
    //     localStorage.removeItem("url");
    //     const dilaId = (dilas.options[dilas.selectedIndex].value)
    //     localStorage.setItem("url", `https://localhost:7078/api/Member/dilaat/${dilaId}`);
    //     ref.current.onQueryChange()
    //     muqam.style.display = "inline-block";
    //     display(`https://localhost:7078/api/Utility/muqamaatbydilaat/nopagination?dilaId=${dilaId}`, muqam)
    // })

    // muqam.addEventListener("change", (e) => {
    //     localStorage.removeItem("url");
    //     const muqaa = (dilas.options[dilas.selectedIndex].value)
    //     localStorage.setItem("url", `https://localhost:7078/api/Member/muqaam/${muqaa}`)
    //     ref.current.onQueryChange()
    //     muqam.style.display = "inline-block";
    // })
    
}

export default displaySelect;