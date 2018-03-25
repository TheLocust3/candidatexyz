import $ from 'jquery';

export const SET_BLANK_NAVBAR = 'SET_BLANK_NAVBAR';
export const SET_HEADER_IMAGE = 'SET_HEADER_IMAGE';

export function setBlankNavbar(isBlank) {
    if (isBlank) {
        $('.header-image').addClass('header-image-blank');
        $('.header-image').css('background-image', 'url()');
        $('.navbar .link').addClass('inverted-link');
    } else {
        $('.header-image').removeClass('header-image-blank');
        $('.navbar .link').removeClass('inverted-link');
    }

    return {
        type: SET_BLANK_NAVBAR,
        data: isBlank
    }
}

export function setHeaderImage(image) {
    $('.header-image').css('background-image', `url(${image})`);

    return {
        type: SET_HEADER_IMAGE,
        data: image
    }
}
