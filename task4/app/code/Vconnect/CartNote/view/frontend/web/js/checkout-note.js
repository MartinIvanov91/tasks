define([
    'uiComponent',
    'Magento_Customer/js/customer-data',
    'Magento_Checkout/js/model/quote',
    'Magento_Customer/js/model/customer',
    'underscore',
    'knockout'
], function(Component,customerData,quote,customer,_,ko) {
    'use strict';

    return Component.extend({
        defaults: {
            message: '$ { $.messageMore }',
            loggedMessage: '',
            template: 'Vconnect_CartNote/cart-note',
            isLoggedIn: ko.observable(),
            isCustomerLoggedIn: customer.isLoggedIn,
            customer: ko.observable({}),
            subtotal: '',
            tracks: {
                loggedMessage: true,
                message: true,
                subtotal: true
            }
        },
        initialize: function() {
            this._super();

            var self = this;
            var cart = customerData.get('cart');

            customerData.getInitCustomerData().done(function () {
                if (!_.isEmpty(cart()) && !_.isUndefined(cart().subtotalAmount)) {
                    self.subtotal = cart().subtotalAmount;
                }
            });
            
            cart.subscribe(function (cart) {
                if (!_.isEmpty(cart) && !_.isUndefined(cart.subtotalAmount)) {
                    self.subtotal = cart.subtotalAmount;
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
                if (self.subtotal <= 100) {
                    return self.messageMore;
                }

                if (self.subtotal > 100 && self.subtotal < 500) {
                    return self.messageGood;
                }

                if (self.subtotal >= 500) {
                    return self.messageRich;
                }
            }); 
        }
    });
});
