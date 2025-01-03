import { Component , OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit{

    constructor(public sidebarservice: SidebarService, public authService:AuthService) { }
    nombreUsuario = localStorage.getItem('nombre')
    userRole = localStorage.getItem('rol');
    displayRol: string;

    
    toggleSidebar() {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    }
    
    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }

    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }
    
    logout(){
        this.authService.logout();
    }
    ngOnInit() {

        if (this.userRole === 'admin') {
            this.displayRol = 'Administrador';
        } else if (this.userRole === 'usuario') {
            this.displayRol = 'Usuario';
        }

        /* Search Bar */
        $(document).ready(function () {
            $(".mobile-search-icon").on("click", function () {
                $(".search-bar").addClass("full-search-bar")
            }), 
            $(".search-close").on("click", function () {
                $(".search-bar").removeClass("full-search-bar")
            })
        });

    }
}
