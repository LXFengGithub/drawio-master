(function () {
    Sidebar.prototype.addFlowchartPalette = function () {
        var w = 100;
        var h = 100;
        var s = 'strokeWidth=2;html=1;shape=mxgraph.flowchart.';
        var s2 = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;html=1;shape=mxgraph.flowchart.';
        var s3 = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;html=1;shape=';
        var gn = 'mxgraph.flowchart';
        var dt = '';
        this.setCurrentSearchEntryLibrary('flowchart');

        this.addPaletteFunctions('flowchart', mxResources.get('flowchart'), false,
            [
                this.createVertexTemplateEntry('rounded=0;whiteSpace=wrap;html=1;', 120, 60, '', '流程', null, null, 'rect rectangle box'),
                this.createVertexTemplateEntry(s + 'decision;whiteSpace=wrap;', w, h, '', '判断', null, null, this.getTagsForStencil(gn, 'decision', dt).join(' ')),
                this.createVertexTemplateEntry(s + 'terminator;whiteSpace=wrap;', w, h * 0.6, '', '开始/结束', null, null, this.getTagsForStencil(gn, 'terminator', dt).join(' ')),
                this.createVertexTemplateEntry(s + 'document2;whiteSpace=wrap;size=0.25;', w, h * 0.6, '', '文档', null, null, this.getTagsForStencil(gn, 'document', dt).join(' ')),
                this.createVertexTemplateEntry('shape=parallelogram;html=1;strokeWidth=2;perimeter=parallelogramPerimeter;whiteSpace=wrap;rounded=1;arcSize=12;size=0.23;', w, h * 0.6, '', '数据', null, null, this.getTagsForStencil(gn, 'data', dt).join(' ')),
                this.createVertexTemplateEntry(s3 + 'process;whiteSpace=wrap;rounded=1;size=0.14;arcSize=6;', w, h * 0.6, '', '子流程', null, null, this.getTagsForStencil(gn, 'predefined_process', dt).join(' ')),
                this.createVertexTemplateEntry(s + 'stored_data;whiteSpace=wrap;', w, h * 0.6, '', '外部数据', null, null, this.getTagsForStencil(gn, 'stored_data', dt).join(' ')),
                this.createVertexTemplateEntry('shape=internalStorage;whiteSpace=wrap;html=1;dx=15;dy=15;rounded=1;arcSize=8;strokeWidth=2;', w * 0.7, h * 0.7, '', '内部存储', null, null, this.getTagsForStencil(gn, 'internal_storage', dt).join(' ')),
                this.createVertexTemplateEntry(s + 'sequential_data;whiteSpace=wrap;', w, h, '', '队列数据', null, null, this.getTagsForStencil(gn, 'sequential_data', dt).join(' ')),
                this.createVertexTemplateEntry(s + 'direct_data;whiteSpace=wrap;', w, h * 0.6, '', '数据库', null, null, this.getTagsForStencil(gn, 'direct_data', dt).join(' ')),
                this.createVertexTemplateEntry('html=1;strokeWidth=2;shape=manualInput;whiteSpace=wrap;rounded=1;size=26;arcSize=11;', w, h * 0.6, '', '人工输入', null, null, this.getTagsForStencil(gn, 'manual_input', dt).join(' ')),
                this.createVertexTemplateEntry(s3 + 'card;whiteSpace=wrap;size=20;arcSize=12;', w, h * 0.6, '', '卡片', null, null, this.getTagsForStencil(gn, 'card', dt).join(' ')),
                this.createVertexTemplateEntry('shape=tape;whiteSpace=wrap;html=1;strokeWidth=2;size=0.19', w, h * 0.65, '', '条带', null, null, this.getTagsForStencil(gn, 'tape', dt).join(' ')),
                this.createVertexTemplateEntry(s + 'display;whiteSpace=wrap;', w, h * 0.6, '', '展示', null, null, this.getTagsForStencil(gn, 'display', dt).join(' ')),
                this.createVertexTemplateEntry(s3 + 'trapezoid;perimeter=trapezoidPerimeter;whiteSpace=wrap;size=0.23;arcSize=10;flipV=1;', w, h * 0.6, '', '人工操作', null, null, this.getTagsForStencil(gn, 'manual_operation', dt).join(' ')),
                this.createVertexTemplateEntry(s3 + 'hexagon;perimeter=hexagonPerimeter2;arcSize=6;size=0.27;', w, h * 0.6, '', '预备', null, null, this.getTagsForStencil(gn, 'preparation', dt).join(' ')),
                this.createVertexTemplateEntry(s2 + 'parallel_mode;pointerEvents=1', w * 0.95, h * 0.4, '', '并行模式', null, null, this.getTagsForStencil(gn, 'parallel_mode', dt).join(' ')),
                this.createVertexTemplateEntry(s + 'loop_limit;whiteSpace=wrap;', w, h * 0.6, '', '循环限值', null, null, this.getTagsForStencil(gn, 'loop_limit', dt).join(' ')),
                this.createVertexTemplateEntry(s2 + 'on-page_reference;', w * 0.6, h * 0.6, '', '页内引用', null, null, this.getTagsForStencil(gn, 'on-page_reference', dt).join(' ')),
                this.createVertexTemplateEntry(s3 + 'offPageConnector;rounded=0;size=0.5;', w * 0.6, h * 0.6, '', '跨页引用', null, null, this.getTagsForStencil(gn, 'off-page_reference', dt).join(' ')),
                this.createVertexTemplateEntry(s + 'annotation_1;align=left;pointerEvents=1;', w * 0.5, h, '', '注解 1', null, null, this.getTagsForStencil(gn, 'annotation_1', dt).join(' ')),
                this.createVertexTemplateEntry(s + 'annotation_2;align=left;labelPosition=right;pointerEvents=1;', w * 0.5, h, '', '注解 2', null, null, this.getTagsForStencil(gn, 'annotation_2', dt).join(' ')),





                // this.createVertexTemplateEntry(s2 + 'collate;', w, h, '', '时间信号', null, null, this.getTagsForStencil(gn, 'collate', dt).join(' ')),
                // this.createVertexTemplateEntry(s + 'database;whiteSpace=wrap;', w * 0.6, h * 0.6, '', '数据库', null, null, this.getTagsForStencil(gn, 'database', dt).join(' ')),
                // this.createVertexTemplateEntry(s + 'delay;whiteSpace=wrap;', w, h * 0.6, '', '延迟', null, null, this.getTagsForStencil(gn, 'delay', dt).join(' ')),
                // this.createVertexTemplateEntry(s + 'extract_or_measurement;whiteSpace=wrap;', w * 0.95, h * 0.6, '', '提取/测量', null, null, this.getTagsForStencil(gn, 'extract_or_measurement', dt).join(' ')),
                // this.createVertexTemplateEntry(s + 'merge_or_storage;whiteSpace=wrap;', w * 0.95, h * 0.6, '', '合并/存储', null, null, this.getTagsForStencil(gn, 'merge_or_storage', dt).join(' ')),
                // this.createVertexTemplateEntry(s + 'multi-document;whiteSpace=wrap;', w * 0.88, h * 0.6, '', '多文档', null, null, this.getTagsForStencil(gn, 'multi-document', dt).join(' ')),
                // this.createVertexTemplateEntry(s2 + 'summing_function;', w * 0.7, h * 0.7, '', '或', null, null, this.getTagsForStencil(gn, 'summing_function', dt).join(' ')),
                // this.createVertexTemplateEntry('rounded=1;whiteSpace=wrap;html=1;absoluteArcSize=1;arcSize=14;strokeWidth=2;', w, h, '', '处理', null, null, this.getTagsForStencil(gn, 'process', dt).join(' ')),
                // this.createVertexTemplateEntry(s2 + 'sort;', w, h, '', '分类', null, null, this.getTagsForStencil(gn, 'sort', dt).join(' ')),
                // this.createVertexTemplateEntry(s + 'start_1;whiteSpace=wrap;', w, h * 0.6, '', '开始 1', null, null, this.getTagsForStencil(gn, 'start_1', dt).join(' ')),
                // this.createVertexTemplateEntry(s + 'start_2;whiteSpace=wrap;', w, h, '', '开始 2', null, null, this.getTagsForStencil(gn, 'start_2', dt).join(' ')),
            //     this.createVertexTemplateEntry(s2 + 'or;', w * 0.7, h * 0.7, '', '流终止', null, null, this.getTagsForStencil(gn, 'or', dt).join(' ')),
            //     this.createVertexTemplateEntry(mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;html=1;strokeWidth=2;shape=mxgraph.arrows2.arrow;dy=0.6;dx=40;notch=0;', w, h * 0.7, '', '转让', null, null, this.getTagsForStencil(gn, 'transfer', dt).join(' '))
            ]);
        this.setCurrentSearchEntryLibrary();
    };
})();
