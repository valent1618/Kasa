function fetchData(setData) {
  fetch('accommodations.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setData(json);
    });
}

export default fetchData;
