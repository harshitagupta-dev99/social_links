const socialLinks = [
    {
        "name": "LinkedIn", 
        "url" : "https://www.linkedin.com/in/harshita-gupta-70553a173/"
    },
    {
        "name": "Github", 
        "url" : "https://github.com/harshitagupta-dev99"
    },
    {
        "name": "Frontend Mentor", 
        "url" : "https://www.frontendmentor.io/profile/harshitagupta-dev99"
    },
     {
        "name": "Instagram", 
        "url" : "https://www.linkedin.com/in/harshita-gupta-70553a173/"
    },
    
];

const listOfSocials = document.getElementById("listOfSocials");

if (!listOfSocials) {
    throw new Error("Social links list was not found.");
}

socialLinks.forEach((link) => {
    const li = document.createElement("li");
    li.classList.add("item");

    const anchor = document.createElement("a");
    anchor.classList.add("links");
    anchor.href = link.url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.textContent = link.name;

    const newTabNote = document.createElement("span");
    newTabNote.classList.add("visually-hidden");
    newTabNote.textContent = " (opens in a new tab)";
    anchor.appendChild(newTabNote);

    li.appendChild(anchor);
    listOfSocials.appendChild(li);
});
