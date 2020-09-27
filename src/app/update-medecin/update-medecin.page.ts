import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InfosService } from '../infos.service';
import { CompteService } from '../compte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.page.html',
  styleUrls: ['./update-medecin.page.scss'],
})
export class UpdateMedecinPage implements OnInit {
  newMedecin:FormGroup
  error:null
  constructor(private fb:FormBuilder, 
    private insc:InfosService,
    private compte:CompteService,
    private router:Router) { }

  ngOnInit() {
    this.newMedecin=this.fb.group({
      titre:[this.insc.data.medecins[this.insc.courant].titre,Validators.required],
      nom:[this.insc.data.medecins[this.insc.courant].nom,Validators.required],
      mail:[this.insc.data.medecins[this.insc.courant].mail,Validators.compose([Validators.required,Validators.email])],
      tel:[this.insc.data.medecins[this.insc.courant].tel,Validators.required]
    })
  }
  save(){
    let medecin=this.newMedecin.value
    let histor={description:"Modification du médecin :"+this.newMedecin.get('nom').value,date:new Date().toUTCString()}
    let historique=[];
    console.log(this.insc.data)
    if(this.insc.data.historique!=undefined){
      historique=this.insc.data.historique
    }
      this.insc.data.medecins[this.insc.courant].titre=this.newMedecin.get('titre').value
      this.insc.data.medecins[this.insc.courant].nom=this.newMedecin.get('nom').value
      this.insc.data.medecins[this.insc.courant].mail=this.newMedecin.get('mail').value
      this.insc.data.medecins[this.insc.courant].tel=this.newMedecin.get('tel').value
      historique.push(histor)
    
    this.insc.data={...this.insc.data,historique}
    
    console.log(this.insc.data)
     this.compte.AddMedecin(this.insc.data)
     .then(()=>{
     })
     .catch((error)=>console.error(error))
  }


}
