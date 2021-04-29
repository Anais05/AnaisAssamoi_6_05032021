fetchData().then((response) => 
{
    let photographer = new Photographer(getPhotographer(response.photographers));
    photographer.displayProfile();

    let medias = getPhotographerMedias(response);
    let medialist = new MediaList();
    medialist.init(medias);

    let modal = new Modal();
    modal.init();

    let slider = new Slider();
    slider.init();
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

