import React from 'react'
import Input from './Input'
import Labelcrear from './Labelcrear'
import Buttom from './Buttom'
import Buttomgenerada from './Buttomgenerada'
import Inputcrear from './Inputcrear'
import Labelcheck from './Labelcheck'
import Labellongi from './Labellongi'
import Inputlongitud from './Inputlongitud'
import Labelgenerada from './Labelgenerada'
import Inputgenerada from './Inputgenerada'
import "./estilo.css"
function Formgenerador() {
  return (
    <div className='generar'>
         <div className='labelinpu_generador'>
         <Labelcrear titulo="Usuario" /> 
         <Input/>
         <Labelcrear  titulo="Sitio"/> 
         <Input/>
         <div className='contador_contra'>
          <Labellongi titulo="Longitud de la contraseña"/>
          <Inputlongitud/>  
         </div>
         </div>
         
         <div className='cajas_gene'>
         <Inputcrear caja="checkbox"/>
         <Labelcheck titulo="Mayúsculas" />
         <Inputcrear caja="checkbox"/>
         <Labelcheck titulo="Minúsculas" />
         <Inputcrear caja="checkbox"/>
         <Labelcheck titulo="Números" />
         <Inputcrear caja="checkbox"/>
         <Labelcheck titulo="Caracteres especiales"/>
         </div>
       
        <div className='contenedor_boton'>
        
        <Buttom tipo="Generar contraseña"/>
        
        <Buttom tipo="Regresar"/>
       </div>

        <div className='contendor_contragene'>
        <Labelgenerada titulo="Contraseña Generada" />
        <Inputgenerada/>  
        <Buttomgenerada tipo="Copiar" />
        <Buttomgenerada tipo="Guardar"/>
        </div>
        </div>
       
        
    
  )
}

export default Formgenerador