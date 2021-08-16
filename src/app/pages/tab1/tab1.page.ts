import { PedidosService } from './../../services/pedidos.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ opacity: 0 }),
            animate('1.5s ease-out', 
                    style({  opacity: 1 }))
          ]
        )
      ]
    )
  ]
})
export class Tab1Page {

	start = [];
	tempo = [];
	interval =[];

 	pedidos: Observable<any>;

  constructor(private pedidosService: PedidosService) { }
 
	ngOnInit() { 
		this.getPedidos();
	}
 
  	getPedidos(): void {
    	this.pedidos = this.pedidosService.getPedidos();
  	}

  	setEntrega(id: number):void {
  		if(!this.start[id]) {
  			this.start[id] = null;

  			this.start[id] = new Date();


		    this.interval[id] = setInterval(() => {
		      this.tempo[id] = new Date((new Date().getTime() - this.start[id].getTime()));
		    }, 1000);
  		} else {
  			clearInterval(this.interval[id]);
  			this.interval[id] = null;
  			this.start[id] = null;
  			this.tempo[id] = null;
  		}
  	}
}
