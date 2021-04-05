//The data-* attributes is used to store custom data private to the page or application. The data-* attributes gives us the ability to embed custom data attributes on all HTML elements.

//current target get you the name of the element but target gets you the opening and closing tag of the element

const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => { 
    const id = e.target.dataset.id;

    //console.log(id);
    //this will give you about-us, history and goals as you click on ONLY the buttons

    //dont forget that the article/content also has the same id name. so using dataset to retrieve the custom id from the buttons avoids clashing

    //id id exist, ie if defined, becasue it will only be listening to the data-id . if you click on anyother thing it will be undefined and if statement will be false

    //if true remove all the active class from the rest of the buttons but  add it to that particular object/target
    if (id) {
        btns.forEach(btn => {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });

        //still in the if statement bcos we want to use the id/hide other articles

        //so for each content, whatever ever article you click on, hide the rest, retrieve the matching id and add active class to it.
        articles.forEach((article) => { 
            article.classList.remove("active");
        });

        const element = document.getElementById(id);
        element.classList.add("active");
    }

});
