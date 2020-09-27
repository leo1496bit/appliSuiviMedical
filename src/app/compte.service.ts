import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';
import { InfosService } from './infos.service';
import { Router, Navigation } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  createNewUser(user:string,email:string,password:string){
    return new Promise(
      (resolve,reject)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password).then(
          (data)=>{
            resolve();
          },
          (error)=>{
            reject(error);
          });
      }
    );
  }
  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
}
signOutUser() {
  firebase.auth().signOut();
}

inscrireUser(data:any){
  return new Promise(
    (resolve,reject)=>{
      this.httpClient.post('https://appli-medical.firebaseio.com/users.json',data).subscribe(
        () => {
          console.log('inscription reuissi');
        },
        (error) => {
          console.error("Erreur ! :"+ error);
        }
      )
    }
  )
  
}
AddMedecin(data:any){
  return new Promise(
    (resolve,reject)=>{
      this.httpClient.put('https://appli-medical.firebaseio.com/users/'+this.info.id+'.json',data).subscribe(
        () => {

          console.log('inscription reuissi ' +this.info.id);
          
          this.router.navigateByUrl('/medecin')
        },
        (error) => {
          console.error("Erreur ! :"+ error);
        }
      )
    }
  )
}
setProfil(data:any){
  return new Promise(
    (resolve,reject)=>{
      this.httpClient.put('https://appli-medical.firebaseio.com/users/'+this.info.id+'.json',data).subscribe(
        () => {

          console.log('inscription reuissi ' +this.info.id);
          
          this.router.navigateByUrl('/profil')
        },
        (error) => {
          console.error("Erreur ! :"+ error);
        }
      )
    }
  )
}


  constructor(public afAuth:AngularFireAuth, 
    private httpClient:HttpClient,
    private info:InfosService,
    private router:Router,
    private nav: NavController) { }
}
