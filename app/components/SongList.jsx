var React = require('react');
    Song = require('./components/song.jsx'),
    songsData = require('../../data/localstorage.js');


var SongList = React.createClass({
    getInitialState : function(){
        return {
            data: function(){
                var songArray=[],
                    songs=songsData['songs'];

                for (var i in songs){
                    if (songs.hasOwnProperty(i)){
                        songArray.push(songs[i]);
                        songArray.reduceRight(function(prev,curr,i,a){
                            curr['favourite']='0';
                            return false;
                        });
                    }
                }
                return songArray.sort(function(a,b){
                    if (a.D < b.D) {
                        return -1;
                    }else if (a.D > b.D) {
                        return 1;
                    }else{
                        if (a.B < b.B) {
                            return -1;
                        }else if (a.B > b.B) {
                            return 1;
                        }else{
                            return 0;
                        }
                    }
                });
            }
        };
    },
    render : function(){
        return(
            <div className="songList">
                {this.state.data().map(function(song,i){
                    return(
                        <div className="songItem row">
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
                                favourite={song.favourite}
                            />
                        </div>
                    )
                })}
            </div>
        );
    }
});

module.exports = React.createElement(SongList);
