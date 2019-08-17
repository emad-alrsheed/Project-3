import React, { Component } from 'react'

export class Description extends Component {
    state = {
        array: []
    };
    seeMore = () => {
        let list = this.props.descriptionArray.map((item, i) => (<p className={"m-0"} key={i}>{item}</p>))
        this.setState({ array: list })
        // console.log('array', this.state.array);
    }
    seeLess = () => {
        this.setState({ array: [] })

    }


    render() {
        const { descriptionArray } = this.props
        if (descriptionArray.length >= 2) {
            return (<>
                {this.state.array}
                <button onClick={this.seeMore} className="btn btn-link" style={{ display: (descriptionArray.length > 2 && this.state.array.length === 0) ? 'block' : 'none' }}  >Show More</button>
                <button onClick={this.seeLess} className="btn btn-link" style={{ display: (descriptionArray.length > 2 && this.state.array.length > 0) ? 'block' : 'none' }}  >Show Less</button>

            </>
            );

        } else {
            return (<></>);
        }
    }
}
export default Description
