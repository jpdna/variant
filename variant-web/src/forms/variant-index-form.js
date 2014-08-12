/*
 * Copyright (c) 2012 Francisco Salavert (ICM-CIPF)
 * Copyright (c) 2012 Ruben Sanchez (ICM-CIPF)
 * Copyright (c) 2012 Ignacio Medina (ICM-CIPF)
 *
 * This file is part of JS Common Libs.
 *
 * JS Common Libs is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * JS Common Libs is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with JS Common Libs. If not, see <http://www.gnu.org/licenses/>.
 */

VariantIndexForm.prototype = new GenericFormPanel();

function VariantIndexForm(args) {
    args.analysis = 'hpg-variant.index';
    GenericFormPanel.prototype.constructor.call(this, args);

    this.id = Utils.genId("VariantIndexForm");
    this.headerWidget = this.webapp.headerWidget;
    this.opencgaBrowserWidget = this.webapp.headerWidget.opencgaBrowserWidget;
}

VariantIndexForm.prototype.beforeRun = function () {

    if (this.testing) {
        console.log("Watch out!!! testing flag is on, so job will not launched.")
    }
};


VariantIndexForm.prototype.getPanels = function () {
    var items = [
        this._getBrowseForm()
    ];

    var form = Ext.create('Ext.panel.Panel', {
        margin: "15 0 5 0",
        border: false,
//		layout:{type:'vbox', align: 'stretch'},
        buttonAlign: 'center',
        width: "99%",
        //height:900,
        //width: "600",
        items: items,
        defaults:{
            margin:'0 0 15 0'
        }
    });

    return [this._getExampleForm(), form];
};


VariantIndexForm.prototype._getExampleForm = function () {
    var _this = this;

    var example1 = Ext.create('Ext.Component', {
        html: '<span class="s140"><span class="btn btn-default">Load</span> &nbsp; VCF file example</span>',
        cls: 'dedo',
        listeners: {
            afterrender: function () {
                this.getEl().on("click", function () {
                    _this.loadExample1();
                    Ext.example.msg("Example loaded", "");
                });

            }
        }
    });

    var exampleForm = Ext.create('Ext.container.Container', {
        bodyPadding: 10,
        cls:'bootstrap',
        items: [this.note1, example1],
        defaults: {margin: '5 0 0 0'},
        margin:'0 0 10 0'
    });

    return exampleForm;
};

VariantIndexForm.prototype._getBrowseForm = function () {
    var _this = this;

    var note1 = Ext.create('Ext.container.Container', {
        html: '<p>Please select a VCF file from your <span class="info">server account</span> using the <span class="emph">Browse</span> button.</p>'
    });
    var note2 = Ext.create('Ext.container.Container', {
        html: '<p>Please select a PED file from your <span class="info">server account</span> using the <span class="emph">Browse</span> button.</p>'
    });

    var formBrowser = Ext.create('Ext.panel.Panel', {
        title: "Select your data",
        header:this.headerFormConfig,
        border: true,
        padding: "5 0 0 0",
        bodyPadding: 10,
        items: [
            note1,
            this.createOpencgaBrowserCmp({
                fieldLabel: 'Input VCF file:',
                dataParamName: 'vcf-file',
                id: this.id + 'vcf-file',
                mode: 'fileSelection',
                allowedTypes: ['vcf'],
                allowBlank: false
            }),
            note2,
            this.createOpencgaBrowserCmp({
                fieldLabel: 'Input PED file:',
                dataParamName: 'ped-file',
                id: this.id + 'ped-file',
                mode: 'fileSelection',
                allowedTypes: ['ped'],
                allowBlank: false
            })]
    });
    return formBrowser;
};


VariantIndexForm.prototype.loadExample1 = function () {
    Ext.getCmp(this.id + 'vcf-file').setText('<span class="emph">Example file.vcf</span>', false);
    Ext.getCmp(this.id + 'vcf-file' + 'hidden').setValue('example_file.vcf');

    Ext.getCmp(this.id + 'ped-file').setText('<span class="emph">Example file.ped</span>', false);
    Ext.getCmp(this.id + 'ped-file' + 'hidden').setValue('example_file.ped');


    Ext.getCmp(this.id + 'jobname').setValue("VCF example");
    Ext.getCmp(this.id + 'jobdescription').setValue("VCF example");
};
