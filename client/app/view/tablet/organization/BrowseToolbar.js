Ext.define('App.view.tablet.organization.BrowseToolbar', {
    extend: 'App.view.widgets.BrowseToolbar',
    // xtype: 'organizationbrowsetoolbar', -- set by profile

    items: {
        managers: {
            testId: 'managersCombobox',
            xtype: 'combobox',
            valueField: 'value',
            displayField: 'label',
            placeholder: 'All Managers',
            queryMode: 'local',
            weight: 10,
            bind: {
                selection: '{filters.manager}',
                store: '{managers}'
            }
        },
        create: {
            testId: 'createOrganizationButton',
            xtype: 'button',
            iconCls: 'x-fa fa-plus',
            handler: 'onCreate',
            text: 'Create',
            weight: 50
        }
    }
});
