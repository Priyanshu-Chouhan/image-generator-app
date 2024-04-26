document.addEventListener("DOMContentLoaded", function() {
 let Acces_Key = "OUfn-YNjHSNL8kmqgrW-BGax52JzwwB3rVtoT2713Bs";
 // target button from html
 let searchInput = document.getElementById("searchInput");
 let searchBtn = document.getElementById("searchBtn");
 let showData = document.querySelector(".showData");
// creating a new page for shoiwng more images
 let page = 1;
 const getData = async (searchValue, pageNo) => {
 let fetching = await
fetch(`https://api.unsplash.com/search/photos?query=${searchValue}&per_
Page=28&P=${pageNo} age&client_id=${Acces_Key}`);
 let jsonData = await fetching.json();
 console.log(jsonData.results);
 if(pageNo === 1){
 showData.innerHTML="" //new search result show in beginning
//(data value clear
 }
 if(searchInput.value ==""){
 showData.innerHTML=`
 <h1>Please write something in Search Box</h1>
 `
 }
 // active more image button
 else{
 document.querySelector(".loadMore").style.display="block";
 }

// use for each for show data one by one speratly
 jsonData.results.forEach(function(data){
 console.log(data.urls.small);
 // craete a div for show imge sperataly
 let div = document.createElement("div");
 //add a class and class name is "card"
 div.classList.add("card");
 showData.appendChild(div);
 div.innerHTML=`
 <img src="${data.urls.small}" alt="">
 <a href=${data.links.html}
target="_blank">${data.alt_description}</a>
 `
 })
 }
 searchBtn.addEventListener("click", function() {
 let searchValue = searchInput.value;
 getData(searchValue,1);
 });
 moreBtn.addEventListener("click", function(){
 let searchVlaue= searchInput.value;
 getData(searchVlaue,page++ )
 })
});