import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TemplateCacheService } from '../services/template-cache.service';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html'
})
export class PageContentComponent implements OnInit {
  @ViewChild('contentArea', { read: ViewContainerRef }) contentArea: ViewContainerRef;

  templatePath;

  constructor(
    private route: ActivatedRoute,
    private cache: TemplateCacheService
  ) {
    this.route.data.subscribe((value) => {
      this.templatePath = value.href;
    });
  }

  ngOnInit() {
    const lateView: TemplateRef<any> = this.cache.getRef(this.templatePath);

    if (lateView) {
      this.contentArea.insert(lateView.createEmbeddedView(null));
    } else {
      console.log('error while trying to embed view into page content. template could not be found at path ' + this.templatePath);
    }
  }

}
