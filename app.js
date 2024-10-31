                                                         //1-mavzu
    
  //1-masala
{
    let n = 6
if(n > 0){
    n++
    console.log(n);  
}else{
    console.log(n);  
}  
}    

    //2-masala                            
{
    let n = 10
    if(n > 0){
        n++
        console.log(n);
    }else{
        n -= 2
        console.log(n);
        
    }
}

    //3-masala
{
    let n = 0
    if(n > 0){
        n++
    }else if(n < 0){
        n -= 2
    }else{
        n = 10
    }
    console.log(n);
    
}    

// 4-misol
{
    let n1 = 2, n2 = 6, n3 = -10, musbat = 0
    if(n1 > 0){
        musbat++
    }
    if(n2 > 0){
        musbat++
    }
    if(n3 > 0){
        musbat++
    }
    console.log(musbat);
    
}

// 5-misol
{
    let n1 = 2, n2 = 6, n3 = -10, musbat = 0
    if(n1 > 0){
        musbat++
    }
    if(n2 > 0){
        musbat++
    }
    if(n3 > 0){
        manfiy++
    }
    console.log( `${musbat} musbat`);
    
}

// 6-masala
{
let n1 = 10
let n2 = 20
if(n1){
}else(n2)
console.log(`${n1} dan ${n2} katta`);
}

//7-masala
{
let n1 = 10;
let n2 = 15;
let natija;
if (n1 < n2) {
    natija = "Kichik son: " + n1;
} else if (n1 > n2) {
    natija = "Kichik son: " + n2;
} 
console.log(natija);
}
// 8-masala
{
    let son1 = 10;
let son2 = 15;
let kattasi, kichigi;

if (son1 > son2) {
    kattasi = son1;
    kichigi = son2;
} else if (son1 < son2) {
    kattasi = son2;
    kichigi = son1;
} 
console.log("Katta son: " + kattasi);
console.log("Kichik son: " + kichigi);
}

// 9-masala
{
let a = 20;
let b = 25;

if (a >= b) {
    a = b - 1
}
if (b <= a) {
    b = a + 1
}
console.log(a); 
console.log(b); 
}

// 10-masala
{
let a = 30
let b = 45

if (a !== b) {
    a = a + b
    b = a
} else {
    a = 0
}
console.log(a); 
console.log(b); 
}


                                                        // 2-mavzu
// 1-masala
{
    let n = 4, result
    switch(n){
        case 1:
            result ="Dushanba"
            break
        case 2:
            result ="Seshanba"
            break
        case 3:
            result ="Chorshanba"
            break
        case 4:
            result ="Payshanba"
            break
        case 5:
            result ="Juma"
            break
        case 6:
            result ="shanba"
            break
        case 7:
            result ="Yakshanba"
            break
        default: 8
            result ="Bunday kun yoq"  
    }
    console.log(result);
    
} 

//2-masala
{
    let n = 5, result
    switch(n){
        case 1:
            result ="1-yomon"
            break
        case 2:
            result ="2-qonoqarsiz"
            break
        case 3:
            result ="3-qoniqarli"
            break
        case 4:
            result ="4-yaxshi"
            break
        case 5:
            result ="5-a'lo"
            break
        default: 6
            result ="xato"  
    }
    console.log(result);
    
}           

// 3-masala
{
    let month = 1
    switch(month){
        case 1:
        case 2:
        case 12:
            console.log("Qish");
            break      
        case 3:
        case 4:
        case 5:
            console.log("Bahor");
            break      
        case 6:
        case 7:
        case 8:
            console.log("Yoz");
            break      
        case 9:
        case 10:
        case 11:
            console.log("Kuz");
            break      
    }
}

// 4-masala
{
    let month = 2
    switch(month){
        case 1:
            console.log("Qishning 1-oyi dekabr. Dekabir oyida 31-kun bor ");          
            break 
        case 2:
            console.log("Qishning 2-oyi yanvar. Yanvar oyida 31-kun bor ");
            break
        case 3:
            console.log("Qishning 3-oyi fevral. Fevral oyida 28-kun bor ");
            break      
        case 4:
            console.log("Bahor 1-oyi mart. Mart oyida 31-kun bor ");          
            break 
        case 5:
            console.log("Bahor 2-oyi aprel. Aprel oyida 30-kun bor ");
            break
        case 6:
            console.log("Bahor 3-oyi may. May oyida 31-kun bor ");
            break      
        case 7:
            console.log("Yoz 1-oyi iyun. Iyun oyida 31-kun bor ");          
            break 
        case 8:
            console.log("Yoz 2-oyi iyul. Iyul oyida 30-kun bor ");
            break
        case 9:
            console.log("Yoz 3-oyi avgust. Avgust oyida 31-kun bor ");
            break      
        case 10:
            console.log("Kuz 1-oyi sentabr. Sentabr oyida 31-kun bor ");          
            break 
        case 11:
            console.log("Kuz 2-oyi oktabr. Oktabr oyida 30-kun bor ");
            break
        case 12:
            console.log("Kuz 3-oyi noyabr. Noyabr oyida 31-kun bor ");
            break      
    
    }
}

// 5-masala
{
    let number = 15 + 10
    switch(number){
        case 15 + 10:
        console.log(number);
        break 
       case 15 - 10:
       console.log(number);
       break
       case 15 * 10:
       console.log(number);
       break
       case 15 / 10:
       console.log(number);
       break
    }    
        
}

// 6-masala         //ustoz shu masalani tushunmadim shunga ChatGPTda qildim
// {
//     // Foydalanuvchidan uzunlik birligini tanlash
// let birlik = parseInt(prompt("Uzunlik birligini tanlang:\n1 - Desimetr\n2 - Kilometr\n3 - Metr\n4 - Millimetr\n5 - Santimetr"));
// let uzunlik = parseFloat(prompt("Kesma uzunligini kiriting:"));

// // Metrga o'zgartirish
// let metrlardaUzunlik;

// switch (birlik) {
//     case 1: // Desimetr
//         metrlardaUzunlik = uzunlik * 0.1;
//         break;
//     case 2: // Kilometr
//         metrlardaUzunlik = uzunlik * 1000;
//         break;
//     case 3: // Metr
//         metrlardaUzunlik = uzunlik;
//         break;
//     case 4: // Millimetr
//         metrlardaUzunlik = uzunlik * 0.001;
//         break;
//     case 5: // Santimetr
//         metrlardaUzunlik = uzunlik * 0.01;
//         break;
//     default:
//         alert("Noto'g'ri birlik tanlandi.");
// }

// // Natijani chiqarish
// if (metrlardaUzunlik !== undefined) {
//     alert("Kesmaning uzunligi metrlarda: " + metrlardaUzunlik);
// }

// }

