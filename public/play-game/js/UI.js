let buttons = document.getElementsByClassName("box-header");
for (const button of buttons) {
  button.addEventListener("click", function() {
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      this.querySelector('.fa-solid').style.transform = "rotate(0deg)";
    } else {
        this.querySelector('.fa-solid').style.transform = "rotate(180deg)";
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}