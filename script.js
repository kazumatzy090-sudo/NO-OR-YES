const data = [
    {
        img: "https://www.boredpanda.com/blog/wp-content/uploads/2025/10/funny-cat-memes-go-hard-cover_675.jpg",
        text: "Will you be my only one?? 💖"
    },
    {
        img: "https://cdn-useast1.kapwing.com/static/templates/crying-cat-meme-template-thumbnail-4e806a85.webp",
        text: "Are you sure? 🥺"
    },
    {
        img: "https://i.pinimg.com/736x/e9/f6/36/e9f63675fa85770c13c3d726f3313a37.jpg",
        text: "Please say yes 😭💔"
    }
];

// Image and text for Yes button
const yesImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4aNJVjgDnCEm_LnPfBUZehYnYX4k5zUvE3g&s"; // <-- new image for Yes

let index = 0;

function noClick() {
    index++;
    if (index >= data.length) {
        index = 0;
    }

    document.getElementById("catImage").src = data[index].img;
    document.getElementById("text").innerText = data[index].text;
}

function yesClick() {
    document.getElementById("text").innerText = "Yay!!! I love you 💕🥰";
    document.getElementById("catImage").src = yesImage; // <-- change image here
}
