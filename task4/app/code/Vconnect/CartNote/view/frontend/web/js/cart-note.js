define([
    'uiComponent',
    'Magento_Customer/js/customer-data',
    'Magento_Customer/js/model/customer',
    'underscore',
    'knockout'
], function(Component,customerData,customer,_,ko) {
    'use strict';

    return Component.extend({
        defaults: {
            message: '$ { $.messageNoItems }',
            loggedMessage: '',
            template: 'Vconnect_CartNote/cart-note',
            isLoggedIn: ko.observable(),
            isCustomerLoggedIn: customer.isLoggedIn,
            customer: ko.observable({}),
            quantity: '',
            tracks: {
                loggedMessage: true,
                message: true,
                quantity: true
            }
        },
        initialize: function() {
            this._super();

            var self = this;
            var cart = customerData.get('cart');

            customerData.getInitCustomerData().done(function () {
                if (!_.isEmpty(cart()) && !_.isUndefined(cart().summary_count)) {
                    self.quantity = cart().summary_count;
                }
            });
            
            cart.subscribe(function (cart) {
                if (!_.isEmpty(cart) && !_.isUndefined(cart.summary_count)) {
                    self.quantity = cart.summary_count;
                }
            });

            if(this.isCustomerLoggedIn()) {
                this.isLoggedIn(true);
            }
            var time = setInterval(function () {
                self.customer = customerData.get('customer');
                if (localStorage["mage-cache-storage"] != '{}') {
                    clearInterval(time);
                }
                if (self.customer().fullname) {
                    var name = self.customer().fullname;
                    self.loggedMessage = name + ',';
                }
            }, 200);

            self.message = ko.computed(function () {
                if (self.quantity === 0) {
                    return self.messageNoItems;
                }

                if (self.quantity >= 1 && self.quantity <= 2) {
                    return self.messageBuyMore;
                }

                if (self.quantity >= 3) {
                    return self.messageProceed;
                }
            }); 
        }
    });
});
