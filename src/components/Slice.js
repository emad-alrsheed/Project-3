import React, { Component } from 'react'

export class Slice extends Component {
    render() {
        const { item, selectVideo } = this.props
        return (
            <>
                <div style={{ cursor: "pointer" }} onClick={selectVideo.bind(this, item)} className="container ">
                    <div className="row mb-3">
                        <img className=" p-xl-0" width="200" height="112" src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className="col">
                            <h6 className=" mt-1 ">{item.snippet.title}</h6>
                            <p className='text-muted pt-1'>{`Published on  ${item.snippet.publishedAt.slice(0, 10)}`}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Slice
