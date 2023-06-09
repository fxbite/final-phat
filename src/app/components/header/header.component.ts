import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  username: string = ''

  constructor(private userService: UserService) {
    this.username = this.userService.getCurrentUser().name;
  }

  logout() {
    this.userService.logout();
  } 
}
