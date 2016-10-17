import {Component} from "@angular/core";

@Component ({
    selector: "my-app",
    templateUrl: "app/templates/main.html"
})
export class AppComponent {
    nav = [
        {name: "首页", id: 1, href: "/home"},
        {name: "关于华泰", id: 2, href: "/about"},
        {name: "华泰产品", id: 3, href: "/project"},
        {name: "华泰服务", id: 4, href: "/service"},
        {name: "联系华泰", id: 5, href: "/contact"},
    ];
    selectedName = "";
    addActive(name) {
        this.selectedName = name;
    }
}