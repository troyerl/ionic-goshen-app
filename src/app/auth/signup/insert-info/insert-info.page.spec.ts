import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsertInfoPage } from './insert-info.page';

describe('InsertInfoPage', () => {
  let component: InsertInfoPage;
  let fixture: ComponentFixture<InsertInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsertInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
