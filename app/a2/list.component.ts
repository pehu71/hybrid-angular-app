import {Component, Input, EventEmitter, Output} from '@angular/core';
import {downgradeComponent} from '@angular/upgrade/static';
import IAngularStatic = angular.IAngularStatic;
import {Http} from "@angular/http";
declare let angular: IAngularStatic;

@Component({
    templateUrl: 'app/a2/tpl/list-component.html'
})

export class ListComponent {

    @Input() listData:Array<Object>;
    @Output() selected = new EventEmitter<Object>();

    constructor() {}

    onSelected() {
        this.selected.emit({title:'fuck'})
    }
}

angular.module('list', [])

.directive('listComponent',
    downgradeComponent({
        component: ListComponent,
        inputs: ['listData'],
        outputs: ['selected']
    }) as angular.IDirectiveFactory);