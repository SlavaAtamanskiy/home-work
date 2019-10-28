<template>
  <el-card class="public-form">
    <h2>Log-IN</h2>
    <el-form ref="Form" :model="model" :rules="rules" status-icon>
      <el-form-item prop="login">
        <el-input
          v-model="model.login"
          placeholder="Username"
          prefix-icon="el-icon-user"
        />
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          v-model="model.pass"
          placeholder="Password"
          type="password"
          prefix-icon="el-icon-lock"
        />
      </el-form-item>
      <el-form-item>
        <p>
          <nuxt-link to="/register">Forgot password?</nuxt-link>
        </p>
      </el-form-item>
      <el-form-item>
        <el-button
          class="login-button"
          type="primary"
          block
          @click="submitForm('Form')"
          >Login
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button
          class="reset-button"
          type="info"
          block
          @click="resetForm('Form')"
          >Reset
        </el-button>
      </el-form-item>
      <el-form-item>
        <p>
          Don't have an account?
          <nuxt-link to="/register">Register</nuxt-link>
        </p>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: 'Login',
  data() {
    const checkLogin = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Please input the login'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'))
      } else {
        callback()
      }
    }
    return {
      model: {
        pass: '',
        login: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        login: [{ validator: checkLogin, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      const showMessage = this.$notify.bind(this)
      this.$refs[formName].validate(valid => {
        if (valid) {
          const payload = {
            credentials: {
              login: this.model.login.toUpperCase(),
              password: this.model.pass
            },
            handleResponse: err => {
              if (err) {
                const msg = Object.prototype.hasOwnProperty.call(
                  err,
                  'response'
                )
                  ? err.response.data.message
                  : 'err.message'
                showMessage({
                  title: 'Error',
                  message: msg,
                  type: 'error'
                })
              } else {
                this.$router.push('/')
              }
            }
          }
          this.$store.dispatch('auth/authenticate', payload)
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
