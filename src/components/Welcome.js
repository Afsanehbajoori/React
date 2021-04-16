import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        // with this definition , we can use only name and heroName properties in the return Selection in stead of this.props.name
        const {name , heroName} = this.props
        
        return (
            <div>

                {/* we can use this.props.name without define a properties */}
                {/* <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1> */} 

                <h1>Welcome {name} a.k.a {heroName}</h1>


                
  
            </div>
            
        
        )
         
    }
}

export default Welcome; 