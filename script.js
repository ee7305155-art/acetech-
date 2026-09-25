const products=[
 {name:"Itel A70",brand:"Itel",spec:"6.6” Display • 4GB RAM • 128GB",price:110000,type:"itel"},
 {name:"iPhone 15",brand:"iPhone",spec:"6.1” Super Retina • 128GB",price:780000,type:"iphone"},
 {name:"Samsung Galaxy A15",brand:"Samsung",spec:"6.5” Display • 6GB RAM • 128GB",price:320000,type:"samsung"},
 {name:"Itel S25",brand:"Itel",spec:"6.78” Display • 8GB RAM • 256GB",price:185000,type:"itel"},
 {name:"Samsung Galaxy S24",brand:"Samsung",spec:"6.2” AMOLED • 8GB RAM • 256GB",price:1250000,type:"samsung"},
 {name:"iPhone 13",brand:"iPhone",spec:"6.1” Super Retina • 128GB",price:620000,type:"iphone"},
 {name:"Itel P55",brand:"Itel",spec:"6.6” Display • 8GB RAM • 128GB",price:155000,type:"itel"},
 {name:"Samsung Galaxy A25",brand:"Samsung",spec:"6.5” AMOLED • 8GB RAM • 256GB",price:410000,type:"samsung"}
];
let cart=0;
const money=n=>"₦"+n.toLocaleString("en-NG");
function render(list=products){document.querySelector("#products").innerHTML=list.map(p=>`
<div class="card"><div class="product-img"><div class="mini-phone ${p.type}">${p.type==="iphone"?"":p.type==="samsung"?"SAMSUNG":"itel"}</div></div>
<h3>${p.name}</h3><div class="spec">${p.spec}</div><div class="price">${money(p.price)}</div><button class="add" onclick="addCart('${p.name}')">Add to Cart</button></div>`).join("")}
function addCart(name){cart++;document.querySelector("#cartCount").textContent=cart;const t=document.querySelector("#toast");t.textContent=name+" added to cart";t.style.display="block";setTimeout(()=>t.style.display="none",1800)}
function filterBrand(brand){render(brand==="all"?products:products.filter(p=>p.brand===brand));document.querySelector("#phones").scrollIntoView({behavior:"smooth"})}
function searchProducts(){const q=document.querySelector("#search").value.toLowerCase();render(products.filter(p=>(p.name+" "+p.brand).toLowerCase().includes(q)))}
document.querySelector("#search").addEventListener("keydown",e=>{if(e.key==="Enter")searchProducts()});
render();
