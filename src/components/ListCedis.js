import React from 'react';
import CedisComponent  from './CedisComponent';
import { getCedis } from '../services/Cedis';

class ListCedis extends React.Component {
    constructor (props) {
      super(props)
  
      this.state = {
          cedis: [],
          isFetch: true,
      }
    }
  
    async componentDidMount() {
      const responseJson =  await getCedis()
      this.setState({ cedis: responseJson.data, isFetch: false })
      console.log(responseJson)
    }
  
    handleSearch = (search) => {
      console.log(search);
    }
  
    render () {
      const { isFetch, cedis} = this.state
  
      if (isFetch){
          return 'Loading...'
      }
      return (

        <React.Fragment>
            <section className="memes-container">
            <h1>Cedis Tracking App</h1>
            <div className="men_ex" id="mainmenu">
                {
                    cedis['memes'].map((cedi) => <CedisComponent 
                        id={cedi.id}
                        name={cedi.name}
                    />)
                }
           </div>
           </section>
        </React.Fragment>
      )
    }
  }
  

export default ListCedis
