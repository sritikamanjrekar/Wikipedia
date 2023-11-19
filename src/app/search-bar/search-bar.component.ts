import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() transmitter=new EventEmitter<string>();
  term: string = ''

  onFormSubmitKuchBhi(event:any){
    event.preventDefault();
    console.log(this.term);
    this.transmitter.emit(this.term)
  }

  // onInit(){
  //   console.log(this.term);
    
  // }

  //  userInput(data:string){

  //   console.log(data)
  //  }

  

 



}
