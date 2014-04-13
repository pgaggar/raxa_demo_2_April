/*
 * File: app/store/hospitalstore.js
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

Ext.define('raxa.store.hospitalstore', {
    extend: 'Ext.data.Store',

    requires: [
        'raxa.model.hospitalmodel',
        'Ext.util.Grouper'
    ],

    config: {
        autoLoad: true,
        data: [
            {
                State: 'DELHI',
                City: 'ROHINI',
                lat: '28.66435',
                long: '77.16546',
                hospital: 'ESCORTS',
                Specialization: 'CANCER'
            },
            {
                State: 'DELHI',
                City: 'SAKET',
                lat: '28.63214',
                long: '77.13265',
                hospital: 'FORD HEALTHCARE',
                Specialization: 'TRAUMA CENTER'
            },
            {
                State: 'DELHI',
                City: 'HAUZ KHAS',
                lat: '28.59568',
                long: '77.26545',
                hospital: 'R.J. GANDHI HOSPITAL',
                Specialization: 'CANCER'
            },
            {
                State: 'DELHI',
                City: 'RAJENDRA NAGAR',
                lat: '28.60898',
                long: '77.23654',
                hospital: 'AIIMS',
                Specialization: 'HIV'
            },
            {
                State: 'PUNJAB',
                City: 'PATHANKOT',
                lat: '28.65432',
                long: '77.13564',
                hospital: 'WILSON',
                Specialization: 'ALL'
            },
            {
                State: 'MAHARASHTRA',
                City: 'MUMBAI',
                lat: '28.67156',
                long: '77.19876',
                hospital: 'BREACH CANDY',
                Specialization: 'HIV'
            },
            {
                State: 'PUNJAB',
                City: 'LUDHIANA',
                lat: '28.63546',
                long: '77.28165',
                hospital: 'C.H. HEALTHCARE',
                Specialization: 'MALARIA'
            },
            {
                State: 'PUNJAB',
                City: 'PATIALA',
                lat: '28.60654',
                long: '77.23156',
                hospital: 'MAX HOSPITAL',
                Specialization: 'GENERAL'
            },
            {
                State: 'PUNJAB',
                City: 'AMRITSAR',
                lat: '28.65432',
                long: '77.11465',
                hospital: 'LEELAVATI',
                Specialization: 'TUMOR'
            },
            {
                State: 'HARYANA',
                City: 'GURGAON',
                lat: '28.59264',
                long: '77.32465',
                hospital: 'APOLLO GENERAL',
                Specialization: 'GENERAL'
            },
            {
                State: 'HARYANA',
                City: 'PANIPAT',
                lat: '28.61659',
                long: '77.10926',
                hospital: 'FUTURE GENERAL',
                Specialization: 'CARDIOLOGY'
            },
            {
                State: 'HARYANA',
                City: 'REWARI',
                lat: '28.63259',
                long: '77.16876',
                hospital: 'COLUMBIA ASIA',
                Specialization: 'CANCER'
            },
            {
                State: 'HARYANA',
                City: 'GURGAON',
                lat: '28.66265',
                long: '77.19872',
                hospital: 'SACHDEVA',
                Specialization: 'NEUROLOGY'
            },
            {
                State: 'UTTAR PRADESH',
                City: 'LUCKNOW',
                lat: '28.64356',
                long: '77.16987',
                hospital: 'ESCORTS',
                Specialization: 'CANCER'
            },
            {
                State: 'UTTAR PRADESH',
                City: 'MIRZAPUR',
                lat: '28.65423',
                long: '77.17564',
                hospital: 'ICMR',
                Specialization: 'KIDNEY TRANSPLANT'
            },
            {
                State: 'HIMACHAL PRADESH',
                City: 'SHIMLA',
                lat: '28.65987',
                long: '77.26546',
                hospital: 'ASTON ASIA',
                Specialization: 'BRAIN SURGERY'
            },
            {
                State: 'HIMACHAL PRADESH',
                City: 'MANALI',
                lat: '28.60598',
                long: '77.21035',
                hospital: 'CADILA HEALTHCARE',
                Specialization: 'ALL'
            },
            {
                State: 'UTTARAKHAND',
                City: 'ROORKEE',
                lat: '28.65432',
                long: '77.23246',
                hospital: 'PHARMIS GENERAL',
                Specialization: 'GENERAL'
            },
            {
                State: 'UTTARAKHAND',
                City: 'HARIDWAR',
                lat: '28.65432',
                long: '77.10654',
                hospital: 'SCORTAS INSTITUTE',
                Specialization: 'GENERAL'
            }
        ],
        model: 'raxa.model.hospitalmodel',
        storeId: 'searchStore',
        grouper: {
            groupFn: function(item) {
                return item.get('hospital')[0];
            },
            sortProperty: 'hospital'
        }
    }
});