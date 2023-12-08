import React from 'react';
import Button from './Button'
class Header extends React.Component{
    render(){
     return(
       <header className='header'>{this.props.title}    {this.props.pizda}
       <Button text='хуй'/>
       <Button text=''/>

       </header>
       
     )
    }


}
export default Header