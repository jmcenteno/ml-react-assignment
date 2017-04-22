import _ from 'lodash';

import { Spaceship, SpaceshipsService } from '../../../services';
import * as Constants from './constants';

export function getSpaceships() {
    return (dispatch, getState) => {

        dispatch({
            type: Constants.GET_SPACESHIPS,
            payload: null
        });
        
        SpaceshipsService.getSpaceships()
            .then((data) => {
                
                dispatch({
                    type: Constants.GET_SPACESHIPS,
                    payload: _.sortBy(data || [], ['name'])
                });
           
            }, (error) => {

                dispatch({
                    type: Constants.GET_SPACESHIPS,
                    payload: []
                });

            });
        
    };
}

export function getSpaceshipDetails(id) {
    return (dispatch, getState) => {

    	dispatch({
            type: Constants.GET_SPACESHIP_DETAILS,
            payload: null
        });

        const spaceships = getState().spaceships;

        if (!spaceships || !spaceships.length) {

            SpaceshipsService.getSpaceships()
                .then((data) => {
                    
                    dispatch({
                        type: Constants.GET_SPACESHIPS,
                        payload: _.sortBy(data || [], ['name'])
                    });

                    dispatch({
                        type: Constants.GET_SPACESHIP_DETAILS,
                        payload: _.find(data, { id: +id })
                    });
            
                }, (error) => {

                    dispatch({
                        type: Constants.GET_SPACESHIP_DETAILS,
                        payload: {}
                    });

                });

        } else {

            dispatch({
                type: Constants.GET_SPACESHIP_DETAILS,
                payload: _.find(spaceships, { id: id })
            });

        }
        
    };
}

export const actions = {
    getSpaceships,
    getSpaceshipDetails,
 }
