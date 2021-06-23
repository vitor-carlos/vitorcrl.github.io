const reposToIgnore = []


const listComponents = data => {
    return data.map((repo) => {
        return (`
         <div  ${Math.floor(Math.random() * 10) % 2 === 0 ? 'data-aos="flip-right"' : 'data-aos="flip-left"' } class="project" alt="One of my project and they description">
             <a class="repoUrl" href="${repo.html_url}" target="blank" id="projectTitle">${repo.full_name}</a>
             <p id="description">${repo.description}</p>
             <span id="language">${repo.language ? repo.language : ' - '}</span>
         </div>
         `)
    }).join('')
}


function getRepository() {
    const header = new Headers({
        'User-agent': 'Mozilla/4.0 Custom User Agent'
    })
    fetch('https://api.github.com/users/vitorcrl/repos', header)
        .then(response => response.json())
        .then(data => {
            const repos = data.filter(repo => {
                console.log(reposToIgnore)
                return  reposToIgnore.includes(repo.full_name) ? '' : repo.full_name ;

            })

            const reposDiv = document.getElementById('allProjects');
            reposDiv.innerHTML = listComponents(repos)
        })
    }