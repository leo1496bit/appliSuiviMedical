import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { InscriptionService } from '../inscription.service';
import { Router } from '@angular/router';
import { CompteService } from '../compte.service';

@Component({
  selector: 'app-inscription-suite',
  templateUrl: './inscription-suite.page.html',
  styleUrls: ['./inscription-suite.page.scss'],
})
export class InscriptionSuitePage implements OnInit {
  suiteForm:FormGroup
  @Input() heure:number
  conso:0
  constructor(private fb:FormBuilder, private inscr:InscriptionService, private router:Router,
    private compte: CompteService) { }

  ngOnInit() {
    this.suiteForm=this.fb.group({
      maladie: new FormControl('',Validators.required),
      consommation: new FormControl('',Validators.required),
      heures: this.fb.array(
        [
          
        ]
      )
    })
    
  }
  get heures(){
    return this.suiteForm.get('heures') as FormArray;
  }
  addHeures(){
    this.heures.clear()
    for(let i=0; i<this.heure; i++){
      this.heures.push(this.fb.control('',Validators.required));
    }
    console.log(this.heures)
  }
  valider(){
    this.inscr.data={...this.inscr.data,...this.suiteForm.value}
    console.log(this.inscr.data)
    this.router.navigate(['/creer-compte'])

  }

}
