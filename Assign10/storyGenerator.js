function buildStory(){
    var forms = document.querySelectorAll('form');
    var form = forms[0];
    var story = document.getElementById("story");
    var storySection = document.getElementById("storySection");
    var formSection = document.getElementById("formSection");

    //Loop through the form and get all user inputs. Add the inputs to the story in the same order they were inputted
    //     If the input is blank, leave it alone
    for (var i = 0; i < form.length - 2; ++i){
        console.log(form.elements[i].value);
        if (form.elements[i].value != ""){
            story.children[i].innerHTML = form.elements[i].value;
            story.children[i].setAttribute("class", "");
        }
    }

    //Hide the story section and show the story
    storySection.setAttribute("style", "display:inline");
    formSection.setAttribute("style", "display:none");
}

function resetForm(){
    var forms = document.querySelectorAll('form');
    var form = forms[0];
    var story = document.getElementById("story");

    //Reset all of the values in the form an story section
    for (var i = 0; i < form.length - 2; ++i){
        form[i].value = "";
        story.children[i].innerHTML = "&lt;missing text&gt;";
        story.children[i].setAttribute("class", "noText");
    }
    return;
}

function backToForm(){
    var storySection = document.getElementById("storySection");
    var formSection = document.getElementById("formSection");   
    resetForm();
    //Show the form section and hide the story section
    storySection.setAttribute("style", "display:none");
    formSection.setAttribute("style", "display:table");
}