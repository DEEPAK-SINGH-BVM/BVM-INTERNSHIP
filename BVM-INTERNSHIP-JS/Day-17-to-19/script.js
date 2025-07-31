document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-Data");
  const firstName = document.getElementById("first-Name");
  const lastName = document.getElementById("last-Name");
  const rollNo = document.getElementById("rollNo");
  const dateOfBirth = document.getElementById("DateOfBirth");
  const selectedCountry = document.getElementById("select-country");
  const imageFile = document.getElementById("input-file");
  const list = document.getElementById("student-data");

  const error_name = document.getElementById("error_name");
  const error_last = document.getElementById("error_last");
  const error_roll = document.getElementById("error_roll");
  const error_date = document.getElementById("error_date");
  const error_gender = document.getElementById("error_gender");
  const error_country = document.getElementById("error_country");
  const error_language = document.getElementById("error_language");

  let imageData = [];
  let selectedRow = null;
  let studentData = [];

  function loadLocalStorage() {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    studentData = data;
    // store in localStorage but not show on Page
    renderTable();
  }
  function saveLocalStorage() {
    localStorage.setItem("students", JSON.stringify(studentData));
  }
  // cookies
  function renderTable() {
    list.innerHTML = "";

    studentData.forEach((student, index) => {
      const row = document.createElement("tr");

      const imageHTML = student.images.map(
        (src) => `<img src="${src}" height="50px" width="50px">`
      );
      row.innerHTML = `
        <td>${imageHTML}</td>
        <td>${student.fName}</td>
        <td>${student.lName}</td>
        <td>${student.roll}</td>
        <td>${student.dob}</td>
        <td>${student.gender}</td>
        <td>${student.country}</td>
        <td>${student.language}</td>
        <td>
          <button class="edit" data-index="${index}">Edit</button>
          <button class="delete" data-index="${index}">Delete</button>
        </td>
      `;
      list.appendChild(row);
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fName = firstName.value;
    const lName = lastName.value;
    const roll = rollNo.value;
    const dob = dateOfBirth.value;
    const country = selectedCountry.value;
    const gender = form.querySelector('input[name="gender"]:checked')?.value;
    const language = Array.from(
      form.querySelectorAll('input[name="language"]:checked')
    ).map((input) => input.value);

    error_name.textContent = "";
    error_last.textContent = "";
    error_roll.textContent = "";
    error_date.textContent = "";
    error_gender.textContent = "";
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
      error_date.textContent = "Date of Birth Required";
      isValid = false;
    }
    if (!gender) {
      error_gender.textContent = "Gender Required";
      isValid = false;
    }
    if (!country) {
      error_country.textContent = "Country Required";
      isValid = false;
    }
    if (language.length === 0) {
      error_language.textContent = "At least 1 Language Required";
      isValid = false;
    }

    if (!isValid) return;

    const student = {
      images: [...imageData],
      fName,
      lName,
      roll,
      dob,
      gender,
      country,
      language: language,
    };
    // console.log(student);

    if (selectedRow !== null) {
      const index = selectedRow.getAttribute("data-index");
      // console.log(selectedRow.getAttribute("data-index"));
      studentData[index] = student;
      // console.log(studentData[index]);
    } else {
      studentData.push(student);
      // console.log(studentData);
    }

    // to save in localStorage
    saveLocalStorage();
    // store in localStorage but not show in Page
    renderTable();
    // Form Reset
    form.reset();
  });

  imageFile.addEventListener("change", function () {
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

  list.addEventListener("click", function (e) {
    const index = e.target.getAttribute("data-index");

    if (e.target.classList.contains("edit")) {
      selectedRow = e.target.closest("tr");

      selectedRow.setAttribute("data-index", index);

      const student = studentData[index];
      // console.log(studentData);

      firstName.value = student.fName;
      lastName.value = student.lName;
      rollNo.value = student.roll;
      dateOfBirth.value = student.dob;
      selectedCountry.value = student.country;

      imageData = [...student.images];
      // console.log(imageData);

      const genderInput = form.querySelector(
        `input[name="gender"][value="${student.gender}"]`
      );
      if (genderInput) genderInput.checked = true;

      form.querySelectorAll('input[name="language"]').forEach((input) => {
        input.checked = student.language.includes(input.value);
      });
    }

    if (e.target.classList.contains("delete")) {
      studentData.splice(index, 1);
      saveLocalStorage();
      renderTable();
    }
  });

  const Gender = document.getElementById("filter-gender");
  const Country = document.getElementById("filter-country");
  const Language = document.getElementById("filter-language");

  function Filter() {
    let genderValue = Gender.value;
    let countryValue = Country.value;
    let languageValue = Language.value;

    const rows = list.querySelectorAll("tr");

    rows.forEach((row) => {
      const gender = row.children[5].textContent;
      const country = row.children[6].textContent;
      const language = row.children[7].textContent;

      // console.log(gender);

      const genderMatch = genderValue === "" || gender === genderValue;
      // console.log(genderMatch);
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
  Gender.addEventListener("change", Filter);
  Country.addEventListener("change", Filter);
  Language.addEventListener("change", Filter);

  loadLocalStorage();
});
