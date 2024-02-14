async function getProduct() {
  const response = await axios.get('https://dummyjson.com/products');
  const data = response.data.products;
  const result =data.map(function(ele){
    return `
    <div class='product'>
    <h2>${ele.title}</h2>
    <img src='${ele.thumbnail}'/>
    <a href="details.html?product_id=${ele.id}">DETAILS</a>
    </div>
    `
  }).join('');
  document.querySelector('.pro').innerHTML=result;
  
}
getProduct();
  