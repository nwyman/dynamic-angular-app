import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageContentComponent } from './page-content/page-content.component';
import { PageComponent } from './page/page.component';
import { TemplateCacheService } from './services/template-cache.service';
import { TestComponentComponent } from './test-component/test-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PageContentComponent,
    PageComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {useHash: true}),
  ],
  providers: [
    TemplateCacheService
  ],
  entryComponents: [
    PageContentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
