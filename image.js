let image = document.getElementById('image')
function changebg(){
    const images = [
        '20200726_171344.jpg','20201128_102219.jpg','20210718_175302.jpg','20220526_172838.jpg','20220611_171923.jpg'
    ]
    const bg = Math.floor(Math.random()*images.length)
    image.src = images[bg]
}
setInterval(changebg,3000)