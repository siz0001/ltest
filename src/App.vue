<template>
  <v-app>


    <!-- 툴바 영역 -->
    <v-toolbar dark color="primary">
        <v-toolbar-side-icon></v-toolbar-side-icon>

        <v-toolbar-title class="white--text">큭...가게를.. 부탁한다... <v-icon>favorite</v-icon> </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
    <!-- 툴바 영역 -->


    <!-- 탭바 영역 -->
      <v-tabs
      grow
      centered
      color="primary lighten-1"
      dark
      icons-and-text
      >
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab key="tab1" to="/test1">
          ""
          <v-icon>phone</v-icon>
        </v-tab>

        <v-tab key="tab2" to="/test2">
          ""
          <v-icon>favorite</v-icon>
        </v-tab>

        <v-tab key="tab3" to="/main">
          AI 매출 예측기
          <v-icon>account_box</v-icon>
        </v-tab>
        <v-tab-item id="/test1">
          <router-view v-if="activeTab === '/test1'" />
        </v-tab-item>
        <v-tab-item id="/test2">
          <router-view v-if="activeTab === '/test2'" />
        </v-tab-item>
        <v-tab-item id="/main">
          <router-view v-if="activeTab === '/main'" />
        </v-tab-item>
      </v-tabs>
        <!-- 탭바 영역 -->


    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Analysis from './components/Analysis'

export default {
  name: 'App',
  components: {
    Analysis
  },
  data () {
    return {
      //
    }
  }
}
</script>
