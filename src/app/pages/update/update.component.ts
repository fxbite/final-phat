import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { IFood } from 'src/app/shared/interfaces/IFood';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  foodData!: IFood
  food_Id!: string;

  constructor (private route: ActivatedRoute, private updateFood: FoodService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.food_Id = params.get('id') as string
      this.updateFood.getFoodById(this.food_Id).subscribe(value => {
        this.foodData = value
      })
    })
  }

  submit(data: IFood){
    this.updateFood.updateFood(this.food_Id, data).subscribe((res) => {
      console.log('test')
      this.router.navigate(['/home-auth'])
    });
  }

  // submit(data: IFood){
  //   console.log(data)
  //   if(this.foodData){
  //     data.id = this.foodData.id
  //   }
  //   this.updateFood.updateFood(data).subscribe
  // }
}

