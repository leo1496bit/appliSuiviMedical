import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompteService } from '../compte.service';
import { InscriptionService } from '../inscription.service';
import { Router } from '@angular/router';
import { InfosService } from '../infos.service';

@Component({
  selector: 'app-creer-compte',
  templateUrl: './creer-compte.page.html',
  styleUrls: ['./creer-compte.page.scss'],
})
export class CreerComptePage implements OnInit {
  creerCompteForm:FormGroup
  error:null
  constructor(private fb:FormBuilder,
    private compte:CompteService,
    private ins:InscriptionService,
    private router:Router,
    private info: InfosService) { }

  ngOnInit() {
    this.creerCompteForm=this.fb.group({
      username:['',Validators.compose([Validators.required,Validators.minLength(5)])],
      mail:['',Validators.compose([Validators.required,Validators.email])],
      pass:['',Validators.compose([Validators.required,Validators.minLength(6)])]
    })
  }
  save(){
    let user=this.creerCompteForm.get('username').value
    let mail=this.creerCompteForm.get('mail').value
    this.compte.createNewUser(
      this.creerCompteForm.get('username').value, 
      this.creerCompteForm.get('mail').value,
      this.creerCompteForm.get('pass').value)
      .then(()=>{
      console.log("enregistrement reuissi");
     
      this.ins.data={...this.ins.data, user,mail};
      this.compte.inscrireUser(this.ins.data);
      this.info.loadConso(this.creerCompteForm.get('mail').value).then((id)=>{
        console.log(id)
        this.info.id=id+""
        console.log(this.info.id)
        this.router.navigate(['/consommation']);
    }).catch((erro)=>{
      this.error=erro;
    })
  })

  }
}
