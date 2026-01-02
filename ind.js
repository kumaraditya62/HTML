const form = document.getElementById("subjectForm");
const subjectInput = document.getElementById("subjectInput");
const courseSelect = document.getElementById("courseSelect");
const itemsList = document.getElementById("items");

// Ensure each course has a nested <ul> for subjects
document.querySelectorAll("#items > li").forEach(li => {
  if (!li.querySelector("ul")) {
    const subList = document.createElement("ul");
    subList.classList.add("subjects");
    li.appendChild(subList);
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const subjectName = subjectInput.value.trim();
  const courseName = courseSelect.value;

  if (subjectName === "") return;

  const courseLi = Array.from(itemsList.children).find(
    li => li.firstChild.nodeValue.trim() === courseName
  );

  if (courseLi) {
    const subList = courseLi.querySelector("ul");
    const subjectLi = document.createElement("li");
    subjectLi.classList.add("subject-item");
    subjectLi.textContent = subjectName;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete-btn");
    delBtn.addEventListener("click", function () {
      subList.removeChild(subjectLi);
    });

    subjectLi.appendChild(delBtn);
    subList.appendChild(subjectLi);
  }

  subjectInput.value = "";
});
