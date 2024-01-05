const btns=[
    {
        id: 0,
        name: 'All'
    },
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
    },
    {
        id: 6,
        name: 'White'
    },
    {
        id: 7,
        name: 'Black'
    },
    {
        id: 8,
        name: 'Blue'
    },
    {
        id: 9,
        name: 'Red'
    },
    {
        id: 10,
        name: 'Pink'
    },
    {
        id: 11,
        name: 'Gray'
    },
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
        image: 'images/jordan2.jpg',
        title: 'Air Jordan 1 Elevate Low',
        price: 7095,
        category: 'Jordan',
    },
    {
        id: 1,
        image: 'images/jordan3.jpg',
        title: 'Air Jordan 1 Low G',
        price: 7895,
        category: 'Jordan',
    },
    {
        id: 1,
        image: 'images/jordan4.jpg',
        title: 'Air Jordan 1 Low SE',
        price: 7095,
        category: 'Jordan',
    },


    {
        id: 2,
        image: 'images/airmax2.jpg',
        title: 'Nike Air Max Scorpion Flyknit',
        price: 13595,
        category: 'Airmax',
    },
    {
        id: 2,
        image: 'images/airmax4.jpg',
        title: 'Nike Tiempo Legend 10 Elite',
        price: 12295,
        category: 'Airmax',
    },
    {
        id: 2,
        image: 'images/airmax5.jpg',
        title: 'Nike Air Max 97',
        price: 9595,
        category: 'Airmax',
    },


    {
        id: 3,
        image: 'images/airforce1.jpg',
        title: 'Nike Air Force 1 07',
        price: 1599,
        category: 'Airforce',
    },
    {
        id: 3,
        image: 'images/airforce4.jpg',
        title: 'Nike Air Force 1 07 Mid',
        price: 6195,
        category: 'Airforce',
    },
    {
        id: 3,
        image: 'images/airforce5.jpg',
        title: 'Nike Air Force 1 PLT.AF.ORM',
        price: 6195,
        category: 'Airforce',
    },


    {
        id: 4,
        image: 'images/running1.jpg',
        title: 'Nike Invincible 3',
        price: 9895,
        category: 'Running',
    },
    {
        id: 4,
        image: 'images/running4.jpg',
        title: 'Nike Pegasus 40',
        price: 14495,
        category: 'Running',
    },
    {
        id: 4,
        image: 'images/running5.jpg',
        title: 'Nike Pegasus 40 "Eliud Kipchoge"',
        price: 7395,
        category: 'Running',
    },

    {
        id: 5,
        image: 'images/basketball2.jpg',
        title: 'Tatum 1 Home Team PF',
        price: 6895,
        category: 'Basketball',
    },
    {
        id: 5,
        image: 'images/basketball3.jpg',
        title: 'Nike G.T. Jump 2 EP',
        price: 9895,
        category: 'Basketball',
    },
    {
        id: 5,
        image: 'images/basketball5.jpg',
        title: 'Giannis Immortality 3 EP',
        price: 4295,
        category: 'Basketball',
    },

    {
        id: 6,
        image: 'images/jordan3.jpg',
        title: 'Air Jordan 1 Low G',
        price: 7895,
        category: 'White',
    },
    {
        id: 6,
        image: 'images/airmax5.jpg',
        title: 'Nike Air Max 97',
        price: 9595,
        category: 'White',
    },
    {
        id: 6,
        image: 'images/airforce1.jpg',
        title: 'Nike Air Force 1 07',
        price: 1599,
        category: 'White',
    },
    {
        id: 6,
        image: 'images/airmax5.jpg',
        title: 'Nike Air Force 1 07 Mid',
        price: 6195,
        category: 'White',
    },
    {
        id: 6,
        image: 'images/airforce5.jpg',
        title: 'Nike Air Force 1 PLT.AF.ORM',
        price: 6195,
        category: 'White',
    },
    {
        id: 6,
        image: 'images/running5.jpg',
        title: 'Nike Pegasus 40 "Eliud Kipchoge"',
        price: 7395,
        category: 'White',
    },

    {
        id: 7,
        image: 'images/jordan4.jpg',
        title: 'Air Jordan 1 Low SE',
        price: 7095,
        category: 'Black',
    },
    {
        id: 7,
        image: 'images/airmax2.jpg',
        title: 'Nike Air Max Scorpion Flyknit',
        price: 13595,
        category: 'Black',
    },
    {
        id: 7,
        image: 'images/basketball3.jpg',
        title: 'Nike G.T. Jump 2 EP',
        price: 9895,
        category: 'Black',
    },
    {
        id: 7,
        image: 'images/basketball5.jpg',
        title: 'Giannis Immortality 3 EP',
        price: 4295,
        category: 'Black',
    },

    {
        id: 8,
        image: 'images/airmax4.jpg',
        title: 'Nike Tiempo Legend 10 Elite',
        price: 12295,
        category: 'Blue',
    },

    {
        id: 9,
        image: 'images/jordan2.jpg',
        title: 'Air Jordan 1 Elevate Low',
        price: 7095,
        category: 'Red',
    },

    {
        id: 10,
        image: 'images/running4.jpg',
        title: 'Nike Pegasus 40',
        price: 14495,
        category: 'Pink',
    },

    {
        id: 11,
        image: 'images/running1.jpg',
        title: 'Nike Invincible 3',
        price: 9895,
        category: 'Gray',
    }
];


const categories = [...new Set(product.map((item)=>
    {return item}))]

    const filterItems = (a) => {
        let filteredProducts;
    
        if (a === 0) {
            // If the button clicked is "All", display all products
            filteredProducts = product;
        } else {
            // filter products based on the category ID
            filteredProducts = product.filter(item => item.id === a);
        }
    
        displayItem(filteredProducts);
    } 

/* displays img, img-box, and price */
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
            <h2>PHP ${price}</h2>                   
            <button></button>
            </div>
            </div>`)
        }).join('');
}
displayItem(categories);

/* popup image */
document.addEventListener('click', function (event) {
    /*Check if the clicked element is an image inside an element with the class 'img-box' */
    if (event.target.closest('.img-box img')) {
      var image = event.target.closest('.img-box img');
  
      /* Display the popup and set the image source */
      document.querySelector('.popup-image').style.display = 'block';
      document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
  
    /* Check if the clicked element is the image inside the popup */
    if (event.target.matches('.popup-image img')) {
      /* Hide the popup */
      document.querySelector('.popup-image').style.display = 'none';
    }
  });

