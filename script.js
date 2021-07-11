class Item{
	constructor(title,url,backgroundPositionY){
		this.title=title;
		this.url=url;
		this.backgroundPositionY=backgroundPositionY;
	};
}


const itemArray=
	[
		new Item('DEEP EARTH','images/desktop/image-deep-earth.jpg','end'),
		new Item('NIGHT ARCADE','images/desktop/image-night-arcade.jpg','start'),
		new Item('SOCCER TEAM VR','images/desktop/image-soccer-team.jpg','start'),
		new Item('THE GRID','images/desktop/image-grid.jpg','center'),
		new Item('FROM UP ABOVE VR','images/desktop/image-from-above.jpg','start'),
		new Item('POCKET BOREALIS','images/desktop/image-pocket-borealis.jpg','start'),
		new Item('THE CURIOSITY','images/desktop/image-curiosity.jpg','start'),
		new Item('MAKE IT FISHEYE','images/desktop/image-fisheye.jpg','center')
	]





window.addEventListener("load",(e)=>{
	const fragment=document.createDocumentFragment();
	const container=document.querySelector(".item-container");
		
	for(let i=0; i<itemArray.length; i++){
		const newItem=document.createElement("DIV");

		newItem.innerHTML=`
					
						<div class="item-image image${i}">
						</div>
						<div class="item-title"><h1>${itemArray[i].title}</h1></div>
					`

		let newStyle =	document.createElement("STYLE");
		newStyle.innerHTML=`.image${i}{
								background: url('${itemArray[i].url}') no-repeat;
 								background-size: cover;
								background-position-y: ${itemArray[i].backgroundPositionY};
 								`;

 		newItem.classList.add("item");						
		fragment.appendChild(newItem);
		fragment.appendChild(newStyle);
	}
	container.appendChild(fragment);
})



//============================ SANDWICH MENU ======================================//
const sandwichButton = document.querySelector('#sandwich-button')
const navigationMenu = document.querySelector('#navigation-menu');
const body = document.querySelector('body');
let canScroll = true;


sandwichButton.addEventListener("click", () => {
	navigationMenu.classList.toggle('navigation-menu-open')
	sandwichButton.classList.toggle('sandwich-button-open')
	canScroll = !canScroll;
	
	body.style['overflow-y'] = `${canScroll? 'auto':'hidden'}`
})
