class MediaList 
{
    constructor() 
    {
        this.all = [];
        this.filtered = [];
        this.factory = new MediaFactory();
        this.order = {
            type : "popularity",
            isAscending: true
        };
        this.slider = new Slider();
        this.sortMenu = document.querySelector('.sort-list');
        this.currentSort = document.querySelector('.current-sort');
    }

    init(medias) 
    {
        for (let item of medias) 
        {
            this.all.push(this.factory.init(item))
        }
        this.sortByPopularity();
        this.display(this.filtered)
        this.openSortMenu();
        this.listenForSorting();
    }

    display(medias) 
    {
        let html = '';
        medias.forEach((media) => html += media.render());
        document.getElementById('galery').innerHTML = html;
        this.slider.init(this.all);
        this.listenForLike();
        this.countTotalLikes();
    }

    clear() 
    {
        document.getElementById('galery').innerHTML = '';
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
                return  b.likes - a.likes;
            }
            return  a.likes - b.likes;
            
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

    openSortMenu() 
    {
        this.currentSort.addEventListener('click', () =>
        {
            this.sortMenu.style.display = "block";
        })
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
                this.currentSort.innerHTML = button.textContent + '<i class="fas fa-chevron-down"></i>';
                this.sortMenu.style.display = "none";
                this.clear();
                this.display(this.filtered)
            })
        }
    }

    listenForLike() 
    {
        document.querySelectorAll('.like-btn').forEach(btn =>
        {
            btn.addEventListener('click', (e) =>
            {
                let el = e.target.closest('.like-btn');
                let parent = btn.closest('.media-card');
                let id = parent.getAttribute('id');
                let index = this.all.findIndex(media => media.id == id);
                this.all[index].like()
                el.innerHTML = this.all[index].likes + '<i class="fas fa-heart heart"></i>';
                this.countTotalLikes();
            })
        })
    }

    countTotalLikes()
    {
        let total = 0;
        for (let media of this.all) {
            total += media.likes;
        }
        document.getElementById('all-likes').innerHTML = total;
    }
}