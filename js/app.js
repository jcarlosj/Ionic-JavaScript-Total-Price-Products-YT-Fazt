const /** Obtengo los elementos del DOM */
    $productName  = document .querySelector( '#product-name' ),
    $productPrice = document .querySelector( '#product-price' ),
    $btnSave      = document .querySelector( '#btn-save' ),
    $btnClear     = document .querySelector( '#btn-clear' );

/** Eventos */
$btnSave .addEventListener( 'click', () => {
    const product = {
        name: $productName .value,
        price: Number( $productPrice .value )
    }
    console .log( 'Producto', product );
});