import { Component, OnInit } from '@angular/core';
import { faPencil, faWrench } from '@fortawesome/free-solid-svg-icons';
import { OrderService } from '../../services/order.service';
import { UserService } from '../../services/user.service';
import { IUserPayLoad } from '../../shared/interfaces/IUserPayLoad';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    faEdit = faPencil;
    faRef = faWrench;
    userDetail!: IUserPayLoad;
    orderData: any
    orderUser!: number 
    basicOptions: any;

    constructor(private orderService: OrderService, private userSerivce: UserService) {
        this.userDetail = this.userSerivce.getCurrentUser();  
    }

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.orderService.history(this.userDetail.id).subscribe(value => {
            this.orderUser = value.length

            this.orderData = {
                labels: ['Sum of Order'],
                datasets: [
                    {
                        label: 'Order',
                        data: [this.orderUser],
                        backgroundColor: ['rgba(75, 192, 192, 0.2)'],
                        borderColor: ['rgb(75, 192, 192)'],
                        borderWidth: 1
                    }
                ]
            };
        
            this.basicOptions = {
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    },
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    }
                }
            };
        })

    }
}
