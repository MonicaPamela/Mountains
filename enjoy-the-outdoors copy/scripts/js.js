function generateListItems(arg) {
    let items = `<option value="">View All</option>`;
  
    for (let i = 0; i < arg.length; i++) {
      items += `<option value="${arg[i].name}">${arg[i].name}</option>`;
    }
    return items;
  }
  
  document.querySelector("main").innerHTML = `

    <select id="list">
      ${generateListItems(mountainsArray)}
    </select>`;
  
  const list = document.getElementById("list");
  list.addEventListener("change", (event) => {
    let selectedMountainName = event.target.value;
  
    if (selectedMountainName === "") {
      // Handle the "View All" option
      results.innerHTML = "<h1>All Mountains</h1>";
      mountainsArray.forEach((mountain) => {
        results.innerHTML += `<h2>${mountain.name}</h2>`;
        results.innerHTML += `<h3>${mountain.desc};</h3>`;
        results.innerHTML += `<h3>Elevation: ${mountain.elevation} feet</h3>`;
        results.innerHTML += `<h3>Effort: ${mountain.effort}</h3>`;
        results.innerHTML += `<h3>Latitude: ${mountain.coords.lat}</h3>`;
        results.innerHTML += `<h3>Longitude: ${mountain.coords.lng}</h3>`;
        results.innerHTML += `<img src="./images/${mountain.img}" alt="${mountain.name}">`;
      });
    } else {
      // Handle the selected mountain
      let mountain = mountainsArray.find((m) => m.name === selectedMountainName);
      results.innerHTML = `<h1>${mountain.name}</h1>`;
      results.innerHTML += `<h3>${mountain.desc}</h3>`;
      results.innerHTML += `<h3>Elevation: ${mountain.elevation} feet</h3>`;
      results.innerHTML += `<h3>Effort: ${mountain.effort}</h3>`;
      results.innerHTML += `<h3>Latitude: ${mountain.coords.lat}</h3>`;
      results.innerHTML += `<h3>Longitude: ${mountain.coords.lng}</h3>`;
      results.innerHTML += `<img src="./images/${mountain.img}" alt="${mountain.name}">`;
    }
  });