import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'link'
})
export class LinkPipe implements PipeTransform {
  voteLink:any='https://eci.gov.in/';
  transform(value: number): any{
    if (value === undefined) {
    
      return null;
     }
   if(value >= 18)
   {
       return "Further Details visit  this Website : " + this.voteLink;
   } 
   
   else {
    
   }
    {
      
      return null;
    }
  }
  }


