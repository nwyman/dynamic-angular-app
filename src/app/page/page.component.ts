import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TemplateCacheService } from '../services/template-cache.service';
import { PageContentComponent } from '../page-content/page-content.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {
  @Input() href;
  @Input() defaultPath: boolean;

  @ViewChild('page') pageTemplate: TemplateRef<any>;

  constructor(
    private router: Router,
    private cache: TemplateCacheService
  ) { }

  ngOnInit() {
    if (this.href || this.defaultPath) {
      const currentRoutes = [
        ...this.router.config
      ];

      const view = this.pageTemplate;

      this.cache.saveRef(this.href, view);
      const route: Route = { path: this.href, component: PageContentComponent, data: { href: this.href } };

      currentRoutes.push(route);

      if (this.defaultPath) {
        const defaultRoute: Route = { path: '', redirectTo: this.href, pathMatch: 'full' };
        currentRoutes.push(defaultRoute);
      }

      this.router.resetConfig(currentRoutes);
    } else {
      console.log(`error while trying to create a new route.
      if the defaultPath attribute is false then the href attribute can not be empty.`);
    }
  }
}
