import React from 'react';
import Itemlist from './list';
import SearchItem from './search'
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restData: [],
            queryData: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            this.setState({
                restData: res.data
            })
        });
    }

    searchFunction = searchWord => {
        if(searchWord==='') {
            this.setState({queryData: []})
        }
        else {
            this.state.restData.filter(item => {
                if(item.name === searchWord) this.setState({queryData: item})
            })
        }
    }

    render() {
       const data = this.state.restData;
       const queryData = this.state.queryData;

       if(data.length>0) {
           return (
               <div>
                    <SearchItem call={this.searchFunction.bind(this)}/>
                    <Itemlist data={data} queryData={queryData}/>
               </div>
           )
        }

       return(
           <h1>Loading...</h1>
       )
    }
}

export default App;