function getRandomColor(){
    let mainBody=document.getElementById('main-body')
    let randR=Math.floor(Math.random()*255)
    let randG=Math.floor(Math.random()*255)
    let randB=Math.floor(Math.random()*255)
    mainBody.style.backgroundColor=`rgb(${randR},${randG},${randB})`
}