
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click',()=>{
  body.classList.add('active');
})
closeShopping.addEventListener('click',()=>{
  body.classList.remove('active');
})
var addItemId =0;
function addToCart(item){
  addItemId +=1;
  var selectedItem =document.createElement('div');
  selectedItems.classList.add('cartImg');
  selectedItem.setAttribute('id',addItemId);
  var img = document.createElement('img');
  img.setAttribute('src',item.children[o],currentSrc);
  var title = document.createElement('div');
  title.innerText = item.childern[1]. innerText;
  var label = document.createElement('div');
  label.innerText = item.childern[2],childern[0],innerText;
  var select = document.createElement('span');
  select.innerText =item.children[2].childern[1].value;
  label.append(select);
  var delBtn =document.createElement('button');
  delBtn.innerText = 'Delete';
  delBtn.setAttribute('onclick','del('+addItemId+')');
  var cartItems =document.getElementById('title');
  selectedItems.append(img);
  selectedItem.append(h2);
  selectedItem.append(label);
  selectedItem.append(delBtn);
  cartItems.append(selectedItem);

}
