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
    },

    {
        id: 2,
        image: 'images/airmax1.jpg',
        title: 'Nike Air Max Pulse Roam',
        price: 160,
        category: 'Airmax',
    },
    {
        id: 2,
        image: 'images/airmax2.jpg',
        title: 'Nike Air Max Scorpion Flyknit',
        price: 245,
        category: 'Airmax',
    },
    {
        id: 2,
        image: 'images/airmax3.jpg',
        title: 'Nike Air VaporMax Moc Roam',
        price: 212,
        category: 'Airmax',
    },
    {
        id: 2,
        image: 'images/airmax4.jpg',
        title: 'Nike Tiempo Legend 10 Elite',
        price: 221,
        category: 'Airmax',
    },
    {
        id: 2,
        image: 'images/airmax5.jpg',
        title: 'Nike Air Max 97',
        price: 146,
        category: 'Airmax',
    },

    {
        id: 3,
        image: 'images/airforce1.jpg',
        title: 'Nike Air Force 1 07',
        price: 99,
        category: 'Airforce',
    },
    {
        id: 3,
        image: 'images/airforce2.jpg',
        title: 'Nike Air Force 1 LV8',
        price: 90,
        category: 'Airforce',
    },
    {
        id: 3,
        image: 'images/airforce3.jpg',
        title: 'Nike Air Force 1 Low Retro',
        price: 151,
        category: 'Airforce',
    },
    {
        id: 3,
        image: 'images/airforce4.jpg',
        title: 'Nike Air Force 1 07 Mid',
        price: 112,
        category: 'Airforce',
    },
    {
        id: 3,
        image: 'images/airforce5.jpg',
        title: 'Nike Air Force 1 PLT.AF.ORM',
        price: 112,
        category: 'Airforce',
    },

    {
        id: 4,
        image: 'images/running1.jpg',
        title: 'Nike Invincible 3',
        price: 178,
        category: 'Running',
    },
    {
        id: 4,
        image: 'images/running2.jpg',
        title: 'Nike Structure 25',
        price: 133,
        category: 'Running',
    },
    {
        id: 4,
        image: 'images/running3.jpg',
        title: 'Nike Alphafly 2',
        price: 261,
        category: 'Running',
    },
    {
        id: 4,
        image: 'images/running4.jpg',
        title: 'Nike Pegasus 40',
        price: 114,
        category: 'Running',
    },
    {
        id: 4,
        image: 'images/running5.jpg',
        title: 'Nike Pegasus 40 "Eliud Kipchoge"',
        price: 114,
        category: 'Running',
    },

    {
        id: 5,
        image: 'images/basketball1.jpg',
        title: 'LeBron XXI Dragon Pearl EP',
        price: 196,
        category: 'Basketball',
    },
    {
        id: 5,
        image: 'images/basketball2.jpg',
        title: 'Tatum 1 Home Team PF',
        price: 124,
        category: 'Basketball',
    },
    {
        id: 5,
        image: 'images/basketball3.jpg',
        title: 'Nike G.T. Jump 2 EP',
        price: 185,
        category: 'Basketball',
    },
    {
        id: 5,
        image: 'images/basketball4.jpg',
        title: 'Air Jordan XXXVIII PF',
        price: 196,
        category: 'Basketball',
    },
    {
        id: 5,
        image: 'images/basketball5.jpg',
        title: 'Giannis Immortality 3 EP',
        price: 77,
        category: 'Basketball',
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


