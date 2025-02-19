export function calculateIMC( weight: number, height: number): number{
    return weight / (height* height);
}

export function imcResult(imc: number): string{
    if(imc < 17){
        return 'Muito abaixo do peso';}
     else if(imc < 18.5){
        return 'Abaixo do peso';
    }else if(imc < 24.9){
        return 'Normal';
    }else if(imc < 29.9){
        return 'Sobrepeso';
    }else if(imc < 34.9){
        return 'Obesidade Grau 1';
    }
    else if(imc < 39.9){
        return 'Obesidade Grau 2';
    }else{
        return 'Obesidade Grave 3';
    }
}