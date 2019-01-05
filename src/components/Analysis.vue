<template>
  <v-container grid-list-md text-xs-center>
    <v-layout align-space-between column>

 <v-timeline align-top dense>

    <v-timeline-item
      color="primary lighten-3"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="primary lighten-3">          
          <v-btn flat color="white" class="headline mb-0" to="/Mapchoice">지역선택</v-btn>          
        </v-card-title>
        <v-container>
          <v-layout>
            <v-flex xs10>
              <h1 fontsize="15" class="headline mb-0">서울시 영등포구</h1>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>


    <v-timeline-item
      color="primary lighten-2"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="primary lighten-2">          
          <v-btn flat color="white" class="headline mb-0" to="/Mapchoice">업종선택</v-btn>          
        </v-card-title>
        <v-container>
          <v-layout>
            <v-flex xs10>
              <h1 fontsize="15" class="headline mb-0">PC방</h1>
            </v-flex>            
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>

<v-timeline-item
      color="primary lighten-1"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="primary lighten-1">          
          <v-btn flat color="white" class="headline mb-0" to="/Mapchoice">예상매출</v-btn>          
        </v-card-title>        
      </v-card>
    </v-timeline-item>

  </v-timeline>


  </v-layout>
  </v-container>
</template>

<script>

  export default {
    data: () => ({
      items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star'
          
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant'
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon'
        },        
      ]
    })
  }

</script>

<style>


</style>
