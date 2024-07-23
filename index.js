const reposData = [
  {
    full_name: 'Rastrabilidade de Fibras',
    html_url: null,
    description: 'Descrição do project1',
    language: 'TypeScript',
    percentage: 100,
    img: null
  },
  {
    full_name: 'Integração de Apis com Whatsapp',
    html_url: null,
    description: 'Foi desenvolvido um sistema que permite a integração de Apis com o Whatsapp, utilizando o Node.js e JavaScript. O sistema foi projetado para ser escalável e modular, permitindo a adição de novas funcionalidades sem a necessidade de alterar o código existente. A arquitetura do sistema foi projetada de forma modular, facilitando a manutenção e a evolução do código.',
    language: 'JavaScript',
    percentage: 100,
    img: null
  },
  {
    full_name: 'Curso Rodrido Branas - Clean Code',
    html_url: 'https://github.com/vitorcrl/cccat14_1',
    description: 'Neste projeto, desenvolvi uma API RESTful utilizando Node.js e TypeScript, aplicando as melhores práticas de Clean Code, TDD, DDD, Clean Architecture e SOLID. A API foi projetada para ser altamente modular, fácil de manter e com 100% de cobertura de testes automatizados, garantindo sua confiabilidade e qualidade. Utilizei Express como framework web e Jest para os testes automatizados. O objetivo foi criar uma API robusta e escalável, seguindo uma arquitetura bem definida e desacoplada.',
    language: 'TypeScript',
    percentage: 70,
    img: './images/project/clean-arch.png'
  },
  {
    full_name: 'RocketSeat GoStack - Gobarber Web',
    html_url: 'https://github.com/vitorcrl/06-Gobarber-Web',
    description: 'Realizei o GoStack e ele é um curso intensivo da Rocketseat focado no desenvolvimento full-stack com Node.js, React.js e React Native. Durante o curso, aprendi a criar aplicações completas utilizando TDD, DDD, Clean Architecture e CI/CD. O curso abrange tecnologias modernas como TypeScript, Docker, Jest, TypeORM e PostgreSQL, proporcionando uma formação prática e atualizada para o mercado de trabalho.',
    language: 'TypeScript',
    percentage: 80,
    img: './images/project/gobarber-web.png'
  },
];


const listComponents = data => {
  return data.map(repo => {
    return `
      <div class="project">
        ${repo.html_url ? `<a class="repoName" href="${repo.html_url}" target="_blank">${repo.full_name}</a>` : `<p class="repoName"> <strong>${repo.full_name}</strong> </p>`}
        <p class="description"><strong>Descrição:</strong> ${repo.description || 'Descrição não disponível.'}</p>
        <p class="language"><strong>Linguagem:</strong> ${repo.language || '-'}</p>
        <p class="percentage"><strong>Porcentagem de conclusão:</strong> ${repo.percentage || 0}%</p>
        ${repo.img ? `<img class="img small-img" src="${repo.img}" alt="Imagem do projeto">` : ''}
        <hr>
      </div>
    `;
  }).join('');
};
function getRepository() {
  const reposDiv = document.getElementById('allProjects');
  reposDiv.innerHTML = listComponents(reposData);
}

getRepository();

function listStacks() {
  const stacks = {
      "Frontend": '5/10 Pelo que pode se ver nesse Portfólio.',
      "Backend": '7/10 Minha área favorita, tenho bastante experiência porém sempre existe algo para aprender.',
      "Database": '8/10 Experiência considerável, sempre buscando aprender mais na área.',
      "TypeScript": '7/10 Tenho habilidades sólidas em TypeScript',
      "JavaScript": '6/10 Apesar de ter preferência em TS desenvolvo bem para JS.',
      "Node.js": 9,
      "TypeORM": 8,
      "NestJS": 6,
      "GoLang": '5 no momento estou aprendendo e gostando bastante de utilizar.',
      "TDD": 80,
      "SQL": 80,
      "PostgresSQL": 80,
      "Firebase": 80,
      "Angular": 80,
  };

  const stackList = document.getElementById('stackList');

  Object.keys(stacks).forEach(stack => {
      const listItem = document.createElement('li');
      listItem.textContent = `${stack} - Nível de Proficiência: ${stacks[stack]}`;
      stackList.appendChild(listItem);
  });
}

listStacks();
