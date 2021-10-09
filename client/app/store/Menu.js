Ext.define('App.store.Menu', {
    extend: 'Ext.data.Store',
    alias: 'store.menu',

    data: [{
        id: 'home',
        xtype: 'home',
        testId: 'homeMenu',
        text: 'Home',
        icon: 'home'
    }, {
        id: 'people',
        xtype: 'personbrowse',
        testId: 'employeesMenu',
        text: 'Employees',
        icon: 'users'
    }, {
        id: 'organizations',
        testId: 'organizationsMenu',
        xtype: 'organizationbrowse',
        text: 'Organizations',
        icon: 'sitemap'
    }, {
        id: 'offices',
        testId: 'officesMenu',
        xtype: 'officebrowse',
        text: 'Offices',
        icon: 'globe'
    }, {
        id: 'history',
        testId: 'historyMenu',
        xtype: 'historybrowse',
        text: 'Activity',
        icon: 'history'
    }]
});
