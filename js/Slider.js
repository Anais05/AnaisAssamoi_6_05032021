class Slider {

  constructor() 
  {
    this.current = 0
    this.slides = document.getElementsByClassName("slide");
    this.slider = document.getElementById("slider");
    this.medias = [];
  }

  init(medias) {
    this.listenForOpennig();
    this.listenForClosing();
    this.medias = medias;
    console.log(this.medias)
  }

  hydrate() 
  {
    let html = '';
    this.medias.forEach(media => {
      html += media.getSlide();
    })
    document.querySelector('.medias').innerHTML = html;
  }

  getSlideNumber() {
    for (let i = 0; i < this.slides.length; i++) {
      return this.current =  i;
    }
  }

  startSlide() 
  {
    this.hideAllSlides();
    this.slides[this.current].style.display = "block";
  }

  listenForOpennig() 
  {
    for (let thumbnail of document.getElementsByClassName("medium") ) {
      thumbnail.addEventListener("click", (e) => {
        e.preventDefault();
        this.hydrate();
        this.getSlideNumber();
        this.startSlide();
        this.slider.style.display = "block";
        this.ListenForMove();
        console.log(this.current)
      })
    }
  }

  close() 
  {
    this.slider.style.display = "none";
    this.current = 0;
  }

  listenForClosing() 
  {
    document.getElementsByClassName("close-slider")[0].addEventListener("click", this.close, false);
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

  ListenForMove() 
  {
    let nextBtn = document.getElementById("next");
    let previousBtn = document.getElementById("back");

    nextBtn.addEventListener("click", () => { this.moveRight(); });
    previousBtn.addEventListener("click", () => { this.moveLeft(); });

    document.addEventListener("keydown", (e) => 
    {
      if (e.keyCode === 37) { this.moveLeft(); } 
      if(e.keyCode === 39) { this.moveRight(); }
    });

  }
}