import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component imports
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SpecialsComponent } from './specials/specials.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { WeekComponent } from './week/week.component';
import { ClothesSectionComponent } from './clothes-section/clothes-section.component';
import { PhonesSectionComponent } from './phones-section/phones-section.component';
import { JewellerySectionComponent } from './jewellery-section/jewellery-section.component';
import { PcSectionComponent } from './pc-section/pc-section.component';
import { WatchSectionComponent } from './watch-section/watch-section.component';
import { ShoesSectionComponent } from './shoes-section/shoes-section.component';
import { BabySectionComponent } from './baby-section/baby-section.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ClothMaleComponent } from './cloth-male/cloth-male.component';
import { ClothFemaleComponent } from './cloth-female/cloth-female.component';
import { WatchMaleComponent } from './watch-male/watch-male.component';
import { WatchFemaleComponent } from './watch-female/watch-female.component';
import { ShoesFemaleComponent } from './shoes-female/shoes-female.component';
import { ShoesMaleComponent } from './shoes-male/shoes-male.component';
import { JewelleryMaleComponent } from './jewellery-male/jewellery-male.component';
import { JewelleryFemaleComponent } from './jewellery-female/jewellery-female.component';
import { BabyFemaleComponent } from './baby-female/baby-female.component';
import { BabyMaleComponent } from './baby-male/baby-male.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddComponent } from './add/add.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"", component: MainContentComponent, children: [
    {path: "", component: HomeComponent},
    {path:"clothes", component: ClothesSectionComponent, children: [
      {path: "", component: ClothMaleComponent},
      {path: "female", component: ClothFemaleComponent}
    ] },
    {path:"watch", component: WatchSectionComponent, children: [
      {path: "", component: WatchMaleComponent},
      {path: "female", component: WatchFemaleComponent}
    ]},
    {path:"shoes", component: ShoesSectionComponent, children: [
      {path: "", component: ShoesMaleComponent},
      {path: "female", component: ShoesFemaleComponent}
    ]},
    {path: "jewellery", component: JewellerySectionComponent, children: [
      {path: "", component: JewelleryMaleComponent},
      {path: "female", component: JewelleryFemaleComponent}
    ]},
    {path: "pc", component: PcSectionComponent},
    {path: "phones", component: PhonesSectionComponent},
    {path: "baby", component: BabySectionComponent, children: [
      {path: "", component: BabyMaleComponent},
      {path: "female", component: BabyFemaleComponent}
    ]}
  ]},
  {path: "admin", component: AdminDashboardComponent, children: [
    {path: "", component: DashboardComponent},
    {path: "add", component: AddComponent}
  ]},
  {path:"signin", component:SignInComponent},
  {path: "signup", component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
