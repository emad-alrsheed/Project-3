import React, { Component } from 'react'
import Description from './Description'

export class VideoFrame extends Component {

    render() {
        const { selected, statistics, descriptionArray } = this.props
        if (!selected.id) {
            return (
                <>
                    <h1 className="mt-5" align="center" >You<span style={{ color: "red" }}>Tube</span> API</h1>
                    <h3 className="mt-5" align="center">Hello, Welcome in My YouTube API Page ...</h3>
                    <h3 align="center">Please insert your inquary in Search Box above.</h3>
                </>
            )
        }
        else {
            const { publishedAt, title } = selected.snippet
            let viewCount = statistics.viewCount + ""
            // console.log('this.description', descriptionArray);

            return (
                <>
                    <div className="col-12 col-md-9 col-xl-8 py-4 px-4 d-inline-block" >
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" width="1280" height="720" src={`https://www.youtube.com/embed/${selected.id.videoId}`} title="api" frameBorder="0" allowFullScreen="allowfullscreen"></iframe>
                        </div>
                        <div className='ml-2 mt-2' >
                            <h2 className='py-2'> {title}</h2>
                            <h6> {`${viewCount.replace(/(\d)(?=(\d{3})+$)/g, '$1,')} views`}</h6>
                            <p className='border-top text-muted pt-1'>{`Published on ${publishedAt.slice(0, 10)}`}</p>
                            <div>
                                <p className='m-0'>{descriptionArray[0]}</p>
                                <p className='m-0'>{descriptionArray[1]}</p>
                                <Description descriptionArray={descriptionArray.slice(2)} />
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }
}
export default VideoFrame



