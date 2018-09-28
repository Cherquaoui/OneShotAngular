import {Injectable} from '@angular/core';

@Injectable()
export class FiltresService {
  public goFiltreRegion: string = '';
  public goFiltreTypologie: string = '';
  public goFiltreRecherche: string = '';



  public mapFiltreRegion = '';
  public mapFiltreTypologie = '';
  public mapFiltreEquipe = '';
  public mapFiltreCw = '';
  public mapFiltreElec = '';


  public cwFiltreRegion: string = '';
  public cwFiltreTypologie: string = '';
  public cwFiltreRecherche: string = '';
  public cwFiltreEquipe: string = '';

  public cwFiltreCw = '';
  public cwFiltreElec = '';

  public cwRefresh() {
    this.mapFiltreRegion = '';
    this.mapFiltreTypologie = '';

    this.mapFiltreEquipe = '';
    this.mapFiltreCw = '';
    this.mapFiltreElec = '';
  }

  public mapRefresh() {
    this.cwFiltreRegion = '';
    this.cwFiltreTypologie = '';
    this.cwFiltreRecherche = '';
    this.cwFiltreEquipe = '';
    this.cwFiltreCw = '';
    this.cwFiltreElec = '';
  }

  elecFiltreCw: string = '';
  elecFiltreElec: string = '';
  elecFiltreRegion: string = '';
  elecFiltreTypologie: string = '';
  elecFiltreRecherche: string = '';

  public goRefresh() {
    this.goFiltreRegion = '';
    this.goFiltreTypologie = '';
    this.goFiltreRecherche = '';


  }

  public elecRefresh() {
    this.elecFiltreCw = '';
    this.elecFiltreElec = '';
    this.elecFiltreRegion = '';
    this.elecFiltreTypologie = '';
    this.elecFiltreRecherche = '';

  }

}
