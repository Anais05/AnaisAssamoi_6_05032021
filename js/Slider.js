class Slider {

  constructor() 
  {
    this.current = 0
    this.slides = document.getElementsByClassName("slide");
    this.slider = document.getElementById("slider");
    this.medias = [];
    this.nextBtn = null;
    this.previousBtn = null;
    this.moveRightHandler;
    this.moveLeftHandler;
    this.moveByKeyHandler;
  }

  init(medias) 
  {
    this.listenForOpennig();
    this.listenForClosing();
    this.medias = medias;
  }

  hydrate() 
  {
    let html = '';
    this.medias.forEach(media => {
      html += media.getSlide();
    })
    document.querySelector('.medias').innerHTML = html;
  }

  startSlide(current) 
  {
    this.hideAllSlides();
    this.slides[current].style.display = "block";
    this.listenForMove();
  }

  listenForOpennig() 
  {
    for (let thumbnail of document.getElementsByClassName("medium")) {
      thumbnail.addEventListener("click", (e) => {
        let id = e.target.closest('.media-card').getAttribute('id');
        this.current = this.medias.findIndex(media => media.id == id);
        this.hydrate();
        this.startSlide(this.current);
        this.slider.style.display = "flex";
        this.listenForEscapeKey();
      })
    }
  }

  close()
  {
    this.nextBtn.removeEventListener("click", this.moveRightHandler);
    this.previousBtn.removeEventListener("click", this.moveLeftHandler);
    document.removeEventListener("keydown", this.moveByKeyHandler);

    this.slider.style.display = "none";
  }
  
  listenForClosing() 
  {
    document.getElementsByClassName("close-slider")[0].addEventListener("click", () => {
      this.close();
    })
  }
      
  listenForEscapeKey() 
  {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 27) {
        this.close();
      }
    })
  }

  hideAllSlides()
  {
    for (let i = 0; i < this.slides.length; i++) {
    this.slides[i].style.display = "none"; 
    }
  }

  moveLeft() 
  {
    this.hideAllSlides();
    if (this.current === 0) {
      this.current = this.slides.length; 
    }
    this.slides[this.current - 1].style.display = "block";
    this.current--;
    console.log(this.current)
  }

  moveRight() 
  {
    this.hideAllSlides();
    if (this.current === this.slides.length - 1) {
      this.current = -1; 
    } 
    this.slides[this.current + 1].style.display = "block";
    this.current++;
    console.log(this.current)
  }

  listenForMove() 
  {
    this.nextBtn = document.getElementById("next");
    this.previousBtn = document.getElementById("back");

    this.moveRightHandler = () => { this.moveRight(); }
    this.moveLeftHandler = () => { this.moveLeft(); }
    this.moveByKeyHandler = (e) => {
      if (e.keyCode === 37) { this.moveLeft(); } 
      if (e.keyCode === 39) { this.moveRight(); }
    }

    this.nextBtn.addEventListener("click", this.moveRightHandler);
    this.previousBtn.addEventListener("click", this.moveLeftHandler);
    document.addEventListener("keydown", this.moveByKeyHandler);
  }
}