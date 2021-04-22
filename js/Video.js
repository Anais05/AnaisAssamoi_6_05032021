class Video {

    constructor(data, title)
    {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.tags = data.tags;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
        this.video = data.video;
        this.title = title;
    }

    render()
    {
        return ` 
            <article class="media-card">
                <a href="" id="${this.id}">
                    <video controls>
                        <source src="/img/${this.photographerId}/${this.video}" type="video/mp4">
                    </video>
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

}