import React from 'react';
import './shop.styles.scss';
import SHOP_DATA from './shop.data';
import CollectionPreview  from 
    '../../components/collection-preview/collection-preview-component';

class ShopPage extends React.Component {
    constructor(props) {
        super();

        this.state = {
            collections: SHOP_DATA
           
        };
    }

    render(){
        const {collections} = this.state;
        return ( <div className='shop-page'>
    
           {
           collections.map(({id, items, title, imageUrl}) =>(
                <CollectionPreview key={id} items={items} title={title} imageUrl={imageUrl}/> 
            ))
           }
                </div>
    )
    }
}
export default ShopPage;