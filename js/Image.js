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
        this.alt = data.alt;
        this.title = title;
        this.hasBeenLikes = false;
    }

    render()
    {
        return ` 
            <article class="media-card" id="${this.id}">
                <div class="medium">
                    <img src="/img/${this.photographerId}/${this.image}" alt="${this.alt}">
                </div>
                <div class="media-legend">
                    <h4 class="media-text">${this.title}</h4>
                    <div class="media-info">
                        <p class='media-price'>${this.price}€</p>
                        <button class="like-btn" aria-label="aimer la photo">${this.likes}<i class="fas fa-heart"></i></button>
                    </div>
                </div>
            </article> 
        `
    }

    getSlide()
    {
        return `
            <div class="slide">
                <img src="/img/${this.photographerId}/${this.image}" alt="${this.alt}">
                <h4 class="media-text">${this.title}</h4>
            </div>
        `
    }

    like()
    {
        if (this.hasBeenLikes) {
            this.likes--;
        } else {
            this.likes++;
        }
        this.hasBeenLikes = !this.hasBeenLikes;
    }

}