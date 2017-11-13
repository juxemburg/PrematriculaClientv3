import { Component, OnInit } from '@angular/core';
import { Programa, Estudiante } from 'app/models/matricula.models';
import { Router } from '@angular/router';
import { UserService } from 'app/account/services/user.service';
import { MatriculaService } from 'app/services/matricula.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'user-profile', title: 'User Profile', icon: 'person', class: '' },
    { path: 'table-list', title: 'Table List', icon: 'content_paste', class: '' },
    { path: 'typography', title: 'Typography', icon: 'library_books', class: '' },
    { path: 'icons', title: 'Icons', icon: 'bubble_chart', class: '' },
    { path: 'notifications', title: 'Notifications', icon: 'notifications', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' },
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];
    private _est: Estudiante;
    private _programas: Programa[] = [];

    constructor(private _ctrlService: MatriculaService,
        private _usrService: UserService,
        private _router: Router) { }

    ngOnInit() {
        this.loadInfo();
    }
    private loadInfo() {
        this._est = this._usrService.GetUser();
        this._programas = this._est.programas;
        const wizardItems: RouteInfo[] = [];
        for (const prog of this._programas) {
            wizardItems.push({
                path: `wizard/${this._est.id}/${prog.id}`,
                title: `Prematricula ${prog.nombre}`,
                icon: `${prog.iniciales}`,
                class: ''
            });
        }
        this.menuItems = wizardItems
            .concat(ROUTES.filter(menuItem => menuItem));
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
