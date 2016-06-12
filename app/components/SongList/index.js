const React = require('react');
const Song = require('../Song');
const songsData = require('../../../data/localstorage.js');


class SongList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: () => {
                const songArray = [];
                const songs = songsData.songs;
                for (const song of Object.keys(songs)) {
                    songArray.push(songs[song]);
                    /* songArray.reduceRight((prev, curr, index, a) => {
                        curr.favourite = '0';
                        return false;
                    });*/
                }
                return songArray.sort((a, b) => {
                    let compareTo;
                    if (a.D < b.D) {
                        compareTo = -1;
                    } else {
                        if (a.B < b.B) {
                            compareTo = -1;
                        } else if (a.B > b.B) {
                            compareTo = 1;
                        } else {
                            compareTo = 0;
                        }
                    }
                    return compareTo;
                });
            },
        };
    }
    render() {
        return (
            <div className="songList">
                {this.state.data().map((song, i) => (
                    <div className="songItem row" key={i}>
                        <div className="col-lg-2 songsList_row-play">
                            <span className="remove">X</span>
                            <span className="play"></span>
                        </div>
                        <div className="col-lg-2 songsList_row-disc">
                            <div className="songsList_row-discPicture">
                                <div>
                                    {song.B}
                                </div>
                            </div>
                        </div>
                        <Song
                            key={i}
                            name={song.J}
                            artist={song.D}
                            favourite={false}
                        />
                    </div>
                    )
                )}
            </div>
        );
    }
}

module.exports = SongList;
