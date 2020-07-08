<!-- TEMPLATE -->
<template>
  <section class="alerts alerts__section">
    <h1>ALERTS</h1>
    <div class="alerts__box">
      <a-form class="alerts__item alerts__header" :form="form" @submit.prevent="sendFormValues">
        <a-form-item class="group">
          <a-select
            v-decorator="['select-picker', selectInit]"
            :loading="firstTagList ? false : true"
            :disable="firstTagList ? false : true"
            :class="firstTagList ? null : 'alerts__placeholderLoader'"
          >
            <a-select-option v-for="(f, x) in arborTagList" :key="x" :value="f">
              {{ `${x + 1}. ${f}` }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          ><a-range-picker
            v-decorator="['range-picker', rangeInit]"
            format="YYYY-MM-DD HH:mm"
            minute-step="5"
            :ranges="monthInit"
        /></a-form-item>

        <a-form-item>
          <div class="group alerts__raw" @click="onChangeSwitch">
            <a-switch v-decorator="['switcher', switcherInit]" :checked="switchState" />
            <span>Deep Scan</span>
          </div>
        </a-form-item>

        <a-form-item>
          <a-button class="alerts__formbtn" type="primary" html-type="submit" :loading="isLoaded">Search</a-button>
        </a-form-item>
      </a-form>

      <div class="alerts__item alerts__min-height">
        <alerts-table
          v-if="!isLoaded && dataProfile && dataProfile.length > 0"
          :payload="{
            name: 'tableData',
            alertstag: clickedTag,
            body: dataProfile,
            language: {
              id: 'ID',
              name: 'Название',
              max_impact_bps: 'bps',
              max_impact_pps: 'pps',
              bps: 'bps',
              pps: 'pps',
              importance: 'Важность',
              start: 'Начало',
              stop: 'Завершение',
              ongoing: 'Активен',
              resource: 'Ресурс',
              misuseTypes: 'Тип атаки',
              duration: 'Длительность',
              action: 'Подробнее',
            },
            languageBody: {
              high: '🔥🔥🔥' || 'Высокий',
              medium: '🔥🔥' || 'Средний',
              low: '🔥' || 'Низкий',
            },
          }"
        ></alerts-table>
        <a-empty v-else></a-empty>
      </div>
    </div>
  </section>
</template>
<!-- - ⚡ - -->

<!-- SCRIPT -->
<script>
  import moment from 'moment';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Alerts',
    components: {
      AlertsTable: () => import('~/components/alerts/AlertsTable'),
    },

    data() {
      return {
        dateFormat: 'YYYY/MM/DD',
        monthFormat: 'YYYY/MM',

        routeID: this.$route.params.id || {},
        arborTagList: [],
        dataProfile: null,
        firstTagList: '',
        isLoaded: false,
        switchState: false,

        formData: [],
        submitData: [],
      };
    },
    computed: {
      ...mapGetters('alerts', ['__apiAlertsTable']),
      ...mapGetters('auth', ['__profile']),
      ...mapGetters(['__serverCode']),

      switcherInit() {
        return {
          defaultChecked: false,
        };
      },

      monthInit() {
        return {
          Today: [moment(), moment()],
          Yesterday: [moment().subtract(1, 'day'), moment()],
          'Last Week': [moment().subtract(1, 'weeks'), moment()],
          'Last Month': [moment().subtract(1, 'month'), moment()],
          'Last Year': [moment().subtract(1, 'year'), moment()],
        };
      },

      clickedTag() {
        return (this.submitData && this.submitData.arbortag) || null;
      },
      clickedTable() {
        return this.dataProfile || {};
      },
      resultFetch() {
        return (this.__apiAlertsTable && this.__apiAlertsTable.length) || 0;
      },

      timeInit() {
        return {
          initialValue: [moment(), moment()],
          minuteStep: 5,
          hideDisabledOptions: true,
          disabledSeconds: true,
        };
      },

      rangeInit() {
        return {
          initialValue: [moment().subtract(1, 'day'), moment()],
          rules: [{ type: 'array', required: true, message: 'Please select time!' }],
          minuteStep: 5,
          showTime: this.timeInit,
        };
      },
      selectInit() {
        return { initialValue: this.firstTagList };
      },

      errState() {
        return this.error;
      },

      calcForm() {
        return this.submitData;
      },
    },

    beforeCreate() {
      this.form = this.$form.createForm(this, { name: 'fetchAlerts' });
    },
    async created() {
      await this.getArborTagList();
      this.getLastSearch();
    },
    mounted() {
      return moment;
    },
    methods: {
      ...mapActions('alerts', ['$$apiAlertsTable']),

      onChangeSwitch() {
        this.switchState = !this.switchState;
        return this.switchState;
      },

      getLastSearch() {
        if (!this.$isEmpty(this.__apiAlertsTable)) {
          this.dataProfile = this.__apiAlertsTable;
        }
      },

      roundTime(el) {
        const coeff = 1000 * 60 * 5;
        const time = new Date(el);
        return Math.round(time.getTime() / coeff) * coeff;
      },

      calcFormValues(data) {
        const formData = data;
        const switcherState = formData.switcher || false;
        const rangeValue = formData['range-picker'];
        const startTime = rangeValue[0].format('YYYY-MM-DD HH:mm');
        const stopTime = rangeValue[1].format('YYYY-MM-DD HH:mm');

        const start = this.roundTime(startTime);
        const stop = this.roundTime(stopTime);

        const values = {
          deepscan: switcherState,
          arbortag: formData['select-picker'] || null,
          arbortagTime: { start, stop } || null,
        };
        // console.log('Received values of form: ', values);
        return values;
      },

      validateFunc() {
        this.form.validateFields((err, data) => {
          if (err) return;
          const next = this.calcFormValues(data);
          this.submitData = next;
        });
      },
      async sendFormValues() {
        try {
          this.isLoaded = true;
          this.submitData = {};

          this.validateFunc();
          if (this.$isEmpty(this.submitData)) throw new Error('FORM data is empty!');
          await this.$$apiAlertsTable(this.submitData);

          this.dataProfile = await this.__apiAlertsTable;
          if (this.$isEmpty(this.dataProfile)) this.$statusCode(204);
        } catch (err) {
          console.error(`❌ [ERROR] ${err}`);
        } finally {
          this.isLoaded = false;
        }
      },

      async getArborTagList() {
        try {
          const { arbortag } = await this.__profile;
          if (this.$isEmpty(arbortag)) throw new Error('arbortag is empty');
          this.arborTagList = arbortag;
          [this.firstTagList] = arbortag;
        } catch (err) {
          console.error(`❌ [ERROR] ${err}`);
        }
      },
    },
  };
