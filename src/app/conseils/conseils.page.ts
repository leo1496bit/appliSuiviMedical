import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conseils',
  templateUrl: './conseils.page.html',
  styleUrls: ['./conseils.page.scss'],
})
export class ConseilsPage implements OnInit {
  public conseils=[
    "Réduire ou éliminer l'exposition des fœtus et des nourrissons à la fumée de tabac.",
    "Favoriser l'allaitement naturel qui, avec l'administration d'aliments solides à un âge approprié, pourrait réduire l'incidence de l'asthme. Les nourrissons allaités présentent moins de symptômes respiratoires que les autres. Il y a lieu d'encourager les nouvelles mères à allaiter leur enfant pendant au moins six mois.",
    "Promouvoir un mode de vie sain. Un régime riche en acides gras oméga 3 (dérivés de poissons gras) et antioxydants (notamment les vitamines A, C et E et le sélénium) et faible en sel pourrait avoir un effet protecteur contre l'inflammation des voies aériennes.",
    "Faire régulièrement de l'activité physique pour améliorer sa santé générale, surtout si l'on est atteint d'asthme.",
    "Réduire les émissions des véhicules automobiles ainsi que les polluants atmosphériques commerciaux et industriels.",
    "Réduire l'exposition personnelle aux émissions des véhicules automobiles et aux polluants atmosphériques commerciaux et industriels.",
    "Faire le moins possible d'activités de plein air les jours où la pollution est élevée (c.-à-d. les jours d'été où un avis de smog est émis).",
    "Éviter que le personnel ne soit exposé à des substances dangereuses en milieu de travail.",
    "Prévenir la sensibilisation en prenant des mesures appropriées d'hygiène du travail.",
    " Favoriser l'utilisation de produits non polluants, surtout dans les écoles et les garderies.",
    "S'informer au sujet de l'asthme et de sa gestion.",
    "Éviter ou maîtriser les facteurs aggravants ou déclenchants."
  ]
  constructor() { }

  ngOnInit() {
  }


}
