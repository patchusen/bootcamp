/*
 * File: app/view/Categories.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('BucketList.view.Categories', {
    extend: 'Ext.Container',
    alias: 'widget.categories',

    config: {
        itemId: 'categories',
        ui: '',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'navigationview',
                items: [
                    {
                        xtype: 'list',
                        title: 'Categories',
                        itemId: 'categorylist',
                        ui: 'round',
                        itemTpl: [
                            '{name}'
                        ],
                        store: 'Categories'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onCategorylistItemTap',
                event: 'itemtap',
                delegate: '#categorylist'
            }
        ]
    },

    onCategorylistItemTap: function(dataview, index, target, record, e, eOpts) {
        BucketList.util.Bootcamp.openCategoryItems( dataview, index);
    }

});