var homeView = ''+
			'<div id="home-view">'+
				'<h1>Estoy en la Home</h1>'+
				'<input type="button" value="Ir al Login" id="goLogin" />'+
				'<input type="button" value="Ir al PagA " id="goPagA" />'+
				'<input type="button" value="Ir al PagB " id="goPagB" />'+
			'</div>';

var loginView = '';		
loginView +='<div id="login-view">';
//				'<h1>Estoy en el Login</h1>'+
//				'<input type="button" value="Ir al Home " id="goHome" />'+
//				'<input type="button" value="Ir al PagA"  id="goPagA" />'+
//				'<input type="button" value="Ir al PagB"  id="goPagB" />'+

loginView +='<div id="login-logo">'+
				'<div id="login-logo-cuerpo"><span class="milky">Control&aacute; tus gastos</span></div>'+
			'</div>';

loginView +='<div id="login-ingreso">'+
				'<div id="login-ingreso-contenedor">'+
					'<i class="fa fa-user" aria-hidden="true" id="awesome"></i><input type="text" id="usuario" placeholder="Usuario">'+
				'</div>'+
				'<div id="login-ingreso-contenedor">'+
					'<i class="fa fa-lock" aria-hidden="true" id="awesome"></i><input type="password" id="contrasenia" placeholder="Contrase&ntilde;a">'+
				'</div>'+
				'<div id="login-ingreso-botones">'+
					'<a href="#" id="ingresar"class="btnLogin">Ingresar</a>'+
					'<a href="#" id="registrar" class="btnLogin">Crear cuenta</a>'+
					'<a href="#" id="resetPassword">¡Olvidé mi contrase&ntilde;a!</a>'+
				'</div>'+
			'</div>';



loginView +='</div>';

var pagAView = ''+
			'<div id="pagA-view">'+
				'<h1>Estoy en la Pag A</h1>'+
				'<input type="button" value="Ir al Login" id="goLogin" />'+
				'<input type="button" value="Ir al Home"  id="goHome" />'+
				'<input type="button" value="Ir al PagB"  id="goPagB" />'+
			'</div>';

var pagBView = ''+			
			'<div id="pagB-view">'+
				'<h1>Estoy en la Pag B</h1>'+
				'<input type="button" value="Ir al Login" id="goLogin" />'+
				'<input type="button" value="Ir al Home"  id="goHome" />'+
				'<input type="button" value="Ir al PagA"  id="goPagA" />'+
			'</div>';