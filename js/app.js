const /** Obtengo los elementos del DOM */
    $productName  = document .querySelector( '#product-name' ),
    $productPrice = document .querySelector( '#product-price' ),
    $btnSave      = document .querySelector( '#btn-save' ),
    $btnClear     = document .querySelector( '#btn-clear' ),
    $productList  = document .querySelector( '#product-list' );

/** Valida si un campo esta vacio */
const isEmpty = str => ! str .trim() .length;   // true/false

/** Mostrar Alerta */
const showAlert = () => {
    const $alert = document .createElement( 'ion-alert' );

    $alert .header = 'Invalid data';                    // Agrega texto a la cabecera
    $alert .subHeader = 'Please verify your inputs';    // Agrega mensaje al sub titulo del elemento alert
    $alert .message = 'Incorrect Name or Price';        // Agrega Mensaje del Alert
    $alert .buttons = [ 'Ok' ];                         // Indica los botones que se desean mostrar

    document .querySelector('ion-app').appendChild( $alert );           // Agrega el elemento al DOM
    
    return $alert .present();                           // Lanza el Alert
}

/** Eventos */
$btnClear .addEventListener( 'click', () => clearForm() );
$btnSave .addEventListener( 'click', () => {

    /** Valida campos */
    if( isEmpty( $productName .value ) || isEmpty( $productPrice .value ) || $productPrice .value <= 0 ) {
        console .log( 'The data is not valid' );
        showAlert();
        return;
    }

    const product = {
        name: $productName .value,
        price: Number( $productPrice .value )
    }
    console .log( 'Producto', product );
    createNewProduct( product );
    clearForm();

});

/** Crea estructura del DOM usando Ionic para un nuevo producto a mostrar */
const createNewProduct = ( product ) => {
    const /** Crea elementos para el DOM */
        $ionCard = document .createElement( 'ion-card' ),
        $ionCardContent = document .createElement( 'ion-card-content' );

    $ionCardContent .textContent = `${ product .name } $ ${ product .price }`;   // Insertamos texto al elemento
    $ionCard .appendChild( $ionCardContent );       // Insertamos elemento dentro de otro elemento
    $productList .appendChild( $ionCard );          // Inserta elemento al DOM

}

/** Limpia campos del Formulario */
const clearForm = () => {
    $productName .value = '';
    $productPrice .value = '';
}