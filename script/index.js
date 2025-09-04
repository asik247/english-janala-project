

// All level..........
const onload = ()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then(level =>displayLession(level.data))
}
// on click
const lessionClick =(id)=>{
// console.log(id)
const url = `https://openapi.programming-hero.com/api/level/${id}`
fetch(url)
.then(res =>res.json())
.then(words=>wordDisplay(words.data))
}
// word display......
const wordDisplay = (allWords) =>{
  // get card container
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
  allWords.forEach(word=>{
    // console.log(word)
    // creat div
    const cardDiv = document.createElement('div');
    cardDiv.innerHTML = `
      <div class="text-center p-4 bg-white rounded-lg mb-5">
            <h2 class="font-bold mb-3 text-[20px]">${word.word}</h2>
            <h4 class="font-semibold mb-3">Meaning/Pronounciation</h4>
            <h4 class="bangla-font">"${word.meaning} / ${word.pronunciation}"</h4>
            <div class="flex justify-between items-center p-10">
              <span class="hover:bg-gray-500 p-3 rounded-md"> <i class="fa-solid fa-circle-info"></i></span>
              <span class="hover:bg-gray-500 p-3 rounded-md" > <i class="fa-solid fa-volume-high"></i></span>
            </div>
          </div>
    
    `
    cardContainer.appendChild(cardDiv)
  })
}

const displayLession = (lessions) =>{ 
// get container
const levelContainer = document.getElementById('level-Container')
// container emty
levelContainer.innerHTML = '';
for (let lession of lessions){
  // new div creat
   const creatDiv = document.createElement('div');
   creatDiv.innerHTML = `
    <button onclick="lessionClick(${lession.level_no})" class="btn btn-outline btn-primary mb-4 "><i class="fa-regular fa-circle-question"></i>${lession.level_no} lession</button>
   `;
  //  append child.
  levelContainer.appendChild(creatDiv)
}
}
onload()

