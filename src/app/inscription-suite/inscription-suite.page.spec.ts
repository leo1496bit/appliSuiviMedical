import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscriptionSuitePage } from './inscription-suite.page';

describe('InscriptionSuitePage', () => {
  let component: InscriptionSuitePage;
  let fixture: ComponentFixture<InscriptionSuitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionSuitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InscriptionSuitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
