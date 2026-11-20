/* ---------- 2. Projects page ---------- */

const projects = [
  { title: 'Personal landing page', category: 'html', description: 'A single semantic HTML page with headings, lists and links.' },
  { title: 'Responsive card grid', category: 'css', description: 'A layout that goes from one column on phones to three on laptops.' },
  { title: 'Tip calculator', category: 'js', description: 'Reads two inputs and updates the total as you type.' },
  { title: 'Accessible contact form', category: 'html', description: 'Labelled fields, helpful errors and keyboard-friendly controls.' },
  { title: 'Dark mode toggle', category: 'js', description: 'Switches the colour theme and remembers the choice.' },
  { title: 'Flexbox navigation bar', category: 'css', description: 'A header that collapses into a menu button on small screens.' }
];

const categoryNames = { html: 'HTML', css: 'CSS', js: 'JavaScript' };

const projectList = document.querySelector('#project-list');
const projectCount = document.querySelector('#project-count');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderProjects(filter) {
  const visible = filter === 'all'
    ? projects
    : projects.filter((project) => project.category === filter);

  projectList.replaceChildren();

  visible.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'card';

    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = categoryNames[project.category];

    const heading = document.createElement('h3');
    heading.textContent = project.title;

    const text = document.createElement('p');
    text.textContent = project.description;

    card.append(tag, heading, text);
    projectList.append(card);
  });

  projectCount.textContent = `Showing ${visible.length} of ${projects.length} projects`;
}

if (projectList) {
  renderProjects('all');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.setAttribute('aria-pressed', 'false'));
      button.setAttribute('aria-pressed', 'true');
      renderProjects(button.dataset.filter);
    });
  });
}
