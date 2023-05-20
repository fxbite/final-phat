import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    
    showLogin = false
    quantity: string = '0';
    username: string = '';
    show: boolean = false
    constructor(private cartService: CartService, private userService: UserService) {
        this.cartService.getCartObservable().subscribe((newCart) => {
            this.quantity = newCart.items?.length.toString();
        });

        if(this.userService.getCurrentUser().isAdmin) {
            this.show = true
        }

        this.username = this.userService.getCurrentUser().name;
        if(this.username) {
            this.showLogin = true
        }
    }

    logout() {
        this.userService.logout();
    }
}
