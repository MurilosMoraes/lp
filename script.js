function openNav(){
   let nav = document.getElementById('menu');
   if (nav.style.display === "none") {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
}

function closeNav(){
    let nav = document.getElementById('menu');
    if (nav.style.display === "flex") {
     nav.style.display = "none";
   } else {
     nav.style.display = "flex";
   }
 }