import { 
    ADD_COMMENTS,
    ADD_VOTE_COMMENT,
    CREATE_COMMENT,
    REMOVE_CONTENT,
    REMOVE_VOTE_COMMENT,
    SET_COMMENTS,
    UPDATE_COMMENT
} from '../actions/comment'
import { REMOVE_POST } from '../actions/Post'
import { simpleAction } from '../actions/simpleAction';

const initialStateComments = {
    comments: []
}

export default function comment(state = initialStateComments, action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){

    }
}

