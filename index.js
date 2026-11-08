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

//first we select the ul element - then we create an li with name and link by looping over it , then we display in the UI

const listOfSocials = document.getElementById("listOfSocials");

socialLinks.forEach((link) => {
    // 1. Create the li element object
    const li = document.createElement("li");
    li.classList.add('item');
    // 2. Insert the anchor tag inside the li
    li.innerHTML = `<a href="${link.url}" class="links" target="_blank">${link.name}</a>`;

    
    // 3. Append the physical li object directly to your list container
    listOfSocials.appendChild(li);
});
