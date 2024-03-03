const loadAllpost = async () =>{
const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
const data = await res.json();
const allPosts = data.posts;

displayPosts(allPosts);

}

const displayPosts = allPosts =>{
   const  postContainer = document.getElementById('post-container')
    for(const post of allPosts){
        //console.log(post);
      const indicator = post.isActive;
      let indicatorColor = indicator ? "success" : "error"


        const postCard = document.createElement('div')
        postCard.classList = `bg-[#F3F3F5] rounded-3xl mb-6 `;
        postCard.innerHTML = `
        <div class="flex-col lg:flex-row flex gap-4 py-10 px-10">
        <div class="indicator">
        <span class="indicator-item badge badge-${indicatorColor}"></span>
        <div class="grid w-32 h-32 bg-base-300 place-items-center rounded-3xl overflow-hidden">
            <img class="" src="${post.image}" alt="">
        </div>
    </div>
        <div class="my-5">
       <div class="flex gap-6 text-[#12132DCC] text-sm font-medium ">
          <p>#${post.category}</p>
          <p>Author :${post.author.name}</p>
       </div>

       <div class="divide-y divide-dashed divide-[#12132D40] my-3 ">
          <div> <h1 class="text-[#12132D] text-xl font-bold">${post.title}</h1>
              <p class="my-4 pr-3 text-[#12132D99]">${post.description}</p></div>
         <div class="flex flex-col lg:flex-row pt-6 justify-center items-center lg:justify-between">
          <div class="flex text-[#12132D99]">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M9.33333 10.5H18.6667M9.33333 15.1666H16.3333M10.5 21H7C6.07174 21 5.1815 20.6312 4.52513 19.9748C3.86875 19.3185 3.5 18.4282 3.5 17.5V8.16663C3.5 7.23837 3.86875 6.34813 4.52513 5.69175C5.1815 5.03538 6.07174 4.66663 7 4.66663H21C21.9283 4.66663 22.8185 5.03538 23.4749 5.69175C24.1313 6.34813 24.5 7.23837 24.5 8.16663V17.5C24.5 18.4282 24.1313 19.3185 23.4749 19.9748C22.8185 20.6312 21.9283 21 21 21H17.5L14 24.5L10.5 21Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="px-2">${post.comment_count}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M11.6667 14C11.6667 14.6188 11.9125 15.2123 12.3501 15.6499C12.7877 16.0875 13.3812 16.3333 14 16.3333C14.6188 16.3333 15.2123 16.0875 15.6499 15.6499C16.0875 15.2123 16.3333 14.6188 16.3333 14C16.3333 13.3812 16.0875 12.7877 15.6499 12.3501C15.2123 11.9125 14.6188 11.6667 14 11.6667C13.3812 11.6667 12.7877 11.9125 12.3501 12.3501C11.9125 12.7877 11.6667 13.3812 11.6667 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M24.5 14C21.7 18.6667 18.2 21 14 21C9.8 21 6.3 18.6667 3.5 14C6.3 9.33333 9.8 7 14 7C18.2 7 21.7 9.33333 24.5 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="px-2">${post.view_count}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M9.91667 14H14V8.16667M3.5 14C3.5 15.3789 3.77159 16.7443 4.29926 18.0182C4.82694 19.2921 5.60036 20.4496 6.57538 21.4246C7.55039 22.3996 8.70791 23.1731 9.98182 23.7007C11.2557 24.2284 12.6211 24.5 14 24.5C15.3789 24.5 16.7443 24.2284 18.0182 23.7007C19.2921 23.1731 20.4496 22.3996 21.4246 21.4246C22.3996 20.4496 23.1731 19.2921 23.7007 18.0182C24.2284 16.7443 24.5 15.3789 24.5 14C24.5 12.6211 24.2284 11.2557 23.7007 9.98182C23.1731 8.70791 22.3996 7.55039 21.4246 6.57538C20.4496 5.60036 19.2921 4.82694 18.0182 4.29927C16.7443 3.77159 15.3789 3.5 14 3.5C12.6211 3.5 11.2557 3.77159 9.98182 4.29927C8.70791 4.82694 7.55039 5.60036 6.57538 6.57538C5.60036 7.55039 4.82694 8.70791 4.29926 9.98182C3.77159 11.2557 3.5 12.6211 3.5 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="px-2">${post.posted_time} min</p>
          </div>
          <div>
              <button class="btn btn-ghost" onclick="clickButton('${post.title}', ${post.view_count})"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <g clip-path="url(#clip0_57_425)">
                    <path d="M13.9998 0C6.26805 0 9.15527e-05 6.26814 9.15527e-05 13.9999C9.15527e-05 21.7314 6.26805 28 13.9998 28C21.7315 28 27.9999 21.7314 27.9999 13.9999C27.9999 6.26814 21.7315 0 13.9998 0ZM14 4.91741L22.2847 10.0835H5.71542L14 4.91741ZM22.3879 18.333H22.3871C22.3871 19.1616 21.7155 19.8331 20.887 19.8331H7.1131C6.28447 19.8331 5.61303 19.1615 5.61303 18.333V10.4122C5.61303 10.3245 5.62199 10.2393 5.63655 10.1556L13.552 15.0914C13.5617 15.0975 13.5721 15.1016 13.5821 15.1072C13.5925 15.113 13.6032 15.1186 13.6138 15.1239C13.6697 15.1527 13.7273 15.176 13.7862 15.1912C13.7923 15.1929 13.7983 15.1936 13.8044 15.195C13.869 15.2102 13.9344 15.2197 13.9998 15.2197H14.0002C14.0007 15.2197 14.0012 15.2197 14.0012 15.2197C14.0665 15.2197 14.1319 15.2105 14.1965 15.195C14.2026 15.1935 14.2086 15.1929 14.2147 15.1912C14.2735 15.176 14.3309 15.1527 14.3871 15.1239C14.3977 15.1186 14.4084 15.113 14.4188 15.1072C14.4287 15.1016 14.4392 15.0975 14.4489 15.0914L22.3644 10.1556C22.3789 10.2393 22.3879 10.3244 22.3879 10.4122V18.333Z" fill="#10B981"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_57_425">
                      <rect width="28" height="28" fill="white"/>
                    </clipPath>
                  </defs>
                </svg></button>
          </div>

         </div>
          
        </div>
      
       
        </div>
      </div>`
      postContainer.appendChild(postCard);
    }
}


