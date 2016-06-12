const React = require('react');
import { Link } from 'react-router';

class SongList extends React.Component {
    /* constructor() {
        super();
    }*/
    getArtist() {
        let artist;
        if (this.props.artist === 'AC/DC') {
            // artist = <a href="#acdc">AC/DC</a>;
            artist = <Link to="acdc">AC/DC</Link>;
        } else {
            artist = this.props.artist;
        }
        return artist;
    }
    render() {
        return (
            <div className="song row col-lg-8">
                <div className="col-lg-5">
                    {this.getArtist()}
                </div>
                <div className="col-lg-5">
                    {this.props.name}
                </div>
                <div className="col-lg-2 favourite">
                    {this.props.favourite ? '*' : ''}
                </div>
            </div>
        );
    }
}

SongList.propTypes = {
    artist: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    favourite: React.PropTypes.bool,
};

module.exports = SongList;
