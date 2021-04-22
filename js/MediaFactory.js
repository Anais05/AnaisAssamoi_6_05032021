class MediaFactory {

    init(data) 
    {
        if (data.image) {
            return new Image(data, this.getTitle(data.image))
        }
        
        return new Video(data, this.getTitle(data.video))
    }

    getTitle(data) 
    {
        return data.replace(/_/g, ' ').slice(0,-4);
    }

}