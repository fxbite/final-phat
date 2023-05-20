import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { IFood } from 'src/app/shared/interfaces/IFood';
import { Router } from '@angular/router'

@Component({
  selector: 'app-addfood',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddfoodComponent {
  addFoodMessage: string | undefined;
  constructor (private addFoodService: FoodService, private router: Router) {}

  ngOnInit(): void{}

  submit(data: IFood){
    this.addFoodService.addFood(data).subscribe((res) => {
      if (res) {
        this.addFoodMessage = 'Food is added successfully';
        this.router.navigate(['/home-auth']);
      }
    });
    
    setTimeout(() => {
      this.addFoodMessage = undefined
    }, 1000);
  }
}
