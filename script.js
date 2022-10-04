// HTML

let root = document.getElementById('root')

let space = document.createElement('div')
space.id = "space"
document.querySelector('body').prepend(space)

let star = document.createElement('div')
document.getElementById('space').append(star)
star.id = "stars"
let star2 = document.createElement('div')
star2.id = "stars2"
document.getElementById('space').append(star2)
let star3 = document.createElement('div')
star3.id = "stars3"
document.getElementById('space').append(star3)

let shootingStar1 = document.createElement('span')
document.getElementById('space').append(shootingStar1)
shootingStar1.id ="shootingStar1"

let shootingStar2 = document.createElement('span')
document.getElementById('space').append(shootingStar2)
shootingStar2.id ="shootingStar2"

let shootingStar3 = document.createElement('span')
document.getElementById('space').append(shootingStar3)
shootingStar3.id ="shootingStar3"

let shootingStar4 = document.createElement('span')
document.getElementById('space').append(shootingStar4)
shootingStar4.id ="shootingStar4"

let shootingStar5 = document.createElement('span')
document.getElementById('space').append(shootingStar5)
shootingStar5.id ="shootingStar5"

let shootingStar6 = document.createElement('span')
document.getElementById('space').append(shootingStar6)
shootingStar6.id ="shootingStar6"

let shootingStar7 = document.createElement('span')
document.getElementById('space').append(shootingStar7)
shootingStar7.id ="shootingStar7"

let shootingStar8 = document.createElement('span')
document.getElementById('space').append(shootingStar8)
shootingStar8.id ="shootingStar8"


let planet = document.createElement('div')
planet.id = "planet"
space.after(planet)

let topUp = document.createElement('a')
topUp.setAttribute('name',"top")
root.append(topUp)


let header = document.createElement('header')
document.getElementById('root').append(header)

header.id = "menu"

let dateInput = document.createElement('input')
document.getElementById('menu').append(dateInput)


dateInput.type = "date"
dateInput.min = "1995-06-05";
dateInput.max = `${today}`;

let logo = document.createElement('img')
document.getElementById('menu').append(logo)

logo.src = "./img/nasa_logo_icon.png"
logo.style.height = "200px"
logo.style.filter = "invert(1)"
logo.style.objectFit = "cover"

let link = document.createElement('a')
document.getElementById('menu').append(link)

link.innerText = "Gallery"
link.href = "#gallery"

let heroDiv = document.createElement('div')
document.getElementById('root').append(heroDiv)

heroDiv.id = "hero"

let title = document.createElement('h1')
heroDiv.append(title)
title.id = "title"

let image = document.createElement('img')
title.after(image)

image.style.height = "100%"
image.style.width = "100%"
image.style.maxWidth = "1280px"
image.style.aspectRatio = "16/9"
image.style.borderRadius = "17px"
image.style.boxShadow = "0px 18px 35px 1px rgb(2, 9, 27, 0.8)"
image.style.objectFit = "cover"
image.style.display = "none"


let iframe = document.createElement('iframe')
title.after(iframe)

iframe.height = "100%"
iframe.width = "100%"
iframe.style.maxWidth = "1280px"
iframe.style.aspectRatio = "16/9"
iframe.style.borderRadius = "17px"
iframe.style.border = "none"
iframe.style.boxShadow = "0px 10px 50px 1px rgb(2, 9, 27, 0.8)"
iframe.style.display = "none"

let explanation = document.createElement('p')
heroDiv.append(explanation)

let galleryTitle = document.createElement('h2')
root.append(galleryTitle)

galleryTitle.innerText = "Gallery"
galleryTitle.id = "gallery"


// GRID

let grid = document.createElement('div')
galleryTitle.after(grid)

grid.id = "grid"

let gridBox1 = document.createElement('div')
grid.append(gridBox1)
let linkToTop = document.createElement('a')
gridBox1.append(linkToTop)
linkToTop.href ="#top"
let gridImage1 = document.createElement('img')
linkToTop.append(gridImage1)
gridImage1.style.display = "none"

let gridIframe1 = document.createElement('iframe')
linkToTop.append(gridIframe1)
gridIframe1.style.display = "none"

let subTitle =document.createElement('div')
gridBox1.append(subTitle)
subTitle.className ="desc"

let subDate

let gridBox2 =document.createElement('div')
grid.append(gridBox2)
let linkToTop2 = document.createElement('a')
gridBox2.append(linkToTop2)
linkToTop2.href ="#top"
let gridImage2 = document.createElement('img')
linkToTop2.append(gridImage2)
gridImage2.style.display = "none"

