class Modal {
    constructor() 
    {
        let escapeHandler;
        let clickOutHandler;
    }

    listenForOpening() {
        document.querySelector(".contact-btn").addEventListener("click", function() {
            document.querySelector(".bground").style.display = "block";
            listenForClosing();
            listenForEscapeKey();
            listenForClickOut();
            // listenForKeyup();
            // listenForChange();
            // disableSubmitButton();
            // listenForFormUpdate();
            // listenForSubmit();
        })
    }

    listenForClosing() 
    {
        document.querySelector(".close")[0].addEventListener("click", close, false);
    }
      
    close() 
    {
        document.removeEventListener("keydown", this.escapeHandler);
        document.removeEventListener("click", this.clickOutHandler);
        document.querySelector(".bground").style.display = "none";
    }
      
    listenForClickOut() 
    {
        this.clickOutHandler = function (e)  {
          if (e.target == document.querySelector(".bground")) {
            close();
          }
        };
        document.addEventListener("click",this.clickOutHandler) ;
    }
      
    listenForEscapeKey() 
    {
        this.escapeHandler = function (e) {
          if (e.keyCode === 27) {
            closeModal();
          }
        };
        document.addEventListener("keydown", this.escapeHandler);
    }

    isMailValid(mail) {
        let regex = /^\S+@\S+\.\S+$/;
        if (!regex.test(mail) || mail == "") {
          return false;
        }
        return true;
    }

    isNameValid(name) {
        let regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        if (name.length < 2 || name === ""|| !regex.test(name)) {
          return false;
        }
        return true;
    }

    isMessageValid(message) {
        if (message.length < 20 ) {
          return false;
        }
        return true;
    }

    validate () {
        const firstName = document.getElementById("first");
        const lastName = document.getElementById("last");
        const email = document.getElementById("email");
        const message = document.getElementById("message");
        
        if (!this.isNameValid(firstName.value)){
          return false
        } 
      
        if (!this.isNameValid(lastName.value)) {
          return false
        } 
      
        if (!this.isMailValid(email.value)){
          return false
        } 
      
        if (!this.isMessageValid(message.value)){
          return false
        } 
        
        return true;
      }

}