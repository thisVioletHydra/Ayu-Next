<!-- TEMPLATE -->
<template>
  <article class="appSource appSource__box">
    <!-- <div class="">{{ __trafficPersonal }}</div> -->
    <!-- <div class="">{{ appBody.data }}</div> -->
    <div v-if="errState"><a-empty></a-empty></div>
    <div v-else-if="isLoading"><loader-content /></div>
    <client-only v-else-if="!isLoading && appBody">
      <deep-apex-graph
        v-if="appBody"
        :payload="{
          apexName,
          apexType,
          apexHeight,
          apexSeries,
          apexOptions,
        }"
      ></deep-apex-graph>
    </client-only>
  </article>
</template>
<!-- - ⚡ - -->

<!-- SCRIPT -->
<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'AppSource',
    components: {
      LoaderContent: () => import('~/components/LoaderContent'),
      DeepApexGraph: () => import('~/components/traffic/DeepApexGraph'),
    },

    props: {
      payload: {
        type: Object,
        default: null,
      },
    },
    data() {
      return {
        isLoading: true,
        error: null,
        appBody: null,
        isDelayElapsed: false,

        selector: this.payload.selector || '',

        apexName: this.payload.name || 'empty',
        apexType: this.payload.type || 'area',
        apexFormat: this.payload.format || 'mbyte',
        apexHeight: this.payload.height || '450',
        fullFormat: 'HH:mm - dd MMM yyyy',

        apexLabel: '',
        apexSize: '',
        apexRound: this.payload.round || 0,
      };
    },

    computed: {
      ...mapGetters('traffic', ['__trafficPersonal', '__errorLog']),
      ...mapGetters(['__serverCode']),

      calcSeries() {
        this.switcherState(this.apexFormat);
        const { data } = this.appBody;
        console.log('[LOG] switcherState data', `<${typeof data}>`, data)
        if (this.$isEmpty(data)) return false;

        const xml = data;
        if (this.$isEmpty(xml || xml['query-reply'])) return false;

        const { start } = xml['query-reply'].time;
        const { duration } = xml['query-reply'].sample_info;
        const next = xml['query-reply'].class;
        console.log('[LOG] next', `<${typeof next}>`, next);

        const array = Array.isArray(next) ? next : Array(next);
        const result = array
          .filter(({ type }) => ['in', 'out'].includes(type))
          .map(f => ({
            name: f.type,
            data: f.filter_sample.value
              .split('|')
              .map(n => (Number(n) / this.apexSize).toFixed(this.apexRound))
              .map((n, index) => [(Number(start) + index * Number(duration)) * 1000, parseFloat(n)]),
          }));
        console.log('[LOG] result', `<${typeof result}>`, result);
        return result;
      },

      apexSeries() {
        try {
          return this.calcSeries;
        } catch (err) {
          console.error(`❌ [ERROR] ${err}`);
          return [{ data: [[0, 1]] }];
        }
      },

      apexOptions() {
        return (
          {
            chart: {
              id: 'chart',
              animations: { enabled: true },
              zoom: {
                enabled: true,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              width: 2,
              curve: 'straight',
            },

            yaxis: {
              show: true,
              title: { text: this.apexLabel },
              decimalsInFloat: false,
              labels: {
                style: {
                  color: '#8e8da4',
                  fontSize: 10,
                },
                offsetX: 0,
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
            },
            xaxis: {
              type: 'datetime',
              format: this.fullFormat,
              style: {
                color: '#8e8da4',
                fontSize: 10,
              },
            },
            legend: {
              show: true,
              markers: {
                width: 32,
                height: 8,
              },
            },
            tooltip: {
              enabled: true,
              intersect: false,
              shared: true,
              theme: 'dark',
              marker: {
                show: true,
              },

              x: {
                format: this.fullFormat,
              },
              y: {
                formatter: value => `${Math.abs(value)} ${this.apexLabel}`,
              },
            },
          } || {}
        );
      },

      errState(state) {
        console.log('[LOG] this.appBody', `<${typeof this.appBody}>`, this.appBody)
        // console.log('[LOG] state', `<${typeof state}>`, state)
        console.log('[LOG] this.error', `<${typeof this.error}>`, this.error)
        const result = this.error || null;
        // const result = state || this.error;
        return result;
      },
    },

    created() {
      this.next();
    },

    mounted() {},
    methods: {
      ...mapActions('traffic', ['$$trafficPersonal']),

      async next() {
        try {
          await this.$$trafficPersonal({ arbortag: this.selector });
          this.appBody = this.__trafficPersonal;
          console.log('[LOG] this.appBody', `<${typeof this.appBody}>`, this.appBody);
          if (this.$isEmpty(this.appBody)) throw new Error('appBody is empty');
          else this.apexName = this.appBody.data.query.filter[0].instance.name;
        } catch (err) {
          console.error(`❌ [ERROR] ${err}`);
          this.error = err;
        } finally {
          this.isLoading = false;
        }
      },

      switcherState(state) {
        const byteList = {
          default: {
            label: 'MBytes/s',
            size: 1e6,
          },
          kbyte: {
            label: 'KBytes/s',
            size: 1e3,
          },
          mbyte: {
            label: 'MBytes/s',
            size: 1e6,
          },
          gbyte: {
            label: 'GBytes/s',
            size: 1e9,
          },
        };

        const result = (f => byteList[f] || byteList.default)(state);
        this.apexLabel = result.label;
        this.apexSize = result.size;
      },
    },
  };
</script>
<!-- - ⚡ - -->

<!-- STYLE -->
<style scoped lang="stylus">
  appSource {
    +__() {
      .section {
        display: grid;
        grid-auto-flow: row;
        justify-content: stretch;
        align-items: start;
        grid-auto-rows: auto 1fr
      }
      .box {
        display: grid;
        justify-content: stretch;
        align-items: start;
        gap: 40px;
        grid: auto \/ repeat(auto-fit, minmax(540px, 1fr));
        +media(570) {
          grid: auto \/ 1fr;
        }
      }
      .item {
        display: grid;
        grid-auto-flow: row;
        justify-content: stretch;
        align-items: baseline;
        background-color #fff;
        padding 30px
        gap: 30px;
        box-shadow: _pageShadow
        transition: .25s __cubic;
      }
    }
  }
</style>
<!-- - ⚡ - -->
