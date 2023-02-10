export const pintarProduct = ( data, template, cont ) => {

    cont.innerHTML = "";

    let fragment = document.createDocumentFragment()

    data.forEach( h => {
        const { id,name,precio, image} = h;

        template.querySelector('img').setAttribute( 'src', image );
        // template.querySelector('h5').textContent = name;
        template.querySelector('p').textContent = name;
        template.querySelector('.itemb').dataset.id = id;
        template.querySelector('label').textContent = precio;
         
        const clone = template.cloneNode(true);
        fragment.appendChild( clone )
    } );

    cont.appendChild( fragment );

}