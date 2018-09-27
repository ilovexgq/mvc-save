(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!

	var vm = new Vue({
		el: '#app',
		data: {
			list: [{
				text: '吃饭',
				status: true
				},
				{
					text: '打游戏',
					status: true
				},
				{
					text: '睡觉',
					status: false
				}
			],
			newText: '',
			editList: '',
			listStaus:'all'
		},
		methods: {
			addList() {
				if (this.newText.trim() == '') {
					console.log('不能为空');
					this.newText = ''
					return
				}
				this.list.push({
					text: this.newText,
					status:false
				})
				this.newText=''
			},
			isShow(valueStatus) {
				switch (this.listStaus) {
					case 'all':
						return true
						break;
					case 'active':
						return !valueStatus
						break;
					case 'completed':
						return valueStatus
					default:
						return true
						break;
				}
			}
			// delData(inx) {
			// 	this.doing.splice(inx, 1)
			// },
		},
		computed: {
			checkAll: {
				set(newValue) {
					this.list.forEach(v => {
						v.status = newValue
					});
				},
				get() {
					var temList = this.list.filter(value => {
						return !value.status
					})
					return !temList.length
				}
			}
		},
		updated () {
			localStorage.setItem('todoList',JSON.stringify(this.list))
		},
		mounted () {
			if (!localStorage.getItem('todoList')) {
				return
			}
			this.list=JSON.parse(localStorage.getItem('todoList'))
		}

	})


})(window);
