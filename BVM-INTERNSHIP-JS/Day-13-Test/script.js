document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("form-list");
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let rollNo = document.getElementById("rollNo");
  let dateOfBirth = document.getElementById("dob");
  let selectedCountry = document.getElementById("country");
  let imageFile = document.getElementById("input-file");

  let list = document.getElementById("student-list");

  //Error

  let error_name = document.getElementById("error_name");
  let error_last = document.getElementById("error_last");
  let error_roll = document.getElementById("error_roll");
  let error_dob = document.getElementById("error_dob");
  let error_Gender = document.getElementById("error_Gender");
  let error_country = document.getElementById("error_country");
  let error_language = document.getElementById("error_language");

  // Shorting

  let imageData = [];
  let selectedRow = null;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let fName = firstName.value;
    let lName = lastName.value;
    let roll = rollNo.value;
    let dob = dateOfBirth.value;
    let country = selectedCountry.value;
    let gender = form.querySelector('input[name="gender"]:checked')?.value;
    let language = Array.from(
      form.querySelectorAll(`input[name="language"]:checked`)
    ).map((input) => input.value);

    // Error
    error_name.textContent = "";
    error_last.textContent = "";
    error_roll.textContent = "";
    error_dob.textContent = "";
    error_Gender.textContent = "";
    error_country.textContent = "";
    error_language.textContent = "";

    let isValid = true;
    if (!fName) {
      error_name.textContent = "First Name Required";
      isValid = false;
    }
    if (!lName) {
      error_last.textContent = "Last Name Required";
      isValid = false;
    }
    if (!roll) {
      error_roll.textContent = "Roll Number Required";
      isValid = false;
    }
    if (!dob) {
      error_dob.textContent = "Date of Birth Required";
      isValid = false;
    }
    if (!gender) {
      error_Gender.textContent = "Gender Required";
      isValid = false;
    }
    if (!country) {
      error_country.textContent = "Country Required";
      isValid = false;
    }
    if (language == 0) {
      error_language.textContent = "At List 1 Language Required";
      isValid = false;
    }
    if (!isValid) return;

    let imageHTMLDate = imageData.map(
      (src) => `<img src="${src}" height="50px" width="50px">`
    );

    if (selectedRow === null) {
      let row = document.createElement("tr");
      row.innerHTML = `
            <td>${imageHTMLDate}</td>
            <td>${fName}</td>
            <td>${lName}</td>
            <td>${roll}</td>
            <td>${dob}</td>
            <td>${gender}</td>
            <td>${country}</td>
            <td>${language}</td>
             <td>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
           </td>     
        `;
      list.append(row);
    } else {
      selectedRow.children[0].innerHTML = imageHTMLDate;
      selectedRow.children[1].innerHTML = fName;
      selectedRow.children[2].innerHTML = lName;
      selectedRow.children[3].innerHTML = roll;
      selectedRow.children[4].innerHTML = dob;
      selectedRow.children[5].innerHTML = gender;
      selectedRow.children[6].innerHTML = country;
      selectedRow.children[7].innerHTML = language;
    }
    form.reset();
    selectedRow = null;

    // Sorting
  });

  list.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("edit")) {
      selectedRow = e.target.closest("tr");

      imageData = Array.from(
        selectedRow.children[0].querySelectorAll("img")
      ).map((img) => img.src);

      firstName.value = selectedRow.children[1].textContent;
      console.log(firstName.value);

      lastName.value = selectedRow.children[2].textContent;
      rollNo.value = selectedRow.children[3].textContent;
      dob.value = selectedRow.children[4].textContent;
      const genderValue = selectedRow.children[5].textContent;

      const genderInput = form.querySelector(
        `input[name="gender"][value="${genderValue}"]`
      );
      if (genderInput) genderInput.checked = true;

      country.value = selectedRow.children[6].textContent;

      const language = selectedRow.children[7].textContent
        .split(",")
        .map((l) => l);
      form.querySelectorAll('input[name="language"]').forEach((input) => {
        input.checked = language.includes(input.value);
      });
    }

    if (e.target.classList.contains("delete")) {
      e.target.closest("tr").remove();
      form.reset();
      selectedRow = null;
      imageData = [];
    }
  });

  imageFile.addEventListener("change", function () {
    // console.log('working');
    imageData = [];
    const files = [...imageFile.files];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        imageData.push(e.target.result);
      };
      reader.readAsDataURL(file);
    });
  });
  // Filter Logic

  let filterGender = document.getElementById("filter-gender");
  console.log(filterGender);
  let filterCountry = document.getElementById("filter-country");
  let filterLanguage = document.getElementById("filter-language");

  function applyFilter() {
    let genderValue = filterGender.value;
    console.log(genderValue);
    let countryValue = filterCountry.value;
    let languageValue = filterLanguage.value;

    const rows = list.querySelectorAll("tr");

    rows.forEach((row) => {
      const gender = row.children[5].textContent;
      const country = row.children[6].textContent;
      const language = row.children[7].textContent;

      const genderMatch = genderValue === "" || gender === genderValue;
      console.log(genderMatch);
      const countryMatch = countryValue === "" || country === countryValue;
      const languageMatch =
        languageValue === "" || language.includes(languageValue);

      if (genderMatch && countryMatch && languageMatch) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }
  filterGender.addEventListener("change", applyFilter);
  filterCountry.addEventListener("change", applyFilter);
  filterLanguage.addEventListener("change", applyFilter);
  
});
