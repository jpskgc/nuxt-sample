<template>
  <form>
    <v-text-field
      v-model="name"
      label="Name"
      required
    ></v-text-field>
  <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker in menu"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <timepicker format="A hh:mm"
        hour-label="時"
        minute-label="分"
        apm-label="区分"
        am-text="午前"
        pm-text="午後"
        v-model="startTime" 
        placeholder="開始時間"
        advanced-keyboard
      >
      </timepicker>
      <timepicker format="A hh:mm"
        hour-label="時"
        minute-label="分"
        apm-label="区分"
        am-text="午前"
        pm-text="午後"
        v-model="endTime" 
        placeholder="終了時間"
        advanced-keyboard
      >
      </timepicker>
    <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// @ts-ignore
import timepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'

@Component({
  components: { timepicker },
})
export default class RegistrationFormComponent extends Vue {

  name: string | null = null;
  date: string | null = null;
  startTime: string | null = null;
  endTime: string | null = null;

  mounted() {
    this.date = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
  }

  submit(){
    console.log(this.name)
    console.log(this.date)
    console.log(this.startTime)
    console.log(this.endTime)
  }
}
</script>
