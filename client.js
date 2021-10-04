console.log('Here are all the available people:', people);

//on load:
$(readyNow);

function readyNow() {
    console.log('jquery loaded');
    $('body').on('click', 'img', checkMatch);
    readyGame();
}

function readyGame() {
    $('#container').empty();

    //declare the who
    let whoIndex = randomNumber(0, people.length - 1);
    //console.log('whoIndex:', whoIndex);

    for (let i = 0; i < people.length; i++) {
        let person = people[i];
        let imgHtml = $(`<img 
            src="https://github.com/${person.githubUsername}.png?size=250"    
            alt="Profile image of ${person.name}">`);

        if (i === whoIndex) {
            imgHtml.data('who', true);
        } else {
            imgHtml.data('who', false);
        }

        //append img to the container
        $("#container").append(imgHtml);

        //console.log('imgHtml.data():', imgHtml.data());
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};

function checkMatch() {
    let myPick = $(this);
    let isWho = myPick.data('who');

    if (isWho) {
        alert('you win');
        readyGame();
    } else {
        alert('you lose');
    }
};

