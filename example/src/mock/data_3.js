let tableBody = [{
	"explain": "情况说明",
	"code": "01000001",
	"thisYearValue": "",
	"rate": "",
	"lastYearValue": "10",
	"index": "工业总产值（可比价）",
	"uint": "万元"
}, {
	"explain": "",
	"code": "01000002",
	"thisYearValue": "5",
	"rate": "",
	"lastYearValue": "",
	"index": "工业增加值",
	"uint": "万元"
}, {
	"explain": "",
	"code": "01000006",
	"thisYearValue": "",
	"rate": "",
	"lastYearValue": "10",
	"index": "能源管理师人数",
	"uint": "人"
}, {
	"explain": "",
	"code": "01000007",
	"thisYearValue": "",
	"rate": "",
	"lastYearValue": "",
	"index": "综合能源消费量(当量值)",
	"uint": "万吨标准煤"
}, {
	"explain": "",
	"code": "01000008",
	"thisYearValue": "6",
	"rate": "",
	"lastYearValue": "",
	"index": "生产成本",
	"uint": "万元"
}, {
	"explain": "",
	"code": "01000009",
	"thisYearValue": "8",
	"rate": "20%",
	"lastYearValue": "10",
	"index": "能源消费成本",
	"uint": "万元"
}, {
	"explain": "",
	"code": "01000010",
	"thisYearValue": "",
	"rate": "",
	"lastYearValue": "10",
	"index": "能源消费占生产成本比例",
	"uint": "%"
}, {
	"explain": "",
	"code": "01000011",
	"thisYearValue": "",
	"rate": "",
	"lastYearValue": "12",
	"index": "单位产值综合能耗",
	"uint": "吨标准煤/万元"
}, {
	"explain": "",
	"code": "01000012",
	"thisYearValue": "",
	"rate": "",
	"lastYearValue": "11",
	"index": "单位工业增加值能耗",
	"uint": "吨标准煤/万元"
},
	 {
		"explain": "",
		"code": "01000004",
		"thisYearValue": "",
		"rate": "",
		"lastYearValue": "",
		"index": "上缴利税",
		"uint": "万元"
	}, {
		"explain": "",
		"code": "01000005",
		"thisYearValue": "",
		"rate": "",
		"lastYearValue": "10",
		"index": "从业人员",
		"uint": "人"
	}, {
		"explain": "",
		"code": "01000003",
		"thisYearValue": "5",
		"rate": "100%",
		"lastYearValue": "10",
		"index": "销售收入",
		"uint": "万元"
	}
]
let tableHeader = [{
	"key": "index",
	"title": "指标名称",
	"onlyOneCell": 0,
	"isCanEdit": 0,
	"children": [],
}, {
	"key": "uint",
	"title": "计量单位",
	"onlyOneCell": 0,
	"isCanEdit": 0,
	"children": []
}, {
	"key": "thisYearValue",
	"title": "本期值",
	"onlyOneCell": 0,
	"isCanEdit": 1,
	"children": [],
}, {
	"key": "lastYearValue",
	"title": "上年同期值",
	"onlyOneCell": 0,
	"isCanEdit": 1,
	"children": []
}, {
	"key": "rate",
	"title": "同比变化率",
	"onlyOneCell": 0,
	"isCanEdit": 1,
	"children": [],
}, {
	"key": "explain",
	"title": "产值及能耗消费变化情况说明",
	"onlyOneCell": 1,
	"isCanEdit": 1,
	"children": []
}]
export default {
	tableBody, tableHeader
}