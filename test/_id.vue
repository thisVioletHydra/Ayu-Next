<!-- TEMPLATE -->
<template>
  <section class="singleAlerts singleAlerts__section">
    <div class="singleAlerts__group singleAlerts__header">
      <div class="singleAlerts__group singleAlerts__breadcrumb">
        <div class="singleAlerts__group singleAlerts__goback">
          <h1>ALERTS ID:{{ routeID }}</h1>
          <nuxt-link to="/dashboard/alerts" class="singleAlerts__btnBack"
            ><a-icon type="left" /> <span>Вернуться назад</span></nuxt-link
          >
        </div>
        <a-breadcrumb>
          <a-breadcrumb-item>
            <nuxt-link to="/dashboard"><a-icon type="home" /></nuxt-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <nuxt-link to="/dashboard/alerts"><a-icon type="area-chart" /> <span>Alerts</span></nuxt-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item>ID:{{ routeID }}</a-breadcrumb-item>
        </a-breadcrumb>
      </div>

      <!-- <h3>Подробная информация об атаке</h3> -->
    </div>
    <div class="singleAlerts__box singleAlerts__full">
      <div class="singleAlerts__item">
        <h4>Информация об атаке</h4>
        <alerts-header
          :payload="{
            name: 'alerts-header',
            listSize: 5,
            header: {},
            language: {
              id: 'ID',
              name: 'Название',
              bps: 'bps',
              pps: 'pps',
              importance: 'Важность',
              start: 'Начало',
              stop: 'Завершение',
              ongoing: 'Активен',
              resource: 'Ресурс',
              misuseTypes: 'Тип атаки',
              duration: 'Длительность',
              max_impact_bps: 'bps',
              max_impact_pps: 'pps',
            },
            languageBody: {
              high: '🔥🔥🔥' || 'Высокий',
              medium: '🔥🔥' || 'Средний',
              low: '🔥' || 'Низкий',
            },
          }"
        >
        </alerts-header>
      </div>

      <div class="singleAlerts__item">
        <h4>Трафик атаки</h4>
        <graph-alerts-traffic
          :payload="{
            type: 'area',
            format: 'mbyte',
            height: 350,
            round: 2,
          }"
        ></graph-alerts-traffic>
      </div>

      <div class="singleAlerts__raw">
        <div class="singleAlerts__item">
          <h4>Распределение пакетов по размеру</h4>
          <packet-size-distribution
            :payload="{
              type: 'bar',
              height: 450,
            }"
          ></packet-size-distribution>
        </div>

        <div class="singleAlerts__item">
          <h4>Таблица характеризующая атаку</h4>
          <alert-characterization
            :payload="{
              header: {
                name: 'Элемент',
                property: 'Значение',
              },
              language: {
                dest_addr: 'IP адрес получателя',
                dest_tcp_ports: 'TCP порт получателя',
                dest_udp_ports: 'UDP порт получателя',
                misuse_types: 'Тип атаки',
                protos: 'Протокол',
                src_addr: 'IP адрес источника',
                src_asn: 'ASN источника',
                src_countries: 'Страна источника',
                src_tcp_ports: 'TCP порт источника',
                src_udp_ports: 'UDP порт источника',
                tcp_flags: 'TCP флаги',
              },
            }"
          ></alert-characterization>
        </div>
      </div>

      <div class="singleAlerts__item">
        <h4>Динамика трафика за последние 5 минут</h4>
        <top-traffic-patterns
          :payload="{
            header: {
              tabIndex: '#',
              src_ip: 'Источник',
              protocol: 'Протокол',
              tcp_flags: 'Флаг',
              src_port: 'Порт источника',
              // src_port_name: '',
              dst_ip: 'Получатель',
              dst_port: 'Порт получателя',
              // dst_port_name: '',
              bps: 'bps',
              pps: 'pps',
            },
            language: {
              name: 'Имя',
            },
          }"
        ></top-traffic-patterns>
      </div>

      <div class="singleAlerts__box singleAlerts__fill">
        <app-group-alerts v-for="(f, x) in listContent" :key="x">
          <template #header>
            <h4>{{ f.title }}</h4>
          </template>
          <app-source
            v-if="typeof f === 'object'"
            :payload="{
              selector: f.source,
              listSize: 5,
              header: {
                tabIndex: '#',
                id: 'ID',
                name: 'Название',
                bps: 'bps',
                pps: 'pps',
              },
              language: {
                name: 'Имя',
              },
            }"
          ></app-source>
          <a-empty v-else></a-empty>
        </app-group-alerts>
      </div>
    </div>
  </section>
</template>
<!-- - ⚡ - -->

