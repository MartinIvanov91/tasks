define([
    'mage/translate',
    'Magento_Ui/js/model/messageList',
    'Vconnect_CartNote/js/state'
],function ($t, messageList, checkoutStatus) {
    'use strict';

    return {
        validate: function () {
            var checked = true; 

            if(!checkoutStatus.notice()) {
                checked = false;
                messageList.addErrorMessage({ message: $t('Please, you need to understand.') });
            }

            return checked;
        }
    }
});
