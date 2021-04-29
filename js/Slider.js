class Slider {

    constructor() 
    {
       this.current = 0
       this.next = document.getElementsByClassName("next");
       this.previous = document.getElementsByClassName("back");
       this.slides = document.getElementsByClassName("slide");
    }

    init() {
        this.openSlider();
        this.ListenForClose();
        this.slideGauche();
        this.slideDroite();
        this.ListenForBack();
        this. listenForKeys();
        this.ListenForNext();
        this.retriveOneToCurrent();
        this.addOneToCurrent();
    }



    openSlider() 
    {
        document.getElementsByClassName("medium").addEventListener("click", () => {
            document.getElementById("slider").style.display = "block";
        })
    }

    close() 
    {
        document.getElementById("slider").style.display = "none";
    }

    ListenForClose() 
    {
        document.getElementsByClassName("close-slider")[0].addEventListener("click", this.close, false);
    }

    beginning()
    {
        for (let i = 0; i < this.slides.length; i++) {
        this.slides[i].style.display = "none"; 
        }
    }

    // précedent
  slideGauche() 
  {
    this.beginning();
    this.slides[this.current - 1].style.display = "block";
    this.current--;
  }

  // suivant
  slideDroite() 
  {
    
    this.beginning();
    this.slides[this.current + 1].style.display = "block";
    this.current++;
  }

  ListenForBack() 
  {
    this.previous.addEventListener("click", function() 
    {
      if (this.current === 0) {
        this.current = this.slides.length; 
       }  
      this.slideGauche();
    });

  }

  ListenForNext() 
  {
    this.next.addEventListener("click", function() 
    {
      if (this.current === this.slides.length - 1) {
        this.current = -1; 
      }
      this.slideDroite();
    });

  }

  listenForKeys() 
  {
    document.addEventListener("keydown", e=> 
    {
      if (e.keyCode === 37) 
      {
        this.retriveOneToCurrent(); 
      } 
      else if(e.keyCode === 39) 
      {
        this.addOneToCurrent(); 
      }
    });
  }

  retriveOneToCurrent()
  {
    if (this.current === 0) {
      this.current = this.slides.length; 
    }
    this.slideGauche();
  }

  addOneToCurrent()
  {  
    if (this.current === this.slides.length - 1) {
    this.current = -1; }
    this.slideDroite();
  }

    


}