import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
  <div class="spinner-border" style="width: 8rem; height: 8rem;" role="status">
      <span class="visually-hidden">Loading...</span>
  </div>
`,
  styles: []
})
export class AppLoading implements OnInit {

  ngOnInit() {
  }

  constructor() {
  }

  
}
