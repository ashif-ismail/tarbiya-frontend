import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeNestedDataSource, MatTreeModule } from '@angular/material/tree';
import { TreeWithCheckboxComponent } from './tree-with-checkbox/tree-with-checkbox.component';
import { TreeWithDdComponent } from './tree-with-dd/tree-with-dd.component';
import { TreeWithPldComponent } from './tree-with-pld/tree-with-pld.component';
import { MatButtonModule } from '@angular/material/button';

interface FoodNode {
    name: string;
    children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
    {
        name: 'Fruit',
        children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
    },
    {
        name: 'Vegetables',
        children: [
        {
            name: 'Green',
            children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
        },
        {
            name: 'Orange',
            children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
        },
        ],
    },
];

@Component({
    selector: 'app-tree',
    standalone: true,
    imports: [MatCardModule, MatTreeModule, MatIconModule, TreeWithCheckboxComponent, TreeWithDdComponent, TreeWithPldComponent, MatButtonModule],
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.scss']
})
export class TreeComponent {

    treeControl = new NestedTreeControl<FoodNode>(node => node.children);
    dataSource = new MatTreeNestedDataSource<FoodNode>();

    constructor() {
        this.dataSource.data = TREE_DATA;
    }

    hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

}