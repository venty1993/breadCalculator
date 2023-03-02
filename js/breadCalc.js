function danCalculate() {

    const recipy = new Map();

    recipy.set('강력', 0.5094594594594595,);
    recipy.set('설탕', 0.022972972972972974,);
    recipy.set('소금', 0.008783783783783784,);
    recipy.set('개량제', 0.005067567567567568, );
    recipy.set('이스트', 0.008783783783783784, );
    recipy.set('버터', 0.060810810810810814,);
    recipy.set('탕종', 0.05067567567567568,);
    recipy.set('우유', 0.2277027027027027, );
    recipy.set('계란', 0.10472972972972973);


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