import {SET_CURRENT_HEADER_TAB, SET_CURRENT_SLIDE, SET_CONTENT_SLIDE} from "../constants/constantsMainPage";

export const currentHeaderTab = (name) => ({
    type: SET_CURRENT_HEADER_TAB,
    payload: name,
});

export const setSlide = (index) => ({
    type: SET_CURRENT_SLIDE,
    payload: index,
});

export const setContentSlide = (index) => ({
    type: SET_CONTENT_SLIDE,
    payload: index,
});

