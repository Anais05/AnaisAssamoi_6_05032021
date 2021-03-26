
    

class List 
{

    constructor() 
    {
        this.all = [];
        this.filtered = [];
        this.tags = [];
        this.activeTag = [];
    }

    init(data) 
    {
        for (let photographer of data.photographers) 
        {
            this.all.push(new Photographer(photographer))
        }
        this.displayTags();
        this.displayPhotographers(this.all);
        this.listenForTagsFilter();
    }

    displayPhotographers(photographers) 
    {
        let html = '';
        photographers.forEach((photographer) => 
        {
            html += photographer.renderAllCard()
        })
        document.getElementById('photographers').innerHTML= html;
    }

    displayTags() 
    {
        let list = new Set([]);
        this.all.forEach((photographer) => 
        { 
            photographer.tags.forEach((tag) => 
            { 
                list.add(tag) 
            })
        })
        this.tags = list;    
        this.tags.forEach((tag) => { document.getElementById('tags').innerHTML += this.renderTag(tag); });
    }

    renderTag(tag)
    {
        return `<li class="header-filter filter" aria-label="filtre par ${tag}" id="${tag}">#${tag}</li>`;
    }

    filter() 
    {
        let filtered = this.all
        if (this.activeTag.length > 0) {
            filtered = this.all.filter((photographer) => 
            {
                return photographer.tags.filter(tag => 
                {
                    return this.activeTag.includes(tag);
                }).length > 0;
            });
        }
       
        this.displayPhotographers(filtered)
    }

    listenForTagsFilter() 
    {
        let self = this;
        this.tags.forEach((tag) => 
        {
            document.getElementById(tag).addEventListener('click', function (e) 
            {
                let element = e.target;
                if (self.activeTag.includes(tag)) {
                    element.classList.remove('active-tag');
                    let indexTag = self.activeTag.findIndex(item => item == tag);
                    self.activeTag.splice(indexTag, 1);
                } else {
                    element.classList.add('active-tag');
                    self.activeTag.push(tag);
                }
                self.filter()
            })
        })
    }

}
