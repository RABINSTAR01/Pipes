import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vote'
})
export class VotePipe implements PipeTransform {
  transform(value: number): string {
    if (value === undefined) {
    
      return 'Please Enter Your Details !';
     }
   if (value >= 18) {
    
    return `You are eligible to vote  `;
   }
   
   else {
    
   }
    {
      console.log(value);
      return 'You are not eligible to vote';
    }
  }

}
