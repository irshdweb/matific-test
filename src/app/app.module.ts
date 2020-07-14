import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HeaderContentComponent } from './header-content/header-content.component';
import { ButtonDirective } from './directives/button.directive';
import { VideoComponent } from './modals/video/video.component';
import { GalleryComponent } from './gallery/gallery.component';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { MenusComponent } from './toolbar/menus/menus.component';
import { MaterialModule } from './modues/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    HeaderContentComponent,
    ButtonDirective,
    VideoComponent,
    GalleryComponent,
    MenusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUsefulSwiperModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
