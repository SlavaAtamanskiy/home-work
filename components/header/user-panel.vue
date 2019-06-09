<template>
  <div class="home-work-user-panel">
    <div class="home-work-user-panel-item">
      <el-popover
        v-model="visible"
        placement="bottom"
        width="300"
        trigger="click"
      >
        <el-button slot="reference"
          ><img src="../../assets/images/temp/admin.jpg" class="image"
        /></el-button>
        <div style="text-align: center; margin: 0">
          <h4>User info</h4>
          <div style="text-align: left; margin-left: 10px">
            <p>Full name: {{ userName }}</p>
            <p>Gender: {{ user.gender }}</p>
            <p>Role: {{ userRole }}</p>
          </div>
          <el-button size="mini" type="info" @click="visible = false"
            >Close</el-button
          >
          <el-button type="success" size="mini" @click="visible = false"
            >Edit</el-button
          >
        </div>
      </el-popover>
    </div>
    <div class="home-work-user-panel-item links">
      <span :user="user">{{ user.login }}</span>
    </div>
    <div class="home-work-user-panel-item">
      <el-tooltip
        class="item"
        effect="light"
        content="Log out"
        placement="left-start"
        :open-delay="opendelay"
      >
        <el-link :underline="underline" class="user-logout" @click="logOut"
          ><font-awesome-icon far icon="sign-out-alt" />
        </el-link>
      </el-tooltip>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserPanel',
  data: () => ({
    visible: false,
    underline: false,
    opendelay: 1500
  }),
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    userName() {
      const user = this.$store.state.auth.user
      return `${user.firstname || ''} ${user.midllename ||
        ''} ${user.lastname || ''}`
    },
    userRole() {
      const arr = this.$store.state.auth.user.roles
      if (arr.length > 0) {
        return arr[0]
      }
      return ''
    }
  },
  methods: {
    logOut() {
      this.$store
        .dispatch('auth/logOut')
        .then(() => this.$router.push('/home'))
        .catch(err => this.$notify(err.stack))
    }
  }
}
</script>

<style scoped>
.home-work-user-panel {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.home-work-user-panel .user-logout {
  font-size: 22pt;
}
.home-work-user-panel .user-current {
  font-size: 16pt;
}
.home-work-user-panel .home-work-user-panel-item {
  padding: 0 0.35rem;
}
.el-popover__reference {
  padding: 0;
  border-radius: 100%;
}
.el-popover__reference img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
}
</style>
