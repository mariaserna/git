const attendees = [
  {
    name: "Orlando Donado",
    nickname: "Orli &#127773;",
    bio: "Front end dev @ Zemoga. Music, bicycle and soccer lover (even though I'm really bad at it!). Wario main in MarioKart / SMBU and noob Valorant controller improving every day! &#128299;",
    githubLink: "https://github.com/OurxD"
  },
  {
    name: "Antonia Serna",
    nickname: "Anto &#127773;",
    bio: "Front end dev @ Zemoga, presenter at the imaginatio on the git talk",
    githubLink: "https://github.com/mariaserna"
  },
  {
    name: "Orlandito 🌝",
    nickname: "Orlito",
    bio: "Front end dev @ Zemoga",
    githubLink: "https://github.com/mariaserna"
  },
   {
    name: "Sebastian Contreras",
    nickname: "Anto &#127773;",
    bio: "Estudiante Ingenieria en Multimedia",
    githubLink: "https://github.com/dorado_virtual"
  }
];

const makeCard = ({
  name,
  nickname,
  bio,
  githubLink
}) => `
  <div class="col py-3">
    <div class="card">
      <h5 class="card-header">
        ${name}
        <small class="text-muted">a.k.a ${nickname}</small>
      </h5>
      <div class="card-body">
        <p class="card-text">
          ${bio}
        </p>
        <a href="${githubLink}" class="btn btn-primary" target="_blank">Check my Github!</a>
      </div>
    </div>
  </div>
`;

const attendeesCardsWrapper = document.querySelector("#attendees-cards");
const attendeesCardsString = attendees.map(makeCard).join("");

attendeesCardsWrapper.insertAdjacentHTML("afterbegin", `
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
    ${attendeesCardsString}
  </div>
`);
