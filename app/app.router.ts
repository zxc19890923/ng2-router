import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent}      from './home.component';
import {AboutComponent}      from './about.component';
import {ProjectComponent}      from './project.component';
import {ServiceComponent}      from './service.component';
import {ContactComponent}      from './contact.component';
// 坑啊 路径中不能使用反斜杠  path: "/home" 报错 困扰了我很久
const appRoutes:Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'project',
        component: ProjectComponent
    },
    {
        path: 'service',
        component: ServiceComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);