import axios from 'axios';
import {GroupMessageEventData, PrivateMessageEventData} from 'oicq';

import {bot, helper, groupID} from '../../bot';
import {getNowTimestamp, getTodayDate} from '../../shared/date';
import {Plugin} from '../../shared/types';
import {infos} from './config.private';

const applyAPI = 'https://we.cqupt.edu.cn/api/lxsp/post_lxsp_spxx_test0914.php';
const leaveAPI =
  'https://we.cqupt.edu.cn/api/lxsp/post_lxsp_sm_test20210311.php';
const listAPI =
  'https://we.cqupt.edu.cn/api/lxsp/get_lxsp_list_gxw20210316.php';
const options = {
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Linux; Android 6.0.1; MuMu Build/V417IR; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.100 Safari/537.36 MMWEBID/4360 MicroMessenger/7.0.22.1820(0x27001636) Process/appbrand2 WeChat/arm32 Weixin Android Tablet NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
    'content-type': 'application/json',
  },
};

const initialInfo = {
  nj: '2019',
  qjsy: '1',
  wcxxdd: '1',
  wcmdd: '重庆市,重庆市,南岸区',
  qjlx: '市内当日离返校',
  beizhu: '',
};

async function applyLeaveSchool(name: string) {
  const requestData = {
    ...infos[name].info,
    ...initialInfo,
    yjfxsj: getTodayDate(),
    wcrq: getTodayDate(),
    timestamp: getNowTimestamp(),
  };
  const {data} = await axios.post(
    applyAPI,
    {
      key: Buffer.from(JSON.stringify(requestData)).toString('base64'),
    },
    options
  );
  if (data.status === 200) {
    return '申请成功';
  } else {
    return `申请失败\n请求数据：${requestData}\n返回数据${data}`;
  }
}

async function leaveSchool(name: string) {
  const chu = {
    type: '出校',
    version: '1.1',
    location: '崇文门',
    latitude: '',
    longitude: '',
    timestamp: getNowTimestamp(),
  };
  const userInfo = {
    openid: infos[name].info.openid,
    xh: infos[name].info.xh,
  };
  const {data: listData} = await axios.post(
    listAPI,
    {
      key: Buffer.from(
        JSON.stringify({
          ...userInfo,
          page: '1',
          timestamp: getNowTimestamp(),
        })
      ).toString('base64'),
    },
    options
  );

  const requestData = {
    ...chu,
    ...userInfo,
    log_id: listData.data.result[0].log_id,
  };

  const {data} = await axios.post(
    leaveAPI,
    {
      key: Buffer.from(JSON.stringify(requestData)).toString('base64'),
    },
    options
  );
  if (data.status === 200) {
    return '离校成功';
  } else {
    return `离校失败\n请求数据：${requestData}\n返回数据${data}`;
  }
}

async function check(
  user_id: number,
  msg: string,
  sender: (msg: string) => void
) {
  const regex = /申请 [\S]*/;
  const regexLeave = /[出离]校 [\S]*/;
  if (regex.test(msg) || regexLeave.test(msg)) {
    const name = msg.split(' ')[1];
    if (Object.keys(infos).includes(name)) {
      infos[name].owner_id === user_id
        ? regex.test(msg)
          ? sender(await applyLeaveSchool(name))
          : sender(await leaveSchool(name))
        : sender('你不是该账号拥有者，无法申请');
    } else {
      sender('没有你的数据 请联系管理员添加');
    }
  }
}

function groupListener(data: GroupMessageEventData) {
  const {raw_message, group_id, user_id} = data;
  if (group_id && groupID !== group_id) return;
  check(user_id, raw_message, helper.sendMsg.bind(helper));
}

function privateListener(data: PrivateMessageEventData) {
  const {raw_message, user_id} = data;
  check(user_id, raw_message, helper.sendPrivateMsg.bind(helper, user_id));
}

function install() {
  bot.on('message.group', groupListener);
  bot.on('message.private', privateListener);
}

const plugin: Plugin = {
  name: 'weCqupt',
  install,
};

export default plugin;
