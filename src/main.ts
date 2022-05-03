import axios, { AxiosResponse } from "axios";
import { RandomUser, User, Shows, RandomShows } from "./datatypes";

const limitInput: Element | null = document.getElementById("input1");
const genreInput: Element | null = document.getElementById("input2");
const fetchBtn = document.getElementById("btn1");
const genreBtn = document.getElementById("btn2");
const myTable = document.getElementById("mars");

// Define a click listener on the button
fetchBtn?.addEventListener("click", () => {
  console.log("Clicked");
  removeOldData();
  fetchsomeNewData();
});
genreBtn?.addEventListener("click", () => {
  searchData();
});

function removeOldData() {
  // Use the class name fromAPI to select all the rows
  // in the table which are generated axios data
  const rows: NodeListOf<HTMLTableRowElement> =
    document.querySelectorAll(".fromAPI");

  for (let k = 0; k < rows.length; k++) {
    // Remove the row from the parent (myTable)
    myTable?.removeChild(rows[k]);
  }
}

function searchData() {
  // Use the class name fromAPI to select all the rows
  // in the table which are generated axios data
  const rows: NodeListOf<HTMLTableRowElement> =
    document.querySelectorAll(".fromAPI");

  for (let k = 0; k < rows.length; k++) {
    // Remove the row from the parent (myTable)
    if(rows[k].innerText.includes((genreInput as HTMLInputElement)?.value.toUpperCase())){
      //do nothing
    }else{
      myTable?.removeChild(rows[k]);
    }
  }
}

function fetchsomeSearchedNewData() {
  // Use the user input to control the number of random users to fetch
  const fLimit = (limitInput as HTMLInputElement)?.value ?? 10;
  const genreval = ((genreInput as HTMLInputElement)?.value.toUpperCase());
  let val = Number(fLimit);
  let k=0;
  while(k<val){

  axios
    .request({
      method: "GET",
      url: "https://api.tvmaze.com/shows/" + Math.floor(Math.random()*100).toString(),
      params: { results: fLimit },
    })
    .then((r: AxiosResponse) => r.data)
    .then((ru: Shows) => {
      if(ru.genres.toString().toUpperCase()==genreval){
        const aRow = document.createElement("tr");
        // Use a unique class name so it is easy to remove rows later
        aRow.setAttribute("class", "fromAPI");
        myTable?.appendChild(aRow);

        // Create a table data cell to show first name and last name
        const nameCell = document.createElement("td");
        nameCell.innerText = `${ru.name.toUpperCase()} `;
        aRow.appendChild(nameCell);

        // // Create a table data cell to show date of birth
        const DOBCell = document.createElement("td");
        DOBCell.innerText = ru.genres.toString().toUpperCase();
        // console.log(ru.genres.toString());
        aRow.appendChild(DOBCell);
        aRow.appendChild(DOBCell);

        // // Create a table data cell to show the picture
        const photoCell = document.createElement("td");
        aRow.appendChild(photoCell);
        const image = document.createElement("img");
        image.setAttribute("src", ru.image.medium);
        photoCell.appendChild(image);}
        else{
          fetchOneData(fLimit);
        }
        // k=k+1;

    }) .catch((e:any) => {
      console.log("This value doesn't work");
      removeOldData();
      fetchsomeNewData();
      
      });
      k=k+1;
    }
}
function fetchOneData(fetchLimit:string) {
  // Use the user input to control the number of random users to fetch
  const genreval = ((genreInput as HTMLInputElement)?.value.toUpperCase());
  let val = Number(fetchLimit);

  axios
    .request({
      method: "GET",
      url: "https://api.tvmaze.com/shows/" + Math.floor(Math.random()*100).toString(),
      params: { results: fetchLimit },
    })
    .then((r: AxiosResponse) => r.data)
    .then((ru: Shows) => {
      while(ru.genres.toString().toUpperCase()!=genreval){

        const aRow = document.createElement("tr");
        // Use a unique class name so it is easy to remove rows later
        aRow.setAttribute("class", "fromAPI");
        myTable?.appendChild(aRow);

        // Create a table data cell to show first name and last name
        const nameCell = document.createElement("td");
        nameCell.innerText = `${ru.name.toUpperCase()} `;
        aRow.appendChild(nameCell);

        // // Create a table data cell to show date of birth
        const DOBCell = document.createElement("td");
        DOBCell.innerText = ru.genres.toString().toUpperCase();
        // console.log(ru.genres.toString());
        aRow.appendChild(DOBCell);
        aRow.appendChild(DOBCell);

        // // Create a table data cell to show the picture
        const photoCell = document.createElement("td");
        aRow.appendChild(photoCell);
        const image = document.createElement("img");
        image.setAttribute("src", ru.image.medium);
        photoCell.appendChild(image);}

    }) .catch((e:any) => {
      console.log("This value doesn't work");
      // removeOldData();
      fetchOneData(fetchLimit);
      
      });
}

function fetchsomeNewData() {
  // Use the user input to control the number of random users to fetch
  const fLimit = (limitInput as HTMLInputElement)?.value ?? 10;
  const genreval = ((genreInput as HTMLInputElement)?.value.toUpperCase());
  let val = Number(fLimit);
  console.log(val);
  for(let k=0; k<val;k++){

  axios
    .request({
      method: "GET",
      url: "https://api.tvmaze.com/shows/" + Math.floor(Math.random()*100).toString(),
      params: { results: fLimit },
    })
    .then((r: AxiosResponse) => r.data)
    .then((ru: Shows) => {
        const aRow = document.createElement("tr");
        // Use a unique class name so it is easy to remove rows later
        aRow.setAttribute("class", "fromAPI");
        myTable?.appendChild(aRow);

        // Create a table data cell to show first name and last name
        const nameCell = document.createElement("td");
        nameCell.innerText = `${ru.name.toUpperCase()} `;
        aRow.appendChild(nameCell);

        // // Create a table data cell to show date of birth
        const DOBCell = document.createElement("td");
        DOBCell.innerText = ru.genres.toString().toUpperCase();
        // console.log(ru.genres.toString());
        aRow.appendChild(DOBCell);
        aRow.appendChild(DOBCell);

        // // Create a table data cell to show the picture
        const photoCell = document.createElement("td");
        aRow.appendChild(photoCell);
        const image = document.createElement("img");
        image.setAttribute("src", ru.image.medium);
        photoCell.appendChild(image);
        // k=k+1;

    }) .catch((e:any) => {
      console.log("This value doesn't work");
      console.log(val);
      removeOldData();
      fetchsomeNewData();
      
      });
    }
}

fetchsomeNewData();