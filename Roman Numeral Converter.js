function convertToRoman(num) {
    let romanToNum={
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
    };
    let romanNo="";
    for(var key in romanToNum){
        console.log(key);
    while(num>=romanToNum[key]){
        romanNo +=key;
        num -=romanToNum[key];
    }
    
    }
     return romanNo;
    };
    
    convertToRoman(36);