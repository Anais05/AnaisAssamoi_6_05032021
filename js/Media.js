class Media {

    constructor(data){
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.tags = data.tags;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
        this.type = this._getType(data);
        this.src = data[this.type];
    }

    get title() {
        return this.src.replace(/_/g, ' ').slice(0,-4);
    }

    renderMedia() 
    {
        if (this.type == 'image') {
            return `<img src="/img/${this.photographerId}/${this.src}">`
        } else {
            return `<video src="/img/${this.photographerId}/${this.src}">`
        }
    }


    render()
    {
        return ` 
            <article class="media-card">
                <a href="" id="${this.id}">
                    ${this.renderMedia()}
                </a>
                <div class="media-info">
                    <h4 class="media-text">${this.title}</h4>
                    <div class="prices">
                        <p class='media-price'>${this.price}€</p>
                        <button class="liker" aria-label="aimer la photo}">${this.likes}<i class="fas fa-heart"></i></button>
                    </div>
                </div>
            </article> `
    }

    _getType(data) 
    {
        if (data.hasOwnProperty('image')) {
            return 'image';
        }
        return 'video';
    }

}