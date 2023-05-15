setTimeout(() => {
  var x = document.createElement("h1");
  x.innerText = "LphaBites";
  document.querySelector(".circleld").appendChild(x);
}, 1250);
setTimeout(() => {
  var x = document.createElement("h1");
  x.innerText = "_";
  document.querySelector(".circleld").appendChild(x);
}, 1600);
window.onload = ()=>{
  document.querySelector(".preloader").classList.add("inactive");
  setTimeout(() => {
    document.querySelector(".circleld").classList.add("inactive");
  }, 500);
  setTimeout(() => {
    document.querySelectorAll(".iconset").forEach((item) => {
      item.classList.add("active");
    });
    document.querySelector(".logo").classList.add("active");
  }, 2000);
  setTimeout(() => {
    document.querySelector(".cont").classList.add("active");
    document.querySelector(".discover").classList.add("active");
  
  }, 3000);
}

var audiobtn = document.querySelectorAll(".card button");
audiobtn.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    var audio = btn.getAttribute("data-audio");
    url="music/"+audio+".wav";
    let music = new Audio(url);
    music.play();
  })
})
var picarray = [
  "https://pbs.twimg.com/media/D-u62wWUIAEZrLJ.jpg",
  "https://www.mintface.xyz/content/images/2021/08/QmTndiF423kjdXsNzsip1QQkBQqDuzDhJnGuJAXtv4XXiZ-1.png",
  "https://wallpapers-clan.com/wp-content/uploads/2023/01/chainsaw-man-denji-pfp-5.jpg",
  "https://wallpapers-clan.com/wp-content/uploads/2023/01/spider-man-art-pfp-1.jpg",
  "https://pbs.twimg.com/media/E8aGDSHXMA4fOBR.jpg",
  "https://avatarfiles.alphacoders.com/286/286316.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Kgojuo1S_xsIwCUMkjjD04mOTv8c0W1zCkMOyHJubo_TTrxdvkKDlBS0b-X_kVeqYgc&usqp=CAU",
  "https://m.media-amazon.com/images/M/MV5BMTQwZTNjNDctZWYyZS00M2U2LWI1NDktMjUyYzRlZjQzYTVkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UY281_CR111,0,190,281_.jpg",
];

var newsart = document.querySelector(".segment.wide .mySwiper");
const topart = document.querySelector(".segment.article .mySwiper");
var headart = document.querySelector(".segment.headlines .mySwiper");
const dayart = document.querySelector(".segment.thisday .mySwiper");
const date = new Date();
let dd = date.getDate();
let mm = date.getMonth() + 1;
if (mm < 10) {
  mm = "0" + mm;
}
let yy = date.getFullYear();
let hh = date.getHours();
console.log(hh);
if (hh>=00 && hh<=06) {
    dd = dd-1;
  }
url1 =
  "https://en.wikipedia.org/api/rest_v1/feed/featured/" +
  yy +
  "/" +
  mm +
  "/" +
  dd;
console.log(url1);

fetch(url1).then((res) => res.json().then((result) => datacall1(result)));

function datacall1(result) {
  console.log(result);
  
  result.mostread.articles.forEach((res) => {
    var x = document.createElement("swiper-slide");
    var y = document.createElement("div");
    var z = document.createElement("div");
    var a = document.createElement("div");
    var b = document.createElement("img");
    var c = document.createElement("a");
    y.className = "head1";
    y.innerHTML = res.normalizedtitle;
    z.className="desc1";
    z.innerHTML=res.description;
    a.className="desc";
    a.innerHTML=res.extract;
    b.className = "imagenews";
    c.className="readbtn";
    c.innerText="Read more";
    c.setAttribute("target", "_blank")
    c.href=res.content_urls.desktop.page;
    if (res.thumbnail) {
    b.setAttribute("src", res.thumbnail.source);
        
    }
    b.setAttribute(
      "onerror",
      "this.src='https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=740&t=st=1677328988~exp=1677329588~hmac=653ec6f07169cf8d5df30a236ea5ba9e917d2fff353063c138a5ce5b3cfec7ed'"
    );
    topart.appendChild(x);
    x.appendChild(y);
    x.appendChild(z);
    x.appendChild(a);
    x.appendChild(b);
    x.appendChild(c);
  });
  datacall3(result);

}
var topic = "technology";
url =
  "https://newsapi.org/v2/everything?q=" +
  topic +
  "&apiKey=74123f9226704ff196099476c7f9cb68";
