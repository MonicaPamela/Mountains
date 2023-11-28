let selectedLocation = "";
let selectedParkType = "";

document.addEventListener("DOMContentLoaded", (e) => {
  function generateListItems(arg) {
    let items = "";

    for (let i = 0; i < arg.length; i++) {
      items += `<li>${arg[i]}</li>`;
    }
    return items;
  }

  document.querySelector("main").innerHTML = `
<ol>
${generateListItems(locationsArray)}
</ol>`;
  locationsArray.forEach(
    (location) => (locationsList.innerHTML += `<option>${location}</option>`)
  );
  parkTypesArray.forEach(
    (pt) => (parkTypeList.innerHTML += `<option>${pt}</option>`)
  );

  locationsList.addEventListener("change", (e) => {
    selectedLocation = e.target.value;
    showResults();
  });

  parkTypeList.addEventListener("change", (e) => {
    selectedParkType = e.target.value;
    showResults();
  });

  function isMatch(p) {
    return (
      (selectedLocation == "" || p.State == .includes(selectedLocation)) &&
      (selectedParkType == "" || p.LocationName.includes(selectedParkType))
    );
  }

  function getCard(p) {
    return `<div class="card">
        ${p.LocationName}
        <div><b>${p.State}</b></div></div>`;
  }

  function showResults() {
    results.innerHTML = "";
    const filtered = nationalParksArray.filter(isMatch);
    filtered.forEach((p) => (results.innerHTML += getCard(p)));
  }

  showResults();
});

