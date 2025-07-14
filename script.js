const moods ={
    happy:{
        color:"#FFDE51",
        quote:"Keep smiling, it makes people wonder what you're up to."
    },
    sad:{
        color:"#00008B",
        quote:"It's okay to feel not okay."
    },
    angry:{
        color:"#FF0000",
        quote:"Take a deep breath and let it go."
    },
    tired:{
        color:"#36454F",
        quote:"Rest if you must, but don’t quit."
    },
    excited:{
        color:"#BC13FE",
        quote:"Let your excitement be louder than your fears."
    }
};
function setMood(mood){
    if(moods[mood]){
        const{color,quote}=moods[mood];
        document.body.style.backgroundColor=color;
        document.getElementById("curr-mood").textContent=`Your Mood: ${capitalize(mood)}`;
        document.getElementById("quote").textContent=quote;
        localStorage.setItem("lastMood",mood);
    }
}
function capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
}
window.onload=()=>{
    const lastMood=localStorage.getItem("lastMood");
    if(lastMood) setMood(lastMood);
};
//Last mood can be seen in the inspect's local storage where the url shows the last mood selected.