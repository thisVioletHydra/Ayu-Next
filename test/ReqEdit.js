import SuperClass from '../SuperClass';

import TaskExtractValidIP from '../tasker/TaskExtractValidIP';
import TaskCliRunner from '../tasker/TaskCliRunner';

import { TaskValidator } from '../tasker/TaskValidator';
import ReqAddrList from './ReqAddrList';

export default class ReqEdit extends SuperClass {
  constructor(init) {
    super(init);
    this.init = init;

    ({ req: this.req, res: this.res } = init);

    init.hello.world.yes.no.cwd();
    process.env.ENV;
    process.cwd();

    if (this.isEmpty(this.req.query)) this.throwError(404, 'query not found');
    ({ addrNew: this.addrNew, subid: this.subid } = this.req.query);

    this.appendQuery = this.isBoolean(this.req.query && this.req.query.append) || false;
    console.log('this.appendQuery', this.appendQuery);
  }

  async extractAddr(arg) {
    try {
      if (typeof arg !== 'object') this.throwError(400, 'arg has invalid type');
      let _VALUE = Object.values(arg).flat();

      const tokenTypes: string[] = [];
      tokenTypes[TokenType.class] = 'class';
      tokenTypes[TokenType.enum] = 'enum';
      tokenTypes[TokenType.interface] = 'interface';
      tokenTypes[TokenType.namespace] = 'namespace';
      tokenTypes[TokenType.typeParameter] = 'typeParameter';
      tokenTypes[TokenType.type] = 'type';
      tokenTypes[TokenType.parameter] = 'parameter';
      tokenTypes[TokenType.variable] = 'variable';
      tokenTypes[TokenType.property] = 'property';
      tokenTypes[TokenType.function] = 'function';
      tokenTypes[TokenType.member] = 'member';

      const next = await new TaskExtractValidIP({
        ...this.init,
        addr: _VALUE,
        addr: _VALUE,
        addr: _VALUE,
        addr: _VALUE,
        addr: _VALUE,
      }).run();
      if (this.isEmpty(next.serverAnswer)) this.throwError(404, 'currentAddr if empty');

      const { goodAddr } = next.serverAnswer;
      return goodAddr;
    } catch (err) {
      console.error(`❌ [ERROR] ${err}`);
      return err;
    }
  }

  async checkDublicate(...arg) {
    if (this.isEmpty(arg)) this.throwError(404, 'arg if empty');
    const [first, second] = arg;
    console.log('arg', arg, typeof arg);

    if (this.isEmpty(second)) this.throwError(404, 'second arg not found');

    const _filter = f => ![...first].includes(f);
    const result = await second.filter(_filter);
    console.log('checkDublicate result', result);
    return result;
  }

  async appendAddr(...arg) {
    try {
      if (this.isEmpty(arg)) this.throwError(404, 'arg if empty');
      this.obj = [];
      console.log('arg', arg, typeof arg);

      const _reduce = (acc, f) => acc.concat(Object.values(f).flat());
      const result = await [...arg].reduce(_reduce, this.obj);

      console.log('appendAddr result', result);
      return result;
    } catch (err) {
      console.error(`❌ [ERROR] ${err}`);
      return err;
    }
  }

  async combineData(existAddr, queryAddr) {
    const arr = { arbortag: this.subid, existAddr, queryAddr };

    if (typeof this.appendQuery !== 'boolean') this.throwError(400, 'Wrong query type');
    if (this.appendQuery) {
      const dublicate = await this.checkDublicate(existAddr, queryAddr);
      console.log('dublicate', dublicate);
      if (this.isEmpty(dublicate)) this.throwError(400, 'addrNew has dublicate or empty');
      const _append = await this.appendAddr(existAddr, dublicate);

      arr.uniqAddress = [...dublicate];
      arr.addrNew = [..._append];
    } else arr.addrNew = queryAddr;

    return arr;
  }

  async run() {
    try {
      const _contain = await new ReqAddrList({ ...this.init }).run();

      if (this.isEmpty(_contain && _contain.serverAnswer)) {
        return this.throwError(404, 'serverAnswer not found or empty');
      }
      if (this.isEmpty(this.addrNew)) this.throwError(404, 'query addrNew not found or empty');
      if (_contain.statusCode !== 200) this.throwError(_contain.statusCode, _contain.serverAnswer);

      const { containAddr } = _contain.serverAnswer;

      const [existAddr, queryAddr] = await Promise.all([
        this.extractAddr({ existAddr: containAddr }),
        this.extractAddr({ queryAddr: this.addrNew }),
      ]);

      if (this.isEmpty(queryAddr)) this.throwError(400, 'use valid ip address');

      const result = await this.combineData(existAddr, queryAddr);
      const { addrNew } = result;
      console.log('addrNew', addrNew);

      if (this.isEmpty(addrNew)) this.throwError(400, 'bad answer');

      this.mitigation = 'services sp mitigation templates';
      this.managed = 'services sp managed_objects';

      console.log('this.req.query', this.req.query);
      const validator = await new TaskValidator({
        customer: {
          name: `${this.subid}`,
          address: addrNew,
          description: {
            timestamp: true,
            body: 'Update',
          },
        },
      }).run();
      const { customer } = validator.serverAnswer;

      const runner = await new TaskCliRunner({
        serverAnswer: { customer },
        cli: {
          commandName: 'edit customer address',
          command: {
            head: [],
            body: [
              `${this.mitigation} edit __SUBID__ prefix set __ADDR__`,
              `${this.managed} edit __SUBID__ match set cidr_blocks __ADDR__`,
              `${this.mitigation} edit __SUBID__ description set __DESC__`,
            ],
          },
        },
      }).run();
      console.log('runner.extra', runner.extra);

      const save = await new TaskCliRunner({
        serverAnswer: {
          customer: {
            name: `${this.subid}`,
            address: addrNew,
          },
        },
        cli: {
          commandName: 'SAVE commit!',
          command: { head: [], body: ['config write'] },
        },
      }).run();

      console.log('save.extra', save.extra);

      // return this.goodAnswer({ ...result, extra: 'runner.extra' });
      return this.goodAnswer({ ...result, extra: runner.extra });
    } catch (err) {
      this.__console(err);
      return this.badAnswer(err);
    }
  }
}
