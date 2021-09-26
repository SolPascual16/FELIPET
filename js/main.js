/* Carrito */

function shoppingCart() {

    // Boton "Agregar al carrito" y Productos
        const addToShoppingCart = document.querySelectorAll( '.add-to-cart-btn' ); // Botón "Agregar al carrito"
        

        addToShoppingCart.forEach( ( addToCartButtons ) => {
            addToCartButtons.addEventListener( 'click', addToCartBtnClick )
        });

        function addToCartBtnClick( event ) {
            let btn = event.target;
            const products = btn.closest( '.product' );

            // Productos
                const productImg = products.querySelector( '.product-img' ).src;                        
                const productTitle = products.querySelector( '.product-title' ).textContent;
                const productPrice = products.querySelector( '.product-price' ).textContent;
                
        
            modalCart( productImg, productTitle, productPrice );

            cartCounterUpdate();
            
        };    
       
        
    // Modal cart
        const showCart = document.querySelector( '.show-cart' );
            
        function modalCart( productImg, productTitle, productPrice ) {

            // Que no se duplique el mismo producto en el Carrito
                let productsTitleRepeat = showCart.getElementsByClassName( 'shoppingCartProductsTitle' );
                    
                for( let i = 0; i < productsTitleRepeat.length; i++ ) {
                    if( productsTitleRepeat[i].innerHTML === productTitle ) {
                        let productsTitleQuantity = productsTitleRepeat[i].parentElement.parentElement.querySelector( '.shoppingCartProductsQuantity' );
                        productsTitleQuantity.value++;
                        cartTotalPrice();
                    
                        return;
                    }
                };

            const shoppingCartDiv = document.createElement( 'div' );
            const cartModal =
                ` 
                    <div class="row shoppingCartProducts mt-3 text-center">
                        <div class="col-3">
                            <img src=${productImg} class="imagenesModal"/>
                            <h6 class="mt-2 shoppingCartProductsTitle">${productTitle}</h6>
                        </div> 
                        <div class="col-3">
                            <p class="product-price shoppingCartProductsPrice">${productPrice}</p>
                        </div>
                        <div class="col-3">
                            <input class="text-center shoppingCartProductsQuantity inputCuenta" type="number" value="1">
                        </div>
                        <div class="col-3">
                            <button class="btn btn-danger" id="remove-product-btn" data-name="${productTitle}">
                                x
                            </button>
                        </div>
                    </div>
                `
                                    
            shoppingCartDiv.innerHTML = cartModal;
            showCart.append( shoppingCartDiv );
            

            // Botón Remove products
                const removeButton = shoppingCartDiv.querySelector( '#remove-product-btn' );

                removeButton.addEventListener( 'click', removeProductsFromCart );

            // Input Quantity
                const inputCartQuantity = shoppingCartDiv.querySelector( '.shoppingCartProductsQuantity' );
                
                inputCartQuantity.addEventListener( 'change', cartQuantityChange );
            
                
            cartTotalPrice();
        };

    // Cart Counter
        function cartCounterUpdate() {
            const cartProductsLength = document.querySelectorAll( '.shoppingCartProducts' );
            const cartCounter = document.querySelector( '#cart-counter' );
            cartCounter.innerHTML = cartProductsLength.length;
            cartTotalPrice();
        };  


    // Precio total del carrito
        function cartTotalPrice() {
            var totalCount = 0;
            const totalPrice = document.querySelector( '.total-price' );
            const shoppingCartProducts = document.querySelectorAll( '.shoppingCartProducts' );
            
            shoppingCartProducts.forEach( ( shoppingCartProducts ) => {

                const productsCartPriceElement = shoppingCartProducts.querySelector( '.shoppingCartProductsPrice' );
                const productsCartPrice = Number( productsCartPriceElement.textContent.replace( '$', '' ) );

                const productsCartQuantityElement = shoppingCartProducts.querySelector( '.shoppingCartProductsQuantity' );
                const productsCartQuantity = Number( productsCartQuantityElement.value );

                totalCount += productsCartPrice * productsCartQuantity;
            });

            totalPrice.innerHTML = `$${totalCount.toFixed(2)}`;
        };

    // Eliminar productos del carrito
        function removeProductsFromCart(event) {
            const removeBtnClicked = event.target;
            removeBtnClicked.closest( '.shoppingCartProducts' ).remove();
            cartTotalPrice();
            cartCounterUpdate();
        };
        
    // Cantidad del carrito (Input)
        function cartQuantityChange(event) {
            const inputCartChange = event.target;
            inputCartChange.value <= 0 ? ( inputCartChange.value = 1 ) : null;
            cartTotalPrice();
            cartCounterUpdate();
        };

    // Finalizar compra
        const botonFinalizarCompra = document.querySelector( '.btn-finalizar-compra' );

        botonFinalizarCompra.addEventListener('click', finalizarCompraTotal);

        function finalizarCompraTotal() {
            showCart.innerHTML = '';
            cartTotalPrice();
            cartCounterUpdate();
        };

    // Vaciar todo el carrito
        const botonVaciarCarrito = document.querySelector( '.btn-vaciar-carrito' );
        
        botonVaciarCarrito.addEventListener('click', vaciarCarritoCompleto);

        function vaciarCarritoCompleto() {
            showCart.innerHTML = '';
            cartTotalPrice();
            cartCounterUpdate();
        };
};

shoppingCart();


        
        

    