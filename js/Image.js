class Image {

    constructor(data, title)
    {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.tags = data.tags;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
        this.image = data.image;
        this.title = title;
    }

    render()
    {
        return ` 
            <article class="media-card">
                <a href="" id="${this.id}" class="medium">
                    <img src="/img/${this.photographerId}/${this.image}">
                </a>
                <div class="media-info">
                    <h4 class="media-text">${this.title}</h4>
                    <div class="prices">
                        <p class='media-price'>${this.price}€</p>
                        <button class="liker" aria-label="aimer la photo}">${this.likes}<i class="fas fa-heart"></i></button>
                    </div>
                </div>
            </article> 
        `
    }

    getSlide(){
        return `
            <div class="slide">
                <img src="/img/${this.photographerId}/${this.image}">
                <h4 class="media-text">${this.title}</h4>
            </div>
        `
    }

}