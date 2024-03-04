const forumLoad = async () =>{
  toggleLoadingSpinner(true);
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
        <div class="  bg-violet-100  lg:w-3/4 lg:h-auto  rounded-lg  pt-5  lg:px-10 ">

          <div class="lg:flex gap-20 ">
            <div class="avatar ">
              <div class="w-20 h-20 rounded-xl ">
                <img src="${phone.image}" />
                <div class="absolute -top-2 -right-0.5 ">
                 ${phone.isActive ? '<div class="badge badge-success border-2 border-white"></div>' : '<div class="badge badge-error border-2 border-white"></div>' }
                 
               
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


// hide spinner
setTimeout(() =>{
  toggleLoadingSpinner(false)
  forumContainer.appendChild(forumCard);
},2000);



// append



    })


    




}



const handleSearch = () =>{
toggleLoadingSpinner(true);

const searchFiled = document.getElementById('search-field');
const searchText = searchFiled.value;
console.log(searchText);
forumLoad2(searchText);



}

// const buzzContainer =document.getElementById('buzz-container');
 

const displayPhones = data =>{
    const buzzContainer =document.getElementById('buzz-container');
 

    // console.log(data)
    data.forEach(buzz =>{
        console.log(buzz);
       const secCard = document.createElement('div');
       secCard.classList = `card w-96 bg-base-100 shadow-xl mb-5 lg:mb-1`;
       secCard.innerHTML = `
       
       <figure class="px-10 pt-10">
       <img src="${buzz.cover_image
       }" alt="Shoes"
         class="rounded-xl" />
     </figure>
     <div class="card-body items-start text-start">
       <div class="flex">
         <img src="images/Frame (1).png" alt="">
        
         <h4> ${buzz?.author?.posted_date || 'No publish date'} </h4>
       </div>
       <h2 class="card-title">${buzz.title}</h2>
       <p>${buzz.description}
       </p>

       <div class="card-actions flex">
         <div class="avatar">
           <div class="w-14 rounded-full">
             <img src="${buzz.profile_image

             }" />
           </div>
         </div>
         <div>
          
        
           <h5>${buzz?.author?.name || 'unknown' }
           </h5>
           <h3>${buzz.author.designation
           }</h3>

         </div>
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


let count = 0;

const button = async (id) =>{
  count ++;




  const buttonContainer = document.getElementById('btn-container');
  buttonContainer.innerText = count;
}




forumLoad()
forumBuzz()
