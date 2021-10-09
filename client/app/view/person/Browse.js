Ext.define('App.view.person.Browse', {
    extend: 'App.view.widgets.Browse',

    fields: {
        office: {
            property: 'person.office_id'
        },
        organization: {
            property: 'person.organization_id'
        }
    },

    controller: 'personbrowse',
    viewModel: {
        type: 'personbrowse'
    },

    cls: 'personbrowse',
    bind: {
        store: '{people}'
    }
});
