import { Component, OnInit } from '@angular/core';
import { InfosService } from '../infos.service';
import { Router } from '@angular/router';
import { CompteService } from '../compte.service';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.page.html',
  styleUrls: ['./medecin.page.scss'],
})
export class MedecinPage implements OnInit {
  medecins:null
  constructor(private info:InfosService,
    private router:Router,
    private compte:CompteService) { }

  ngOnInit() {
    this.medecins=this.info.data.medecins
  }
  addMedecin(){
    this.router.navigate(['/new-medecin'])
  }
  update(id){
    this.info.courant=+id
    this.router.navigate(['/update-medecin'])
  }
  delete(id){
    this.info.data.historique.push({description:"Suppression du médecin :"+this.info.data.medecins[+id].nom,date:new Date().toUTCString()})
    this.info.data.medecins.splice(+id,1)
    this.compte.AddMedecin(this.info.data)
    .then(()=>console.log("supprimé"))
    .catch((error)=>console.error(error))
  }

}
