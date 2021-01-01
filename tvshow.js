const form=document.querySelector("#form")

form.addEventListener('submit',async function(e){
  e.preventDefault()
  const searchTerm=form.elements.query.value

  const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
  console.log(res.data)
  makeImages(res.data)
  //console.log(e)
})

const makeImages = (shows)=>{
	const images=document.querySelectorAll('img')
	for(let image of images)
	{
		image.remove()
         
	}
	for(let result of shows){
		if(result.show.image)
		{
		 const img= document.createElement('IMG')
		
  img.src=result.show.image.medium

  document.body.append(img)
}
	}
}