define([
    'uiComponent',
    'Magento_Checkout/js/model/payment/additional-validators',
    'Vconnect_CartNote/js/checkbox-validator'
], function (Component, additionalValidators, checkboxValidator) {
    'use strict';

    additionalValidators.registerValidator(checkboxValidator);

    return Component.extend({});
});
