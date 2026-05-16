//test

const timeline = [
  "Initialize repository with .gitignore and README",
  "Create base static frontend structure",
  "Add feature branches for team collaboration",
  "Resolve merge conflicts and complete pull requests",
  "Enable GitHub Actions deployment to GitHub Pages"
];

const timelineList = document.getElementById("timelineList");
const ctaButton = document.getElementById("ctaButton");
const checkForm = document.getElementById("checkForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function renderTimeline() {
  timelineList.innerHTML = timeline
    .map((item, index) => `<li><strong>Step ${index + 1}:</strong> ${item}</li>`)
    .join("");
}

function addTask(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;
  taskList.appendChild(li);
}

ctaButton.addEventListener("click", () => {
  const timelineSection = document.getElementById("timeline");
  timelineSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

checkForm.addEventListener("submit", event => {
  event.preventDefault();

  const value = taskInput.value.trim();
  if (!value) {
    return;
  }

  addTask(value);
  taskInput.value = "";
});

renderTimeline();
addTask("Protect main branch and require pull requests");
addTask("Split at least 20 meaningful commits evenly between teammates");
