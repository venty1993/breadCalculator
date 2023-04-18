const realTimeCalc = document.getElementsByClassName('real-time-calc');

for (const key in realTimeCalc) {
    if (Object.hasOwnProperty.call(realTimeCalc, key)) {
        const element = realTimeCalc[key];
        element.addEventListener('change', danCalculate)
        
    }
}

document.addEventListener('keydown', (e)=>{
    if( e.key === 'Enter' ){
        e.preventDefault()

    }

    if(document.activeElement.classList.contains('real-time-calc'))
    setTimeout(() => {
    
        danCalculate();
    }, 20);
})



function danCalculate() {
    // const standard = 20500;

    const recipy = new Map();
    let totalWeight = 0;

    recipy.set('강력' , 100)
    recipy.set('설탕' , recipy.get('강력')*0.045)
    recipy.set('소금' , recipy.get('강력')*0.017)
    recipy.set('개량제' ,recipy.get('강력')*0.013)
    recipy.set('이스트' , recipy.get('강력')*0.017)
    recipy.set('마가린' , recipy.get('강력')*0.12*1.05)
    recipy.set('탕종' , recipy.get('강력')*0.1)
    recipy.set('우유' , recipy.get('강력')*0.482)
    recipy.set('계란' , recipy.get('강력')*0.206)

    recipy.forEach(element => {
        totalWeight += element;
    });

    for (const [key,value] of recipy) {
        console.log(recipy.get(key))
        recipy.set(key,value/totalWeight)
    }

    console.log(recipy)



    // recipy.set('강력', 0.5094594594594595,);
    // recipy.set('설탕', 0.022972972972972974,);
    // recipy.set('소금', 0.008783783783783784,);
    // recipy.set('개량제', 0.005067567567567568, );
    // recipy.set('이스트', 0.008783783783783784, );
    // recipy.set('버터', 0.060810810810810814,);
    // recipy.set('탕종', 0.05067567567567568,);
    // recipy.set('우유', 0.2277027027027027, );
    // recipy.set('계란', 0.10472972972972973);


    let breadTotalWeight=0;

    const breadList = document.getElementsByClassName('bread-list');

    for (const key in breadList) {
        if (Object.hasOwnProperty.call(breadList, key)) {
            const element = breadList[key];
            const count = element.children[1].value;
            breadTotalWeight+=element.dataset.weight*count;
            console.log(count);
        }
    }

    const resultPlace = document.querySelector('.result-place');
    const totalWeightInner = document.getElementById('total-weight-inner');
    resultPlace.innerHTML = ``
    totalWeightInner.innerText = `${breadTotalWeight}g`

    for(const [key, value] of recipy) {
        resultPlace.innerHTML += `<span>${key} : ${(value*breadTotalWeight).toFixed(2)}g</span><br>`
    }











    // 소숫점 첫번째 자릿수로 반올림


    }