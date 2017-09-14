var pantallaAnterior = "";

function callView(view){
	if(pantallaAnterior != ""){
		$('#'+pantallaAnterior+'-view').remove();
	}
	
	$( "#app" ).append(getView(view+'-view'));
	
	pantallaAnterior = view;
}

function getView(view){
	switch(view) {
    case 'home-view':
        return homeView;
        break;
    case 'login-view':
        return loginView;
        break;
    case 'pagA-view':
        return pagAView;
        break;
    case 'pagB-view':
        return pagBView;
        break;        
    default:
        return homeView
	}
}