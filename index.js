const reposToIgnore = [
    'vitorcrl/Projeto-Contatos',
    'vitorcrl/GoBarber',
    'vitorcrl/DescomplicandoHelm',
    'vitorcrl/vitorcrl',
    'vitorcrl/frontend-cliente'
  ];
  
  const listComponents = data => {
    return data.map(repo => {
      return `
        <div class="project">
          <a class="repoUrl" href="${repo.html_url}" target="_blank">${repo.full_name}</a>
          <p class="description">${repo.description || 'Descrição não disponível.'}</p>
          <span class="language">Linguagem: ${repo.language || '-'}</span>
        </div>
      `;
    }).join('');
  }
  
  function getRepository() {
    fetch('https://api.github.com/users/vitorcrl/repos')
      .then(response => response.json())
      .then(data => {
        const filteredRepos = data.filter(repo => !reposToIgnore.includes(repo.full_name));
        const reposDiv = document.getElementById('allProjects');
        reposDiv.innerHTML = listComponents(filteredRepos);
      })
      .catch(error => console.error('Erro ao buscar repositórios:', error));
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
  