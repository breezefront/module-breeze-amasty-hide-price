define(['jquery'], ($) => {
    'use strict';

    var currentModalEl;

    $.fancyambox = {
        open(content) {
            if ($(content).modal('instance')) {
                $(content).modal('openModal');
            } else {
                $(content).modal({
                    modalClass: 'fancyambox-container',
                    buttons: [],
                    autoOpen: true
                });
            }
            currentModalEl = $(content);
        },

        close() {
            currentModalEl?.modal('closeModal');
        },

        getInstance() {
            return {
                showLoading() {
                    $('.fancyambox-container').spinner(true);
                },

                hideLoading() {
                    $('.fancyambox-container').spinner(false);
                }
            };
        }
    };

    return $.fancyambox;
});
