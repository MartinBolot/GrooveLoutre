const React = require('react');
import { Link } from 'react-router';
import * as songActions from '../../actions/songActions.js';

class SongList extends React.Component {
    constructor() {
        super();
        this.removeSong = this.removeSong.bind(this);
    }
    getArtist() {
        const artistRoute = `artist/${this.props.artist.replace('/', '-')}`;
        return <Link to={artistRoute}>{this.props.artist}</Link>;
    }
    removeSong() {
        songActions.removeSong(this.props.songKey);
    }
    render() {
        return (
            <div className="songItem row">
                <div className="col-lg-2 songsList_row-play">
                    <span onClick={this.removeSong} className="remove">X</span>
                    <span className="play"></span>
                </div>
                <div className="col-lg-2 songsList_row-disc">
                    <div className="songsList_row-discPicture">
                        <div>
                            {this.props.LP}
                        </div>
                    </div>
                </div>
                <div className="song row col-lg-8">
                    <div className="col-lg-5">
                        {this.getArtist()}
                    </div>
                    <div onClick={this.ttest} className="col-lg-5">
                        {this.props.name}
                    </div>
                    <div className="col-lg-2 favourite">
                        {this.props.favourite ? '*' : ''}
                    </div>
                </div>
            </div>
        );
    }
}

SongList.propTypes = {
    songKey: React.PropTypes.number.isRequired,
    artist: React.PropTypes.string.isRequired,
    LP: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    favourite: React.PropTypes.bool,
};

module.exports = SongList;
