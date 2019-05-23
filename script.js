const addBackgroundImages = () => {
    // Grab all elements with a data-image attribute
    const dataImages = document.querySelectorAll('[data-image]');

    // Check if dataImages is filled, if not return to prevent errors
    if (!dataImages.length) return;

    // Set the background image based on the data-image 
    dataImages.forEach(dataImage => {
        dataImage.style.backgroundImage = `url(${dataImage.dataset.image})`;
    });
};

// Call the function
addBackgroundImages();