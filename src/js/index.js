// home page text animation

function sleep(ms){
    return new Promise((resolve)=> setTimeout(resolve, ms));
}

const phrases = ['code', 'play football', 'watch football'];
const el = document.getElementById('typewriter');

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () => {
    while(true){
        let curWord = phrases[curPhraseIndex];

        for (let i=0; i < curWord.length; i++) {
            el.innerText = curWord.substring(0, i + 1)
            await sleep(sleepTime);
        }
        
        await sleep(sleepTime * 10);
        
        for (let i=curWord.length; i > 0; i--) {
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }
        
        await sleep(sleepTime * 5);

        if (curPhraseIndex === phrases.length - 1){
            curPhraseIndex = 0;
        }else{
            curPhraseIndex++;
        }
    }
};

writeLoop();




// about page scroll animation

const about = document.querySelectorAll('.about-introduction, .education-skills')

const aboutObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('in-view');
        }else{
            entry.target.classList.remove('in-view');
        }
    });
}, {threshold : 0.5});

about.forEach(info =>{
    aboutObserver.observe(info);
});



// project page scroll animation

const projects = document.querySelectorAll('.projects__each-project');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }else{
        entry.target.classList.remove('in-view');
    }
  });
}, { threshold: 0.5 });

projects.forEach(project => {
  observer.observe(project);
});



// travel page scroll animation


const places = document.querySelectorAll('.visted-places, .planned-places, .visted-places__inner-box, .planned-places__inner-box');

const observertravel = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        } else {
        
        entry.target.classList.remove('in-view');
                
        }
    });
}, { threshold: 0.5 });

places.forEach(place => {
observertravel.observe(place);
});


// hobbies page scroll animation 

const hobbies = document.querySelectorAll('.hobbies-box');

const hobbiesObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }else{
            entry.target.classList.remove('in-view');
        }
    });
}, {threshold : 0.5});

hobbies.forEach(hobby => { 
    hobbiesObserver.observe(hobby);
});
