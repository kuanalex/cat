const img = document.querySelector('img');

async function getCats() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=Cjwa4WlJE3vmLW0SB7VLmHuKyRTsDvsY&s=cats', {
        mode: 'cors'
    });
    const catData = await response.json();
    img.src = catData.data.images.original.url;
}

getCats();

// https://api.giphy.com/v1/gifs/translate?api_key=Cjwa4WlJE3vmLW0SB7VLmHuKyRTsDvsY&s=cats