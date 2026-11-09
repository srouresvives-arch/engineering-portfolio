function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function projectEntry(project, index) {
  const entry = element("details", "project");
  entry.id = project.id;
  const summary = element("summary", "project-summary");
  const number = element("span", "project-number", String(index + 1).padStart(2, "0"));
  number.setAttribute("aria-hidden", "true");
  const heading = element("span", "project-heading");
  heading.append(element("span", "category", project.category), element("span", "project-title", project.title));
  const toggle = element("span", "toggle");
  toggle.setAttribute("aria-hidden", "true");
  summary.append(number, heading, element("span", "project-deck", project.summary), toggle);

  const body = element("div", "project-body");
  const copy = element("div", "project-copy");
  for (const [label, text] of [["My contribution", project.role], ["Approach", project.method], ["Outcome", project.outcome]]) {
    if (text) copy.append(element("h3", "category", label), element("p", "", text));
  }

  const media = element("figure", "project-media");
  if (project.media.src) {
    const image = element("img");
    image.src = project.media.src;
    image.alt = project.media.alt;
    image.loading = "lazy";
    media.append(image);
  } else {
    const plate = element("div", "media-slot");
    plate.setAttribute("aria-hidden", "true");
    plate.append(element("span", "", "PLATE " + String(index + 2).padStart(2, "0")));
    media.append(plate);
  }
  media.append(element("figcaption", "", project.media.caption));
  body.append(copy, media);
  entry.append(summary, body);
  return entry;
}

document.querySelector("#projects").append(...portfolio.projects.map(projectEntry));
const timeline = document.querySelector("#timeline");
for (const item of portfolio.timeline) {
  const row = element("article", "timeline-row");
  const body = element("div");
  body.append(element("h3", "", item.title), element("p", "organisation", item.organisation), element("p", "", item.description));
  row.append(element("p", "category", item.dates), body);
  timeline.append(row);
}

function openLinkedProject() {
  const project = document.getElementById(location.hash.slice(1));
  if (project instanceof HTMLDetailsElement) {
    project.open = true;
    project.scrollIntoView();
  }
}

window.addEventListener("hashchange", openLinkedProject);
openLinkedProject();
// The callouts preview entries from the project register.
const bench = document.querySelector("#srv-bench");
const callouts = [...bench.querySelectorAll("[data-case]")];
const caseCode = bench.querySelector('[data-field="code"]');
const caseTitle = bench.querySelector('[data-field="title"]');
const caseNote = bench.querySelector('[data-field="note"]');
const caseLink = bench.querySelector('[data-field="link"]');

for (const callout of callouts) {
  callout.addEventListener("click", () => {
    const project = portfolio.projects.find(item => item.id === callout.dataset.case);
    if (!project) return;
    for (const peer of callouts) peer.setAttribute("aria-pressed", String(peer === callout));
    caseCode.textContent = callout.querySelector("b").textContent + " · " + project.category;
    caseTitle.textContent = project.title;
    caseNote.textContent = project.summary;
    caseLink.href = "#" + project.id;
  });
}
