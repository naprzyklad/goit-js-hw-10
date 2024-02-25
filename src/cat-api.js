import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_nGx6shf5WmDbgbPLTtDwRk87DQjFKi1hmdxA5xaHGZk1jcbxCr4sBpMlxMJ9KbeP';

export const fetchBreeds = async () => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    console.error('Błąd podczas pobierania ras:', error);
  }
};

export const fetchCatByBreed = async breedId => {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    );
    return response.data[0];
  } catch (error) {
    console.error('Błąd podczas pobierania informacji o kocie:', error);
  }
};