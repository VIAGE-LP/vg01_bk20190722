// **************************************************
// 商品リスト
// **************************************************
const PRODUCT_LIST = [
	{
	  product_name : "內衣" ,
	  product_name_short : "內衣" ,
	  image_url : '',
	  product_id : 'A',
	  image_urls : [
		{ category1 : 'BL',  image_url : SETTING_DOMAIN_URL + '/access_form_sample/商品圖/海軍藍.jpg' },
		{ category1 : 'BK',  image_url : SETTING_DOMAIN_URL + '/access_form_sample/商品圖/率性黑.jpg' },
		{ category1 : 'RD',  image_url : SETTING_DOMAIN_URL + '/access_form_sample/商品圖/櫻花粉.jpg' },
		{ category1 : 'LP',  image_url : SETTING_DOMAIN_URL + '/access_form_sample/商品圖/薰衣草紫.jpg' },
		{ category1 : 'SL',  image_url : SETTING_DOMAIN_URL + '/access_form_sample/商品圖/天空藍.jpg' },
	  ]
	},
	// 可複數 深藍→黑→粉→紫→水藍
];


// **************************************************
// 顏色選擇
// **************************************************
const CATEGORY_1_LIST = {
	label: '請選擇顏色',
	list: [
		{ label: '請選擇顏色及數量<br>海軍藍', value: 'BL', label_short: '海軍藍' },
		{ label: '請選擇顏色及數量<br>率性黑', value: 'BK', label_short: '率性黑' },
		{ label: '請選擇顏色及數量<br>櫻花粉', value: 'RD', label_short: '櫻花粉' },
		{ label: '請選擇顏色及數量<br>薰衣草紫', value: 'LP', label_short: '薰衣草紫' },
		{ label: '請選擇顏色及數量<br>天空藍', value: 'SL', label_short: '天空藍' },
	]
};

// **************************************************
// 尺寸選擇
// **************************************************
const CATEGORY_2_LIST = {
	label: '請選擇尺寸',
	list: [
		{ label: 'S', value: 'S', label_short: 'S' },
		{ label: 'M', value: 'M', label_short: 'M' },
		{ label: 'L', value: 'L', label_short: 'L' },
	]
};

// **************************************************
// 商品リスト
// **************************************************
const PRODUCT_CATEGORY_MAPPING = [
	{
	  	product_id : 'A',
	  	product_code_mapping : [
			{ product_code : '4560449970266'  , category2 : 'S' , category1 : 'BK' } ,
			{ product_code : '4560449970273'  , category2 : 'M' , category1 : 'BK' } ,
			{ product_code : '4560449970280'  , category2 : 'L' , category1 : 'BK' } ,
			{ product_code : '4560449970327'  , category2 : 'S' , category1 : 'RD' } ,
			{ product_code : '4560449970334'  , category2 : 'M' , category1 : 'RD' } , 
			{ product_code : '4560449970341'  , category2 : 'L' , category1 : 'RD' } , 
			{ product_code : '4560449970297'  , category2 : 'S' , category1 : 'LP' } ,
			{ product_code : '4560449970396'  , category2 : 'M' , category1 : 'LP' } , 
			{ product_code : '4560449970310'  , category2 : 'L' , category1 : 'LP' } , 
			{ product_code : '4560449970402'  , category2 : 'S' , category1 : 'SL' } ,
			{ product_code : '4560449970419'  , category2 : 'M' , category1 : 'SL' } ,
			{ product_code : '4560449970426'  , category2 : 'L' , category1 : 'SL' } ,
			{ product_code : '4560449970440'  , category2 : 'S' , category1 : 'BL' } , 
			{ product_code : '4560449970457'  , category2 : 'M' , category1 : 'BL' } , 
			{ product_code : '4560449970464'  , category2 : 'L' , category1 : 'BL' } , 
	  ]
	},
	// 可複數
];