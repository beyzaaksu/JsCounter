
let counter=0
let counterDOM= document.querySelector('#counter') //id'si counter olanın DOM'una eriştik
let increaseDOM= document.querySelector('#increase')  //id'si increase olanın DOM2una eriştik
let decreaseDOM= document.querySelector('#decrease') //id'si decrease olanın DOM'una eriştik

counterDOM.innerHTML = counter //counter bilgisinin artık js dosyamızdaki counter'ın içeriği olmasını sağladık

increaseDOM.addEventListener("click", clickEvent) //id'si increase olanda click eventi gerçekleşirse clickEvent fonksiyonunu çalıştır 
decreaseDOM.addEventListener("click", clickEvent ) //id'si decrease olanda click eventi gerçekleşirse clickEvent fonksiyonunu çalıştır


 function clickEvent(){ //click eventi olduğu zaman çalıştırılacak fonksiyon
    console.log(this.id)
    if(this.id=="increase"){ //eğer id'si increase olana tıklanırsa
        counterDOM.innerHTML = counter += 1 // 1 arttır
    }
    else if (this.id=="decrease"){ //eğer id'si decrease olana tıklanırsa
        counterDOM.innerHTML = counter -= 1 // 1 azalt
    }
 }
