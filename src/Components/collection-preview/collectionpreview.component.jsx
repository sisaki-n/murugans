import React from 'react';
import './collectionpreview.styles.scss';
import CollectionItem from '../collection-item/collectionitem.component'

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <div className = 'title'>
        <h1>{title.toUpperCase()}</h1>
        </div>
        <div className="preview">
            {
                items
                .filter((item,idx)=> idx<4)
                .map( ({id, ...OtherItemProps}) => (
                    <CollectionItem key={id} {...OtherItemProps}/>
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;