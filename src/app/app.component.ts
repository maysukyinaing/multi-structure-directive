import { Component } from '@angular/core';

export enum Fruit{
  Apple = 'Apple',
  Lemon = 'Lemon',
  Avogado = 'Avogado',
  Cherries = 'Cherries'
}

interface IfFruit{
  id:number,
  name:Fruit
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multi-structure-directive';

  selectedFruit!:Fruit
  fruits:string[]=Object.values(Fruit)
  MAX_BUCKET_LENGTH=10
  bucket:IfFruit[]=[]

  addSelectedFruitToBucket() {
    this.bucket.push(
      {
        id:Date.now(),
        name:this.selectedFruit
      }
    )
  }

  deleteFromBucket(item:IfFruit) {
    this.bucket =
      this.bucket.filter(fruit => fruit.id != item.id )
  }

}
