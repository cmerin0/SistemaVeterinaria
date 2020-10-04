import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const response = [];
    for(const reg of value){
      if (reg.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        response.push(reg);
      }
    }
    return response;
  }

}
