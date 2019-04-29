import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameinput') nameinputRef:ElementRef;
 @ViewChild('amountinput') amountinputRef:ElementRef;

 @Output() ingredientadded=new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem(){
    const ingname=this.nameinputRef.nativeElement.value;
    const ingamount=this.amountinputRef.nativeElement.value;
    const newIngredient=new Ingredient(ingname,ingamount);
    this.ingredientadded.emit(newIngredient);
  }

}
