class MediaList 
{

    constructor() 
    {
        this.medias = [];
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
            this.medias.push(this.factory.init(item))
        }
        this.display();
        this.sortAction();
    }

    display() 
    {
        let html = '';
        this.medias.forEach((media) => html += media.render());
        document.getElementById('galery').innerHTML = html;
    }

    updateSort(type) 
    {
        if (type == this.order.type) {
            this.order.isAscending = !this.order.isAscending;
        } else {
            this.order.isAscending = true;
        }
        this.order.type = type;
        this.sort()

    }

    sortByPopularity() 
    {
        this.medias.sort(function (a, b) {
            if (type == this.order.isAscending) {
                return  a.likes - b.likes;
            }
            return  b.likes - a.likes;
            
        });
    }

    sortByDate() 
    {
        this.medias.sort(function (a, b) {
            if (type == this.order.isAscending) {
                return new Date(a.date) - new Date(b.date);
            }
            return new Date(b.date) - new Date(a.date);
        });
    }

    sortByTitle() 
    {
        medias.sort(function (a, b) {
            if (type == this.order.isAscending) {
                return a.title.localeCompare(b.title);
            }
            return b.title.localeCompare(a.title);
        });
    }

    sortAction()
    {
        const criteriaButtons = document.getElementsByClassName('sort-criteria');
        for (let criteriaButton of criteriaButtons) {
            criteriaButton.addEventListener("click", function(e) {
                let target = e.target;
                if (target == document.getElementById('popularity') ) {
                    this.sortByPopularity();
                } else if (target == document.getElementById('date') ) {
                    this.sortByDate();
                } else {
                    this.sortByTitle();
                }
                console.log(target)
            })
            
        }

    }

}