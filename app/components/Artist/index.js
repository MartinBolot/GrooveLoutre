const React = require('react');

/* export default class Artist extends React.Component {
    render() {
        return (
            <div className="Artist">
                toto
            </div>
        );
    }
}*/

function Artist(props) {
    const { params } = props;
    return (
        <div className="Artist">
            Artist : {params.artist}
        </div>
    );
}

Artist.propTypes = {
    params: React.PropTypes.object.isRequired,
};

export default Artist;
