const gifSection = document.querySelector('#gifSection');
const removeBtn = document.querySelector('#removeImage');
const selectedImage = document.querySelector('#newGIF');
const img = document.querySelector('#giphy');

async function searchURL(searchTerm) {

    const res = await axios.get("https://api.giphy.com/v1/gifs/search", { params: { q: searchTerm, api_key: "GmkpWU5c6ZoeL1SSYuu10XY0Ixmmhow0" } });
    let dataLength = res.data.data.length - 1
    let randomIndx = Math.floor(Math.random() * dataLength);



    const newDiv = document.createElement('div');
    const newImage = document.createElement('img')
    gifSection.prepend(newDiv);
    newDiv.append(newImage);
    newImage.src = res.data.data[randomIndx].images.original.url;
    newImage.classList.add('newGif')



};

//link button for search term

const form = document.querySelector('#giphyform');
const input = document.querySelector('#input')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    searchURL(input.value);
    input.value = "";
});


// remove all images

removeBtn.addEventListener('click', function () {
    gifSection.remove();
});


img.addEventListener('click', function () {
    selectedImage.remove();
})



