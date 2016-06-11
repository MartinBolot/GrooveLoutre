const React = require('react');

function SongList(props) {
    return (
        <div className="song row col-lg-8">
            <div className="col-lg-5">
                {props.artist}
            </div>
            <div className="col-lg-5">
                {props.name}
            </div>
            <div className="col-lg-2 favourite">
                {props.favourite ? '*' : ''}
            </div>
        </div>
    );
}

SongList.propTypes = {
    artist: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    favourite: React.PropTypes.bool,
};

module.exports = SongList;
