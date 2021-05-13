fetchData().then((response) => 
{
    let photographer = new Photographer(getPhotographer(response.photographers));
    photographer.displayProfile();
    photographer.displayModalTitle();

    let medias = getPhotographerMedias(response);
    let list = new MediaList();
    list.init(medias);

    let modal = new Modal();
    modal.init();
})

function getPhotographer(photographers) 
{
    return photographers.filter((photographer) => photographer.id == getId())[0];
}

function getPhotographerMedias(response) 
{
    return response.media.filter((medium) =>  medium.photographerId == getId());
}


function getId() 
{
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

