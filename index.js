//Câu 0: Viết chương trình kiểm tra n có phải là số nguyên tố hay không?
// let n=5;
// if(n<2) console.log(`${n} Không phải là số nguyên tố!`);

// let count=0;
// for(let i=2; i<Math.sqrt(n); i++)
// {
//     if(n%i==0) count++;
// }
// if(count==0){
//     console.log(`${n} là số nguyên tố!`);
// }
// else
//     console.log(`${n} Không phải là số nguyên tố!`);

function checkNguyenTo(n){
    if(n<2) console.log(`${n} Không phải là số nguyên tố!`);
        let count=0;
        for(let i=2; i<Math.sqrt(n); i++)
        {
            if(n%i==0) count++;
        }
        if(count==0){
            console.log(`${n} là số nguyên tố!`);
        }
        else
            console.log(`${n} Không phải là số nguyên tố!`);
}

//Cách 2: Kiểm tra số nguyên tố
// Nếu n<2 thì không phải là số nguyên tố
// Nếu n=2 là số nguyên tố
// Nếu n%2 == 0 ==> Không là số nguyên tố 
// Vòng lặp n->n-1 bước nhảy là 2

/*
let n= 2;
let flag= true;
if (n<2) {
    flag= false;
}else{
    if (n == 2) {
        flag= true;
    }else{
        for (let index = 3; index < n-1; index+=2){
            console.log('index thứ', index);
            if (n % index === 0) {
                flag= false;
                break;
            }
        }
    }
}

if (flag) {
    console.log('n là số nguyên tố');
}else{
    console.log('n không phải số nguyên tố');
}

*/

//Câu 1: Viết chương trình in ra các số từ 1 đến n

/*
for( let i=1; i<=10; i++)
{
    console.log(i);
}
*/

function showDaySo(cuoi){
    for(i=1; i<=cuoi; i++){
        console.log(i);
    }
}

//Câu 2: Viết chương trình in ra số lẻ từ 1 đến n

/*
for(let i=0; i<=10; i++)
{
    if(i%2 != 0) console.log(i);
}
*/

function showDaySoLe(socuoi) {
    for(let i=1; i<=socuoi; i+=2){
        console.log(i);
    }
}

//Câu 3: Viết chương trình in ra số chẵn từ 1 đến n

/*
let n3=10
for(let i=1; i<=n3; i++)
{
    if(i%2 ==0) console.log(i);
}
*/

function showDaySoChan(soChanCuoi){
    for(let i=0; i<=soChanCuoi; i+=2){
        console.log(i);
    }
}

//Câu 4: Viết chương trình in ra số nguyên tố từ 1-n?

/*
let n4=100;
for(let i=2; i<n4; i++)
{
    for(let j=2; j<i; j++)
    {
        if(i%j == 0) break;
        else
        {
            if(i == j+1) console.log(i);
        }
    }    
}
*/

function showSoNguyenTo(soNguyenTo){
    for(let i=2; i<soNguyenTo; i++){
        for(let j=2; j<i; j++){
            if(i%j == 0) break;
            else if(i== j+1) console.log(i);
        }
    }
}

//Câu 5:Viết chương trình tính tổng từ 1-n?
// let n5=10;
// console.log(`Tổng các cố tự nhiên từ 1 đến ${n5} là: `+ (n5*(n5-1))/2);

console.log('-Kiểm tra số nguyên tố:');
checkNguyenTo(12);
console.log('-In dãy số từ 1->n:');
showDaySo(10);
console.log('-In dãy số lẽ từ 1-n:');
showDaySoLe(12);
console.log('-In dãy số chẵn từ 1-n:');
showDaySoChan(12);
console.log('-ứIn dãy số nguyên tố từ 1-n:');
showSoNguyenTo(20);
