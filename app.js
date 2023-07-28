const body = document.body;
const imageName= document.querySelector(".main-img-name");
const imageAuthor=document.querySelector(".main-img-author");7

const images = [
    {
        url: "https://images.unsplash.com/photo-1498598457418-36ef20772bb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        name: "Roys Peak, New Zealand",
        author: "Félix Lam",
      },
      {
        url: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        name: "orange Persian cat sleeping",
        author: "Ludemeula Fernandes",
      },
      {
        url: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        name: "Bad Pyrmont, Deutschland",
        author: "Sebastian Unrau",
      },
      {
        url: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        name: "Yellow Labrador Puppy",
        author: "Cristian Castillo",
      },
    ];

    let imageIndex=0;

    function setMainImage(imageIndex)  {
        body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.3)), url("${images[imageIndex].url}")`;
        imageName.innerHTML = images[imageIndex].name;
        imageAuthor.innerHTML = "by" + images[imageIndex].author;
    }

    setMainImage(0);

    setInterval(() => {
        setMainImage(imageIndex);
        imageIndex +=1;
        if(imageIndex >= images.length) {
            imageIndex = 0;
        }
    },2500);