import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaqSectionComponent } from './faq-section/faq-section.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchNavbarComponentComponent } from './search-navbar-component/search-navbar-component.component';
import { MainDashboardAPComponent } from './main-dashboard-ap/main-dashboard-ap.component';
import { FooterComponent } from './footer/footer.component';
import { LanguageServiceService } from './common/language-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FaqSectionComponent,
    NavbarComponent,
    SearchNavbarComponentComponent,
    MainDashboardAPComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [LanguageServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
