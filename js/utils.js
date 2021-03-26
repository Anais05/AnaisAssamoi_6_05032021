  async function fetchData () {
    const response = await fetch('../FishEyeDataFR.json')
    const data = await response.json();
    return data
}