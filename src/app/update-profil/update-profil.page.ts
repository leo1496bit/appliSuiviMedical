import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { InfosService } from '../infos.service';
import { CompteService } from '../compte.service';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.page.html',
  styleUrls: ['./update-profil.page.scss'],
})
export class UpdateProfilPage implements OnInit {
  profilForm:FormGroup
  constructor(private fb:FormBuilder,
    private info:InfosService,
    private compte:CompteService) { }

  ngOnInit() {
    this.profilForm=this.fb.group({
      nom: new FormControl(this.info.data.nom,Validators.required),
      prenom: new FormControl(this.info.data.prenom,Validators.required),
      dateNaissance:new FormControl(this.info.data.dateNaissance,Validators.required),
      sexe:new FormControl(this.info.data.sexe,Validators.required),
      adresse:new FormControl(this.info.data.adresse,Validators.required),
      telephone:new FormControl(this.info.data.telephone,Validators.required),
      maladie: new FormControl(this.info.data.maladie,Validators.required),
      username:[this.info.data.user,Validators.compose([Validators.required,Validators.minLength(5)])],
      mail:[this.info.data.mail,Validators.compose([Validators.required,Validators.email])]
    })
  }
  afficher(){
    this.info.data.nom=this.profilForm.get('nom').value
    this.info.data.prenom=this.profilForm.get('prenom').value
    this.info.data.user=this.profilForm.get('username').value
    this.info.data.dateNaissance=this.profilForm.get('dateNaissance').value
    this.info.data.sexe=this.profilForm.get('sexe').value
    this.info.data.adresse=this.profilForm.get('adresse').value
    this.info.data.telephone=this.profilForm.get('telephone').value
    this.info.data.maladie=this.profilForm.get('maladie').value
    this.info.data.mail=this.profilForm.get('mail').value

    let histor={description:"Modification du profil ",date:new Date().toUTCString()}
    let historique=[];
    if(this.info.data.historique!=undefined){
      historique=this.info.data.historique
    }
    historique.push(histor)
    this.info.data={...this.info.data,historique}
    this.compte.setProfil(this.info.data)
     .then(()=>{
     })
     .catch((error)=>console.error(error))
  }

}
