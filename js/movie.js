const wrapper = document.getElementById('wrapper');


function createCard(desc) {
    return ` 
    <div class="movies">
    <img src="${desc.backdrop.previewUrl}" alt="" class="video">
    <div class="moviedescription">
        <p class="year">${desc.year}</p>
        <span class= "movie-svg">
            <img src="../images/static/tv.png" alt="">
            <p class= "type">${desc.type}</p>
        </span>
        <p class= "rating">${desc.ratingMpaa}</p>
    </div>
   <h4 class="name" id="name">${desc.name}</h4>
</div> 
    `
};
   
   
document.addEventListener('DOMContentLoaded', function(e) {
    e.preventDefault();
    fetch(`https://api.kinopoisk.dev/v1.4/movie?lists=top250`, {
        method: 'GET',
        headers: {
            'X-API-KEY': "V8GQKSQ-75W4C80-MK9NDNQ-T182CAA"
        }
    })
    .then(res => {return res.json()})
    .then(data => {
        const item = data.docs
        item.forEach((desc) => {
            let row = createCard(desc)
            wrapper.innerHTML += row
        })
       
    })
    .catch(err => {
        console.log(err)
    })});


    const search = document.querySelector('#search');
    search.addEventListener('keyup', (e) => {
        e.preventDefault();
        fetch(`https://api.kinopoisk.dev/v1.4/movie/search?query=${e.target.value}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': "V8GQKSQ-75W4C80-MK9NDNQ-T182CAA" 
            }
        })
        .then(data => data.json())
        .then((data) => {
            wrapper.innerHTML = "";
            const docs = data.docs
            docs.forEach((desc) => {
                let createCard = `
                <div class="movies">
                <img src="${desc.backdrop.previewUrl}" alt="" class="video">
                <div class="moviedescription">
                    <p class="year">${desc.year}</p>
                    <span class= "movie-svg">
                        <img src="../images/static/Movie.png" alt="">
                        <p>${desc.type}</p>
                    </span>
                    <p>${desc.ratingMpaa}</p>
                </div>
               <h4 class="name" id="name">${desc.name}</h4>
            </div>`;
            wrapper.innerHTML += createCard;
            });
        })
    })
   


   

