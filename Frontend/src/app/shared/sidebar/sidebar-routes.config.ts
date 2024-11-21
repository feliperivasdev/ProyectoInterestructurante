import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
    {
        path: '/dashboard/usuarios', title: 'Usuarios', icon: 'lni lni-user', class: '',
        badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
     
    {
        path: '/dashboard/electrodomesticos', title: 'Electrodomésticos', icon: 'lni lni-display', class: '',  
        badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    

    {
        path: '/dashboard/consumo', title: 'Registro de consumo', icon: 'lni lni-bolt', class: '',
        badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },

    {
        path: '/dashboard/reporte', title: 'Reporte', icon: 'lni lni-bar-chart', class: '',
        badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },


];