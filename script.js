const btns=[
    {
        id: 1,
        name: 'Jordan'
    },
    {
        id: 2,
        name: 'Airmax'
    },
    {
        id: 3,
        name: 'Airforce'
    },
    {
        id: 4,
        name: 'Running'
    },
    {
        id: 5,
        name: 'Basketball'
    }
]

const filters = [...new Set(btns.map((btn)=>
    {return btn}))]

document.getElementById('btns').innerHTML=filters.map((btn)=>{
    var {name, id} = btn;
    return(
        "<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
    )
}).join('');

const product = [
    {
        id: 1,
        image: 'images/jordan1.jpg',
        title: 'Air Jordan 1 Mid SE',
        price: 137,
        category: 'Jordan',
    },
    {
        id: 1,
        image: 'images/jordan2.jpg',
        title: 'Air Jordan 1 Elevate Low',
        price: 128,
        category: 'Jordan',
    },
    {
        id: 1,
        image: 'images/jordan3.jpg',
        title: 'Air Jordan 1 Low G',
        price: 137,
        category: 'Jordan',
    },
    {
        id: 1,
        image: 'images/jordan4.jpg',
        title: 'Air Jordan 1 Low SE',
        price: 128,
        category: 'Jordan',
    },
    {
        id: 1,
        image: 'images/jordan5.jpg',
        title: 'Air Jordan 1 Retro High OG',
        price: 178,
        category: 'Jordan',
    }
    
];

const categories = [...new Set(product.map((item)=>
    {return item}))]

const filterItems = (a) => {
    const flterCategories = categories.filter(item);
    function item(value){
        if(value.id==a){
            return(
                value.id
            )
        }
    }
    displayItem(flterCategories)
}

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class = 'box'>
            <h3>${title}</h3>
            <div class='img-box'>
            <img class= 'images' src=${image}></img>
            </div>
            <div class='bottom'>
            <h2>$ ${price}</h2>
            <button></button>
            </div>
            </div>`)
        }).join('');
}
displayItem(categories);


