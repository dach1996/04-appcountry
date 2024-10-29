import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomePageComponent } from "./shared/pages/homePage/homePage.component";
import { AboutPageComponent } from "./shared/aboutPage/aboutPage.component";

const routes: Route[] = [
    {
        path: "home",
        component: HomePageComponent
    },
    {
        path: "about",
        component: AboutPageComponent
    },
    {
        path: "**",
        redirectTo: 'home'
    }
]

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)
export class AppRoutingModule {

}