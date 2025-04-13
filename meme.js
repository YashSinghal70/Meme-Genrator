let btn=document.getElementById("btn");
let memetitle=document.querySelector(".meme-title");
let memeauthor=document.querySelector(".author");
let memeimg=document.querySelector(".meme-img");
let URL="https://meme-api.com/gimme";

function memeGenrator(){
    fetch(URL)
    .then((res) => res.json())
    .then((data) =>{
        // const {author,title,url}=data
console.log("Author:",data.author);
console.log("Title:",data.title);
console.log("Image Src:",data.url);
memetitle.textContent=data.title;
memeimg.src=data.url;
memeauthor.textContent=`Meme By: ${data.author}`;
    })
    .catch((error) => {
        console.error('Error fetching joke:', error);
        memeimg.textContent = 'Failed to fetch Meme Image. Please try again.';
    })
    .catch((error) => {
        console.error('Error fetching joke:', error);
        memetitle.textContent = 'Failed to fetch Meme Title. Please try again.';
    })
    .catch((error) => {
        console.error('Error fetching joke:', error);
        memeauthor.textContent = 'Failed to fetch Meme Author. Please try again.';
    });
}

btn.addEventListener("click",memeGenrator)
memeGenrator();//Page Refresh it create meme


        // const {author,title,url}=data
        // console.log("Author:",author);
        // console.log("Title:",title);
        // console.log("Image Src:",url);
        // memetitle.textContent=title;
        // memeimg.src=url;
        // memeauthor.textContent=`Meme By: ${author}`;