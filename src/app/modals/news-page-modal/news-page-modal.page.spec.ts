import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsPageModalPage } from './news-page-modal.page';

describe('NewsPageModalPage', () => {
  let component: NewsPageModalPage;
  let fixture: ComponentFixture<NewsPageModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPageModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsPageModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
