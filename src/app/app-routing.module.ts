import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomePageComponent } from "./shared/pages/homePage/homePage.component";
import { AboutPageComponent } from "./shared/pages/aboutPage/aboutPage.component";
import { ContactPageComponent } from "./shared/pages/contactPage/contactPage.component";

const routes: Route[] = [
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: "about",
        component: AboutPageComponent
    },
    {
        path: "contact",
        component: ContactPageComponent
    },
    {
        path: "**",
        redirectTo: ''
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