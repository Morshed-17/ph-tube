const loadContents = async () =>{
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json()
    const categories = data.data

    displayCategories(categories)
}
const displayCategories = (categories) => {
    const tabs = document.getElementById('tabs-container')
    categories.forEach(category => {
        const div = document.createElement('div')
        div.innerHTML=`
        <button onclick="handleDisplayCategory(${category.category_id})" class="text-lg font-medium bg-[#25252533]  py-3 hover:bg-[#ff1f3da3]  duration-300  px-5 rounded-[4px]">${category.category}</button>
        `
        tabs.appendChild(div)
    })

}
const handleDisplayCategory = async (id) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await response.json()
    const cards = data.data
    displayCards(cards)
    
}
const displayCards = (cards) => {
    
    const cardsContainer = document.getElementById('cards-container')
    cardsContainer.innerHTML = ''

    cards.forEach(card => {
        const div = document.createElement('div')
        div.innerHTML= `
        <div>
                    <figure><img class="rounded-lg" src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg" alt="Shoes" />
                    </figure>
                    <div class="px-0">
                        <div class="flex gap-4 items-start pt-4">
                            <img src="./images/Ellipse 1.svg" alt="">
                            <div>
                                <h3 class="text-xl pr-5 font-bold mt-1 text-[#171717] leading-6">Building a Winning UX Strategy
                                    Using the Kano Model</h3>
                                <h3 class="text-lg">Awlad Hossain</h3>
                                <h3 class="text-lg">91K views</h3>
                            </div>
                        </div>
    
    
    
                    </div>
                </div>
        
        `
        cardsContainer.appendChild(div)
    })
    
}


loadContents()