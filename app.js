window.onload = function () {
    let currentIndex = 0;
    let skills = [];

    fetch('possible-skills.json')
        .then(response => response.json())
        .then(data => {
            skills = data;
            displaySkills();
        });

    function displaySkills() {
        let form = document.getElementById("skill-form");
        form.innerHTML = "";

        let skill = skills[currentIndex];
        let label = document.createElement("label");
        label.innerHTML = skill.title;
        label.classList.add("block", "text-center", "text-2xl", "font-medium", "mb-2");
        form.appendChild(label);

        let buttons = document.createElement("div");
        buttons.classList.add("flex", "flex-col", "justify-center");
        for (let i = 0; i < 5; i++) {
            let button = document.createElement("button");
            switch (i) {
                case 0:
                    button.innerHTML = "No Confidence"
                    break;
                case 1:
                    button.innerHTML = "Low Confidence"
                    break;
                case 2:
                    button.innerHTML = "Mostly Confident"
                    break;
                case 3:
                    button.innerHTML = "Very Confident"
                    break;
                case 4:
                    button.innerHTML = "Max Confidence"
                    break;
            }
            button.value = i;
            button.classList.add("bg-indigo-500", "hover:bg-indigo-700", "text-white", "font-medium", "py-2", "px-4", "rounded", "w-40", "mx-auto", "mb-4");
            button.addEventListener("click", function () {
                let rating = this.value;
                skills[currentIndex].rating = rating;
                currentIndex++;

                if (currentIndex === skills.length) {
                    form.innerHTML = "<h1 class='text-center text-3xl font-medium'>You have rated all skills!</h1>";
                } else {
                    displaySkills();
                }
            });
            buttons.appendChild(button);
        }
        form.appendChild(buttons);
    }
};
