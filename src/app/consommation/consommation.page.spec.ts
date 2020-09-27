import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsommationPage } from './consommation.page';

describe('ConsommationPage', () => {
  let component: ConsommationPage;
  let fixture: ComponentFixture<ConsommationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsommationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsommationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
