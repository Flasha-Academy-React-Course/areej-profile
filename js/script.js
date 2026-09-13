const themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

const filterButtons=document.querySelectorAll(".filter-buttons button");
const projects=document.querySelectorAll(".project-card");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
   const filterValue = button.dataset.filter;
    projects.forEach(function(project) {
   const projectcategory=project.dataset.category;
    if (filterValue === "all" || filterValue === projectcategory) {
        project.style.display = "block";
    } else
        project.style.display = "none";
    
        });
    });
});
const form = document.getElementById("contact-form");
  const nameinput=document.getElementById("name");
  const emailinput=document.getElementById("email");
  const messaginput=document.getElementById("message");
  const result=document.getElementById("result");

  form.addEventListener("submit",function(e){
   e.preventDefault();
    if(nameinput.value==="")
        result.textContent="pleas enter your name";
    else
    if(!emailinput.value.includes("@"))
         result.textContent= "Invalid email format";
    else
    if(messaginput.value.length<10)
        result.textContent="Message must be at least 10 characters";
    else
        result.textContent="Message  sent successfully";
 });
