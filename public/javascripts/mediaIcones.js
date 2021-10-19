let amazonFrame =`<iframe id='AmazonMusicEmbedB08CD3R71X' src='https://music.amazon.com.br/embed/B08CD3R71X/?id=v0S1nHuLN0&marketplaceId=ART4WZ8MWBX2Y&musicTerritory=BR' width='100%' height='400px' style='border:1px solid rgba(0, 0, 0, 0.12);max-width:'></iframe>`;
let spotifyFrame = `<iframe src="https://open.spotify.com/embed/artist/4E2XVEYULgAjCObKNyuZim" width="100%" height="400px" frameBorder="0" allowtransparency="true" allow="encrypted-media" style="border-radius: 15px;margin-top: 50px;margin-bottom: 50px; align-self: center;"></iframe>`
let container = document.querySelector('#MediaContainer')
let apple = document.querySelector('#appleIcone')
let amazon = document.querySelector('#amazonIcone')
let deezer = document.querySelector('#deezerIcone')
let spotify = document.querySelector('#spotifyIcone')

apple.addEventListener('click', (evento)=>{
    container.innerHTML = appelFrame;
})

amazon.addEventListener('click', (evento)=>{
    container.innerHTML = amazonFrame;
})
deezer.addEventListener('click', (evento)=>{
    container.innerHTML = appelFrame;
})
spotify.addEventListener('click', (evento)=>{
    container.innerHTML = spotifyFrame;
})

