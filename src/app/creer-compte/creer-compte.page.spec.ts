import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreerComptePage } from './creer-compte.page';

describe('CreerComptePage', () => {
  let component: CreerComptePage;
  let fixture: ComponentFixture<CreerComptePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerComptePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreerComptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
