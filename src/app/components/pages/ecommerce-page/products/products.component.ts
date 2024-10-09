import { NgIf } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-products',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatCheckboxModule, MatPaginatorModule, NgIf, MatTooltipModule],
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit {

    displayedColumns: string[] = ['product', 'category', 'price', 'orders', 'stock', 'colors', 'rating', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    red = true;
    blue = true;
    green = true;
    orange = true;
    white = true;
    black = true;
    yellow = true;
    purple = true;
    brown = true;
    pink = true;
    maroon = true;
    violet = true;

}

export interface PeriodicElement {
    orders: number;
    product: any;
    price: string;
    action: string;
    category: string;
    stock: string;
    colors: any;
    rating: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        product: {
            productName: 'Laptop Mac Pro',
            productImage: 'img/recent-orders/product1.jpg',
        },
        orders: 46,
        price: '$289.50',
        category: 'Apple',
        stock: '12',
        colors: {
            red: 'Red',
            green: 'Green',
            orange: 'Orange',
            white: 'White'
        },
        rating: {
            star: '5.0',
            overall: '(61 Votes)'
        },
        action: 'ri-more-fill',
    },
    {
        product: {
            productName: 'Smart Camera XD6',
            productImage: 'img/recent-orders/product2.jpg',
        },
        orders: 10,
        price: '$876.55',
        category: 'Camera',
        stock: '05',
        colors: {
            blue: 'Blue',
            black: 'Black',
            yellow: 'Yellow'
        },
        rating: {
            star: '4.9',
            overall: '(55 Votes)'
        },
        action: 'ri-more-fill',
    },
    {
        product: {
            productName: 'Pixi 8 Wireless Airphone',
            productImage: 'img/recent-orders/product3.jpg',
        },
        orders: 43,
        price: '$654.76',
        category: 'Wireless',
        stock: 'Out of Stock',
        colors: {
            yellow: 'Yellow',
            purple: 'purple',
            brown: 'Brown'
        },
        rating: {
            star: '4.0',
            overall: '(99 Votes)'
        },
        action: 'ri-more-fill',
    },
    {
        product: {
            productName: 'Jebble Smart Watch',
            productImage: 'img/recent-orders/product4.jpg',
        },
        orders: 33,
        price: '$654.99',
        category: 'Jebble',
        stock: '11',
        colors: {
            pink: 'Pink',
            maroon: 'Maroon',
            violet: 'Violet'
        },
        rating: {
            star: '5.0',
            overall: '(196 Votes)'
        },
        action: 'ri-more-fill',
    },
    {
        product: {
            productName: 'Smart Watch F8 Pro',
            productImage: 'img/recent-orders/product5.jpg',
        },
        orders: 54,
        price: '$432.00',
        category: 'Watch',
        stock: '10',
        colors: {
            red: 'Red',
            blue: 'Blue',
            green: 'Green'
        },
        rating: {
            star: '3.0',
            overall: '(54 Votes)'
        },
        action: 'ri-more-fill',
    },
    {
        product: {
            productName: 'Wall Clock Cimbina',
            productImage: 'img/recent-orders/product6.jpg',
        },
        orders: 99,
        price: '$100.00',
        category: 'Cimbina',
        stock: '04',
        colors: {
            orange: 'Orange',
            white: 'White',
            black: 'Black'
        },
        rating: {
            star: '5.0',
            overall: '(100 Votes)'
        },
        action: 'ri-more-fill',
    },
    {
        product: {
            productName: 'Galaxo T6 Munsun',
            productImage: 'img/recent-orders/product7.jpg',
        },
        orders: 54,
        price: '$99.99',
        category: 'Galaxo',
        stock: 'Out of Stock',
        colors: {
            yellow: 'Yellow',
            purple: 'purple',
            brown: 'Brown'
        },
        rating: {
            star: '4.0',
            overall: '(99 Votes)'
        },
        action: 'ri-more-fill',
    },
    {
        product: {
            productName: 'Tagus Airpod x-Zon',
            productImage: 'img/recent-orders/product8.jpg',
        },
        orders: 12,
        price: '$543.54',
        category: 'x-Zon',
        stock: 'Out of Stock',
        colors: {
            pink: 'Pink',
            maroon: 'Maroon',
            violet: 'Violet'
        },
        rating: {
            star: '3.5',
            overall: '(22 Votes)'
        },
        action: 'ri-more-fill',
    },
    {
        product: {
            productName: 'Levitating Headphone',
            productImage: 'img/recent-orders/product9.jpg',
        },
        orders: 9,
        price: '$999.99',
        category: 'Levitating',
        stock: '11',
        colors: {
            red: 'Red',
            blue: 'Blue',
            violet: 'Violet'
        },
        rating: {
            star: '4.5',
            overall: '(65 Votes)'
        },
        action: 'ri-more-fill',
    },
    {
        product: {
            productName: 'Refreshing Water',
            productImage: 'img/recent-orders/product10.jpg',
        },
        orders: 55,
        price: '$321.99',
        category: 'Bottle',
        stock: '15',
        colors: {
            brown: 'Brown',
            pink: 'Pink',
            maroon: 'Maroon',
            violet: 'Violet'
        },
        rating: {
            star: '5.0',
            overall: '(142 Votes)'
        },
        action: 'ri-more-fill',
    },
    {
        product: {
            productName: 'Facial Powders',
            productImage: 'img/recent-orders/product11.jpg',
        },
        orders: 77,
        price: '$500',
        category: 'Table',
        stock: '04',
        colors: {
            black: 'Black',
            yellow: 'Yellow',
            purple: 'purple',
            brown: 'Brown'
        },
        rating: {
            star: '4.0',
            overall: '(10 Votes)'
        },
        action: 'ri-more-fill',
    },
    {
        product: {
            productName: 'Empty Perfum',
            productImage: 'img/recent-orders/product12.jpg',
        },
        orders: 65,
        price: '$199.21',
        category: 'Tagus',
        stock: '08',
        colors: {
            red: 'Red',
            blue: 'Blue',
            maroon: 'Maroon',
            violet: 'Violet'
        },
        rating: {
            star: '5.0',
            overall: '(15 Votes)'
        },
        action: 'ri-more-fill',
    },
    {
        product: {
            productName: 'Minimalist Podiums',
            productImage: 'img/recent-orders/product13.jpg',
        },
        orders: 88,
        price: '$99.99',
        category: 'Gold',
        stock: '12',
        colors: {
            brown: 'Brown',
            pink: 'Pink',
            maroon: 'Maroon',
            violet: 'Violet'
        },
        rating: {
            star: '4.0',
            overall: '(54 Votes)'
        },
        action: 'ri-more-fill',
    },
    {
        product: {
            productName: 'Trendy Design',
            productImage: 'img/recent-orders/product14.jpg',
        },
        orders: 80,
        price: '$104.50',
        category: 'Wooden',
        stock: '13',
        colors: {
            red: 'Red',
            pink: 'Pink',
            maroon: 'Maroon',
            violet: 'Violet'
        },
        rating: {
            star: '3.0',
            overall: '(76 Votes)'
        },
        action: 'ri-more-fill',
    },
    {
        product: {
            productName: 'Notebook Pen',
            productImage: 'img/recent-orders/product15.jpg',
        },
        orders: 54,
        price: '$333.50',
        category: 'Black Desk',
        stock: 'Out of Stock',
        colors: {
            red: 'Red',
            violet: 'Violet'
        },
        rating: {
            star: '1.0',
            overall: '(98 Votes)'
        },
        action: 'ri-more-fill',
    },
];