loadAllpost()


const newLoadAllpost = async () =>{
  const res2 = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
  const data2 = await res2.json();
  
  displayNewPosts(data2)
  console.log(data2);
  }

  const displayNewPosts = data =>{
    console.log(data);
   const  newPostContainer = document.getElementById('new-post-container')
    for(const post of data){
        console.log(post);
        // create div
        const newpostCard = document.createElement('div')
        newpostCard.className = "rounded-3xl border border-[#12132D26] border-solid bg-white p-5 mb-4 ";

        newpostCard.innerHTML = `
            <div class=" mb-6 w-full h-48">
                <img class="rounded-3xl w-full h-full" src="${post.cover_image}" alt="">
            </div>
            <div>
                <i class="fa-regular fa-calendar mr-2"></i>
                <span class="text-[#12132D99]">${post?.author?.posted_date || "No publish date"}</span>
                <h1 class="my-3 font-extrabold text-lg">${post.title}</h1>
                <p class="text-[#12132D99]">${post.description}</p>
            </div>
            <div class="flex gap-4 mt-4">
                <div class="border rounded-full w-12 h-12 overflow-hidden">
                    <img src="${post.profile_image}" alt="">
                </div>
                <div>
                    <h1 class="font-bold ">${post.author.name}</h1>
                    <p class="text-sm text-[#12132D99] mt-1">${post?.author?.designation || "Unknown"}</p>
                </div>
            </div>
        `;
        newPostContainer.appendChild(newpostCard);

    }
  }

  newLoadAllpost()





  //click
// let count=0;
//   function clickButton(){
//     const clickCount = document.getElementById('count-click')
//     count++;
//     clickCount.innerText=count;
   
   

//   }
let count=0;
  const clickButton = (text,view_count) => {
        const clickCount = document.getElementById('count-click')
    count++;
    clickCount.innerText=count;
    //  console.log(text,view_cou

     const  postContainer = document.getElementById('post-side-container')
     const sidepostCard = document.createElement('div')
     sidepostCard.classList = `bg-white mx-6 my-4 p-4 rounded-2xl flex`
     sidepostCard.innerHTML = `
     <div>
     <h2 class="font-semibold w-64 ">${text}</h2>
 </div>
 <div class="ml-1 flex justify-center items-center text-center text-[#12132D99]">
   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
     <path d="M11.6667 14C11.6667 14.6188 11.9125 15.2123 12.3501 15.6499C12.7877 16.0875 13.3812 16.3333 14 16.3333C14.6188 16.3333 15.2123 16.0875 15.6499 15.6499C16.0875 15.2123 16.3333 14.6188 16.3333 14C16.3333 13.3812 16.0875 12.7877 15.6499 12.3501C15.2123 11.9125 14.6188 11.6667 14 11.6667C13.3812 11.6667 12.7877 11.9125 12.3501 12.3501C11.9125 12.7877 11.6667 13.3812 11.6667 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
     <path d="M24.5 14C21.7 18.6667 18.2 21 14 21C9.8 21 6.3 18.6667 3.5 14C6.3 9.33333 9.8 7 14 7C18.2 7 21.7 9.33333 24.5 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>
     <p class="">${view_count}</p>
 </div>
     
     `
     postContainer.appendChild(sidepostCard);  

  }

 
  
  