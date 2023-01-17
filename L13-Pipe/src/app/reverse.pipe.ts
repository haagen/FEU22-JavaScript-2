import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'reverse' })

export class ReversePipe implements PipeTransform {
    transform(value: string) {
        // abc -> cba 
        // sträng -> array -> reverse() -> sträng 
        // 'abc' -> ['a', 'b', 'c'] -> ['c', 'b', 'a'] -> 'cba'
        return value.split('').reverse().join('');
    }
}