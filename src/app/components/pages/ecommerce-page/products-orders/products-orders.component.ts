import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PoStatsComponent } from './po-stats/po-stats.component';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-products-orders',
    standalone: true,
    imports: [PoStatsComponent, RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, NgIf, MatPaginatorModule],
    templateUrl: './products-orders.component.html',
    styleUrls: ['./products-orders.component.scss']
})
export class ProductsOrdersComponent implements AfterViewInit {

    displayedColumns: string[] = ['position', 'product', 'customer', 'price', 'vendor', 'date', 'status', 'rating'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    pending = true;
    outOfStock = true;
    delivered = true;

}

export interface PeriodicElement {
    customer: string;
    position: string;
    product: any;
    price: string;
    vendor: string;
    date: string;
    status: any;
    rating: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        position: '#SK258',
        product: {
            productName: 'Laptop Mac Pro',
            productImage: 'img/recent-orders/product1.jpg',
        },
        customer: 'Colin Firth',
        price: '$289.50',
        vendor: 'Apple',
        date: '01-12-2022',
        status: {
            pending: 'Pending'
        },
        rating: {
            star: '5.0',
            overall: '(61 Votes)'
        }
    },
    {
        position: '#AA257',
        product: {
            productName: 'Smart Camera XD6',
            productImage: 'img/recent-orders/product2.jpg',
        },
        customer: 'Alina Smith',
        price: '$876.55',
        vendor: 'Camera',
        date: '02-12-2022',
        status: {
            outOfStock: 'Out of Stock'
        },
        rating: {
            star: '4.9',
            overall: '(55 Votes)'
        }
    },
    {
        position: '#BB256',
        product: {
            productName: 'Pixi 8 Wireless Airphone',
            productImage: 'img/recent-orders/product3.jpg',
        },
        customer: 'James Andy',
        price: '$654.76',
        vendor: 'Wireless',
        date: '03-12-2022',
        status: {
            delivered: 'Delivered'
        },
        rating: {
            star: '4.0',
            overall: '(99 Votes)'
        }
    },
    {
        position: '#CC255',
        product: {
            productName: 'Jebble Smart Watch',
            productImage: 'img/recent-orders/product4.jpg',
        },
        customer: 'Sarah Taylor',
        price: '$654.99',
        vendor: 'Jebble',
        date: '04-12-2022',
        status: {
            pending: 'Pending'
        },
        rating: {
            star: '5.0',
            overall: '(196 Votes)'
        }
    },
    {
        position: '#DD254',
        product: {
            productName: 'Smart Watch F8 Pro',
            productImage: 'img/recent-orders/product5.jpg',
        },
        customer: 'David Warner',
        price: '$432.00',
        vendor: 'Watch',
        date: '05-12-2022',
        status: {
            delivered: 'Delivered'
        },
        rating: {
            star: '3.0',
            overall: '(54 Votes)'
        }
    },
    {
        position: '#SK253',
        product: {
            productName: 'Wall Clock Cimbina',
            productImage: 'img/recent-orders/product6.jpg',
        },
        customer: 'James Noah',
        price: '$100.00',
        vendor: 'Cimbina',
        date: '06-12-2022',
        status: {
            delivered: 'Delivered'
        },
        rating: {
            star: '5.0',
            overall: '(100 Votes)'
        }
    },
    {
        position: '#SK252',
        product: {
            productName: 'Galaxo T6 Munsun',
            productImage: 'img/recent-orders/product7.jpg',
        },
        customer: 'William Benjamin',
        price: '$99.99',
        vendor: 'Galaxo',
        date: '07-12-2022',
        status: {
            outOfStock: 'Out of Stock'
        },
        rating: {
            star: '4.0',
            overall: '(99 Votes)'
        }
    },
    {
        position: '#SK251',
        product: {
            productName: 'Tagus Airpod x-Zon',
            productImage: 'img/recent-orders/product8.jpg',
        },
        customer: 'Lucas Oliver',
        price: '$543.54',
        vendor: 'x-Zon',
        date: '08-12-2022',
        status: {
            pending: 'Pending'
        },
        rating: {
            star: '3.5',
            overall: '(22 Votes)'
        }
    },
    {
        position: '#SK248',
        product: {
            productName: 'Levitating Headphone',
            productImage: 'img/recent-orders/product9.jpg',
        },
        customer: 'Ava Olivia',
        price: '$999.99',
        vendor: 'Levitating',
        date: '09-12-2022',
        status: {
            delivered: 'Delivered'
        },
        rating: {
            star: '4.5',
            overall: '(65 Votes)'
        }
    },
    {
        position: '#SK248',
        product: {
            productName: 'Refreshing Water',
            productImage: 'img/recent-orders/product10.jpg',
        },
        customer: 'Isabella Sophia',
        price: '$321.99',
        vendor: 'Bottle',
        date: '10-12-2022',
        status: {
            outOfStock: 'Out of Stock'
        },
        rating: {
            star: '5.0',
            overall: '(142 Votes)'
        }
    },
    {
        position: '#SK248',
        product: {
            productName: 'Facial Powders',
            productImage: 'img/recent-orders/product11.jpg',
        },
        customer: 'Mia Emma',
        price: '$500',
        vendor: 'Table',
        date: '11-12-2022',
        status: {
            pending: 'Pending'
        },
        rating: {
            star: '4.0',
            overall: '(10 Votes)'
        }
    },
    {
        position: '#SK248',
        product: {
            productName: 'Empty Perfum',
            productImage: 'img/recent-orders/product12.jpg',
        },
        customer: 'Sophia Charlotte',
        price: '$199.21',
        vendor: 'Tagus',
        date: '12-12-2022',
        status: {
            delivered: 'Delivered'
        },
        rating: {
            star: '5.0',
            overall: '(15 Votes)'
        }
    },
    {
        position: '#SK248',
        product: {
            productName: 'Minimalist Podiums',
            productImage: 'img/recent-orders/product13.jpg',
        },
        customer: 'Jackson Levi',
        price: '$99.99',
        vendor: 'Gold',
        date: '13-12-2022',
        status: {
            delivered: 'Delivered'
        },
        rating: {
            star: '4.0',
            overall: '(54 Votes)'
        }
    },
    {
        position: '#SK248',
        product: {
            productName: 'Trendy Design',
            productImage: 'img/recent-orders/product14.jpg',
        },
        customer: 'Samuel Logan',
        price: '$104.50',
        vendor: 'Wooden',
        date: '14-12-2022',
        status: {
            pending: 'Pending'
        },
        rating: {
            star: '3.0',
            overall: '(76 Votes)'
        }
    },
    {
        position: '#AB248',
        product: {
            productName: 'Notebook Pen',
            productImage: 'img/recent-orders/product15.jpg',
        },
        customer: 'Gabriel Ezra',
        price: '$333.50',
        vendor: 'Black Desk',
        date: '15-12-2022',
        status: {
            outOfStock: 'Out of Stock'
        },
        rating: {
            star: '1.0',
            overall: '(98 Votes)'
        }
    },
    {
        position: '#AA257',
        product: {
            productName: 'Smart Camera XD6',
            productImage: 'img/recent-orders/product2.jpg',
        },
        customer: 'Alina Smith',
        price: '$876.55',
        vendor: 'Camera',
        date: '02-12-2022',
        status: {
            outOfStock: 'Out of Stock'
        },
        rating: {
            star: '4.9',
            overall: '(55 Votes)'
        }
    },
    {
        position: '#BB256',
        product: {
            productName: 'Pixi 8 Wireless Airphone',
            productImage: 'img/recent-orders/product3.jpg',
        },
        customer: 'James Andy',
        price: '$654.76',
        vendor: 'Wireless',
        date: '03-12-2022',
        status: {
            delivered: 'Delivered'
        },
        rating: {
            star: '4.0',
            overall: '(99 Votes)'
        }
    },
    {
        position: '#CC255',
        product: {
            productName: 'Jebble Smart Watch',
            productImage: 'img/recent-orders/product4.jpg',
        },
        customer: 'Sarah Taylor',
        price: '$654.99',
        vendor: 'Jebble',
        date: '04-12-2022',
        status: {
            pending: 'Pending'
        },
        rating: {
            star: '5.0',
            overall: '(196 Votes)'
        }
    },
    {
        position: '#DD254',
        product: {
            productName: 'Smart Watch F8 Pro',
            productImage: 'img/recent-orders/product5.jpg',
        },
        customer: 'David Warner',
        price: '$432.00',
        vendor: 'Watch',
        date: '05-12-2022',
        status: {
            delivered: 'Delivered'
        },
        rating: {
            star: '3.0',
            overall: '(54 Votes)'
        }
    },
    {
        position: '#SK253',
        product: {
            productName: 'Wall Clock Cimbina',
            productImage: 'img/recent-orders/product6.jpg',
        },
        customer: 'James Noah',
        price: '$100.00',
        vendor: 'Cimbina',
        date: '06-12-2022',
        status: {
            delivered: 'Delivered'
        },
        rating: {
            star: '5.0',
            overall: '(100 Votes)'
        }
    },
];