const attendees = [
  {
    name: "Carlos Andres Muñoz",
    nickname: "PAQUITO",
    bio: "Front end dev @ Zemoga. Music, bicycle and soccer lover (even though I'm really bad at it!). Wario main in MarioKart / SMBU and noob Valorant controller improving every day! &#128299;",
    githubLink: "https://github.com/carlos1201829"
  },
  {
    name: "Carlos Andres",
    nickname: "PACO",
    bio: "Front end dev @ Zemoga",
    githubLink: "https://github.com/carlos1201829"
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
