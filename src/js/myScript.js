
let typeSite = Number(prompt('Какой тип сата нужен? 0 - некоммерческие 1 - коммерческие'));
let typeDesign = Number(prompt('Какой тип дизайна нужен? 0 - Минимализм, 1 - Классический, 2 - Корпоративный'));
let adaptability = Number(prompt('Нужна ли адаптивность? 0 - если не нужна, 1 - если нужна'));


let price = 5000;
let data = 3;

let calculate = {
    site: typeSite,
    design: typeDesign,
    adapt: adaptability,
    
    
    showCalculate(){
        if(calculate.site === 1){
            price += 2000;
            data += 3;
        }
        
        if (calculate.design === 1){
            price += 1500;
            data += 3;
        }
        
        if (calculate.design === 2){
            price += 3000;
            data += 5;
        }
        
        if (calculate.adapt === 1){
            price += 5000;
            data += 2;
        }
        
        alert('Цена: ' + price + ', Срок: ' + data + ' дней');
    }
};

calculate.showCalculate();