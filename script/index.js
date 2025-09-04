

// All level..........
const onload = ()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then(level =>displayLession(level.data))
}


// function remove all ...

const removeActive = ()=>{
  // level btn class ter a dolem 
   const levelBtn = document.querySelectorAll('.levelBtn')
  // console.log(levelBtn)
  // active ar stle remove krolem...
  levelBtn.forEach(btn=>btn.classList.remove('active'))
}
// on click
const lessionClick =(id)=>{
// console.log(id)
const url = `https://openapi.programming-hero.com/api/level/${id}`
fetch(url)
.then(res =>res.json())
.then(words=>{
// click hole e active dibe......
  removeActive() 
  // clcik btn dynamic korlem......
  const clickbtn = document.getElementById(`clickBtn-${id}`)
  // console.log(clickbtn)

  // active class add all btn..and style dilam...
  clickbtn.classList.add('active')
  // console.log(clickbtn)
// all class dorlem...
  wordDisplay(words.data)
})
}
// word display......
const wordDisplay = (allWords) =>{
  // get card container
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
  // all words / id jodi lenght 0 hoy taile if kaj korbe....
  if (allWords.length == 0){
    // alert('no word detected')
     cardContainer.innerHTML = `
        <div class="text-center col-span-full bangal-font">
          <img class="mx-auto" src="./assets/alert-error.png" alt="">
          <p class="text-gray-500 text-xl">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
          <h2 class="bangla-font font-bold text-4xl mt-5">নেক্সট Lesson এ যান।</h2>
        </div>
     `
  }

  
// condtional bandring mane jodi word thake taile word e dakhaibe naile onno kisui dibe
  allWords.forEach(word=>{
    // console.log(word)
    // creat div
    const cardDiv = document.createElement('div');
    cardDiv.innerHTML = `
      <div class="text-center p-4 bg-white rounded-lg mb-5">
            <h2 class="font-bold mb-3 text-[20px]">${word.word ? word.word :'শব্দ পাওয়া যাইনি'}</h2> 
            <h4 class="font-semibold mb-3">Meaning/Pronounciation</h4>
            <h4 class="bangla-font">"${word.meaning?word.meaning:'শব্দ পাওয়া যাইনি'} / ${word.pronunciation?word.pronunciation:'pronounction পাওয়া যাইনি'}"</h4>
            <div class="flex justify-between items-center p-10">

              <button onclick="my_modal_5.showModal()" class="hover:bg-gray-500 p-3 rounded-md"> <i class="fa-solid fa-circle-info"></i></button>
              <button class="hover:bg-gray-500 p-3 rounded-md"><i class="fa-solid fa-volume-high"></i></button>
           
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
    <button id ='clickBtn-${lession.level_no}' onclick="lessionClick(${lession.level_no})" class="btn btn-outline btn-primary mb-4 levelBtn"><i class="fa-regular fa-circle-question"></i>${lession.level_no} lession</button>
   `;
  //  append child.
  levelContainer.appendChild(creatDiv)
}
}
onload()



// 1st a butn a unique id dynamic kore dilam(clickBtn). lessionClick ar modde dorlem and (id )deya dynamic krlem. ter por btn a add korlma class list and css thke style dilam... akhon ja holo sobgullo btna ay active hoye gello.... tai aber btn a clss add korlem(levelBtn) akta function (removeActive) a querySellector a diya class dore remove korlem active syle.....and (removeActive) ta re (lession clcik) ar moddy deya dilam (removeActive())
