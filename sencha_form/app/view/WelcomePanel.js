/*
 * File: app/view/WelcomePanel.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('raxa.view.WelcomePanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.welcomePanel',

    requires: [
        'raxa.view.patientForm',
        'raxa.view.notificationpanel',
        'raxa.view.feedbackForm',
        'Ext.form.Panel',
        'Ext.carousel.Carousel',
        'Ext.Map',
        'Ext.tab.Bar'
    ],

    config: {
        styleHtmlContent: true,
        items: [
            {
                xtype: 'patientForm',
                title: 'Form',
                iconCls: 'compose'
            },
            {
                xtype: 'notificationPanel',
                title: 'Notification',
                iconCls: 'favorites'
            },
            {
                xtype: 'feedbackForm',
                title: 'Feedback',
                iconCls: 'reply'
            },
            {
                xtype: 'map',
                iconCls: 'info',
                itemId: 'map'
            }
        ],
        tabBar: {
            docked: 'bottom'
        }
    }

});