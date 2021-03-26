let list = new List ();

fetchData().then((response) => {
    list.init(response);
})
