const forumLoad = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const phones = data.posts;
    
    displayCards(phones);

}

const displayCards = phones =>{
    // console.log(phones)



// const forumContainer = document.getElementById('card-container');


    phones.forEach(phone =>{

        console.log(phone);
        const forumContainer = document.getElementById('card-container');

        const forumCard = document.createElement('div');
        
        forumCard.innerHTML = `
        
       

        <div class=" gap-5  flex justify-around" >
        <div class="  bg-violet-100 w-3/4 lg:h-auto  rounded-lg  pt-5 px-10 ">

          <div class="lg:flex gap-20 ">
            <div class="avatar ">
              <div class="w-20 h-20 rounded-xl ">
                <img src="${phone.image}" />
                <div class="absolute -top-2 -right-0.5 ">

                  <div class="badge badge-success border-2 border-white"></div>

                </div>

              </div>
            </div>

            <div class="">
              <div class="mb-5">
                <div class="flex gap-10">
                  <h4>#coding</h4>
                  <h4>Author: Mridul das</h4>
                </div>
              </div>

              <h2 class="mb-5 text-2xl font-bold">10 Kids Unaware of Their Halloween Costume</h2>
              <h5 class="mb-5">It’s one thing to subject yourself to ha Halloween costume mishap because, hey that’s
                your prerogative</h5>

              <hr class="h-0 border-dashed bg-violet-500">
              <div class="flex gap-1 lg:gap-4 lg:justify-between mt-3">
                <div class="flex gap-3 ">
                  <div><img src="images/Group 13.png" alt=""></div>
                  <div>560</div>
                  <div><img src="images/tabler-icon-eye.png" alt=""></div>
                  <div>1568</div>
                  <div><img src="images/tabler-icon-clock-hour-9.png" alt=""></div>
                  <div>5 min</div>
                </div>
                <button class="btn bg-transparent border-0" onclick="button()"><img src="images/Group 40106.png"
                    alt=""></button>
              </div>


            </div>

          </div>
        </div>
      </div>
    </div>
    
   
            
  `;

// append
forumContainer.appendChild(forumCard);


    })

}













forumLoad()