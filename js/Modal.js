class Modal {
    constructor() 
    {
        this.escapeHandler;
        this.clickOutHandler;
    }

    init() {
        this.listenForOpening();
        this.listenForClosing();
        this.listenForEscapeKey();
        this.listenForClickOut();
        this.listenForSubmit();
        this.listenForKeyup();
        this.validate();
    }

    listenForOpening() 
    {
        document.querySelector(".contact-btn").addEventListener("click", () => {
            document.querySelector(".bground").style.display = "block";
        })
    }

    close() 
    {
        document.querySelector(".bground").style.display = "none";
    }

    listenForClosing() 
    {
        document.getElementsByClassName("close")[0].addEventListener("click", this.close, false);
    }
      
    listenForClickOut() 
    {
        document.addEventListener("click", (e) => {
            if (e.target == document.querySelector(".bground")) {
                this.close();
            }
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

    listenForKeyup() 
    {
        let InputToValidateKeyup = [
          {id : "first", check : this.isNameValid},
          {id : "last", check : this.isNameValid},
          {id : "email", check : this.isMailValid},
          {id : "message", check : this.isMessageValid},
        ];
        InputToValidateKeyup.forEach(obj => 
        {
          document.getElementById(obj.id).addEventListener("keyup", (e) => {   
            let element = document.getElementById(obj.id);
            let value = element.value;
            if (!obj.check(value)) {
              this.showError(element);
            } else {
              this.hideError(element);
            }
          })
        })
      }

    isNameValid(name) 
    {
        let regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        if (name.length < 2 || name === ""|| !regex.test(name)) {
          return false;
        }
        return true;
    }

    isMailValid(mail) 
    {
        let regex = /^\S+@\S+\.\S+$/;
        if (!regex.test(mail) || mail == "") {
          return false;
        }
        return true;
    }

    isMessageValid(message) 
    {
        if (message.length < 20 ) {
          return false;
        }
        return true;
    }

    validate () 
    {
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

    showError(element)
    {
        let parent = element.closest('div');
        parent.setAttribute('data-error-visible', true);
    }

    hideError(element) 
    {
        let parent = element.closest('div');
        parent.setAttribute('data-error-visible', false);
    }

    listenForSubmit() 
    {
        document.getElementById("form").addEventListener("submit", (e) => {

            if (this.validate()) {
                e.preventDefault();
                form.style.display = 'none';
                document.getElementById("success").style.display = 'block';
            } else {
                e.preventDefault();
            }
        })
    }
}

