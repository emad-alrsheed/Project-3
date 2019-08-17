import React, { Component } from 'react'
import Slice from './Slice'
export class SearchResults extends Component {
    state = {
        c: 10//counter for number on conntent in search result 
    };

    seeMore = () => {
        this.setState({ c: this.state.c + 10 })
    }
    render() {
        const { items, selected, selectVideo } = this.props
        let searchItem = [...items.slice(0, this.state.c)]
        let list = searchItem.map((item, i) => (<Slice key={i} selectVideo={selectVideo} item={item} />));
        if (selected.id) {
            return (<>
                {list}
                <button className="btn btn-link" style={{ visibility: this.state.c === 50 ? 'hidden' : 'visible' }} onClick={this.seeMore.bind(this.state.c)} >See more</button></>
            );

        } else {
            return (<></>);
        }
    }
}
export default SearchResults

