function toggleHide() {
   let btn = document.getElementById('btn');
   let para = document.getElementById('para');
   para.addEventListener('mouseover', function run(){
      console.log("mouse inside")
   })
   para.addEventListener('mouuseout', function run(){
      console.log("mouse went outside")
   })
   if (para.style.display !== 'none') {
       para.style.display = 'none';
   } else {
       para.style.display = 'block';
   }
}