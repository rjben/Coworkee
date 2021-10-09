Ext.define('App.view.widgets.BrowseToolbar', {
    extend: 'Ext.Toolbar',
    xtype: 'personbrowsetoolbar',

    cls: 'browse-toolbar',
    weighted: true,
    ui: 'tools',

    defaults: {
        ui: 'action'
    },

    items: {
        search: {
            testId: 'searchField',
            xtype: 'searchfield',
            reference: 'search',
            placeholder: 'Search',
            userCls: 'expandable',
            bind: '{filters.search}',
            weight: 0
        },
        refresh: {
            testId: 'refreshButton',
            iconCls: 'x-fa fa-refresh',
            handler: 'onRefreshTap',
            tooltip: 'Refresh',
            weight: 30
        },
        clear: {
            testId: 'clearFilter',
            iconCls: 'x-fa fa-undo',
            handler: 'onClearFiltersTap',
            tooltip: 'Clear Filters',
            weight: 20
        }
    }
});
