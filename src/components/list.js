import React from 'react';
import '../styling/list.css'

class Itemlist extends React.Component {
    render() {
        const queryData = this.props.queryData;

        if(queryData.name!==undefined){
            return(
                <ul>
                    <li>
                        Full name: {queryData.name}<br/>
                        City: {queryData.address.city}<br/>
                        Company: {queryData.company.name}<br/>
                        Email: {queryData.email}<br/>
                        Phone number: {queryData.phone}<br/>
                        Username: {queryData.username}
                    </li>
                </ul>
            )
        } 
        else {
            return(
                <ul>
                    {this.props.data.map((item) => (
                        <li key={item.id}>
                            Full name: {item.name}<br/>
                            City: {item.address.city}<br/>
                            Company: {item.company.name}<br/>
                            Email: {item.email}<br/>
                            Phone number: {item.phone}<br/>
                            Username: {item.username}
                        </li>
                    ))}
                </ul>
            )
        }
    }
}

export default Itemlist;