let gridIframe2 = document.createElement('iframe')
gridBox2.append(gridIframe2)
gridIframe2.style.display = "none"

let subTitle2 =document.createElement('div')
gridBox2.append(subTitle2)
subTitle2.className ="desc"

let subDate2

let gridBox3 =document.createElement('div')
grid.append(gridBox3)
let gridImage3 = document.createElement('img')
gridBox3.append(gridImage3)
gridImage3.style.display = "none"

let gridIframe3 = document.createElement('iframe')
gridBox3.append(gridIframe3)
gridIframe3.style.display = "none"

let subTitle3 =document.createElement('div')
gridBox3.append(subTitle3)
subTitle3.className ="desc"

let subDate3

let gridBox4 =document.createElement('div')
grid.append(gridBox4)
let gridImage4 = document.createElement('img')
gridBox4.append(gridImage4)
gridImage4.style.display = "none"

let gridIframe4 = document.createElement('iframe')
gridBox4.append(gridIframe4)
gridIframe4.style.display = "none"

let subTitle4 =document.createElement('div')
gridBox4.append(subTitle4)
subTitle4.className ="desc"

let subDate4

let gridBox5 =document.createElement('div')
grid.append(gridBox5)
let gridImage5 = document.createElement('img')
gridBox5.append(gridImage5)
gridImage5.style.display = "none"

let gridIframe5 = document.createElement('iframe')
gridBox5.append(gridIframe5)
gridIframe5.style.display = "none"

let subTitle5 =document.createElement('div')
gridBox5.append(subTitle5)
subTitle5.className ="desc"

let subDate5

let gridBox6 =document.createElement('div')
grid.append(gridBox6)
let gridImage6 = document.createElement('img')
gridBox6.append(gridImage6)
gridImage6.style.display = "none"

let gridIframe6 = document.createElement('iframe')
gridBox6.append(gridIframe6)
gridIframe6.style.display = "none"

let subTitle6 =document.createElement('div')
gridBox6.append(subTitle6)
subTitle6.className ="desc"

let subDate6

let gridBox7 =document.createElement('div')
grid.append(gridBox7)
let gridImage7 = document.createElement('img')
gridBox7.append(gridImage7)
gridImage7.style.display = "none"

let gridIframe7= document.createElement('iframe')
gridBox7.append(gridIframe7)
gridIframe7.style.display = "none"

let subTitle7 =document.createElement('div')
gridBox7.append(subTitle7)
subTitle7.className ="desc"

let subDate7

let gridBox8 =document.createElement('div')
grid.append(gridBox8)
let gridImage8 = document.createElement('img')
gridBox8.append(gridImage8)
gridImage8.style.display = "none"

let gridIframe8= document.createElement('iframe')
gridBox8.append(gridIframe8)
gridIframe8.style.display = "none"

let subTitle8 =document.createElement('div')
gridBox8.append(subTitle8)
subTitle8.className ="desc"

let subDate8

let gridBox9 =document.createElement('div')
grid.append(gridBox9)
let gridImage9 = document.createElement('img')
gridBox9.append(gridImage9)
gridImage9.style.display = "none"

let gridIframe9= document.createElement('iframe')
gridBox9.append(gridIframe9)
gridIframe9.style.display = "none"

let subTitle9 =document.createElement('div')
gridBox9.append(subTitle9)
subTitle9.className ="desc"

let subDate9

// FOOTER

let footer = document.createElement('footer')
document.getElementById('root').append(footer)

let note = document.createElement('h4')
document.querySelector('footer').append(note)

note.innerText = "© 2022 Infinity and Beyond.";

let footerLogo = document.createElement('img')
document.querySelector('footer').append(footerLogo)

footerLogo.src = "./img/NASA_Wormball_logo.svg"


// CURERNT DATE

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

// TEN DAYS EARLIER

let date = new Date()

var daysAgo = new Date(date.getTime());

daysAgo.setDate(date.getDate() - 9);

