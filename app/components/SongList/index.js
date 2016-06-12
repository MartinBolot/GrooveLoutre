import React from 'react';
import Song from '../Song';
import songStore from '../../stores/SongStore.js';


export default class SongList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: songStore.getAll(),
        };
    }
    componentWillMount() {
        songStore.on('change', () => {
            this.setState({
                songs: songStore.getAll(),
            });
        });
    }
    render() {
        const { songs } = this.state;
        const list = songs.data().map((song, i) => (
            <Song
                key={i}
                songKey={i}
                name={song.J}
                artist={song.D}
                LP={song.B}
                favourite={false}
            />
        ));

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
                        {list}
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
