const API_URL = "http://127.0.0.1:5000";
let My_pag = String(window.location.pathname.split("/").slice(-1)).slice(0,-5);
getdatos(My_pag);
function getdatos(metod){
    fetch(API_URL+`/tools_type/${metod}`)
    .then(response => response.json())
    .then(response =>{
        let a=response[0].tools_type_id
         fetch(API_URL+`/tools/${a}`)
        .then(response => response.json())
        .then(response => fichas(response))
        
    });

};

function fichas(data){
    const carrito=document.getElementById('producto')
    const content=document.getElementById('ost');
    
    const container = document.getElementById('url');
    content.innerHTML=`<h1 class='title'>${My_pag.replace(/-|%20/g," ")}</h1>`;
    
    const icon=document.createElement('img');
    icon.src='/img/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png';
    
    const icon1=document.createElement('img');
    icon1.src='/img/shopping_cart_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png';
    
    icon.classList.add('icon')
    icon1.classList.add('icon1')

    content.appendChild(icon1)
    content.appendChild(icon)

    for (let targets of data){        
        const costo = targets.costo;
        const descripcion = targets.descripcion;
        const nombre = targets.nombre;
        const stock = targets.stock;
        const tools_id = targets.tools_id;
        const tools_type_id = targets.tools_type_id;
        const usuario_id = targets.usuario_id;

        const Card=document.createElement('div');
        Card.style.color = '#FDFEFE'
        Card.style.backgroundColor = '#34495E';
        Card.style.margin = '3px';
        Card.style.borderRadius = '10px';
        Card.style.float = 'left';
        Card.style.fontFamily = 'Arial, Helvetica, sans-serif';
        Card.style.width='210px';
        Card.style.height='350px';
        Card.style.padding='10px';
        Card.style.alignItems='center';
        Card.style.overflow ='hidden';
        Card.style.whiteSpace='nowrap';
        Card.style.textOverflow ='ellipsis';

        Card.addEventListener('mouseover',()=>{
            Card.style.backgroundColor = '#2E4053';
            Card.style.cursor = 'pointer';
        })
        
        Card.addEventListener('mouseout',()=>{
            Card.style.backgroundColor = '#34495E'
        })

        Card.addEventListener('click', ()=>{
            location.href='/sub_pag/carrito.html';
    
        })

        const ImgProduct = document.createElement('img');
        ImgProduct.src ='/img/herramienta-hades.jpg';
        ImgProduct.style.borderRadius='10px';
        ImgProduct.style.width='200px'
        ImgProduct.style.height='200px'
        ImgProduct.style.margin='5px'

        const TitleCard = document.createElement('h2');
        TitleCard.textContent = nombre;
        TitleCard.style.marginLeft='10px';
        
        const DescCard = document.createElement('p');
        DescCard.textContent = `${descripcion}`;
        DescCard.style.marginLeft='10px';
        DescCard.style.overflow ='hidden';
        DescCard.style.fontSize='small';

        const CostoCard = document.createElement('h3');
        CostoCard.textContent = `$${costo}`;
        CostoCard.style.marginLeft='10px';

        Card.appendChild(ImgProduct);
        Card.appendChild(TitleCard);
        Card.appendChild(DescCard);
        Card.appendChild(CostoCard);
        container.appendChild(Card);

    };
    
};