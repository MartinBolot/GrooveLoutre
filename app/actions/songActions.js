import dispatcher from '../dispatcher.js';

export function removeSong(id) {
    dispatcher.dispatch({
        type: 'REMOVE_SONG',
        id,
    });
}
