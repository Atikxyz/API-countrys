fetch("https://restcountries.com/v3.1/all")
  .then(res => res.json())
  .then(res => {
    country(res) 
  });

function country(info) {
  const root = document.querySelector("#root");

  allInfo = "";
  info.forEach(value => {
    allInfo += htmlCode(value)
      
  })
  
  root.innerHTML = allInfo;
}
  
function htmlCode(info) {

  const { name, flags, area } = info;
  const html = `
    <div class="flags">
        <img src="${flags.png}" alt="">
        <h2>${name.common}</h2>
        <p>${area}</p>
    </div>
  `;
  return html
}


const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchBox = e.target.searchBox.value;
  const searchText = searchBox.toLowerCase();
  

  fetch(`https://restcountries.com/v3.1/name/${searchText}`)
  .then(res => res.json())
    .then(res => {
    country(res)
  })

})