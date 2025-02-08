import { Component } from 'react';
import Item from '../Item/Item';

class List extends Component {
    render () {
         return (
           <ul className="listwrapper">
             {this.props.values.map((item) => {
               return <Item text={item} />;
             })}
           </ul>
         );
    }
}

 export default List;