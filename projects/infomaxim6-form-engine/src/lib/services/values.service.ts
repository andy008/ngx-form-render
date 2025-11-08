import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {


  //  render states
  public columnOpen: boolean = false;
  public divOpen: boolean = false;
  
  constructor() { }
}
