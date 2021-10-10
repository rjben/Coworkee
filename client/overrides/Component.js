Ext.define('App.overrides.Component', {
    override: 'Ext.Component',

    onRender() {
        this.callParent(arguments);
        const el = this.el;
        const testId =  this.testId || this.itemId || '';
        if (el && el.dom && !Ext.isEmpty(testId) && Ext.isEmpty(this.inputAttrTpl)) {
            const attId = this.cyAtt || 'data-cy';
            el.dom.setAttribute(attId, testId);
        }
    },
});
