class Modal {
    constructor()
    {
        this.firstName = document.getElementById("firstname");
        this.lastName = document.getElementById("lastname");
        this.email = document.getElementById("email");
        this.message = document.getElementById("message");
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
          {id : "firstname", check : this.isNameValid},
          {id : "lastname", check : this.isNameValid},
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
        if (!this.isNameValid(this.firstName.value)){
            return false
        } 
      
        if (!this.isNameValid(this.lastName.value)) {
            return false
        } 
      
        if (!this.isMailValid(this.email.value)){
            return false
        } 
      
        if (!this.isMessageValid(this.message.value)){
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

    displayModalInfo() 
    {
        console.log('Prénon:', this.firstName.value);
        console.log('Nom:', this.lastName.value);
        console.log('Email:', this.email.value);
        console.log('Message:', this.message.value);
    }

    listenForSubmit() 
    {
        document.getElementById("form").addEventListener("submit", (e) => {

            if (this.validate()) {
                e.preventDefault();
                form.style.display = 'none';
                document.getElementById("success").style.display = 'block';
                this.displayModalInfo();
            } else {
                e.preventDefault();
            }
        })
    }
}