var dd = String(daysAgo.getDate()).padStart(2, '0');
var mm = String(daysAgo.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = daysAgo.getFullYear();

daysAgo = yyyy + '-' + mm + '-' + dd;


dateInput.value = today

let customDate = dateInput.value

// DATA

let data

// FETCH

let request = async () => {
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=UkgRiB5b97SHhYV6yabVu1GEZEDXUTmaHo1zFH16&start_date=${daysAgo}&end_date=${customDate}`)
    data = await response.json()
    let type = data[9].media_type
    title.innerText = `${data[9].title}`

    if (type === "image") {
        iframe.style.display = "none"
        image.setAttribute('src', `${data[9].url}`)
        image.style.display = "block"

    } else if (type === "video") {
        image.style.display = "none"
        iframe.setAttribute('src', `${data[9].url}?&autoplay=1&controls=0&mute=0&loop=1`)
        iframe.style.display = "block"
    }
    explanation.innerText = `${data[9].explanation}`

subTitle.innerText = `${data[8].title}`
subTitle2.innerText = `${data[7].title}`
subTitle3.innerText = `${data[6].title}`
subTitle4.innerText = `${data[5].title}`
subTitle5.innerText = `${data[4].title}`
subTitle6.innerText = `${data[3].title}`
subTitle7.innerText = `${data[2].title}`
subTitle8.innerText = `${data[1].title}`
subTitle9.innerText = `${data[0].title}`


subDate = `${data[8].date}`
subDate2 = `${data[7].date}`
subDate3 = `${data[6].date}`
subDate4 = `${data[5].date}`
subDate5 = `${data[4].date}`
subDate6 = `${data[3].date}`
subDate7 = `${data[2].date}`
subDate8 = `${data[1].date}`
subDate9 = `${data[0].date}`


    let subTitles = document.getElementsByClassName('desc');


    if (data[8].media_type === "image") {
        gridIframe1.style.display = "none"
        gridImage1.setAttribute('src', `${data[8].url}`)
        gridImage1.style.display = "block"

    }  if (data[8].media_type === "video") {
        gridImage1.style.display = "none"
        gridIframe1.setAttribute('src', `${data[8].url}?&autoplay=1&controls=0&mute=1&loop=1`)
        gridIframe1.style.display = "block"
    }
    if (data[7].media_type === "image") {
        gridIframe2.style.display = "none"
        gridImage2.setAttribute('src', `${data[7].url}`)
        gridImage2.style.display = "block"

    }  if (data[7].media_type === "video") {
        gridImage2.style.display = "none"
        gridIframe2.setAttribute('src', `${data[7].url}?&autoplay=1&controls=0&mute=1&loop=1`)
        gridIframe2.style.display = "block"
    }
    if (data[6].media_type === "image") {
        gridIframe3.style.display = "none"
        gridImage3.setAttribute('src', `${data[6].url}`)
        gridImage3.style.display = "block"

    }  if (data[6].media_type === "video") {
        gridImage3.style.display = "none"
        gridIframe3.setAttribute('src', `${data[6].url}?&autoplay=1&controls=0&mute=1&loop=1`)
        gridIframe3.style.display = "block"
    }
    if (data[5].media_type === "image") {
        gridIframe4.style.display = "none"
        gridImage4.setAttribute('src', `${data[5].url}`)
        gridImage4.style.display = "block"

    }  if (data[5].media_type === "video") {
        gridImage4.style.display = "none"
        gridIframe4.setAttribute('src', `${data[5].url}?&autoplay=1&controls=0&mute=1&loop=1`)
        gridIframe4.style.display = "block"
    }
    if (data[4].media_type === "image") {
        gridIframe5.style.display = "none"
        gridImage5.setAttribute('src', `${data[4].url}`)
        gridImage5.style.display = "block"

    }  if (data[4].media_type === "video") {
        gridImage5.style.display = "none"
        gridIframe5.setAttribute('src', `${data[4].url}?&autoplay=1&controls=0&mute=1&loop=1`)
        gridIframe5.style.display = "block"
    }
    if (data[3].media_type === "image") {
        gridIframe6.style.display = "none"
        gridImage6.setAttribute('src', `${data[3].url}`)
        gridImage6.style.display = "block"

    }  if (data[3].media_type === "video") {
        gridImage6.style.display = "none"
        gridIframe6.setAttribute('src', `${data[3].url}?&autoplay=1&controls=0&mute=1&loop=1`)
        gridIframe6.style.display = "block"
    }
    if (data[2].media_type === "image") {
        gridIframe7.style.display = "none"
        gridImage7.setAttribute('src', `${data[2].url}`)
        gridImage7.style.display = "block"

    }  if (data[2].media_type === "video") {
        gridImage7.style.display = "none"
        gridIframe7.setAttribute('src', `${data[2].url}?&autoplay=1&controls=0&mute=1&loop=1`)
        gridIframe7.style.display = "block"
    }
    if (data[1].media_type === "image") {
        gridIframe8.style.display = "none"
        gridImage8.setAttribute('src', `${data[1].url}`)
        gridImage8.style.display = "block"

    }  if (data[1].media_type === "video") {
        gridImage8.style.display = "none"
        gridIframe8.setAttribute('src', `${data[1].url}?&autoplay=1&controls=0&mute=1&loop=1`)
        gridIframe8.style.display = "block"
    }
    if (data[0].media_type === "image") {
        gridIframe9.style.display = "none"
        gridImage9.setAttribute('src', `${data[0].url}`)
        gridImage9.style.display = "block"

    }  if (data[0].media_type === "video") {
        gridImage9.style.display = "none"
        gridIframe9.setAttribute('src', `${data[0].url}?&autoplay=1&controls=0&mute=1&loop=1`)
        gridIframe9.style.display = "block"
    }
}

request(daysAgo, customDate);

// EVENTLISENTER

let userInput = (e) => {
    customDate = e.target.value

    date = new Date(Date.parse(e.target.value));

    daysAgo = new Date(date.getTime());

    daysAgo.setDate(date.getDate() - 9);

    var dd = String(daysAgo.getDate()).padStart(2, '0');
    var mm = String(daysAgo.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = daysAgo.getFullYear();

    daysAgo = yyyy + '-' + mm + '-' + dd;
    request(daysAgo, customDate);

}

function  fetchGallery(num){
if ( subDate != `${data[9].date}`) {

    dateInput.value = subDate
    title.innerText = `${data[num].title}`

    
        if (data[num].media_type === "image") {
            iframe.style.display = "none"
            image.setAttribute('src', `${data[num].url}`)
            image.style.display = "block"
    
        } else if (data[num].media_type === "video") {
            image.style.display = "none"
            iframe.setAttribute('src', `${data[num].url}?&autoplay=1&controls=0&mute=0&loop=1`)
            iframe.style.display = "block"
        }
        explanation.innerText = `${data[num].explanation}`


    if (data[9].media_type === "image") {
        gridIframe1.style.display = "none"
        gridImage1.setAttribute('src', `${data[9].url}`)
        gridImage1.style.display = "block"

    }  if (data[9].media_type === "video") {
        gridImage1.style.display = "none"
        gridIframe1.setAttribute('src', `${data[9].url}?&autoplay=1&controls=0&mute=1&loop=1`)
        gridIframe1.style.display = "block"
    }

    subTitle.innerText = `${data[9].title}`
    subDate = `${data[9].date}`
} else {
    dateInput.value = `${data[9].date}`
    title.innerText = `${data[9].title}`

    
        if (data[9].media_type === "image") {
            iframe.style.display = "none"
            image.setAttribute('src', `${data[9].url}`)
            image.style.display = "block"
    
        } else if (data[9].media_type === "video") {
            image.style.display = "none"
            iframe.setAttribute('src', `${data[9].url}?&autoplay=1&controls=0&mute=0&loop=1`)
            iframe.style.display = "block"
        }
        explanation.innerText = `${data[9].explanation}`
                        

    if (data[num].media_type === "image") {
        gridIframe1.style.display = "none"
        gridImage1.setAttribute('src', `${data[num].url}`)
        gridImage1.style.display = "block"

    }  if (data[num].media_type === "video") {
        gridImage1.style.display = "none"
        gridIframe1.setAttribute('src', `${data[num].url}?&autoplay=1&controls=0&mute=1&loop=1`)
        gridIframe1.style.display = "block"
    }

    subTitle.innerText = `${data[num].title}`
    subDate = `${data[num].date}`


}
}
function  fetchGallery2(num){
    if ( subDate2 != `${data[9].date}` ) {
    
        dateInput.value = subDate2
        title.innerText = `${data[num].title}`
    
        
            if (data[num].media_type === "image") {
                iframe.style.display = "none"
                image.setAttribute('src', `${data[num].url}`)
                image.style.display = "block"
        
            } else if (data[num].media_type === "video") {
                image.style.display = "none"
                iframe.setAttribute('src', `${data[num].url}?&autoplay=1&controls=0&mute=0&loop=1`)
                iframe.style.display = "block"
            }
            explanation.innerText = `${data[num].explanation}`
    
    
        if (data[9].media_type === "image") {
            gridIframe2.style.display = "none"
            gridImage2.setAttribute('src', `${data[9].url}`)
            gridImage2.style.display = "block"
    
        }  if (data[9].media_type === "video") {
            gridImage2.style.display = "none"
            gridIframe2.setAttribute('src', `${data[9].url}?&autoplay=1&controls=0&mute=1&loop=1`)
            gridIframe2.style.display = "block"
        } 
        subTitle2.innerText = `${data[9].title}`
        subDate2 = `${data[9].date}`
    } else {
        dateInput.value = `${data[9].date}`
        title.innerText = `${data[9].title}`
    
        
            if (data[9].media_type === "image") {
                iframe.style.display = "none"
                image.setAttribute('src', `${data[9].url}`)
                image.style.display = "block"
        
            } else if (data[9].media_type === "video") {
                image.style.display = "none"
                iframe.setAttribute('src', `${data[9].url}?&autoplay=1&controls=0&mute=0&loop=1`)
                iframe.style.display = "block"
            }
            explanation.innerText = `${data[9].explanation}`
                            
    
        if (data[num].media_type === "image") {
            gridIframe2.style.display = "none"
            gridImage2.setAttribute('src', `${data[num].url}`)
            gridImage2.style.display = "block"
    
        }  if (data[num].media_type === "video") {
            gridImage2.style.display = "none"
            gridIframe2.setAttribute('src', `${data[num].url}?&autoplay=1&controls=0&mute=1&loop=1`)
            gridIframe2.style.display = "block"
        }
    
        subTitle2.innerText = `${data[num].title}`
        subDate2 = `${data[num].date}`
    
    
    }
    }
function  fetchGallery3(num){
        if ( subDate2 != `${data[9].date}` ) {
        
            dateInput.value = subDate2
            title.innerText = `${data[num].title}`
        
            
                if (data[num].media_type === "image") {
                    iframe.style.display = "none"
                    image.setAttribute('src', `${data[num].url}`)
                    image.style.display = "block"
            
                } else if (data[num].media_type === "video") {
                    image.style.display = "none"
                    iframe.setAttribute('src', `${data[num].url}?&autoplay=1&controls=0&mute=0&loop=1`)
                    iframe.style.display = "block"
                }
                explanation.innerText = `${data[num].explanation}`
        
        
            if (data[9].media_type === "image") {
                gridIframe2.style.display = "none"
                gridImage2.setAttribute('src', `${data[9].url}`)
                gridImage2.style.display = "block"
        
            }  if (data[9].media_type === "video") {
                gridImage2.style.display = "none"
                gridIframe2.setAttribute('src', `${data[9].url}?&autoplay=1&controls=0&mute=1&loop=1`)
                gridIframe2.style.display = "block"
            } 
            subTitle2.innerText = `${data[9].title}`
            subDate2 = `${data[9].date}`
        } else {
            dateInput.value = `${data[9].date}`
            title.innerText = `${data[9].title}`
        
            
                if (data[9].media_type === "image") {
                    iframe.style.display = "none"
                    image.setAttribute('src', `${data[9].url}`)
                    image.style.display = "block"
            
                } else if (data[9].media_type === "video") {
                    image.style.display = "none"
                    iframe.setAttribute('src', `${data[9].url}?&autoplay=1&controls=0&mute=0&loop=1`)
                    iframe.style.display = "block"
                }
                explanation.innerText = `${data[9].explanation}`
                                
        
            if (data[num].media_type === "image") {
                gridIframe2.style.display = "none"
                gridImage2.setAttribute('src', `${data[num].url}`)
                gridImage2.style.display = "block"
        
            }  if (data[num].media_type === "video") {
                gridImage2.style.display = "none"
                gridIframe2.setAttribute('src', `${data[num].url}?&autoplay=1&controls=0&mute=1&loop=1`)
                gridIframe2.style.display = "block"
            }
        
            subTitle2.innerText = `${data[num].title}`
            subDate2 = `${data[num].date}`
        
        
        }
    }


dateInput.addEventListener('focusout', userInput)
linkToTop.addEventListener('click', function() { fetchGallery(8); })
linkToTop2.addEventListener('click', function() { fetchGallery2(7); })
linkToTop3.addEventListener('click', function() { fetchGallery3(6); })
linkToTop4.addEventListener('click', function() { fetchGallery4(5); })
linkToTop5.addEventListener('click', function() { fetchGallery5(4); })
linkToTop6.addEventListener('click', function() { fetchGallery6(3); })
linkToTop7.addEventListener('click', function() { fetchGallery7(2); })
linkToTop8.addEventListener('click', function() { fetchGallery8(1); })
linkToTop9.addEventListener('click', function() { fetchGallery9(0); })