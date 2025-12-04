const experienceData = [
  {
    title: "OPSTREAM",
    subtitle: "Desenvolvedor Back-end — 2024–Atual",
    description:
      "Atuei junto ao líder técnico em um sistema complexo com monólito + BFF + microsserviços, utilizando Node.js, Prisma, TypeScript e Django. Foco em integrações externas, pipelines e handlers críticos.",
    stacks: ["Python", "Node.js", "TypeScript", "Prisma", "Django", "AWS", "Microservices"],
    img: "./images/project/opstream.png",
    bgColor: "#ffffffff",
  },
  {
    title: "YOFC Brasil",
    subtitle: "Líder Técnico Parcial — 2023–Atual",
    description:
      "Desenvolvi grande parte do sistema interno da YOFC Brasil, líder global em fibra óptica. Foco em NestJS, Node.js, TypeORM e integrações com sistemas da matriz global.",
    stacks: ["NestJS", "Node.js", "TypeORM", "PostgreSQL","TypeScript"],
    img: "./images/project/yofc.png",
    bgColor: "#ffffffff",
  },
  {
    title: "MPT | Rastreabilidade de Fibras",
    subtitle: "Desenvolvedor Full-Stack — 2022–2023",
    description:
      "Desenvolvimento de um sistema industrial completo para rastrear insumos, controlar produção, medir eficiência (OEE) e gerar dashboards de performance. Atuei no fluxo completo da fábrica, garantindo integração, estabilidade e escalabilidade.",
    stacks: ["TypeScript", "Angular", "Node.js", "Jest"],
    img: "./images/project/fibers.png",
    bgColor: "#ffffffff",
  },
    {
    title: "Farofa Dalena",
    subtitle: "Desenvolvedor Back-End — 2021–2021",
    description:
      "No meu início de carreira, pude fazer parte da criação do Sistema interno para controle de produção, estoques, movimentação de insumos e monitoramento de processos industriais.",
    stacks: ["JavaScript", "Angular", "Node.js", "Jest"],
    img: "./images/project/dalena.png",
    bgColor: "#ffffffff",
  },
];
const projectData = [

  {
    title: "Integração WhatsApp",
    subtitle: "Mensageria com filas AWS FIFO",
    description:
      "Sistema que integra APIs com WhatsApp usando filas FIFO para garantir ordem e consistência.",
    stacks: ["Node.js", "JavaScript", "AWS SQS"],
    img: "./images/project/whats.png",
    bgColor: "#244241",
    path: "https://github.com/vitorcrl/whatsapp-message",
  },
  {
    title: "Clean Code — Branas",
    subtitle: "API Clean Architecture",
    description:
      "API REST modular com 100% de testes automatizados usando Node.js e TypeScript.",
    stacks: ["TypeScript", "Jest", "Express"],
    img: "./images/project/clean-arch.png",
    bgColor: "#F5F5DC",
    path: "https://github.com/vitorcrl/cccat14_1",
  },
  {
    title: "GoBarber",
    subtitle: "Rocketseat Bootcamp",
    description:
      "Aplicação fullstack com Node.js, React e PostgreSQL, seguindo DDD, TDD e Clean Architecture.",
    stacks: ["TypeScript", "Node.js", "React"],
    img: "./images/project/rocketseat.png",
    bgColor: "#6c4fbb",
    path: "https://github.com/vitorcrl/06-Gobarber-Web",
  },
];

function createCard(item) {
  const stacksHtml = item.stacks
    .map((stack) => `<span class="stack-tag">${stack}</span>`)
    .join("");

  const clickableClass = item.path ? 'clickable' : '';
  const onclickAttr = item.path ? `onclick="window.open('${item.path}', '_blank')"` : '';

  return `
    <div class="card ${clickableClass}" ${onclickAttr}>
      <div class="card-image-wrapper" style="background-color: ${item.bgColor || '#f8f8f8'};">
        <img src="${item.img}" alt="${item.title}" class="card-image">
      </div>
      <div class="card-content">
        <h3>${item.title}</h3>
        <h4>${item.subtitle}</h4>
        <p class="justified">${item.description}</p>
        <div class="card-stacks">
          ${stacksHtml}
        </div>
      </div>
    </div>
  `;
}

function renderExperience() {
  const experienceContainer = document.getElementById('allExperience');
  if (experienceContainer) {
    experienceContainer.innerHTML = experienceData.map(createCard).join('');
  }
}

function renderProjects() {
  const projectsContainer = document.getElementById('allProjects');
  if (projectsContainer) {
    projectsContainer.innerHTML = projectData.map(createCard).join('');
  }
}

const skillCards = document.querySelectorAll('.skill-card');

function revealSkills() {
  const triggerBottom = window.innerHeight * 0.85;

  skillCards.forEach(card => {
    const boxTop = card.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      card.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', revealSkills);

revealSkills();
renderExperience();
renderProjects();