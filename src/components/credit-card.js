import React, { Component } from 'react';
const MasterCard ='https://pngimage.net/wp-content/uploads/2018/06/mastercard-icon-png-3.png'
const Sim ='https://s4i6r5r7.stackpathcdn.com/wp/wp-content/themes/simoptions/assets/img/sim-card-bg-min.png'

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {

            cardNumber :'****  ****  ****  ****',

            validThru :'**/**',

            cardname:'THIS IS MY NAME',

            msg:''
          }

          this.CardNumber=this.CardNumber.bind(this);

          this.CardName=this.CardName.bind(this);

          this.ValidThru=this.ValidThru.bind(this);


    }

    CardName(event){
      event.target.value=event.target.value.replace(/[^a-zA-Z]/g,'');

      if(event.target.value.length<20){
          this.setState({ cardname:event.target.value.toUpperCase(), }) }

      else {
          this.setState({ msg:'Invalid name' })
      }
  }



    CardNumber(event) {
        event.target.value = event.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
        if (event.target.value.length<20)
        {  this.setState({ cardNumber : event.target.value, msg: 'Valid number', })}

    else {
      this.setState({msg: 'Invalid number ', })
     }  

      }

      

      ValidThru(event) {
    
       this.setState({
    
          validThru: (event.target.value).split("").slice(0,2).join("")+"/"+(event.target.value).split("").slice(2,4).join(""),
        })
         }

    render() { 
        return ( 

 <div className="container">
              
        <div className="visacard">

          <h1 className="comp">Company name</h1>
            <img className="sim" src={Sim} alt="#"/>
            <h1 className="cardnum">{this.state.cardNumber }</h1>

       
             <h2 className="validthru">{this.state.validThru}</h2>
            <img className="mastercard" src={MasterCard} alt="#"/>  
         <h3 className="cardname">{this.state.cardname}</h3>
             
        </div>

       <div className="inputs">

            <input type="text" maxLength="19"  placeholder="Card number" onChange= {this.CardNumber}/>
            <input type="text" maxLength="20"  placeholder="User name" onChange={this.CardName}/>
            <input type="text" maxLength="4"  placeholder="MM / YY"    onChange={this.ValidThru}/>
         </div>

   </div>
         );
    }
}
 
export default Card;