define([
    'uiComponent',
    'Vconnect_CartNote/js/state'
], function (Component, checkoutStatus) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Vconnect_CartNote/checkout-checkbox'
        },
        
        message: checkoutStatus.notice
    });
});
