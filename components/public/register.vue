<template>
  <el-card class="public-form">
    <h2>Register</h2>
    <el-form
      ref="Form"
      :model="model"
      :rules="rules"
      status-icon
      class="register-form"
    >
      <el-form-item prop="login">
        <el-input
          v-model="model.login"
          placeholder="Username"
          prefix-icon="el-icon-user"
        />
      </el-form-item>
      <el-form-item prop="email">
        <el-input
          v-model="model.email"
          placeholder="E-mail"
          prefix-icon="el-icon-message"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="model.password"
          placeholder="Password"
          type="password"
          prefix-icon="el-icon-lock"
        />
      </el-form-item>
      <el-form-item prop="confirm">
        <el-input
          v-model="model.confirm"
          placeholder="Confirm"
          type="password"
          prefix-icon="el-icon-lock"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          class="login-button"
          type="primary"
          block
          @click="submitForm('Form')"
          >Register
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button
          class="reset-button"
          type="info"
          block
          @click="resetForm('Form')"
          >Reset</el-button
        >
      </el-form-item>
      <el-form-item>
        <p>
          Already have an account? <nuxt-link to="/login">Log in</nuxt-link>
        </p>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: 'Register',
  data() {
    const checkLogin = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Please input the login'))
      } else {
        callback()
      }
    }
    const validateEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Please input the e-mail'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'))
      } else {
        if (this.model.confirm !== '') {
          this.$refs.Form.validateField('confirm')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'))
      } else if (value !== this.model.password) {
        callback(new Error("Two inputs don't match!"))
      } else {
        callback()
      }
    }
    return {
      model: {
        password: '',
        confirm: '',
        login: '',
        email: ''
      },
      rules: {
        password: [{ validator: validatePass, trigger: 'blur' }],
        confirm: [{ validator: validatePass2, trigger: 'blur' }],
        login: [{ validator: checkLogin, trigger: 'blur' }],
        email: [{ validator: validateEmail, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store
            .dispatch('auth/register', this.ruleForm2)
            .then(() => this.$router.push('/'))
            .catch(err => {
              this.$api.auth.processRegisterError(err, this.$notify)
            })
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    cancel() {
      this.$router.push('/home')
    }
  }
}
</script>
