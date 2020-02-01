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
                      cedis.map((cedi) => <CedisComponent 
                          id={cedi.id_cedis}
                          name={cedi.nombre}
                      />)
                  }
              </div>
            </section>
          </React.Fragment>
      )
    }


  }
  

export default ListCedis
