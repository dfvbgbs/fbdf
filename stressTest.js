const axios = require('axios');

const targetUrl = 'http://156.146.53.101'; // Wprowadź URL docelowy
const numberOfRequests = 500; // Liczba żądań, które chcesz wysłać
const delay = 1; // Opóźnienie między żądaniami w milisekundach

async function sendRequest() {
  try {
    await axios.get(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    console.log('Żądanie wysłane pomyślnie');
  } catch (error) {
    console.error('Błąd podczas wysyłania żądania:', error.message);
  }
}

async function startStressTest() {
  for (let i = 0; i < numberOfRequests; i++) {
    sendRequest();
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  console.log(`Wysłano ${numberOfRequests} żądań do ${targetUrl}`);
}

startStressTest();
