class Media {

    constructor(data)
    {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.tags = data.tags;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
        this.alt = data.alt;
        this.hasBeenLikes = false;
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

    get title() 
    {
        return this.src.replace(/_/g, ' ').slice(0,-4);
    }
}