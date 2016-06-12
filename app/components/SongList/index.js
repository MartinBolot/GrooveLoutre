const React = require('react');
const Song = require('../Song');
const songsData = require('../../../data/localstorage.js');


export default class SongList extends React.Component {
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
            <div className="row">
                <div className="col-lg-2">
                    <div className="row">
                        <div className="col-lg-* leftSearchBox">
                            <form method="post" action="#">
                                <label htmlFor="leftSearchBoxText"></label>
                                <input id="leftSearchBoxText" type="text" className="form-control" />
                                <input type="submit" className="btn btn-primary btn-sm form-control" value="Find" />
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-*">
                            queuedSong X
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row sorting_row">
                        <div className="col-lg-2">Sort by</div>
                        <div className="col-lg-2 sorting_row-artist">LP</div>
                        <div className="col-lg-8 row">
                            <div className="col-lg-5 sorting_row-artist">Artist</div>
                            <div className="col-lg-5 sorting_row-name">Name</div>
                            <div className="col-lg-2 sorting_row-favourite">Favourite</div>
                        </div>
                    </div>
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
                        ))}
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="row">
                        <div className="col-lg-* filterBox">
                            <form method="post" action="#">
                                <label htmlFor="filterBoxText"></label>
                                <input id="filterBoxText" type="text" className="form-control" />
                                <input type="submit" className="btn btn-primary btn-sm form-control" value="Filter" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
