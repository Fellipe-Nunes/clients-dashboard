import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultPageComponent } from "./components/default-page/default-page.component";
import { NavbarComponent } from "./navigation/navbar.component";
import { ClientRoutes } from "./pages/client/client.module";
import { EnterpriseRoutes } from "./pages/enterprise/enterprise.module";

const routes: Routes = [
  {
    path: "",
    component: NavbarComponent,
    children: [
      {
        path: "",
        component: DefaultPageComponent 
      },
      ...EnterpriseRoutes, 
      ...ClientRoutes,
      {
        path: "**",
        redirectTo: "" 
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
