setTimeout(() => {
  document.body.classList.remove("preload");
}, 500);

const aboutUsModal = document.querySelector(".about-us-modal");
const aboutUsModalOverlay = document.querySelector(".about-us-modal .overlay");
const membersContainer = document.querySelector(".members-container");

fetch("../data/members.json")
  .then((res) => res.json())
  .then(({ members }) => {
    let output = "";

    members.forEach((member) => {
      output += `
        <section class="member-container">
          <img src="./public/members/member-${member.id}.jpg" alt="${member.name}" loading="lazy">
          <div class="member-text-container">
            <h1 class="member-name">${member.name}</h1>
            <div class="separator"></div>
            <p class="member-position">${member.position}</p>
          </div>
        </section>
      `;
    });

    membersContainer.innerHTML = output;

    const memberContainers = document.getElementsByClassName("member-container");
    const modalContent = document.querySelector(".about-us-modal-content");

    for (let i = 0; i < memberContainers.length; i++) {
      memberContainers[i].addEventListener("click", () => {
        aboutUsModal.classList.add("enabled");
        document.body.classList.add("stop-scrolling");

        modalContent.innerHTML = `
          <div class="about-us-modal-text-content">
            <h1 class="member-name">${members[i].name}</h1>
            <p class="member-position">${members[i].position}</p>
            <p class="member-bio">${members[i].bio}</p>
          </div>
          <div class="about-us-modal-image-container">
            <img src="./public/members/member-${members[i].id}.jpg" alt="${members[i].name}">
          </div>
        `;
      });
    }
  });

aboutUsModalOverlay.addEventListener("click", () => {
  aboutUsModal.classList.remove("enabled");
  document.body.classList.remove("stop-scrolling");
});
