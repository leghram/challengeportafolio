const listNameSkills = ["Html", "Javascript", "php", "NodeJS", "React", "CSS"];
const listaHobbies = [
  "Patinaje",
  "Tocar Bajo",
  "Oir Musica",
  "Ver Series",
  "Cocinar",
  "Tomar Fotos",
];

const listaProyectos = [
  {
    name: "Challenge Encriptador de Texto",
    des: "Challenge Alura Codificador",
    urlgit: "https://github.com/leghram/ChallengeCodificador",
    urlpage: "https://leghram.github.io/ChallengeCodificador/",
  },
  {
    name: "Challenge HTML CSS y JavaScript",
    des: "Challenge Oracle",
    urlgit: "https://github.com/leghram/challengeonejuegoahorcado",
    urlpage: "https://leghram.github.io/challengeonejuegoahorcado/",
  },
  {
    name: "Encriptador de Textos",
    des: "Challenge Oracle",
    urlgit: "https://github.com/leghram/ChallengeCodificador",
    urlpage: "https://leghram.github.io/ChallengeCodificador/",
  },
  {
    name: "Juego Con HTML y JavaScript",
    des: "Challenge Oracle",
    urlgit: "https://github.com/leghram/challengeonejuegoahorcado",
    urlpage: "https://leghram.github.io/challengeonejuegoahorcado/",
  },
];

function insertarSkillsInHtml() {
  const skillsDiv = document.getElementById("list-skills");
  let nodeHtmlListSkills = "";
  for (let i = 0; i < listNameSkills.length; i++) {
    nodeHtmlListSkills =
      nodeHtmlListSkills +
      `
          <div class="box-skill">
              <div>
                  <img src="./assets/SKILLS/${listNameSkills[i]}.png" alt="" />
              </div>
              <p>${listNameSkills[i]}</p>
          </div>
          `;
  }
  skillsDiv.innerHTML = nodeHtmlListSkills;
}

function insertarHobbiesInHtml() {
  const hobbieDiv = document.getElementById("list-hobbies");
  let nodeHtmlListSkills = "";
  for (let i = 0; i < listaHobbies.length; i++) {
    nodeHtmlListSkills =
      nodeHtmlListSkills +
      `
            <div class="box-skill">
                <div>
                    <img src="./assets/HOBBIES/${listaHobbies[i]}.png" alt="" />
                </div>
                <p>${listaHobbies[i]}</p>
            </div>
            `;
  }
  hobbieDiv.innerHTML = nodeHtmlListSkills;
}

function insertarListaDeProyectos() {
  const hobbieDiv = document.getElementById("list-proyectos");
  let extraStyle = "";
  let nodeHTML = "";
  for (let i = 0; i < listaProyectos.length; i++) {
    nodeHTML =
      nodeHTML +
      `
    <div class="${i % 2 == 0 ? "proyecto" : "proyecto2"}">
      <img
        class="imagen-proyecto"
        src="./assets/PROYECTOS/${listaProyectos[i].name}.png"
        alt=""
      />
      <div class="info-proyecto">
        <h3>${listaProyectos[i].name}</h3>
        <p>${listaProyectos[i].des}</p>
        <div class="botones-proyecto">
          <a href="${listaProyectos[i].urlgit}">Repositorio</a>
          <a href="${listaProyectos[i].urlpage}">Ver Demo</a>
        </div>
      </div>
    </div>
              `;
  }
  hobbieDiv.innerHTML = nodeHTML;
}

insertarSkillsInHtml();
insertarHobbiesInHtml();
insertarListaDeProyectos();
