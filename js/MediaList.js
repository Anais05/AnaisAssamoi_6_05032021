class MediaList 
{

    constructor() 
    {
        this.all = [];
        this.filtered
        this.factory = new MediaFactory;
        this.order = {
            type : "popularity",
            isAscending: true
        };
    }

    init(medias) 
    {
        for (let item of medias) 
        {
            this.all.push(this.factory.init(item))
        }
        this.display(this.all);
        this.listenForSorting();
    }

    display(medias) 
    {
        let html = '';
        medias.forEach((media) => html += media.render());
        document.getElementById('galery').innerHTML += html;
    }

    updateSortings(type) 
    {
        if (type === this.order.type) {
            this.order.isAscending = !this.order.isAscending;
        } else {
            this.order.isAscending = true;
        }
        this.order.type = type;
    }

    sortByPopularity() 
    {
        this.filtered = this.all.sort((a, b) => 
        {
            if (this.order.isAscending) {
                return  a.likes - b.likes;
            }
            return  b.likes - a.likes;
            
        });
    }

    sortByDate() 
    {
        this.filtered = this.all.sort((a, b) => 
        {
            if (this.order.isAscending) {
                return new Date(a.date) - new Date(b.date);
            }
            return new Date(b.date) - new Date(a.date);
        });
    }

    sortByTitle() 
    {
        this.filtered = this.all.sort((a, b) => 
        {
            if (this.order.isAscending) {
                return a.title.localeCompare(b.title, {ignorePunctuation: true});
            }
            return b.title.localeCompare(a.title, {ignorePunctuation: true});
        });
    }

    listenForSorting()
    {
        const buttons = document.querySelectorAll('.sort-criteria');
        for (const button of buttons) {
            button.addEventListener("click", () => 
            {
                let filter = button.getAttribute('id');
                this.updateSortings(filter);
                let methodName = "sortBy" + capitalizeFirstLetter(filter);
                this[methodName]();
                this.display(this.filtered)
            })
        }
    }
}