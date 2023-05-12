import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from 'primeng/table';
import { IFoodOrder } from '../../shared/interfaces/IFoodOrder';
import { OrderService } from '../../services/order.service';
import { IUserPayLoad } from 'src/app/shared/interfaces/IUserPayLoad';
import { UserService } from 'src/app/services/user.service';

@Component({
 selector: 'app-order-confirm',
 templateUrl: './order-confirm.component.html',
 styleUrls: ['./order-confirm.component.scss']
})
export class OrderConfirmComponent implements OnInit {
 order!: IFoodOrder[];
 userDetail!: IUserPayLoad;
 cols!: any[];

 basicData: any;
 basicOptions: any;
 revenue!: number;

 constructor(private orderService: OrderService, private userService: UserService) {
  this.userDetail = this.userService.getCurrentUser();
 }

 ngOnInit() {
    // const documentStyle = getComputedStyle(document.documentElement);
    // const textColor = documentStyle.getPropertyValue('--text-color');
    // const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    // const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    // this.orderService.getOrders().subscribe(value => {
    //     this.revenue = value.reduce((total, value) => {
    //         return total + value['totalPrice']
    //     },0)

    //     this.basicData = {
    //         labels: ['Revenue'],
    //         datasets: [
    //             {
    //                 label: 'Sales (dollar)',
    //                 data: [this.revenue],
    //                 backgroundColor: ['rgba(255, 159, 64, 0.2)'],
    //                 borderColor: ['rgb(255, 159, 64)'],
    //                 borderWidth: 1
    //             }
    //         ]
    //     };
    
    //     this.basicOptions = {
    //         plugins: {
    //             legend: {
    //                 labels: {
    //                     color: textColor
    //                 }
    //             }
    //         },
    //         scales: {
    //             y: {
    //                 beginAtZero: true,
    //                 ticks: {
    //                     color: textColorSecondary
    //                 },
    //                 grid: {
    //                     color: surfaceBorder,
    //                     drawBorder: false
    //                 }
    //             },
    //             x: {
    //                 ticks: {
    //                     color: textColorSecondary
    //                 },
    //                 grid: {
    //                     color: surfaceBorder,
    //                     drawBorder: false
    //                 }
    //             }
    //         }
    //     };
    // })
  this.orderService.history(this.userDetail.id).subscribe((value) => {
   this.order = value;
  });
 }

 clear(table: Table) {
  table.clear();
 }
 getSeverity(status: string) {
  if (status === 'NEW') return 'info';
  if (status === 'Success') return 'success';
  if (status === 'Pending') return 'warning';
  if (status === 'Rejected') return 'danger';
  return status = ''
 }
}
