import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { IFood } from 'src/app/shared/interfaces/IFood';

@Component({
  selector: 'app-addfood',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddfoodComponent {
  addFoodMessage: string | undefined;
  constructor (private addFoodService: FoodService) {}

  ngOnInit(): void{}

  submit(data: IFood){
    this.addFoodService.addFood(data).subscribe((res) => {
      console.log(res);
      if (res) {
        this.addFoodMessage = 'Food is added successfully';
      }
    });
    setTimeout(() => {
      this.addFoodMessage = undefined
    }, 1000);
  }
}
