<template>
	<div class="selection-component">
      <div class="selection-show" @click="toggleList">
      	<span>{{ selectedText }}</span>
         <div class="arrow"></div>
      </div>
      <div class="selection-list" v-if="isShow">
         <ul>
         	<li v-for="(item, index) in selections" @click="changeIndex(index)">
         		{{ item.label }}
         	</li>
         </ul>
      </div>
    </div>
</template>

<script>
	export default {		
		props: {
			selections: {
				type: Array,
				default: [{
					label: '测试选项',
					value: 0
				}]
			}
		},
		computed: {
			selectedText () {
				return this.selections[this.nowIndex].label
			}
		},
		methods: {
			changeIndex (index) {
				this.nowIndex = index
				this.isShow = false
				this.$emit('on-change', this.selections[this.nowIndex])
			},
			toggleList () {
				this.isShow = !this.isShow
			}
		},
		data () {
			return {
				nowIndex: 0,
				isShow: false
			}
		},
		mounted () {
		   document.addEventListener('click', (e) => {
		      if (!this.$el.contains(e.target)) {
		      	this.isShow && (this.isShow = false)
		      }
		   })
		}
	}
</script>

<style scoped>
.selection-component {
  position: relative;
  display: inline-block;
}
.selection-show {
  border: 1px solid #e3e3e3;
  padding: 0 20px 0 10px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 25px;
  line-height: 25px;
  border-radius: 3px;
  background: #fff;
}
.selection-show .arrow {
  display: inline-block;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #e3e3e3;
  width: 0;
  height: 0;
  margin-top: -1px;
  margin-left: 6px;
  margin-right: -14px;
  vertical-align: middle;
}
.selection-list {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 25px;
  width: 100%;
  background: #fff;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  z-index: 5;
}
.selection-list li {
  padding: 5px 15px 5px 10px;
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
  cursor: pointer;
  background: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
.selection-list li:hover {
  background: #e3e3e3;
}
</style>