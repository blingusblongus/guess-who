console.log('Here are all the available people:', people);

//on load:
$(readyNow);

function readyNow() {
    console.log('jquery loaded');
    // click listener

    $('img').on('click', checkMatch);

    for (let person of people) {
        let imgHtml = `<img 
            src="https://github.com/${person.githubUsername}.png?size=250"    
            alt="Profile image of ${person.name}">`;

        //append img to the container
        $("#container").append(imgHtml);
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};

function checkMatch() {
    let myPick = (this).closest('img').data();
}

function initGame() {
    // assign index of the 'who'
    let whoIndex = randomNumber(0, people.length - 1);
    
    // loop through, setting with .data() 
    for(let i=0; i<people.length; i++){

    }
    

        //

}