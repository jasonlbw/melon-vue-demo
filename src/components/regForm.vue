<template>
	<div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" 
          v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onRegister">注册</a>
          <span class="g-form-error">{{ errorText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		data () {
			return {
				usernameModel: '',
				errorText: ''
			}
		},
		computed: {
			userErrors () {
				let status, errorText
				if(!/@/g.test(this.usernameModel)) {
					status = false
					errorText = '用户名必须包含@'
				} else {
					status = true
					errorText = ''
				}
				if(!this.userFlag) {
					errorText = ''
					this.userFlag = true
				}
				return {
					status,
					errorText
				}
			}
		},
		methods: {
			onRegister () {
				if(!this.userErrors.status) {
					this.errorText = '请输入正确的用户名'
					return false
				}
				this.errorText = ''
				this.$http.post('/api/register')
				.then((res) => {
					this.$emit('reg-success', res.data)
				}, (err) => {
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped>
	
</style>