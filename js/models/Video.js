class Video extends Media {

    constructor(data)
    {
        super(data);
        this.src = data.video;
    }

    render()
    {
        return ` 
            <article class="media-card" id="${this.id}">
                <button class="medium" aria-labelledby="${this.id}">
                    <video controls>
                        <source src="./img/${this.photographerId}/${this.src}" type="video/mp4" alt="${this.alt}">
                    </video>
                </button>
                <div class="media-legend">
                    <h4 class="media-text" tabindex="0">${this.title}</h4>
                    <div class="media-info">
                        <p class='media-price'>${this.price}€</p>
                        <button class="like-btn" aria-label="aimer la video">${this.likes}<i class="fas fa-heart heart"></i></button>
                    </div>
                </div>
            </article> 
        `
    }

    getSlide()
    {
        return `
            <div class="slide">
                <video controls>
                    <source src="./img/${this.photographerId}/${this.src}" type="video/mp4" alt="${this.alt}">
                </video>
                <h4 class="media-text" tabindex="0">${this.title}</h4>
            </div>
        `
    }

}