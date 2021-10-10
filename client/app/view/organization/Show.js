Ext.define('App.view.organization.Show', {
    extend: 'App.view.widgets.Show',
    xtype: 'organizationshow',

    controller: 'organizationshow',
    viewModel: {
        type: 'organizationshow'
    },

    title: 'Organization',

    items: {
        header: {
            items: {
                title: {
                    tpl: [
                        '<div class="icon x-fa fa-sitemap"></div>',
                        '<div class="name" data-cy="organizationName">{name}</div>',
                        '<div class="desc" data-cy="organizationManager">Managed by <b>{manager.fullname}</b><div>'
                    ]
                }
            }
        },

        content: {
            items: {
                left: {
                    items: {
                        people: {
                            xtype: 'organizationshowpeople'
                        }
                    }
                }
            }
        }
    }
});
