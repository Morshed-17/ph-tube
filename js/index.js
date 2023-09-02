const loadContents = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await response.json();
  const categories = data.data;

  displayCategories(categories);
};
const displayCategories = (categories) => {
  const tabs = document.getElementById("tabs-container");
  categories.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <button onclick="handleDisplayCategory(${category.category_id})" class="text-lg font-medium bg-[#25252533]  py-3 hover:bg-[#FF1F3D]  duration-300  px-5 rounded-[4px] hover:text-white focus:bg-[#FF1F3D] focus:text-white">${category.category}</button>
        `;
    tabs.appendChild(div);
  });
};
const handleDisplayCategory = async (id) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await response.json();
  const cards = data.data;
  displayCards(cards);
  
};
const displayCards = (cards) => {

  
  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = "";
  const noDataContainer = document.getElementById('no-data-contianer')
  noDataContainer.innerHTML =''
  if(cards.length === 0){

    const div = document.createElement('div')
    div.innerHTML =`
    <div class='flex justify-center py-24'>
    <div class='max-w-[435px]'>
    <img class="mx-auto" src="../images/Icon.png">
    <h1 class="text-3xl font-bold text-center pt-3">Oops!! Sorry, There is no content here</h1>
    </div>
    </div>
    `;
    noDataContainer.appendChild(div)
  }

  cards.forEach((card) => {
    console.log(card);
    const div = document.createElement("div")
    timeConverter(card.others.posted_date)
    div.innerHTML = `
        <div class="">
                    <figure class='relative'><img class="rounded-lg h-[240px] w-full" src="${card.thumbnail}" alt="Shoes" />
                        <div id="post-date-container" class='text-white bg-black p-1 ${card.others.posted_date? '' : 'hidden'} rounded-md w-fit absolute z-10 bottom-5 right-4'>${hoursCount}hrs ${minutesCount}min</div>
                    </figure>
                    <div class="px-0">
                        <div class="flex gap-4 items-start pt-4">
                        <div class='avatar'>
                        <div class='w-12 h-12 rounded-full'>
                        <img src="${card.authors[0].profile_picture}" alt="">
                        </div>
                        </div>
                            <div>

                                <h3 class="text-xl pr-5 font-bold mt-1 text-[#171717] leading-6">${card.title}</h3>
                            <div id='name-varification' class="flex gap-3">
                                <h3 class="text-lg">${card.authors[0].profile_name}</h3>
                                <img src='${card.authors[0].verified? './images/fi_10629607.svg' : ''}'>
                            </div>
                                <h3 class="text-lg">${card.others.views} views</h3>
                            </div>
                        </div>
    
    
    
                    </div>
                </div>
        
        `;
    cardsContainer.appendChild(div);
  });
};

let hoursCount = 0
let minutesCount= 0
const timeConverter = (totalSeconds) => {
    
    const totalMinutes = Math.floor(totalSeconds / 60)
   const hours = Math.floor(totalMinutes / 60)
   const minutes = totalMinutes % 60
   hoursCount = hours
   minutesCount = minutes



}


handleDisplayCategory("1000");

loadContents();


// blog page
const visitBlog = () => {
  window.location.href = "blog.html"
}