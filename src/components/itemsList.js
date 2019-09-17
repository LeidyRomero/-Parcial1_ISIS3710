import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default class ItemList extends React.Component {
  state = { 
  	
	"menu": [
		{
			"image":"http://dummyimage.com/50x50.jpg/ff4444/ffffff",
			"text": "Inicio"
		},
		{
			"image":"http://dummyimage.com/50x50.jpg/ff4444/ffffff",
			"text": "Explorar"
		},
		{
			"image":"http://dummyimage.com/50x50.jpg/ff4444/ffffff",
			"text": "Notificaciones"
		},
		{
			"image":"http://dummyimage.com/50x50.jpg/ff4444/ffffff",
			"text": "Mensajes"
		},
		{
			"image":"http://dummyimage.com/50x50.jpg/ff4444/ffffff",
			"text": "Guardados"
		},
		{
			"image":"http://dummyimage.com/50x50.jpg/ff4444/ffffff",
			"text": "Listas"
		},
		{
			"image":"http://dummyimage.com/50x50.jpg/ff4444/ffffff",
			"text": "Perfil"
		},
		{
			"image":"http://dummyimage.com/50x50.jpg/ff4444/ffffff",
			"text": "Más opciones"
		}
	]
  };
  render() {
    return (
      <div>
		{this.state.menu.map( (e,i) => <Item key={i} menu={e}/>)}
      </div>
    );
  }
}