import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  revenueData: any;
  orderData: any
  basicOptions: any;
  revenue!: number;
  orderSum!: number

  constructor (private order: OrderService) {}

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.order.getOrders().subscribe(value => {
        this.revenue = value.reduce((total, value) => {
            return total + value['totalPrice']
        },0)

        this.orderSum = value.length

        this.revenueData = {
            labels: ['Revenue'],
            datasets: [
                {
                    label: 'Dollar (USD)',
                    data: [this.revenue],
                    backgroundColor: ['rgba(255, 159, 64, 0.2)'],
                    borderColor: ['rgb(255, 159, 64)'],
                    borderWidth: 1
                }
            ]
        };

        this.orderData = {
            labels: ['Sum of Order'],
            datasets: [
                {
                    label: 'Order',
                    data: [this.orderSum],
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

