(function()
{
	Sidebar.prototype.addBasicPalette = function()
	{
		var w = 100;
		var h = 100;
		var s = 'whiteSpace=wrap;html=1;shape=mxgraph.basic.';
		var s2 = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;html=1;shape=mxgraph.basic.';
		var s3 = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;html=1;shape=';
		var gn = 'mxgraph.basic';
		var dt = '';
		this.setCurrentSearchEntryLibrary('basic');

		this.addPaletteFunctions('basic', mxResources.get('basic'), false,
		[
			this.createVertexTemplateEntry(s2 + 'rect;fillColor2=none;strokeWidth=1;size=20;indent=5;', w * 1.2, h * 0.6, '', '部分矩形'),
			this.createVertexTemplateEntry('shape=partialRectangle;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=none;', w * 1.2, h * 0.6, '', '部分矩形'),
			this.createVertexTemplateEntry('shape=partialRectangle;whiteSpace=wrap;html=1;right=0;top=0;bottom=0;fillColor=none;routingCenterX=-0.5;', w * 1.2, h * 0.6, '', '部分矩形'),
			this.createVertexTemplateEntry('shape=partialRectangle;whiteSpace=wrap;html=1;bottom=0;right=0;fillColor=none;', w * 1.2, h * 0.6, '', '部分矩形'),
			this.createVertexTemplateEntry('shape=partialRectangle;whiteSpace=wrap;html=1;top=0;left=0;fillColor=none;', w * 1.2, h * 0.6, '', '部分矩形'),
			this.createVertexTemplateEntry(s2 + 'polygon;polyCoords=[[0.25,0],[0.75,0],[1,0.25],[1,0.75],[0.75,1],[0.25,1],[0,0.75],[0,0.25]];polyline=0;', w, h, '', '多边形', null, null, this.getTagsForStencil(gn, 'polygon', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'polygon;polyCoords=[[0.25,0],[0.75,0],[1,0.25],[1,0.75],[0.75,1],[0.25,1],[0,0.75],[0,0.25]];polyline=1;fillColor=none;', w, h, '', '折线', null, null, this.getTagsForStencil(gn, 'polyline', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'patternFillRect;fillStyle=diag;step=5;fillStrokeWidth=0.2;fillStrokeColor=#dddddd;', w * 1.2, h * 0.6, '', '带有对角填充的矩形'),
			this.createVertexTemplateEntry(s2 + 'patternFillRect;fillStyle=diagRev;step=5;fillStrokeWidth=0.2;fillStrokeColor=#dddddd;', w * 1.2, h * 0.6, '', '带有反向对角填充的矩形'),
			this.createVertexTemplateEntry(s2 + 'patternFillRect;fillStyle=vert;step=5;fillStrokeWidth=0.2;fillStrokeColor=#dddddd;', w * 1.2, h * 0.6, '', '垂直填充矩形'),
			this.createVertexTemplateEntry(s2 + 'patternFillRect;fillStyle=hor;step=5;fillStrokeWidth=0.2;fillStrokeColor=#dddddd;', w * 1.2, h * 0.6, '', '水平填充矩形'),
			this.createVertexTemplateEntry(s2 + 'patternFillRect;fillStyle=grid;step=5;fillStrokeWidth=0.2;fillStrokeColor=#dddddd;', w * 1.2, h * 0.6, '', '带网格填充的矩形'),
			this.createVertexTemplateEntry(s2 + 'patternFillRect;fillStyle=diagGrid;step=5;fillStrokeWidth=0.2;fillStrokeColor=#dddddd;', w * 1.2, h * 0.6, '', '带对角网格填充的矩形'),
			this.createVertexTemplateEntry(s2 + '4_point_star_2;dx=0.8;', w, h, '', '四角星', null, null, this.getTagsForStencil(gn, '4_point_star', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + '6_point_star', w, h * 0.9, '', '六角星', null, null, this.getTagsForStencil(gn, '6_point_star', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + '8_point_star', w, h, '', '八角星', null, null, this.getTagsForStencil(gn, '8_point_star', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'banner', w, h * 0.5, '', '旗帜', null, null, this.getTagsForStencil(gn, 'banner', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'cloud_callout', w * 0.9, h * 0.6, '', '云标注', null, null, this.getTagsForStencil(gn, 'cloud_callout', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'cloud_rect', w * 1.2, h * 0.9, '', '云矩形', null, null, this.getTagsForStencil(gn, 'cloud_rect', dt + ' rectangle').join(' ')),
			this.createVertexTemplateEntry(s2 + 'cone', w, h, '', '锥体', null, null, this.getTagsForStencil(gn, 'cone', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'cone2;dx=0.5;dy=0.9;', w, h, '', '锥体（可调）', null, null, this.getTagsForStencil(gn, 'cone', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'document', w, h, '', '文件', null, null, this.getTagsForStencil(gn, 'document', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'donut;dx=25;', w, h, '', '甜甜圈', null, null, this.getTagsForStencil(gn, 'donut', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'drop', w * 0.7, h, '', '下降', null, null, this.getTagsForStencil(gn, 'drop', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'flash', w * 0.6, h, '', '闪', null, null, this.getTagsForStencil(gn, 'flash', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'half_circle', w, h * 0.5, '', '半圈', null, null, this.getTagsForStencil(gn, 'half_circle', dt + ' semicircle').join(' ')),
			this.createVertexTemplateEntry(s2 + 'heart', w, h, '', '心', null, null, this.getTagsForStencil(gn, 'heart', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'isocube;isoAngle=15;', w, h, '', '等距立方体', null, null, this.getTagsForStencil(gn, 'isometric cube', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'loud_callout', w, h * 0.6, '', '大声标注', null, null, this.getTagsForStencil(gn, 'loud_callout', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'moon', w * 0.75, h, '', '月亮', null, null, this.getTagsForStencil(gn, 'moon', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'no_symbol', w, h, '', '没有符号', null, null, this.getTagsForStencil(gn, 'no_symbol', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'octagon2;align=center;verticalAlign=middle;dx=15;', w, h, '', '八边形', null, null, this.getTagsForStencil(gn, 'octagon', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'orthogonal_triangle', w, h * 0.7, '', '直角三角形', null, null, this.getTagsForStencil(gn, 'orthogonal_triangle', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'acute_triangle;dx=0.5;', w, h * 0.7, '', '锐角三角形', null, null, this.getTagsForStencil(gn, 'acute_triangle', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'obtuse_triangle;dx=0.25;', w, h * 0.7, '', '钝角三角形', null, null, this.getTagsForStencil(gn, 'obtuse_triangle', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'oval_callout', w, h * 0.6, '', '椭圆形标注', null, null, this.getTagsForStencil(gn, 'oval_callout', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'pentagon', w, h * 0.9, '', '五角大楼', null, null, this.getTagsForStencil(gn, 'pentagon', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'pointed_oval', w * 0.5, h, '', '椭圆形', null, null, this.getTagsForStencil(gn, 'pointed oval', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'pyramid;dx1=0.4;dx2=0.6;dy1=0.9;dy2=0.8;', w, h, '', '金字塔', null, null, this.getTagsForStencil(gn, 'pyramid', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'diag_snip_rect;dx=6;', w, h * 0.6, '', '对角线剪矩形', null, null, this.getTagsForStencil(gn, 'diag_snip_rect', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'diag_round_rect;dx=6;', w, h * 0.6, '', '对角圆角矩形', null, null, this.getTagsForStencil(gn, 'diag_round_rect', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'corner_round_rect;dx=6;', w, h * 0.6, '', '圆角矩形', null, null, this.getTagsForStencil(gn, 'corner_round_rect', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'three_corner_round_rect;dx=6;', w, h * 0.6, '', '圆角矩形（三个角）', null, null, this.getTagsForStencil(gn, 'three_corner_round_rect', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'plaque;dx=6;', w, h * 0.6, '', '牌匾', null, null, this.getTagsForStencil(gn, 'plaque', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'frame;dx=10;', w, h * 0.6, '', '帧', null, null, this.getTagsForStencil(gn, 'frame', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'rounded_frame;dx=10;', w, h * 0.6, '', '圆框', null, null, this.getTagsForStencil(gn, 'rounded_frame', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'plaque_frame;dx=10;', w, h * 0.6, '', '匾架', null, null, this.getTagsForStencil(gn, 'plaque_frame', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'frame_corner;dx=10;', w, h * 0.6, '', '框架角', null, null, this.getTagsForStencil(gn, 'frame_corner', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'diag_stripe;dx=10;', w, h * 0.6, '', '斜条纹', null, null, this.getTagsForStencil(gn, 'diag_stripe', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'rectCallout;dx=30;dy=15;boundedLbl=1;', w, h * 0.6, '', '矩形标注', null, null, this.getTagsForStencil(gn, 'rectangular_callout', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'roundRectCallout;dx=30;dy=15;size=5;boundedLbl=1;', w, h * 0.6, '', '圆角矩形标注', null, null, this.getTagsForStencil(gn, 'rectangular_callout', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'layered_rect;dx=10;outlineConnect=0;', w, h * 0.6, '', '分层矩形', null, null, this.getTagsForStencil(gn, 'layered_rect', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'smiley', w, h, '', '笑脸', null, null, this.getTagsForStencil(gn, 'smiley', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'star', w, h * 0.95, '', '星星', null, null, this.getTagsForStencil(gn, 'star', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'sun', w, h, '', '太阳', null, null, this.getTagsForStencil(gn, 'sun', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'tick', w * 0.85, h, '', '标记', null, null, this.getTagsForStencil(gn, 'tick', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'wave2;dy=0.3;', w, h * 0.6, '', '波', null, null, this.getTagsForStencil(gn, 'wave', dt).join(' ')),
			this.createVertexTemplateEntry('labelPosition=center;verticalLabelPosition=middle;align=center;html=1;shape=mxgraph.basic.button;dx=10;', w, h * 0.6, 'Button', '按钮', null, null, this.getTagsForStencil(gn, 'button', dt).join(' ')),
			this.createVertexTemplateEntry('labelPosition=center;verticalLabelPosition=middle;align=center;html=1;shape=mxgraph.basic.shaded_button;dx=10;fillColor=#E6E6E6;strokeColor=none;', w, h * 0.6, 'Button', '按钮（阴影）', null, null, this.getTagsForStencil(gn, 'button', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'x', w, h, '', 'X', null, null, this.getTagsForStencil(gn, 'x', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'pie;startAngle=0.2;endAngle=0.9;', w, h, '', '饼', null, null, this.getTagsForStencil(gn, 'pie', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'arc;startAngle=0.3;endAngle=0.1;', w, h, '', '弧', null, null, this.getTagsForStencil(gn, 'arc', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'partConcEllipse;startAngle=0.25;endAngle=0.1;arcWidth=0.5;', w, h, '', '部分同心椭圆', null, null, this.getTagsForStencil(gn, 'partConcEllipse', dt).join(' ')),
		 	this.createVertexTemplateEntry('shape=message;html=1;whiteSpace=wrap;html=1;outlineConnect=0;', 60, 40, '', '信息', null, null, 'message mail'),
 		 	this.createVertexTemplateEntry('shape=cylinder3;whiteSpace=wrap;html=1;boundedLbl=1;backgroundOutline=1;size=15;lid=0;', 60, 80, '', '气缸叠', null, null, 'cylinder data database stack tube')
		]);

		this.setCurrentSearchEntryLibrary();
	};

})();
