;
;
;
var me = {
    name: "Jared Shetler",
    field: "Writer/Front End Developer",
    desc: "It took me 150 hours to beat Elden Ring."
};
var interests = ['Reading', 'Writing', 'DnD', 'Music', 'Video Games'];
var starbs = {
    company: 'Starbucks Coffee Co',
    job: 'Barista',
    desc: 'Created delicious beverages and exceed customer expectations'
};
var greer = {
    company: 'Greer and Associates Electrical',
    job: "Electrician's Assistant",
    desc: 'Learned the trade, organized stuff, and did the work no one else wanted to do'
};
var home = {
    company: 'Home',
    job: 'Freelance Writer',
    desc: "Identified client's problems and delivered solutions in a timeley manner"
};
var jobsArray = [starbs, greer, home];
var horn = {
    skill: 'Euphonium',
    isCool: true
};
var fencing = {
    skill: 'Fencing',
    isCool: true
};
var writing = {
    skill: 'Writing',
    isCool: true
};
var gaming = {
    skill: 'Pro Gamer 4 Life',
    isCool: true
};
var react = {
    skill: 'React Programming',
    isCool: false
};
var allSkills = [horn, fencing, writing, gaming, react];
function displayPosition(item) {
    item.forEach(function (position) {
        console.log("* ".concat(position.job, " at ").concat(position.company, " - ").concat(position.desc, ".\n\n"));
    });
}
;
function displaySkills(item) {
    item.forEach(function (thing) {
        if (thing.isCool === true) {
            console.log("**BAM: ".concat(thing.skill));
        }
        else {
            console.log("".concat(thing.skill, "\n"));
        }
        ;
    });
}
;
function displayInterests(item) {
    for (var i = 0; i < item.length; i++) {
        console.log("* ".concat(item[i], "\n"));
    }
    ;
}
;
console.log("".concat(me.name.toUpperCase(), "\n\n").concat(me.field, "\n\n").concat(me.desc, "\n\n------------------------------------------------"));
console.log('My Interests: ');
displayInterests(interests);
console.log('------------------------------------------------\n\nExperience: \n ');
displayPosition(jobsArray);
console.log('------------------------------------------------\n\nMy Skills: ');
displaySkills(allSkills);