</script>
<!-- - ⚡ - -->

<!-- STYLE -->
<style scoped lang="stylus">
  alerts {
  +__() {
    .section {
      display: grid;
      grid-auto-flow: row;
      justify-content: stretch;
      align-items: start;
      grid-auto-rows: auto 1fr
      gap: 1rem;
      padding-bottom: 50px
    }
    .box {
      display: grid;
      justify-content: stretch;
      align-items: start;
      gap: 1rem;
      grid: auto \/ 1fr;
    }
    .item {
      background-color #fff;
      padding 30px
      display: grid;
      grid-auto-flow: row;
      justify-content: stretch;
      align-items: baseline;
      radius: 8px;
      gap: 30px;
      box-shadow: _pageShadow
      transition: .25s __cubic;

      +media(570) {
        grid-gap: 1rem;
        padding: 1rem;
      }
    }
    .formbtn {
      margin-bottom: 24px;
      min-width: 120px
      +media(570) {
        margin-bottom: 0;
        min-width: 100%
      }
    }
    .raw {
      display: grid;
      grid-auto-flow: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      +media(570) {
        justify-content: start;
        align-items: center;
      }
    }
    .min-height {
      min-height: 60vh;
    }
    .header {
      display: grid;
      grid-auto-flow: column;
      justify-content: space-between;
      align-items: center;
      padding: 30px 30px .25rem;
      grid-auto-columns: 4fr 2fr 1fr 1fr;
      grid-gap: 9rem;
      +media(1920) {
        grid-auto-columns: 4fr 3fr 2fr 1fr;
        grid-gap: 30px
      }
      +media(1199) {
        grid: auto \/ 1fr 1fr;
      }
      +media(570) {
        grid: auto \/ 1fr;
        grid-auto-flow: row;
        padding: 1rem;
        justify-content: stretch;
        align-items: center;
      }
    }
    .size-selector {
      min-width: 15rem;
      display: grid;
      grid-auto-flow: column;
      justify-content: stretch;
      align-items: center;
      position: relative;

      +media(570) {
        min-width: auto
      }
      +min-media(1199) {
        width: 100vw;
        max-width: 450px;
      }
    }
    .block {
      display: block;
      box-sizing: border-box;
      background-color: #fff;
      border: 1px solid #d9d9d9;
      border-top-width: 1.02px;
      border-radius: 4px;
      outline: none;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      user-select: none;
    }
    .placeholderLoader {
      &:before {
        content: 'Loading...';
        display: grid;
        width: 100%;
        height: 32px;
        padding: 7px 11px;
        color: rgba(#000, 65%);
        font-size: 14px;
        line-height: 1.5;
        background-color: #0000;
        background-image: none;

        position: absolute;

        z-index: 3;
        left: 0;
        top: 0;
        }
      }
    }
  }
</style>
<!-- - ⚡ - -->
