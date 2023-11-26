// При наведении курсора на изображение, необходимо осуществить замену этого
// изображения на другое.

class HTML {
  changeImg() {
    const div = document.querySelector("div");

    div.addEventListener("mouseover", () => {
      div.style =
        "background-image: url(./2f81c71a7c8620246708eaf9a55505c9.jpg)";
    });
    div.addEventListener('mouseleave', ()=>{
     div.style = 'background-image: url(./artworks-000044373041-ze1zie-t500x500.jpg)';
    })
  }
}

const html = new HTML();

html.changeImg();
