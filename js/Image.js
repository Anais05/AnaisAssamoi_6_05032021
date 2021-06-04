class Image extends Media {

    constructor(data)
    {
        super(data);
        this.src = data.image;
    }

    render()
    {
        return ` 
            <article class="media-card" id="${this.id}">
                <div class="medium">
                    <img src="/img/${this.photographerId}/${this.src}" alt="${this.alt}">
                </div>
                <div class="media-legend">
                    <h4 class="media-text">${this.title}</h4>
                    <div class="media-info">
                        <p class='media-price'>${this.price}€</p>
                        <button class="like-btn" aria-label="aimer la photo">${this.likes}<i class="fas fa-heart heart"></i></button>
                    </div>
                </div>
            </article> 
        `
    }

    getSlide()
    {
        return `
            <div class="slide">
                <img src="/img/${this.photographerId}/${this.src}" alt="${this.alt}">
                <h4 class="media-text">${this.title}</h4>
            </div>
        `
    }

}