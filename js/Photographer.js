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
        this.background = data.background
    }

    renderAllCard() {
        return `<article id="photographer-${this.id}" class="card">
            <a href="/pages/photographer.html?id=${this.id}" aria-label="visiter la page de ${this.name}">
                <img class="card-image" src="../img/${this.id}/${this.background}" alt="">
                <h3 class="card-name">${this.name}</h3>
            </a>
            <p class="card-location">${this.city}, ${this.country}</p>
            <p class="card-tagline">${this.tagline}</p>
            <p class="card-price">${this.price}€/jour</p>
             <ul class="card-taglist">
                ${this.tags.map(tag =>`<li class="filter">#${tag}</li></li>`).join('')}
             </ul>
        </article>`;
    }

}
