import {Injectable} from '@angular/core';

@Injectable()
export class FiltresService {
  public goFiltreRegion: string = '';
  public goFiltreTypologie: string = '';
  public goFiltreRecherche: string = '';


  public cwFiltreRegion: string = '';
  public cwFiltreTypologie: string = '';
  public cwFiltreRecherche: string = '';
  public cwFiltreEquipe: string = '';

  public cwFiltreCw = '';
  public cwFiltreElec = '';

  public cwRefresh() {
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