fetch(url).then((res) => res.json().then((result) => datacall(result)));
function datacall(result) {
  console.log(result);
  document.querySelector(".segment.wide").innerHTML="<swiper-container class='mySwiper swiper-initialized swiper-vertical' direction='vertical' space-between='30' mousewheel='true' loop='true' autoplay-delay='12000' autoplay-disable-on-interaction='false'>"
 newsart = document.querySelector(".segment.wide .mySwiper");
  
  result.articles.forEach((res) => {
    var x = document.createElement("swiper-slide");
    var y = document.createElement("div");
    var z = document.createElement("img");
    var z = document.createElement("img");
    var c = document.createElement("img");
    var a = document.createElement("div");
    var d = document.createElement("div");
    var b = document.createElement("div");
    var e = document.createElement("p");
    var f = document.createElement("p");
    var g = document.createElement("i");
    var h =document.createElement("a");
    c.className = "authorpic";
    c.src = picarray[Math.floor(Math.random() * picarray.length)];
    b.className = "author";
    d.className = "authorinfo";
    z.className = "imagenews";
    y.className = "head";
    h.classname = "invisible";
    h.href = res.url;
    h.target = "_blank";
    g.className = "fa-regular fa-star";
    g.setAttribute("title", "star this article");
    g.classList.add("save");
    a.className = "desc";
    e.innerHTML = "by " + "<b>" + res.author + "</b>";
    f.innerHTML = "<b>" + res.source.name + "</b>";
    z.setAttribute("src", res.urlToImage);
    z.setAttribute(
      "onerror",
      "this.src='https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=740&t=st=1677328988~exp=1677329588~hmac=653ec6f07169cf8d5df30a236ea5ba9e917d2fff353063c138a5ce5b3cfec7ed'"
    );

    y.innerHTML = res.title;
    a.innerHTML = res.description;
    newsart.appendChild(x);
    x.appendChild(z);
    x.appendChild(y);
    x.appendChild(a);
    x.appendChild(b);

    b.appendChild(c);
    b.appendChild(d);
    b.appendChild(g);
    d.appendChild(e);
    d.appendChild(f);
    x.appendChild(h);
  });
  var xu = document.querySelectorAll(".segment.wide .mySwiper swiper-slide");
xu.forEach(el=>{
  el.addEventListener("click",()=>{
    el.querySelector("a").click();
  })
})
}

var country= "us";
var headlineurl ="https://newsapi.org/v2/top-headlines?country="+country+"&apiKey=74123f9226704ff196099476c7f9cb68";
fetch(headlineurl).then((res) => res.json().then((result) => datacall2(result)));
function datacall2(result) {
  console.log(result);
  document.querySelector(".segment.headlines").innerHTML="<h2>Headlines</h2><div class='mySwiper'></div>"
 headart = document.querySelector(".segment.headlines .mySwiper");
  result.articles.forEach((res) => {
    var x = document.createElement("swiper-slide");
    var y = document.createElement("div");
    var z = document.createElement("p");
    
    y.className ="head";
    y.textContent= res.title;
    z.innerHTML = "- via "+ res.source.name;
    headart.appendChild(x);
    x.appendChild(y);
    x.appendChild(z);
  });
}
function datacall3(result){
  result.onthisday.forEach((res) => {
    var x = document.createElement("swiper-slide");
    var y = document.createElement("div");
    var z = document.createElement("div");
    z.className= "desc";
    y.className ="head3";
    y.textContent= res.text;
    z.innerHTML = "In the year "+res.year;
    dayart.appendChild(x);
    x.appendChild(y);
    x.appendChild(z);
  });
}
document.querySelectorAll(".topic").forEach((item)=>{
  item.addEventListener("click", ()=>{
    if (item.classList.contains("active")) {
      return;
    }
    else{
      document.querySelectorAll(".topic").forEach((it)=>{
        if (it.classList.contains("active")) {
          it.classList.remove("active");
        }
      })
      item.classList.add("active");
    }
    topic = item.textContent;
    url =
  "https://newsapi.org/v2/everything?q=" +
  topic +
  "&apiKey=74123f9226704ff196099476c7f9cb68";
  fetch(url).then((res) => res.json().then((result) => datacall(result)));

  })
})
document.querySelectorAll(".topic1").forEach((item)=>{
  item.addEventListener("click", ()=>{
    if (item.classList.contains("active")) {
      return;
    }
    else{
      document.querySelectorAll(".topic1").forEach((it)=>{
        if (it.classList.contains("active")) {
          it.classList.remove("active");
        }
      })
      item.classList.add("active");
    }
    var country= item.getAttribute("data-query");
var headlineurl ="https://newsapi.org/v2/top-headlines?country="+country+"&apiKey=74123f9226704ff196099476c7f9cb68";
console.log(headlineurl);
  fetch(headlineurl).then((res) => res.json().then((result) => datacall2(result)));
  })
})