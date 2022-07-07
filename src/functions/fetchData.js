function fetchData(setData, filterId = false) {
  fetch('/Kasa/accommodations.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      filterId
        ? setData(json.filter((data) => data.id === filterId)[0])
        : setData(json);
    })
    .catch((error) => {
      console.log('Error with fetch accommodations =>', error);
      setData(undefined);
    });
}

export default fetchData;
