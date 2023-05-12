import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IFood } from '../shared/interfaces/IFood';

@Injectable({
    providedIn: 'root'
})
export class FoodService {
    constructor(private http: HttpClient) {}

    getFoods() {
        return this.http.get<IFood[]>(environment.FOODS_URL);
    }

    searchFoods(foodName: string) {
        return this.http.get<IFood[]>(`${environment.FOODS_BY_SEARCH_URL}${foodName}`);
    }

    getAllTags() {
        return this.http.get<IFood[]>(environment.FOODS_TAGS_URL);
    }

    getFoodsByTag(tagName: string) {
        return this.http.get<IFood[]>(`${environment.FOODS_BY_TAG_URL}${tagName}`);
    }

    getFoodById(foodId: string) {
        return this.http.get<IFood>(`${environment.FOOD_BY_ID_URL}${foodId}`);
    }

    addFood(data:IFood) {
        return this.http.post(environment.FOODS_CREATE, data)
    }

    updateFood(food_id: string, data:IFood){
        return this.http.patch(`${environment.FOODS_UPDATE}${food_id}`, data)
    }

    deleteFood(food_id: string){
        return this.http.delete(`${environment.FOODS_DELETE}${food_id}`)
    }
}
