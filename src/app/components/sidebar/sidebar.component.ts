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
    {
        path: `welcome`,
        title: `inicio`,
        icon: `star`,
        class: ''
    }
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];
    nombreEstudiante: string;
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
        this.nombreEstudiante =
            `${this._est.nombres} ${this._est.apellidos}`;
        this._programas = this._est.programas;
        const wizardItems: RouteInfo[] = [];
        for (const prog of this._programas) {
            wizardItems.push({
                path: `wizard/${prog.codigo}/${prog.id}`,
                title: `Prematricula: ${prog.nombre}`,
                icon: `${prog.iniciales}`,
                class: ''
            });
        }
        this.menuItems = wizardItems.filter(menuItem => menuItem);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    logout() {
        this._usrService.RemoveUser();
        this._router.navigate(['/login']);
    }
}
