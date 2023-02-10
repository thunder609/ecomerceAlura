let itm = document.getElementById('main');
let url=('http://localhost:3000/articulos')
//data impri
let idd=0
export const fetchData1 = async (idd) => {
    const res = await fetch(url);
    const data = await res.json()
  
  data.forEach(item => {
     itm.innerHTML = ""
      const {id,name,image} = item;
      if(item.id==idd)
      {
        template.querySelector('h5').textContent = item.name
        template.querySelector('img').setAttribute('src',item.image);
         template.querySelector('.itemb').dataset.id = item.id;
         const clone = template.cloneNode(true)
        fragment.appendChild(clone)
      }
    })
   itm.appendChild(fragment)
  }