<template>
  <div>
    <div class="parent">
      <div class="child float-left"><img :src="logoUrl" alt="Logo" class="component-logo"/></div>
      <div class="child float-right">
        <div class="timetable"><img :src="logoUrl1" alt="Logo 1" class="logo1"><span class="clock">{{ currentTime }}</span></div>
        <div class="User logo"><img :src="logoUrl2" alt="Logo 2" class="logo2"></div>
      </div>
    </div>
    <div class="settings-container">
      <div class="sidebar">
        <component
            v-for="component in leftComponents"
            :key="component.name"
            :is="component.name"
            :class="{ active: activeComponent === component.name }"
            @click="activeComponent = component.name"
        />
      </div>
      <div class="content">
        <component v-for="component in rightComponents" :key="component.name" :is="component.name"/>
      </div>
    </div>
  </div>
</template>

<script>
import HomePage from './components/AppHomePage.vue';
import Calender from './components/AppCalender.vue';
import Friends from './components/AppFriends.vue';
import Setting from './components/AppSettings.vue';
import Location from './components/AppLocation.vue';
import Type from './components/AppType.vue';
import Notification from './components/AppNotification.vue';
import Privacy from './components/AppPrivacy.vue';

export default {
  components: {
    HomePage,
    Calender,
    Friends,
    Setting,
    Location,
    Type,
    Notification,
    Privacy
  },
  data() {
    return {
      leftComponents: [
        {name: 'HomePage'},
        {name: 'Calender'},
        {name: 'Friends'},
        {name: 'Setting'}
      ],
      rightComponents: [
        {name: 'Location'},
        {name: 'Type'},
        {name: 'Notification'},
        {name: 'Privacy'}
      ],
      activeComponent: null, // <-- 在这里添加这一行
      currentTime: new Date().toLocaleTimeString()
    }
  },
  mounted(){
    this.interval = setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
  },
  beforeUnmount() {
    // your logic here
  }
}
</script>

<style scoped>
.component-logo {
  height: 100%;
  width: 100%;
  display: block;
}

.settings-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  flex: 2;
  overflow-y: auto;
}

.sidebar .active {
  background-color: black;
  color: white; /* Assuming you want the text to be white on a black background */
}

.content {
  flex: 8;
  overflow-y: auto;
}

.parent {
  display: flex;
  align-items: stretch;
}

.child {
  height: 200px; /* Assume this is the height you want */
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid black;
}

.float-left {
  float: left;
  width: 20%;
}

.float-right {
  position: relative;
  float: right;
  width: 80%;
}

.timetable, .User.logo {
  position: absolute;
  top: 0;
  height: 100%;
  width: 500px;}
</style>