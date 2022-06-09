interface IMe {
    name: string,
    field: string,
    desc: string;
};
interface IJobs {
    company: string,
    job: string,
    desc: string;
};
interface ISkills {
    skill: string,
    isCool: boolean;
};

const me: IMe = {
    name: "Jared Shetler",
    field: "Writer/Front End Developer",
    desc: "It took me 150 hours to beat Elden Ring."
};

const interests: string[] = ['Reading', 'Writing', 'DnD', 'Music', 'Video Games'];


const starbs: IJobs = {
    company: 'Starbucks Coffee Co',
    job: 'Barista',
    desc: 'Created delicious beverages and exceed customer expectations'
};
const greer: IJobs = {
    company: 'Greer and Associates Electrical',
    job: "Electrician's Assistant",
    desc: 'Learned the trade, organized stuff, and did the work no one else wanted to do'
};
const home: IJobs = {
    company: 'Home',
    job: 'Freelance Writer',
    desc: "Identified client's problems and delivered solutions in a timeley manner"
};
const jobsArray: IJobs[] = [starbs, greer, home];


const horn: ISkills = {
    skill: 'Euphonium',
    isCool: true
};
const fencing: ISkills = {
    skill: 'Fencing',
    isCool: true
};
const writing: ISkills = {
    skill: 'Writing',
    isCool: true
};
const gaming: ISkills = {
    skill: 'Pro Gamer 4 Life',
    isCool: true
};
const react: ISkills = {
    skill: 'React Programming',
    isCool: false
};

const allSkills:ISkills[] = [horn, fencing, writing, gaming, react];

function displayPosition (item: IJobs[]) {
    item.forEach((position) => {
        console.log(`* ${position.job} at ${position.company} - ${position.desc}.\n\n`);
    });
};

function displaySkills (item: ISkills[]) {
    item.forEach((thing) => {
        if(thing.isCool === true) {
            console.log(`**BAM: ${thing.skill}`);
        } else {
            console.log(`${thing.skill}\n`);
        };
    });
};

function displayInterests (item: string[]) {
    for(let i = 0; i < item.length; i++) {
        console.log(`* ${item[i]}\n`);
    };
};


console.log(`${me.name.toUpperCase()}\n\n${me.field}\n\n${me.desc}\n\n------------------------------------------------`);
console.log('My Interests: ')
displayInterests(interests);
console.log('------------------------------------------------\n\nExperience: \n ')
displayPosition(jobsArray);
console.log('------------------------------------------------\n\nMy Skills: ');
displaySkills(allSkills);
