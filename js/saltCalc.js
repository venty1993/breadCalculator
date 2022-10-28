function danCalculate() {

    const recipy = new Map();

    recipy.set('강력', 24/464);
    recipy.set('이스트', 4/464);
    recipy.set('물', 26/464);
    recipy.set('강력', 126/464);
    recipy.set('중력', 126/464);
    recipy.set('설탕', 6/464);
    recipy.set('소금', 4/464);
    recipy.set('버터', 14/464);
    recipy.set('물', 140/464);
    recipy.set('개량제', 2.5/464);

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
    resultPlace.innerHTML = ``
    totalWeightInner.innerText = `${breadTotalWeight}g`

    for(const [key, value] of recipy) {
        resultPlace.innerHTML += `<span>${key} : ${(value*breadTotalWeight).toFixed(2)}g</span>`
    }











    // 소숫점 첫번째 자릿수로 반올림


    }