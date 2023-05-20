import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { IFood } from 'src/app/shared/interfaces/IFood';
import { faTrash, faEdit  } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home-auth',
  templateUrl: './home-auth.component.html',
  styleUrls: ['./home-auth.component.scss']
})
export class HomeAuthComponent {
  listFood!: IFood[];
  icon = faTrash;
  iconEdit = faEdit;
  foodMessage: undefined | string;

  constructor(private food: FoodService) {}

  ngOnInit(): void{
    this.list();
  }

  deleteFood(food_id: string) {
    this.food.deleteFood(food_id).subscribe((res) => {
      if(res) {
        this.foodMessage = 'Food is deleted';
        this.list();
      }
    });
    setTimeout(() => {
      this.foodMessage = undefined;
    }, 1000);
  }

  list() {
    this.food.getFoods().subscribe((res) => {
      if(res) {
        this.listFood = res;
      } else {
        this.listFood = [];
      }
      console.log(this.listFood)
    })
  }
}
