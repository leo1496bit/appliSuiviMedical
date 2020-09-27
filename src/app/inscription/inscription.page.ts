import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { InscriptionService } from '../inscription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  inscriptionForm:FormGroup
  constructor(private fb: FormBuilder, private insc: InscriptionService, private router: Router) { }

  ngOnInit() {
    this.inscriptionForm= this.fb.group({
      nom: new FormControl('',Validators.required),
      prenom: new FormControl('',Validators.required),
      dateNaissance:new FormControl('',Validators.required),
      sexe:new FormControl('',Validators.required),
      adresse:new FormControl('',Validators.required),
      telephone:new FormControl('',Validators.required)
    })
    
  
  }
  afficher(){
    this.insc.data=this.inscriptionForm.value
    console.log(this.insc.data)
    this.router.navigate(['/inscription-suite'])
  }

}
