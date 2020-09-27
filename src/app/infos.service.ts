import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { CompteService } from './compte.service';
import { InscriptionService } from './inscription.service';

@Injectable({
  providedIn: 'root'
})
export class InfosService {
  id:string
  data:any
  mail:string
  courant:number;

  constructor( private httpClient:HttpClient, private comte:InscriptionService) { }
  loadConso(mail:string){
    return new Promise((resolve,reject)=>{
      this.httpClient.get<any[]>('https://appli-medical.firebaseio.com/users.json',{headers:
    new HttpHeaders({'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'}),observe:'response',responseType:'json'}).subscribe(
      (response) =>{
        this.mail=mail;
        for(let val in response.body){
          if(response.body[val].mail===this.mail){
            this.data=response.body[val];
            resolve(val);
          }
          
        }
      },
      (error)=>{
        reject(error);
      }
    )
    })
    
  }
  
}
