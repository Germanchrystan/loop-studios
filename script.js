class Item{
	constructor(title,url){
		this.title=title;
		this.url=url;
	};
}


const itemArray=
	[
		new Item('DEEP EARTH','images/desktop/image-deep-earth.jpg'),
		new Item('NIGHT ARCADE','images/desktop/image-night-arcade.jpg'),
		new Item('SOCCER TEAM VR','images/desktop/image-soccer-team.jpg'),
		new Item('THE GRID','images/desktop/image-grid.jpg'),
		new Item('FROM UP ABOVE VR','images/desktop/image-from-above.jpg'),
		new Item('POCKET BOREALIS','images/desktop/image-pocket-borealis.jpg'),
		new Item('THE CURIOSITY','images/desktop/image-curiosity.jpg'),
		new Item('MAKE IT FISHEYE','images/desktop/image-fisheye.jpg')
	]





window.addEventListener("load",(e)=>{
	const fragment=document.createDocumentFragment();
	const container=document.querySelector(".item-container");
		
	for(let i=0; i<itemArray.length; i++){
		const newItem=document.createElement("DIV");

		newItem.innerHTML=`
					<div class="item-image image${i}"></div>
					<div class="item-title"><h1>${itemArray[i].title}</h1></div>`;

		let newStyle =	document.createElement("STYLE");
		newStyle.innerHTML=`.image${i}{
								background: url('${itemArray[i].url}') no-repeat;
 								background-size: cover;
 								background-size: contain}`;

 		newItem.classList.add("item");						
		fragment.appendChild(newItem);
		fragment.appendChild(newStyle);
	}
	container.appendChild(fragment);
})

