function calculate() {



    const things = ['강력','설탕','소금','개량제','이스트','버터','탕종','우유','계란'];

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

    for(let i = 0 ; i < breadList.length ; i ++) {
        const inputs = new Array;
        for(let j = 0 ; j < breadList[i].childElementCount ; j ++) {
            if(breadList[i].children[j].tagName === 'INPUT')
            inputs.push(breadList[i].children[j])
        }
        for(let j = 0 ; j < 5 ; j ++ ){
            if(inputs[j].checked) {
                breadTotalWeight += Number(breadList[i].dataset.weight)*j;
            }
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