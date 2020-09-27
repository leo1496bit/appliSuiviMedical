import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscriptionService } from '../inscription.service';
import { InfosService } from '../infos.service';
import { CompteService } from '../compte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-medecin',
  templateUrl: './new-medecin.page.html',
  styleUrls: ['./new-medecin.page.scss'],
})
export class NewMedecinPage implements OnInit {
  newMedecin:FormGroup
  error:null
  constructor(private fb:FormBuilder, 
    private insc:InfosService,
    private compte:CompteService,
    private router:Router) { }

  ngOnInit() {
    this.newMedecin=this.fb.group({
      titre:['',Validators.required],
      nom:['',Validators.required],
      mail:['',Validators.compose([Validators.required,Validators.email])],
      tel:['',Validators.required]
    })
  }
  save(){
    let medecin=this.newMedecin.value
    let histor={description:"Ajout du médecin :"+this.newMedecin.get('nom').value,date:new Date().toUTCString()}
    let medecins=[],historique=[];
    console.log(this.insc.data)
    if(this.insc.data.medecins!==undefined){
      medecins=this.insc.data.medecins
    }
    if(this.insc.data.historique!=undefined){
      historique=this.insc.data.historique
    }
      medecins.push(medecin)
      historique.push(histor)
    
    this.insc.data={...this.insc.data, medecins,historique}
    
    console.log(this.insc.data)
     this.compte.AddMedecin(this.insc.data)
     .then(()=>{
     })
     .catch((error)=>console.error(error))
  }

}
