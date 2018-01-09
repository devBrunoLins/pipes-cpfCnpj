import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cpfCnpj'
})

export class CnpjPipe implements PipeTransform {
    transform(value: string): string {
        
        if (value && value.length == 14) { // Tratando como CNPJ
            return `${value.substr(0, 2)}.${value.substr(2, 3)}.${value.substr(5, 3)}/${value.substr(8, 4)}-${value.substr(12, 2)}`;
        } else if (value && value.length === 11) { // Tratando como CPF
            return `${value.substr(0, 3)}.${value.substr(3, 3)}.${value.substr(6, 3)}-${value.substr(9, 2)}`
        }
        
        return value;
    }
}