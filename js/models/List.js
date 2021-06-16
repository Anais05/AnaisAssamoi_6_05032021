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

        if(query('tag'))
        {
            this.addToFilter(query('tag'));
            this.filter();
        }
    }

    displayPhotographers(photographers) 
    {
        let html = '';
        photographers.forEach((photographer) => 
        {
            html += photographer.renderCard()
        })
        document.getElementById('photographers').innerHTML += html;
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
        return `
            <li aria-label="filtre les photographes">
                <a href="#" aria-label="filtrer par ${tag}" id="${tag}" class="interactive-tag tag">#${tag}</a>
                <span class="hidden">#${tag}</span>
            </li>
        `;
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
        this.tags.forEach((tag) => 
        {
            document.getElementById(tag).addEventListener('click', (e) =>
            {
                if (this.activeTag.includes(tag)) {
                    this.removeFromFilter(tag);
                } else {
                    this.addToFilter(tag);
                }
                this.filter()
            })
        })
    }

    addToFilter(tag)
    {
        let el = document.getElementById(tag);
        el.classList.add('active-tag');
        this.activeTag.push(tag);
    }

    removeFromFilter(tag)
    {
        let el = document.getElementById(tag);
        el.classList.remove('active-tag');
        let indexTag = this.activeTag.findIndex(item => item == tag);
        this.activeTag.splice(indexTag, 1);
    }

}
