import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { SidebarService } from "./sidebar.service";

import * as $ from 'jquery';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
    public menuItems: any[]; // Menú filtrado para la vista
    public userRole: string | null = null; // Rol del usuario

    constructor(public sidebarservice: SidebarService, private router: Router) {
        router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                // Mostrar indicador de carga
            }

            if (event instanceof NavigationEnd && $(window).width() < 1025 && (document.readyState === 'complete' || false)) {
                this.toggleSidebar();
                // Ocultar indicador de carga
            }

            if (event instanceof NavigationError) {
                // Ocultar indicador de carga
                console.error(event.error);
            }
        });
    }

    toggleSidebar() {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());

        if ($(".wrapper").hasClass("nav-collapsed")) {
            $(".wrapper").removeClass("nav-collapsed");
            $(".sidebar-wrapper").unbind("hover");
        } else {
            $(".wrapper").addClass("nav-collapsed");
            $(".sidebar-wrapper").hover(
                function () {
                    $(".wrapper").addClass("sidebar-hovered");
                },
                function () {
                    $(".wrapper").removeClass("sidebar-hovered");
                }
            );
        }
    }

    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }

    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }

    ngOnInit() {
        // Obtener el rol del usuario desde localStorage
        this.userRole = localStorage.getItem('rol');

        // Filtrar los elementos del menú según el rol
        this.menuItems = ROUTES.filter(menuItem => {
            if (menuItem.title === 'Usuarios') {
                return this.userRole === 'admin'; // Mostrar solo si el rol es admin
            }
            return true; // Mostrar todos los demás elementos
        });

        $.getScript('./assets/js/app-sidebar.js');
    }
}
