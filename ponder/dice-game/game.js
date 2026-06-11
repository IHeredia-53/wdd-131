// when the button is clicked
// change all the die images to the gif animation

document.getElementById("rollButton").addEventListener("click", event => {
    // get the images
    const images = document.querySelectorAll("#gameboard img");
    // change the src
    images.forEach(image => {
        if(isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif";
        }
    });

    // wait 2 secconds, then call this anonymous function
    setTimeout(() => {
        // change the src back to the original
        images.forEach(image => {
            if(isDieUnlocked(image)) {
                image.src = "assets/white_dice_" + (Math.floor(Math.random() * 6) + 1) + ".gif";
            }
        });
    }, 500);
});

function isDieUnlocked(dieImage) {
    // retrieve list of checkboxes
    const checkboxes = document.querySelectorAll("#gameboard input");
    // filter out checked
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);
    // compare list to dieImage, if there's a match, return true
    return unchecked.find(unchecked => unchecked.className === dieImage.className);
}