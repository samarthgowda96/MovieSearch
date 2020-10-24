
import React from 'react';


function Lake(props){
    return(
      <h1>{props.name}</h1>
    )
  }

function Sea({name}){
    return(
        <h1>{name}</h1>
    )
}
const carList=[
    'tesla',
    'mustang',
    'Lamborgini'
]
const carObject=[
    {id:'1',name:'tesla', model:'2020'},
    {id:'2',name:'mustang', model:'2021'},
    {id:'3',name:'Lamborgini', model:'2022'}
]

function Tes(props){
    return(
        <> {/* reac fragment instead of div */}
        {props.teslas.map(tesla=>(
        <div>
            <h2>{tesla.name}</h2>
            <p>model year: {tesla.model}</p>
        </div>


        ))}
        </>
    )

}
function Car(props){
    return(
        <ul>
            {props.cars.map(car=>(
            <li>{car}</li>
            ))}
        </ul>
    )
}

  
  function Title(){
    return(
      <div>
        <Sea name='bay Beaccch'/>
        <Lake name='tahoe'/>
        <Lake name='assbury'/>
        <Lake name='cape may'/>
        <Car cars={carList}/>
        <Tes teslas={carObject}/>
        
      </div>
    )
  }

  const [x,y,z]=[
      'iphone',
      'samsung',
      'oneplus'
  ]
  console.log(x)
  console.log(y)
  console.log(z)

export default Title;