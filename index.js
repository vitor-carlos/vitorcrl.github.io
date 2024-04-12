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
        "Frontend": 90,
        "Backend": 85,
        "Banco de Dados": 80,
    };

    const stackList = document.getElementById('stackList');

    Object.keys(stacks).forEach(stack => {
        const listItem = document.createElement('li');
        listItem.textContent = `${stack} - Pontuação: ${stacks[stack]}`;
        stackList.appendChild(listItem);
    });
}

listStacks();
  