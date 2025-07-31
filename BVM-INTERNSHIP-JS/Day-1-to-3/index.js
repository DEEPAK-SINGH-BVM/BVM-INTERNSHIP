document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("student-form");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const rollNo = document.getElementById("rollNo");
    const date = document.getElementById("dateOfBirth");
    const country = document.getElementById("country");
    const list = document.querySelector(".student-list");
    const inputFile = document.getElementById("input-file");

    const error_name = document.getElementById("error_name");
    const error_last = document.getElementById("error_last");
    const error_roll = document.getElementById("error_roll");
    const error_Date = document.getElementById("error_Date");
    const error_country = document.getElementById("error_country");
    const error_language = document.getElementById("error_language");
    const error_gender = document.getElementById("error_Gender");

    let files = [];
    let selectedRow = null;

    // Image Preview Container
    const previewContainer = document.createElement("div");
    previewContainer.style.display = "flex";
    previewContainer.style.gap = "10px";
    previewContainer.style.flexWrap = "wrap";
    inputFile.parentElement.appendChild(previewContainer);

    // Image Preview on File Input Change
    inputFile.addEventListener("change", function () {
        previewContainer.innerHTML = "";
        files = [...inputFile.files];

        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.createElement("img");
                img.src = e.target.result;
                img.style.width = "60px";
                img.style.height = "60px";
                img.style.objectFit = "cover";
                img.style.borderRadius = "5px";
                previewContainer.appendChild(img);
            };
            reader.readAsDataURL(files[i]);
        }
    });

    // Submit Form
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const fName = firstName.value.trim();
        const lName = lastName.value.trim();
        const roll = rollNo.value.trim();
        const dob = date.value;
        const gender = form.querySelector('input[name="gender"]:checked')?.value;
        const selectedCountry = country.value;
        const languageInputs = form.querySelectorAll('input[name="language"]:checked');
        const langValues = Array.from(languageInputs).map(input => input.value).join(",");

        // Reset error messages
        error_name.innerHTML = "";
        error_last.innerHTML = "";
        error_roll.innerHTML = "";
        error_Date.innerHTML = "";
        error_country.innerHTML = "";
        error_language.innerHTML = "";
        error_gender.innerHTML = "";

        let isValid = true;

        if (!fName) { error_name.innerHTML = "First Name is required"; isValid = false; }
        if (!lName) { error_last.innerHTML = "Last Name is required"; isValid = false; }
        if (!roll) { error_roll.innerHTML = "Roll Number is required"; isValid = false; }
        if (!dob) { error_Date.innerHTML = "Date of Birth is required"; isValid = false; }
        if (!gender) { error_gender.innerHTML = "Gender is required"; isValid = false; }
        if (languageInputs.length === 0) {
            error_language.innerHTML = "At least 1 language must be selected";
            isValid = false;
        }
        if (!selectedCountry) { error_country.innerHTML = "Country is required"; isValid = false; }

        if (!isValid) return;

        const imgHTMLGroup = Array.from(previewContainer.querySelectorAll("img")).map(img => {
            return `<img src="${img.src}" height="40" width="40" style="object-fit:cover; margin:2px; border-radius:5px;">`;
        }).join("");

        if (selectedRow === null) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${imgHTMLGroup}</td>
                <td>${fName}</td>
                <td>${lName}</td>
                <td>${roll}</td>
                <td>${dob}</td>
                <td>${gender}</td>
                <td>${selectedCountry}</td>
                <td>${langValues}</td>
                <td>
                    <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                    <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                </td>`;
            list.appendChild(row);
        } else {
            selectedRow.children[0].innerHTML = imgHTMLGroup;
            selectedRow.children[1].textContent = fName;
            selectedRow.children[2].textContent = lName;
            selectedRow.children[3].textContent = roll;
            selectedRow.children[4].textContent = dob;
            selectedRow.children[5].textContent = gender;
            selectedRow.children[6].textContent = selectedCountry;
            selectedRow.children[7].textContent = langValues;
            selectedRow = null;
        }

        form.reset();
        previewContainer.innerHTML = "";
    });

    // Edit & Delete
    list.addEventListener("click", function (e) {
        e.preventDefault();

        if (e.target.classList.contains("edit")) {
            selectedRow = e.target.closest("tr");

            const imgElements = selectedRow.children[0].querySelectorAll("img");
            previewContainer.innerHTML = "";
            imgElements.forEach(img => {
                const clone = document.createElement("img");
                clone.src = img.src;
                clone.style.width = "60px";
                clone.style.height = "60px";
                clone.style.objectFit = "cover";
                clone.style.borderRadius = "5px";
                previewContainer.appendChild(clone);
            });

            firstName.value = selectedRow.children[1].textContent;
            lastName.value = selectedRow.children[2].textContent;
            rollNo.value = selectedRow.children[3].textContent;
            date.value = selectedRow.children[4].textContent;

            const genderValue = selectedRow.children[5].textContent;
            const genderInput = form.querySelector(`input[name="gender"][value="${genderValue}"]`);
            if (genderInput) genderInput.checked = true;

            const selectedCountry = selectedRow.children[6].textContent;
            country.value = selectedCountry;

            const languages = selectedRow.children[7].textContent.split(',').map(l => l.trim());
            const languageInputs = form.querySelectorAll('input[name="language"]');
            languageInputs.forEach(input => {
                input.checked = languages.includes(input.value);
            });
        }

        if (e.target.classList.contains("delete")) {
            e.target.closest("tr").remove();
            form.reset();
            previewContainer.innerHTML = "";
            selectedRow = null;
        }
    });
});

// Optional: Dark/Light Mode Toggle
function toggleMode() {
    const body = document.getElementById("pageBody");
    const button = document.getElementById("toggleButton");
    const btnImage = button.querySelector("img");

    const isLight = body.style.backgroundColor === "white" || body.style.backgroundColor === "";

    if (isLight) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        btnImage.src = "https://cdn-icons-png.freepik.com/256/7908/7908365.png?semt=ais_hybrid";
        button.classList.add("btn-dark");
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        btnImage.src = "https://cdn0.iconfinder.com/data/icons/colourful-education/250/bulb-512.png";
        button.classList.remove("btn-dark");
    }
}
