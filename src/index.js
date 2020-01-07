import "./styles.css";

const unmuteAudio = () => {
  document.getElementById("box1").muted = false;
  console.log("enter");
};

const muteAudio = () => {
  document.getElementById("box1").muted = true;
  console.log("leave");
};

document.getElementById("box").onmouseenter = unmuteAudio;
document.getElementById("box").onmouseleave = muteAudio;

document.getElementById("app").innerHTML = `
<div>
<h1>Hello Vanilla!</h1>

</div>

 
`;
