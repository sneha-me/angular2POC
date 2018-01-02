import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    templateUrl: 'app/DashboardComponent/dashboard.component.html',
    styleUrls: ['app/DashboardComponent/dashboard.component.css']
})

export class DashboardComponent implements OnInit{
    private id: number;
    sub : any;

    constructor(private _route: ActivatedRoute) { }

    ngOnInit() {
        //this.sub = this._aRoute.params.subscribe(params => {
        //  this.id = +params['id'];
        this.id = this._route.snapshot.params['id'];

    //})
    }

 }
