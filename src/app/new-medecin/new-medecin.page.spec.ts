import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewMedecinPage } from './new-medecin.page';

describe('NewMedecinPage', () => {
  let component: NewMedecinPage;
  let fixture: ComponentFixture<NewMedecinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMedecinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewMedecinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
