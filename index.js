const image = document.getElementById("imagecenter");

async function gennewimage(){
	const response = await fetch("https://dog.ceo/api/breeds/image/random",{method:"GET"});
	const json = await response.json();
	image.src = json.message;
}

gennewimage();


/*
fetch("https://dog.ceo/api/breeds/image/random",{method:"GET"}).then(response =>{
	response.json().then(response=>{
		image.src = response.message;
	})
});
*/