<!-- SCRIPT -->
<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'AlertsID',
    components: {
      AlertsHeader: () => import('~/components/alerts/AlertsHeader'),
      GraphAlertsTraffic: () => import('~/components/alerts/GraphAlertsTraffic'),
      AppGroupAlerts: () => import('~/components/alerts/AppGroupAlerts'),
      AppSource: () => import('~/components/alerts/AppSource'),
      AlertCharacterization: () => import('~/components/alerts/AlertCharacterization'),
      TopTrafficPatterns: () => import('~/components/alerts/TopTrafficPatterns'),
      PacketSizeDistribution: () => import('~/components/alerts/PacketSizeDistribution'),
    },

    data() {
      return {
        routeID: this.$route.params.id || {},
        listContent: [
          { title: 'IP-адреса источника', source: 'src_addr' },
          { title: 'IP-адреса получателя', source: 'dest_addr' },

          { title: 'Порты TCP источника', source: 'src_tcp_ports' },
          { title: 'Порты TCP получателя', source: 'dest_tcp_ports' },

          { title: 'Порты UDP источника', source: 'src_udp_ports' },
          { title: 'Порты UDP получателя', source: 'dest_udp_ports' },

          { title: 'Страны происхождения', source: 'src_countries' },
          { title: 'ASN источника', source: 'src_asn' },

          { title: 'Протокол', source: 'protos' },
          { title: 'Флаги TCP', source: 'tcp_flags' },
          { title: 'Тип атаки', source: 'misuse_types' },
        ],
      };
    },

    computed: {
      ...mapGetters('auth', ['__profile']),
      ...mapGetters(['__serverCode']),
    },

    created() {
      this.next();
    },

    async validate({ params, query, store }) {
      if (params && params.id <= 100000) return false;

      await store.dispatch('alerts/$$permission', { alertsID: params.id });
      const list = store.getters['auth/__profile'].arbortag;
      const route = store.getters['alerts/__permission'];

      const compare = (arr1, arr2) => {
        const [one] = arr2;
        const toLower = one.toLowerCase();
        return [...arr1].some(f => [toLower].includes(f.toLowerCase()));
      };

      const answer = compare(list, route);
      return answer;
    },
    methods: {
      ...mapActions('alerts', ['$$dynamicAlertsGraph', '$$dynamicAlertsChar']),

      next() {
        console.log('[LOG] log', `<${typeof log}>`, log)
        try {
          this.$$dynamicAlertsGraph({ alertsID: this.routeID });
          this.$$dynamicAlertsChar({ alertsID: this.routeID });
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
  singleAlerts {
    +__() {
      .section {
        display: grid;
        grid-auto-flow: row;
        grid-auto-rows: auto 1fr;
        align-items: start;
        justify-content: stretch;
        padding-bottom: 3.125rem;
        grid-gap: 1rem;
      }
      .box {
        display: grid;
        justify-content: stretch;
        align-items: stretch;
        gap: 1rem;

        +media(570) {
          grid: auto \/ 1fr;
        }
      }
      .full {
        grid-column: 1\/3;
        +media(570) {
          grid-column: unset;
        }
      }
      .item {
        display: grid;
        grid-auto-flow: row;
        grid-auto-rows: auto 1fr;
        justify-content: stretch;
        align-items: baseline;
        background-color #fff;
        padding 30px
        radius: 8px;
        gap: 1rem;
        box-shadow: _pageShadow
        transition: .25s __cubic;
        overflow: hidden;
        +media(570) {
          overflow-x: auto;
        }
      }
      .raw {
        display: grid;
        grid-auto-flow: column;
        justify-content: stretch;
        align-items: stretch;
        gap: 1rem;
        +media(1300) {
          grid-auto-flow: row;
        }
      }
      .fill {
        grid: auto \/ repeat(auto-fill, minmax(440px, 1fr));
        +media(570) {
          grid: unset;
        }
      }
      .header {
        display: grid;
        gap: 2rem;
        grid-column: 1/3;
        +media(570) {
          grid-column: unset;
        }
      }
      .breadcrumb {
        display: grid;
        gap: 0.5rem;
      }

      .goback {
        display: grid;
        grid-auto-flow: column;
        justify-content: space-between;
        align-items: center;
        +media(570) {
          grid-auto-flow: row;
          justify-content: stretch;
          align-items: stretch;
          gap: .5rem;

          & h1 {
            font-size: 1.2rem;
          }
          & a {
           font-size: .7rem;
           grid-row: -1;
           justify-self: end;
          }
        }
      }
      .btnBack {
        color: #fff;
        background-color: $$main
        border: 1px solid #0000
        border-radius: 3.125rem 0 0 3.125rem;
        padding: .3rem 1rem;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 12px

        transition: .17s __cubic;
        &:hover {
          background-color: darken($$main, 14%)
        }
        &:active {
          background-color: $$main
        }
      }
    }
  }
</style>
<!-- - ⚡ - -->
