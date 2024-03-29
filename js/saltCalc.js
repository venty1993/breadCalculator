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
    let totalWeight = 0 ;
    const amountOflour = 24 + 126 + 126

    // 계량제 밀가루의 1.3%로 변경
    //  보충수 추가 밀가루의 1.3%
    // 본반죽 물 양 원래 양의 8% 추가

    const pre = new Map();
    pre.set('강력', 24);
    pre.set('이스트', 4);
    pre.set('물', 26);
    pre.set('개량제', amountOflour*0.013);


    const recipy = new Map();

    recipy.set('강력', 126);
    recipy.set('중력', 126);
    recipy.set('설탕', 6);
    recipy.set('소금', 4);
    recipy.set('마가린', 14*1.05);
    recipy.set('물', 140*1.05*0.96);
    recipy.set('보충수',amountOflour*0.013);

    for (const [key,value] of pre) {

        totalWeight += value;
    }
    for (const [key,value] of recipy) {
        totalWeight += value;
    }

    console.log(totalWeight);

    for (const [key,value] of pre) {
        pre.set(key,value/totalWeight)
    }
    for (const [key,value] of recipy) {
        recipy.set(key,value/totalWeight)
    }




    let breadTotalWeight=0;

    const breadList = document.getElementsByClassName('bread-list');
    for(let i = 0 ; i < breadList.length ; i ++) {
        const inputs = new Array;
        for(let j = 0 ; j < breadList[i].childElementCount ; j ++) {
            if(breadList[i].children[j].tagName === 'INPUT')
            inputs.push(breadList[i].children[j])
        }
        for(let j = 0 ; j < inputs.length ; j ++ ){
            if(inputs[j].checked) {
                breadTotalWeight += Number(breadList[i].dataset.weight)*j;
            }
            if(Number(inputs[j].value)){
                breadTotalWeight += Number(breadList[i].dataset.weight)*inputs[j].value;
            }
            console.log(inputs[j].value)

        }
    }

    const resultPlace = document.querySelector('.result-place');
    const totalWeightInner = document.getElementById('total-weight-inner');
    resultReset();
    totalWeightInner.innerText = `${breadTotalWeight}g`

    resultPlace.innerHTML += `<h4>사전반죽</h4> <br>`
    for(const [key, value] of pre) {
        resultPlace.innerHTML += `<span>${key} : ${(value*breadTotalWeight).toFixed(2)}g</span><br>`
    }
    resultPlace.innerHTML += `<br><h4>본 반죽</h4> <br>`
    for(const [key, value] of recipy) {
        resultPlace.innerHTML += `<span>${key} : ${(value*breadTotalWeight).toFixed(2)}g</span><br>`
    }

    function resultReset() {
        resultPlace.innerHTML = ``;
    }








    // 소숫점 첫번째 자릿수로 반올림


    }