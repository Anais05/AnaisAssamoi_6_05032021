async function fetchData () 
{
  const response = await fetch('../FishEyeDataFR.json')
  const data = await response.json();
  return data
}

function capitalizeFirstLetter(string)
{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function query(key) 
{
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key);
}