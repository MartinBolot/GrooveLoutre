import { EventEmitter } from 'events';
import songsData from '../../data/localstorage.js';
import dispatcher from '../dispatcher.js';

class SongStore extends EventEmitter {
    constructor() {
        super();
        this.songs = {
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
    removeSong(id) {
        console.log(this.songs, id);
        this.emit('change');
    }
    getAll() {
        return this.songs;
    }
    handleAction(action) {
        console.log('songstore recieved an action', action);
        switch (action.type) {
            case 'REMOVE_SONG':
                // this.removeSong(action);
                break;
            default:
                console.log('default');
        }
    }
}

const songStore = new SongStore;
dispatcher.register(songStore.handleAction.bind(songStore));

export default songStore;
