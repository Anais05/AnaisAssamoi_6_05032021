class MediaList 
{

    constructor() 
    {
        this.medias = [];
        this.sort = {
            type : "popularity",
            direction: "ascending"
        };
    }


    sortPortfolioBy(target) 
    {
        switch (target){
            case "popularity":
                medias.sort((a, b) => b.likes - a.likes); // more to less likes
            break;
            case "date":
                medias.sort((a, b) => new Date(b.date) - new Date(a.date)); // newest to oldest
            break;
            case "title":
                medias.sort(function (a, b) {
                    return a.tag.localeCompare(b.tag);
                });
            break;
        }
    }
}