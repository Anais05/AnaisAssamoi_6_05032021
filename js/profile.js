fetchData().then((response) => {
    let photographer = getPhotographer(response);
    photographer.getAllMedias(response.media)
    photographer.displayPage();

})

function getPhotographer(response) {
    return new Photographer(response.photographers.filter((photographer) => 
    {
        return photographer.id == getId();
    })[0]);
}

function getId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}
