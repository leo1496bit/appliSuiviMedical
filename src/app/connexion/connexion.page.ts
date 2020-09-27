import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompteService } from '../compte.service';
import { Router } from '@angular/router';
import { InfosService } from '../infos.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  connexionForm:FormGroup
  error:null
  constructor(private fb:FormBuilder,
    private comte:CompteService,
    private info:InfosService,
    private router:Router
    ) { }

  ngOnInit() {
    this.connexionForm=this.fb.group({
      mail:['',Validators.required],
      pass:['',Validators.required]
    })
  }
  valider(){
    this.comte.signInUser(this.connexionForm.get('mail').value,
    this.connexionForm.get('pass').value).then(()=>{
      this.info.mail=this.connexionForm.get('mail').value;
      this.info.loadConso(this.connexionForm.get('mail').value).then((id)=>{
        console.log(id)
        this.info.id=id+""
        console.log(this.info.id)
        this.router.navigate(['/consommation']);
      }).catch((error)=>{
        this.error=error;
      });
    }).catch((error)=>{
      this.error=error;
    })
  }

}
