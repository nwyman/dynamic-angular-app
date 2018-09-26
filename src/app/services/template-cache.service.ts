import { Injectable, TemplateRef } from '@angular/core';

@Injectable()
export class TemplateCacheService {
  refs = {};

  constructor() { }

  saveRef(path: string, template: TemplateRef<any>) {
    this.refs[path] = template;
  }

  getRef(path: string) {
    return this.refs[path];
  }
}
