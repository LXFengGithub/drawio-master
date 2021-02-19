(function()
{
	// Adds BPMN shapes
	var sidebarAddBpmnPalette = Sidebar.prototype.addBpmnPalette;

	Sidebar.prototype.addBpmnPalette = function(dir, expand)
	{
		sidebarAddBpmnPalette.apply(this, arguments);

		var w = 50;
		var h = 50;

		this.setCurrentSearchEntryLibrary('bpmn', 'bpmnGateways');
		this.addBPMNGatewaysPalette(dir, expand, w, h);
		this.setCurrentSearchEntryLibrary('bpmn', 'bpmnEvents');
		this.addBPMNEventsPalette(dir, expand, w, h);
		this.setCurrentSearchEntryLibrary();
	}

	Sidebar.prototype.addBPMNGatewaysPalette = function(dir, expand, w, h)
	{
		var s = 'shape=mxgraph.bpmn.shape;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;align=center;perimeter=rhombusPerimeter;background=gateway;outlineConnect=0;';
		//default tags
		var dt = 'bpmn business process model gateway ';

		this.addPaletteFunctions('bpmnGateways', 'BPMN 网关', false,
		[
			this.createVertexTemplateEntry(s + 'outline=none;symbol=exclusiveGw;', w, h, '', '排他网关', null, null, dt + 'exclusive'),
			this.createVertexTemplateEntry(s + 'outline=none;symbol=parallelGw;', w, h, '', '并行网关', null, null, dt + 'parallel'),
			this.createVertexTemplateEntry(s + 'outline=end;symbol=general;', w, h, '', '包容的网关', null, null, dt + 'inclusive'),
			this.createVertexTemplateEntry(s + 'outline=none;symbol=complexGw;', w, h, '', '复杂的网关', null, null, dt + 'complex'),

			this.createVertexTemplateEntry(s + 'outline=standard;symbol=general;', w, h, '', '普通开始网关', null, null, dt + 'general start'),
			this.createVertexTemplateEntry(s + 'outline=throwing;symbol=general;', w, h, '', '普通中间网关', null, null, dt + 'general intermediate'),
			this.createVertexTemplateEntry(s + 'outline=end;symbol=general;', w, h, '', '普通端网关', null, null, dt + 'general end'),

			this.createVertexTemplateEntry(s + 'outline=standard;symbol=message;', w, h, '', '信息标准的网关', null, null, dt + 'message standard'),
			this.createVertexTemplateEntry(s + 'outline=eventInt;symbol=message;', w, h, '', '消息中断网关', null, null, dt + 'message interrupting'),
			this.createVertexTemplateEntry(s + 'outline=eventNonint;symbol=message;', w, h, '', '消息Non-Interrupting网关', null, null, dt + 'message non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=catching;symbol=message;', w, h, '', '信息捕捉网关', null, null, dt + 'message catching'),
			this.createVertexTemplateEntry(s + 'outline=boundInt;symbol=message;', w, h, '', '消息边界中断网关', null, null, dt + 'message boundary interrupting'),
			this.createVertexTemplateEntry(s + 'outline=boundNonint;symbol=message;', w, h, '', '消息边界不中断网关', null, null, dt + 'message boundary non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=throwing;symbol=message;', w, h, '', '消息将网关', null, null, dt + 'message throwing'),
			this.createVertexTemplateEntry(s + 'outline=end;symbol=message;', w, h, '', '消息端网关', null, null, dt + 'message end'),

			this.createVertexTemplateEntry(s + 'outline=standard;symbol=timer;', w, h, '', '计时器标准网关', null, null, dt + 'timer standard'),
			this.createVertexTemplateEntry(s + 'outline=eventInt;symbol=timer;', w, h, '', '定时器中断网关', null, null, dt + 'timer interrupting'),
			this.createVertexTemplateEntry(s + 'outline=eventNonint;symbol=timer;', w, h, '', '计时器Non-Interrupting网关', null, null, dt + 'timer non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=catching;symbol=timer;', w, h, '', '定时器捕获网关', null, null, dt + 'timer catching'),
			this.createVertexTemplateEntry(s + 'outline=boundInt;symbol=timer;', w, h, '', '计时器边界中断网关', null, null, dt + 'timer boundary interrupting'),
			this.createVertexTemplateEntry(s + 'outline=boundNonint;symbol=timer;', w, h, '', '定时器边界不中断网关', null, null, dt + 'timer boundary non interrupting noninterrupting'),

			this.createVertexTemplateEntry(s + 'outline=eventInt;symbol=escalation;', w, h, '', '升级中断网关', null, null, dt + 'escalation interrupting'),
			this.createVertexTemplateEntry(s + 'outline=eventNonint;symbol=escalation;', w, h, '', '升级Non-Interrupting网关', null, null, dt + 'escalation non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=boundInt;symbol=escalation;', w, h, '', '升级边界中断网关', null, null, dt + 'escalation boundary interrupting'),
			this.createVertexTemplateEntry(s + 'outline=boundNonint;symbol=escalation;', w, h, '', '升级边界不中断网关', null, null, dt + 'escalation boundary non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=throwing;symbol=escalation;', w, h, '', '升级扔网关', null, null, dt + 'escalation throwing'),
			this.createVertexTemplateEntry(s + 'outline=end;symbol=escalation;', w, h, '', '升级结束网关', null, null, dt + 'escalation end'),

			this.createVertexTemplateEntry(s + 'outline=standard;symbol=conditional;', w, h, '', '有条件的标准网关', null, null, dt + 'conditional standard'),
			this.createVertexTemplateEntry(s + 'outline=eventInt;symbol=conditional;', w, h, '', '条件中断网关', null, null, dt + 'conditional interrupting'),
			this.createVertexTemplateEntry(s + 'outline=eventNonint;symbol=conditional;', w, h, '', '条件Non-Interrupting网关', null, null, dt + 'conditional non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=catching;symbol=conditional;', w, h, '', '有条件的捕捉网关', null, null, dt + 'conditional catching'),
			this.createVertexTemplateEntry(s + 'outline=boundInt;symbol=conditional;', w, h, '', '条件边界中断网关', null, null, dt + 'conditional boundary interrupting'),
			this.createVertexTemplateEntry(s + 'outline=boundNonint;symbol=conditional;', w, h, '', '条件边界不中断网关', null, null, dt + 'conditional boundary non interrupting noninterrupting'),

			this.createVertexTemplateEntry(s + 'outline=catching;symbol=link;', w, h, '', '链接捕捉网关', null, null, dt + 'link catching'),
			this.createVertexTemplateEntry(s + 'outline=throwing;symbol=link;', w, h, '', '链接把网关', null, null, dt + 'link throwing'),

			this.createVertexTemplateEntry(s + 'outline=eventInt;symbol=error;', w, h, '', '错误中断网关', null, null, dt + 'error interrupting'),
			this.createVertexTemplateEntry(s + 'outline=boundInt;symbol=error;', w, h, '', '错误边界中断网关', null, null, dt + 'error boundary interrupting'),
			this.createVertexTemplateEntry(s + 'outline=end;symbol=error;', w, h, '', '结束错误网关', null, null, dt + 'error end'),

			this.createVertexTemplateEntry(s + 'outline=boundInt;symbol=cancel;', w, h, '', '取消边界中断网关', null, null, dt + 'cancel boundary interrupting'),
			this.createVertexTemplateEntry(s + 'outline=end;symbol=cancel;', w, h, '', '取消端网关', null, null, dt + 'cancel end'),

			this.createVertexTemplateEntry(s + 'outline=eventInt;symbol=compensation;', w, h, '', '补偿中断网关', null, null, dt + 'compensation interrupting'),
			this.createVertexTemplateEntry(s + 'outline=boundInt;symbol=compensation;', w, h, '', '补偿边界中断网关', null, null, dt + 'compensation boundary interrupting'),
			this.createVertexTemplateEntry(s + 'outline=throwing;symbol=compensation;', w, h, '', '补偿将网关', null, null, dt + 'compensation throwing'),
			this.createVertexTemplateEntry(s + 'outline=end;symbol=compensation;', w, h, '', '补偿端网关', null, null, dt + 'compensation end'),

			this.createVertexTemplateEntry(s + 'outline=standard;symbol=signal;', w, h, '', '信号标准网关', null, null, dt + 'signal standard'),
			this.createVertexTemplateEntry(s + 'outline=eventInt;symbol=signal;', w, h, '', '信号中断网关', null, null, dt + 'signal interrupting'),
			this.createVertexTemplateEntry(s + 'outline=eventNonint;symbol=signal;', w, h, '', '信号Non-Interrupting网关', null, null, dt + 'signal non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=catching;symbol=signal;', w, h, '', '信号捕获网关', null, null, dt + 'signal catching'),
			this.createVertexTemplateEntry(s + 'outline=boundInt;symbol=signal;', w, h, '', '信号边界中断网关', null, null, dt + 'signal boundary interrupting'),
			this.createVertexTemplateEntry(s + 'outline=boundNonint;symbol=signal;', w, h, '', '信号边界非中断网关', null, null, dt + 'signal boundary non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=throwing;symbol=signal;', w, h, '', '信号把网关', null, null, dt + 'signal throwing'),
			this.createVertexTemplateEntry(s + 'outline=end;symbol=signal;', w, h, '', '信号端网关', null, null, dt + 'signal end'),

			this.createVertexTemplateEntry(s + 'outline=standard;symbol=multiple;', w, h, '', '多个标准网关', null, null, dt + 'multiple standard'),
			this.createVertexTemplateEntry(s + 'outline=eventInt;symbol=multiple;', w, h, '', '多个中断网关', null, null, dt + 'multiple interrupting'),
			this.createVertexTemplateEntry(s + 'outline=eventNonint;symbol=multiple;', w, h, '', '多个Non-Interrupting网关', null, null, dt + 'multiple non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=catching;symbol=multiple;', w, h, '', '多个捕获网关', null, null, dt + 'multiple catching'),
			this.createVertexTemplateEntry(s + 'outline=boundInt;symbol=multiple;', w, h, '', '多边界中断网关', null, null, dt + 'multiple boundary interrupting'),
			this.createVertexTemplateEntry(s + 'outline=boundNonint;symbol=multiple;', w, h, '', '多边界不中断网关', null, null, dt + 'multiple boundary non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=throwing;symbol=multiple;', w, h, '', '多个扔网关', null, null, dt + 'multiple throwing'),
			this.createVertexTemplateEntry(s + 'outline=end;symbol=multiple;', w, h, '', '多个端网关', null, null, dt + 'multiple end'),

			this.createVertexTemplateEntry(s + 'outline=standard;symbol=star;', w, h, '', '多个启动网关', null, null, dt + 'multiple end'),

			this.createVertexTemplateEntry(s + 'outline=standard;symbol=parallelMultiple;', w, h, '', '并行多标准网关', null, null, dt + 'parallel multiple standard'),
			this.createVertexTemplateEntry(s + 'outline=eventInt;symbol=parallelMultiple;', w, h, '', '并行多中断网关', null, null, dt + 'parallel multiple interrupting'),
			this.createVertexTemplateEntry(s + 'outline=eventNonint;symbol=parallelMultiple;', w, h, '', '并行多不中断网关', null, null, dt + 'parallel multiple non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=catching;symbol=parallelMultiple;', w, h, '', '并行多捕获网关', null, null, dt + 'parallel multiple catching'),
			this.createVertexTemplateEntry(s + 'outline=boundInt;symbol=parallelMultiple;', w, h, '', '并行多边界中断网关', null, null, dt + 'parallel multiple boundary interrupting'),
			this.createVertexTemplateEntry(s + 'outline=boundNonint;symbol=parallelMultiple;', w, h, '', '并行多边界不中断网关', null, null, dt + 'parallel multiple boundary non interrupting noninterrupting'),

			this.createVertexTemplateEntry(s + 'outline=end;symbol=terminate;', w, h, '', '终止网关', null, null, dt + 'terminate')
		]);
	}

	Sidebar.prototype.addBPMNEventsPalette = function(dir, expand, w, h)
	{
		s = 'shape=mxgraph.bpmn.shape;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;align=center;perimeter=ellipsePerimeter;outlineConnect=0;';
		var dt = 'bpmn business process model event ';

		this.addPaletteFunctions('bpmnEvents', 'BPMN 事件', false,
		[
			this.createVertexTemplateEntry(s + 'outline=standard;symbol=general;', w, h, '', '开始事件', null, null, dt + 'general start'),
			this.createVertexTemplateEntry(s + 'outline=throwing;symbol=general;', w, h, '', '中间事件', null, null, dt + 'general intermediate'),
			this.createVertexTemplateEntry(s + 'outline=end;symbol=general;', w, h, '', '结束事件', null, null, dt + 'general end'),

			this.createVertexTemplateEntry(s + 'outline=standard;symbol=message;', w, h, '', '信息标准', null, null, dt + 'message standard'),
			this.createVertexTemplateEntry(s + 'outline=eventInt;symbol=message;', w, h, '', '消息中断', null, null, dt + 'message interrupting'),
			this.createVertexTemplateEntry(s + 'outline=eventNonint;symbol=message;', w, h, '', '消息Non-Interrupting', null, null, dt + 'message non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=catching;symbol=message;', w, h, '', '信息捕捉', null, null, dt + 'message catching'),
			this.createVertexTemplateEntry(s + 'outline=boundInt;symbol=message;', w, h, '', '消息边界中断', null, null, dt + 'message boundary interrupting'),
			this.createVertexTemplateEntry(s + 'outline=boundNonint;symbol=message;', w, h, '', '消息边界Non-Interrupting', null, null, dt + 'message boundary non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=throwing;symbol=message;', w, h, '', '消息抛出', null, null, dt + 'message throwing'),
			this.createVertexTemplateEntry(s + 'outline=end;symbol=message;', w, h, '', '消息结束', null, null, dt + 'message end'),

			this.createVertexTemplateEntry(s + 'outline=standard;symbol=timer;', w, h, '', '计时器的标准', null, null, dt + 'timer standard'),
			this.createVertexTemplateEntry(s + 'outline=eventInt;symbol=timer;', w, h, '', '定时器中断', null, null, dt + 'timer interrupting'),
			this.createVertexTemplateEntry(s + 'outline=eventNonint;symbol=timer;', w, h, '', '计时器Non-Interrupting', null, null, dt + 'timer non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=catching;symbol=timer;', w, h, '', '定时器捕获', null, null, dt + 'timer catching'),
			this.createVertexTemplateEntry(s + 'outline=boundNonint;symbol=timer;', w, h, '', '计时器边界Non-Interrupting', null, null, dt + 'timer boundary non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=boundInt;symbol=timer;', w, h, '', '计时器边界中断', null, null, dt + 'timer boundary interrupting'),

			this.createVertexTemplateEntry(s + 'outline=eventNonint;symbol=escalation;', w, h, '', '升级Non-Interrupting', null, null, dt + 'escalation non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=eventInt;symbol=escalation;', w, h, '', '升级中断', null, null, dt + 'escalation interrupting'),
			this.createVertexTemplateEntry(s + 'outline=boundInt;symbol=escalation;', w, h, '', '升级边界中断', null, null, dt + 'escalation boundary interrupting'),
			this.createVertexTemplateEntry(s + 'outline=boundNonint;symbol=escalation;', w, h, '', '升级边界Non-Interrupting', null, null, dt + 'escalation boundary non interrupting nonimpterrupting'),
			this.createVertexTemplateEntry(s + 'outline=throwing;symbol=escalation;', w, h, '', '升级引发', null, null, dt + 'escalation throwing'),
			this.createVertexTemplateEntry(s + 'outline=end;symbol=escalation;', w, h, '', '升级结束', null, null, dt + 'escalation end'),

			this.createVertexTemplateEntry(s + 'outline=standard;symbol=conditional;', w, h, '', '有条件的标准', null, null, dt + 'conditional standard'),
			this.createVertexTemplateEntry(s + 'outline=eventInt;symbol=conditional;', w, h, '', '条件中断', null, null, dt + 'conditional interrupting'),
			this.createVertexTemplateEntry(s + 'outline=eventNonint;symbol=conditional;', w, h, '', '条件Non-Interrupting', null, null, dt + 'conditional non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=catching;symbol=conditional;', w, h, '', '条件的捕捉', null, null, dt + 'conditional catching'),
			this.createVertexTemplateEntry(s + 'outline=boundInt;symbol=conditional;', w, h, '', '条件的边界中断', null, null, dt + 'conditional boundary interrupting'),
			this.createVertexTemplateEntry(s + 'outline=boundNonint;symbol=conditional;', w, h, '', '条件边界Non-Interrupting', null, null, dt + 'conditional boundary non interrupting noninterrupting'),

			this.createVertexTemplateEntry(s + 'outline=catching;symbol=link;', w, h, '', '链接捕捉', null, null, dt + 'link catching'),
			this.createVertexTemplateEntry(s + 'outline=throwing;symbol=link;', w, h, '', '链接抛出', null, null, dt + 'link throwing'),

			this.createVertexTemplateEntry(s + 'outline=eventInt;symbol=error;', w, h, '', '错误中断', null, null, dt + 'error interrupting'),
			this.createVertexTemplateEntry(s + 'outline=boundInt;symbol=error;', w, h, '', '错误边界中断', null, null, dt + 'error boundary interrupting'),
			this.createVertexTemplateEntry(s + 'outline=end;symbol=error;', w, h, '', '错误结束', null, null, dt + 'error end'),

			this.createVertexTemplateEntry(s + 'outline=boundInt;symbol=cancel;', w, h, '', '取消边界中断', null, null, dt + 'cancel boundary interrupting'),
			this.createVertexTemplateEntry(s + 'outline=end;symbol=cancel;', w, h, '', '取消结束', null, null, dt + 'cancel end'),

			this.createVertexTemplateEntry(s + 'outline=eventInt;symbol=compensation;', w, h, '', '补偿中断', null, null, dt + 'compensation interrupting'),
			this.createVertexTemplateEntry(s + 'outline=boundInt;symbol=compensation;', w, h, '', '补偿边界中断', null, null, dt + 'compensation boundary interrupting'),
			this.createVertexTemplateEntry(s + 'outline=throwing;symbol=compensation;', w, h, '', '补偿中断', null, null, dt + 'compensation throwing'),
			this.createVertexTemplateEntry(s + 'outline=end;symbol=compensation;', w, h, '', '补偿结束', null, null, dt + 'compensation end'),

			this.createVertexTemplateEntry(s + 'outline=standard;symbol=signal;', w, h, '', '信号标准', null, null, dt + 'signal standard'),
			this.createVertexTemplateEntry(s + 'outline=eventInt;symbol=signal;', w, h, '', '信号中断', null, null, dt + 'signal interrupting'),
			this.createVertexTemplateEntry(s + 'outline=eventNonint;symbol=signal;', w, h, '', '信号Non-Interrupting', null, null, dt + 'signal non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=catching;symbol=signal;', w, h, '', '信号捕获', null, null, dt + 'signal catching'),
			this.createVertexTemplateEntry(s + 'outline=boundInt;symbol=signal;', w, h, '', '信号边界中断', null, null, dt + 'signal boundary interrupting'),
			this.createVertexTemplateEntry(s + 'outline=boundNonint;symbol=signal;', w, h, '', '信号边界Non-Interrupting', null, null, dt + 'signal boundary non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=throwing;symbol=signal;', w, h, '', '信号抛出', null, null, dt + 'signal throwing'),
			this.createVertexTemplateEntry(s + 'outline=end;symbol=signal;', w, h, '', '结束的信号', null, null, dt + 'signal end'),

			this.createVertexTemplateEntry(s + 'outline=standard;symbol=multiple;', w, h, '', '多个标准', null, null, dt + 'multiple standard'),
			this.createVertexTemplateEntry(s + 'outline=eventInt;symbol=multiple;', w, h, '', '多个中断', null, null, dt + 'multiple interrupting'),
			this.createVertexTemplateEntry(s + 'outline=eventNonint;symbol=multiple;', w, h, '', '多次不间断', null, null, dt + 'multiple non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=catching;symbol=multiple;', w, h, '', '多个捕获', null, null, dt + 'multiple catching'),
			this.createVertexTemplateEntry(s + 'outline=boundInt;symbol=multiple;', w, h, '', '多重边界中断', null, null, dt + 'multiple boundary interrupting'),
			this.createVertexTemplateEntry(s + 'outline=boundNonint;symbol=multiple;', w, h, '', '多边界不间断', null, null, dt + 'multiple boundary non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=throwing;symbol=multiple;', w, h, '', '多个抛出', null, null, dt + 'multiple throwing'),
			this.createVertexTemplateEntry(s + 'outline=end;symbol=multiple;', w, h, '', '多个结束', null, null, dt + 'multiple end'),

			this.createVertexTemplateEntry(s + 'outline=standard;symbol=star;', w, h, '', '多个开始', null, null, dt + 'multiple start'),

			this.createVertexTemplateEntry(s + 'outline=standard;symbol=parallelMultiple;', w, h, '', '并行多重标准', null, null, dt + 'parallel multiple standard'),
			this.createVertexTemplateEntry(s + 'outline=eventInt;symbol=parallelMultiple;', w, h, '', '并行多重中断', null, null, dt + 'parallel multiple interrupting'),
			this.createVertexTemplateEntry(s + 'outline=eventNonint;symbol=parallelMultiple;', w, h, '', '并行多重不中断', null, null, dt + 'parallel multiple non interrupting noninterrupting'),
			this.createVertexTemplateEntry(s + 'outline=catching;symbol=parallelMultiple;', w, h, '', '并行多重捕获', null, null, dt + 'parallel multiple catching'),
			this.createVertexTemplateEntry(s + 'outline=boundInt;symbol=parallelMultiple;', w, h, '', '并行多边界中断', null, null, dt + 'parallel multiple boundary interrupting'),
			this.createVertexTemplateEntry(s + 'outline=boundNonint;symbol=parallelMultiple;', w, h, '', '并行多边界不间断', null, null, dt + 'parallel multiple boundary non interrupting'),

			this.createVertexTemplateEntry(s + 'outline=end;symbol=terminate;', w, h, '', '终止', null, null, dt + 'terminate')
		]);
	};
})();
