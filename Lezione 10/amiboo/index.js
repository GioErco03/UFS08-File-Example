
const searchInput = document.getElementById('search');
const autocompleteList = document.getElementById('autocomplete-options');

searchInput.addEventListener('input', async (event) => {
  const searchTerm = event.target.value;
  const url = `https://www.amiiboapi.com/api/amiibo/?name=${searchTerm}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch amiibo data');
    }
    const data = await response.json();
    const amiiboNames = data.amiibo.map((amiibo) => amiibo.name);
    showAutocompleteOptions(amiiboNames);
  } catch (error) {
    console.error(error);
  }
});

searchInput.addEventListener('click', async () => {
  const url = `https://www.amiiboapi.com/api/amiibo/`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch amiibo data');
    }
    const data = await response.json();
    const amiiboNames = data.amiibo.map((amiibo) => amiibo.name);
    showAutocompleteOptions(amiiboNames);
  } catch (error) {
    console.error(error);
  }
});

function showAutocompleteOptions(options) {
  autocompleteList.innerHTML = '';

  options.forEach((option) => {
    const optionElement = document.createElement('li');
    optionElement.textContent = option;
    optionElement.addEventListener('click', () => {
      searchInput.value = option;
      autocompleteList.innerHTML = '';
    });
    autocompleteList.appendChild(optionElement);
  });
}

async function test(event) {
  event.preventDefault();
  const name = searchInput.value;

  async function setAmibooImages(amiibo) {
    const existingImages = document.querySelectorAll('img');
    existingImages.forEach((image) => {
      image.remove();
    });

    amiibo.forEach((element) => {
      const imageElement = document.createElement('img');
      imageElement.src = element.image;
      imageElement.alt = element.name;
      document.body.appendChild(imageElement);
    });
  }

  try {
    const getAmiboo = await fetch(
      `https://www.amiiboapi.com/api/amiibo/?character=${name}`
    );
    if (!getAmiboo.ok) {
      throw new Error('Failed to fetch amiibo data');
    }
    const { amiibo } = await getAmiboo.json();

    setAmibooImages(amiibo);
  } catch (error) {
    console.error(error);
  }
}

const form = document.querySelector('form');
form.addEventListener('submit', test);