const forumLoad = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const phones = data.posts;
    
    displayCards(phones);

}

const forumLoad2 = async (SearchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${SearchText}`);
    const data = await res.json();
    const phones = data.posts;
    
    displayCards(phones);

}
  
const forumBuzz = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    displayPhones(data);

}


const displayCards = phones =>{
    // console.log(phones)



const forumContainer = document.getElementById('card-container');
             forumContainer.textContent = ''
    phones.forEach(phone =>{

        console.log(phone);
        

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
                  <h4>#${phone.category}</h4>
                  <h4>${phone.author.name}</h4>
                </div>
              </div>

              <h2 class="mb-5 text-2xl font-bold">${phone.title}</h2>
              <h5 class="mb-5">${phone.
                description}</h5>

              <hr class="h-0 border-dashed bg-violet-500">
              <div class="flex gap-1 lg:gap-4 lg:justify-between mt-3">
                <div class="flex gap-3 ">
                  <div><img src="images/Group 13.png" alt=""></div>
                  <div>${phone.comment_count
                  }</div>
                  <div><img src="images/tabler-icon-eye.png" alt=""></div>
                  <div>${phone.view_count}</div>
                  <div><img src="images/tabler-icon-clock-hour-9.png" alt=""></div>
                  <div>${phone.
                    posted_time}</div>
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


    // hide spinner
    setTimeout(toggleLoadingSpinner,1000);




}



const handleSearch = () =>{
toggleLoadingSpinner(true);

const searchFiled = document.getElementById('search-field');
const searchText = searchFiled.value;
console.log(searchText);
forumLoad2(searchText);



}

const buzzContainer =document.getElementById('buzz-container');
 

const displayPhones = data =>{
    const buzzContainer =document.getElementById('buzz-container');
 

    // console.log(data)
    data.forEach(buzz =>{
        console.log(buzz);
       const secCard = document.getElementById('div');
       secCard.classList = `card w-96 bg-base-100 shadow-xl mb-5 lg:mb-1`;
       secCard.innerHTML = `
       
       <figure class="px-10 pt-10">
         <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"
           class="rounded-xl" />
       </figure>
       <div class="card-body items-start text-start">
         <div class="flex">
           <img src="images/Frame (1).png" alt="">
           <h4>29 January 2024</h4>
         </div>
         <h2 class="card-title">What will a mars habitat force that impact in our daily life!!!</h2>
         <p>Yes, you can run unit tests and view the results directly within the app.</p>
         <div class="card-actions flex">
           <div class="avatar">
             <div class="w-14 rounded-full">
               <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
             </div>
           </div>
           <div>
             <h3>Cameron Williamson</h3>
             <h5>Unknown</h5>

           </div>
         </div>
       `;

buzzContainer.appendChild(secCard);

    })

}























const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');

    if(isLoading){
       loadingSpinner.classList.remove('hidden') 
    }

    else{
        loadingSpinner.classList.add('hidden');
    }
}







forumLoad()
forumBuzz()
