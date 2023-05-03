window.addEventListener('load',()=>{
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');

    const visual = document.querySelector('.visual');

    const colors = [
        "#F97B22",
        "#FFD3B0",
        "#F7D060",
        "#2A2F4F",
        "#263A29",
        "#9A208C",
    ]

    pads.forEach((pad,index)=>{
        pad.addEventListener('click',function(){
                sounds[index].currentTime = 0;
                sounds[index].play();
                makeBubble(index);
        })
    })

    const makeBubble = (index)=>{
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];

        bubble.style.animation = "jump 1s ease";

        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        })
    }
})