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
const commitCount = document.getElementById("commitCount");
const conflictCount = document.getElementById("conflictCount");
const TASKS_STORAGE_KEY = "pulseboard.tasks";

const projectSnapshot = {
  commits: "20+",
  conflicts: "2"
};

function renderTimeline() {
  timelineList.innerHTML = timeline
    .map((item, index) => `<li><strong>Step ${index + 1}:</strong> ${item}</li>`)
    .join("");
}

function addTask(taskText) {
  const li = document.createElement("li");
  const label = document.createElement("span");
  label.textContent = taskText;

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "remove-task";
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  li.append(label, removeButton);
  taskList.appendChild(li);
  saveTasks();
}

function saveTasks() {
  const tasks = Array.from(taskList.querySelectorAll("li > span")).map(node => node.textContent);
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
}

function restoreTasks() {
  const raw = localStorage.getItem(TASKS_STORAGE_KEY);
  if (!raw) {
    return;
  }

  try {
    const tasks = JSON.parse(raw);
    if (!Array.isArray(tasks)) {
      return;
    }
    tasks.forEach(addTask);
  } catch {
    localStorage.removeItem(TASKS_STORAGE_KEY);
  }
}

function renderProjectSnapshot() {
  commitCount.textContent = projectSnapshot.commits;
  conflictCount.textContent = projectSnapshot.conflicts;
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
renderProjectSnapshot();
restoreTasks();
if (!taskList.children.length) {
  addTask("Protect main branch and require pull requests");
  addTask("Split at least 20 meaningful commits evenly between teammates");
}
