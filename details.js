async function getID(){
    const URLParams= new URLSearchParams(window.location.search);
    const id = URLParams.get('product_id');
    const response = await axios.get(`https://dummyjson.com/products/${id}`);

    
    const{title,category,rating,thumbnail,description,price,discountPercentage,stock,images}=response.data;
    document.querySelector('h3').textContent=description;
    document.querySelector('.title').textContent=title;
    document.querySelector('img').src=thumbnail;
    document.querySelector('.rate').textContent+=rating;
    document.querySelector('.price').textContent+=price;
   
}

getID();