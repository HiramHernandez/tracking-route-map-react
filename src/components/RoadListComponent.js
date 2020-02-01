import React from 'react';
import CedisComponent from './CedisComponent';
import { getRoads } from '../services/Roads';

const RoadComponent = ({ id, name }) => (
    <li>
      <a id='link' href={`/road/${id}`}>
        { name }
      </a>
    </li>
)




class RoadListComponent extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            roads: [],
            isFetch: true,
        }
    }
    
    async componentDidMount() {
        const responseJson = await getRoads()
        this.setState({ roads: responseJson.data, isFetch: false })
        
    }

    render(){
        const { isFetch, roads} = this.state
  
        if (isFetch){
            return 'Loading...'
        }

        return (
            <React.Fragment>
                <section className="memes-container">
                  <h1>Cedis Tracking App</h1>
                  <div className="men_ex" id="mainmenu">
                      <ol id="lista2">
                        {
                            roads.map((road) => <RoadComponent 
                                id={road.id_ruta}
                                name={road.ruta}
                                />
                            )
                        }
                      </ol>
                  </div>
                </section>
              </React.Fragment>
          )

    }
}

export default RoadListComponent
