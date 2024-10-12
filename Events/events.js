function toggleHide() {
   let btn = document.getElementById('btn');
   let para = document.getElementById('para');
   para.addEventListener('mouseover', function run(){
      alert("testing event")
   })
   para.addEventListener('mouuseout', function run(){
      console.log("testing event1")
   })
   // if (para.style.display !== 'none') {
   //     para.style.display = 'none';
   // } else {
   //     para.style.display = 'block';
   // }
}