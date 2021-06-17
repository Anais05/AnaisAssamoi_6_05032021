class Photographer {

    constructor(data){
        this.name = data.name;
        this.id = data.id;
        this.city = data.city;
        this.country = data.country;
        this.tags = data.tags;
        this.tagline = data.tagline;
        this.price = data.price;
        this.portrait = data.portrait;
        this.background = data.background;
    }

    renderCard() 
    {
        return `
            <article id="photographer-${this.id}" class="card">
                <a href="/AnaisAssamoi_6_05032021/photographer.html?id=${this.id}" aria-label="visiter la page de ${this.name}">
                    <img class="card-image" src="./img/${this.id}/${this.background}" alt="">
                    <h2 class="card-name">${this.name}</h2>
                </a>
                <p class="card-location">${this.city}, ${this.country}</p>
                <p class="card-tagline">${this.tagline}</p>
                <p class="card-price">${this.price}€/jour</p>
                <ul class="card-taglist" aria-label="les tags de ${this.name}">
                ${this.tags.map(tag =>`
                    <li class="tag" id="${tag}">#${tag}
                        <span class="hidden">#${tag}</span>
                    </li>`).join('')}
                </ul>
            </article>
        `;
    }

    renderProfile() 
    {
        return `
            <article id="profile-info" class="card">
                <h1 class="card-name">${this.name}</h1>
                <p class="card-location">${this.city}, ${this.country}</p>
                <p class="card-tagline">${this.tagline}</p>
                <div class="card-taglist" id="tags">
                    ${this.tags.map(tag =>`
                    <a href="index.html?tag=${tag}" aria-label="filtrer par ${tag}" class="interactive-tag tag">#${tag}
                        <span class="hidden">#${tag}</span>
                    </a>`).join('')}
                </div>
            </article> 
            <button class="contact-btn interactive-btn" aria-label="contactez moi ${this.name}">Contactez moi</button>
            <img class="profile-image" src="./img/${this.id}/${this.background}" alt="photo de profil de ${this.name}">
        `
    }

    renderModalTitle()
    {
        return `
            <h2 id="title">Contactez-moi <br> ${this.name}</h2>
        `
    }

    renderProfileMoreInfo() {
        return `
            <aside class="more-info" tabindex="0">
                <p>
                    <span id="all-likes"></span>
                    <i class="fas fa-heart" title="nombre totale de likes de ${this.name}"></i>
                </p>
                <p class="p-price">${this.price}€ / jour</p>
            </aside>
        `
    }

    displayModalTitle()
    {
        document.getElementById('modal-title').innerHTML += this.renderModalTitle();
    }

    displayProfile() 
    {
        document.getElementById('profile').innerHTML += this.renderProfile();
        document.getElementById('more-info').innerHTML += this.renderProfileMoreInfo(); 
    }

}
