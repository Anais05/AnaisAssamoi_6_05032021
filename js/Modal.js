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

    // listenForEscapeKey() 
    // {
    //      escapeHandler = function (e) {
    //       if (e.keyCode === 27) {
    //         this.close();
    //       }
    //     };
    //     document.addEventListener("keydown", this.escapeHandler);
    // }

    isNameValid(name) {
        let regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        if (name.length < 2 || name === ""|| !regex.test(name)) {
          return false;
        }
        return true;
    }

    isMailValid(mail) {
        let regex = /^\S+@\S+\.\S+$/;
        if (!regex.test(mail) || mail == "") {
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
            this.showError(firstName);
            return false
        } 
      
        if (!this.isNameValid(lastName.value)) {
            this.showError(lastName);
            return false
        } 
      
        if (!this.isMailValid(email.value)){
            this.showError(email);
            return false
        } 
      
        if (!this.isMessageValid(message.value)){
            this.showError(message);
            return false
        } 
        
        return true;
    }

    showError(element)
    {
        let parent = element.closest('div');
        parent.setAttribute('data-error-visible', true);
    }

    listenForSubmit() {
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

