# [1.3.0](https://github.com/Cansiny0320/qq-group-bot/compare/v1.2.0...v1.3.0) (2021-07-19)


### Bug Fixes

* 错误导入 ([8dd306a](https://github.com/Cansiny0320/qq-group-bot/commit/8dd306afa8f7c853d45943a2eef050e9640651fc))
* 修复 linux 下 puppeteer 不能正常运行的问题 ([480e338](https://github.com/Cansiny0320/qq-group-bot/commit/480e338901c625a02803735ebfad33d4de4e5bea))
* 修复天气预报执行时间 ([1949d76](https://github.com/Cansiny0320/qq-group-bot/commit/1949d760a5923ac12716d259e2cbe55d80441a3b))


### Features

* 抽离api ([acb96a0](https://github.com/Cansiny0320/qq-group-bot/commit/acb96a0b2819c96ec67c3f0081b28a0b0880c41a))
* 封装axios方法 ([c9a7e63](https://github.com/Cansiny0320/qq-group-bot/commit/c9a7e63829c3fdf1a0239ce320c03670bfa45975))
* 教务在线新闻 ([850d366](https://github.com/Cansiny0320/qq-group-bot/commit/850d366242c789cfe425afc819558485ee065aaf))
* 每日健康打卡 ([cb16f4d](https://github.com/Cansiny0320/qq-group-bot/commit/cb16f4da5e3902ee0a2ef0fc24455f3eed08985f))
* 天气预报 ([da12696](https://github.com/Cansiny0320/qq-group-bot/commit/da126966ec190389ce4e93b5a7985ba2bf657a77))
* 一觉醒来发生了什么功能 ([b70c4c0](https://github.com/Cansiny0320/qq-group-bot/commit/b70c4c0ba271b7f4ef909ddbc8b9e9f3c3a584f4))
* 增加新闻序号 ([94ee90e](https://github.com/Cansiny0320/qq-group-bot/commit/94ee90e4997bb57061e4a891b242eea0cb6f3fbe))
* greet 插件 ([6a67658](https://github.com/Cansiny0320/qq-group-bot/commit/6a676585dcafb51d766f73df777d634657983136))



# [1.2.0](https://github.com/Cansiny0320/qq-group-bot/compare/v1.1.0...v1.2.0) (2021-06-11)


### Bug Fixes

* 更正签到请求的编码方式 ([e72eeef](https://github.com/Cansiny0320/qq-group-bot/commit/e72eeefe09e9a10e38367bd44cef6109d429fc60))
* 显式 bind this指向 ([aef3f04](https://github.com/Cansiny0320/qq-group-bot/commit/aef3f04388a453bdac2f535879837a7b0ed3c682))
* 修复签到的一些问题 ([e54b47c](https://github.com/Cansiny0320/qq-group-bot/commit/e54b47cecad251956467193127b97eaebf60a7c4))


### Features

* 出校功能 ([052cb74](https://github.com/Cansiny0320/qq-group-bot/commit/052cb74905d49d367b328570717778f988256eab))
* 签到详细状态 ([18c8d9e](https://github.com/Cansiny0320/qq-group-bot/commit/18c8d9ed9b401c0093f1bc0cea20aa0070eff7ca))
* 掌上重邮定时签到 ([c25468a](https://github.com/Cansiny0320/qq-group-bot/commit/c25468afac8e2854024415140589db16de5f15f1))
* 只有账号拥有者才可以申请离校 ([4463fa4](https://github.com/Cansiny0320/qq-group-bot/commit/4463fa4f9c8c118b733ef7b40c9e179e4340424b))



# [1.1.0](https://github.com/Cansiny0320/qq-group-bot/compare/v1.0.2...v1.1.0) (2021-06-10)


### Bug Fixes

* toLocalString函数需要显示地指定时区，避免返回的日期格式不一致 ([c341298](https://github.com/Cansiny0320/qq-group-bot/commit/c3412986a5e17df2ec211b7e22f0da087667f265))



## [1.0.2](https://github.com/Cansiny0320/qq-group-bot/compare/v1.0.1...v1.0.2) (2021-06-06)


### Bug Fixes

* 尝试解决显示昵称修改偶尔会显示为空的bug ([4112980](https://github.com/Cansiny0320/qq-group-bot/commit/41129802183f8245f975898957be76eaa90b0639))



## [1.0.1](https://github.com/Cansiny0320/qq-group-bot/compare/v1.0.0...v1.0.1) (2021-06-05)


### Bug Fixes

* 修复成员群昵称修改提示 ([a124f21](https://github.com/Cansiny0320/qq-group-bot/commit/a124f21874de99709a2523b75b5708caf17248e0))



# [1.0.0](https://github.com/Cansiny0320/qq-group-bot/compare/c531004ab4224fe3621be77bcdf3bebd2a57323c...v1.0.0) (2021-06-04)


### Bug Fixes

* 更正吃什么/什么没吃过的正则 ([25c7dc3](https://github.com/Cansiny0320/qq-group-bot/commit/25c7dc3d111e962d675a1aac1681eff5bc6dcfde))
* 清除cache 获取新的memberlist ([4533495](https://github.com/Cansiny0320/qq-group-bot/commit/4533495df6f2768bef0647c781dc6ba6689923a3))
* 修复申请日期 ([7d794a2](https://github.com/Cansiny0320/qq-group-bot/commit/7d794a2f333f5e1a98808e5d715cbe044012f5f7))
* 修改判断修改昵称逻辑 使其能够适应成员增加的情况 ([1169ac0](https://github.com/Cansiny0320/qq-group-bot/commit/1169ac040db59eef72314694ec5aef9d14f7cff4))
* 修改为setTimeout方式 避免请求返回慢导致多个任务同时执行 ([be23d31](https://github.com/Cansiny0320/qq-group-bot/commit/be23d31345db6b47dbdfe762321af59f0b984dde))
* string to number ([b393b21](https://github.com/Cansiny0320/qq-group-bot/commit/b393b213233e39d2ec990a78494a8d219e30cfb3))


### Features

* 出校申请功能 ([c737078](https://github.com/Cansiny0320/qq-group-bot/commit/c73707873a76931fe005d21dff02771c254e91fe))
* 多媒体复读禁言 ([48f6bb2](https://github.com/Cansiny0320/qq-group-bot/commit/48f6bb26fef65e66b3c090a4eb0849aa91141a35))
* 复读禁言功能 ([deb3204](https://github.com/Cansiny0320/qq-group-bot/commit/deb3204e1659c5512dab90e8cd6a350c158d47be))
* 更新吃什么/什么没吃过功能 ([2a6197c](https://github.com/Cansiny0320/qq-group-bot/commit/2a6197c0b356701292a12ef4d5545bf8ebdf9a7c))
* 关键词回复功能 ([2402ab8](https://github.com/Cansiny0320/qq-group-bot/commit/2402ab8a9429bb54cb1ddbbf3202b196c713e55c))
* 关键字撤回 ([5322f2c](https://github.com/Cansiny0320/qq-group-bot/commit/5322f2c3a2223bcf7e59eb481e2c5fe9274d817b))
* 群员撤回消息提示 ([c531004](https://github.com/Cansiny0320/qq-group-bot/commit/c531004ab4224fe3621be77bcdf3bebd2a57323c))
* 群员修改昵称提示 ([d4ea042](https://github.com/Cansiny0320/qq-group-bot/commit/d4ea04283bcaafdd10d9f5dcd4d619f026b1342a))
* 增加热搜功能 增加百度搜索功能 ([856d5d0](https://github.com/Cansiny0320/qq-group-bot/commit/856d5d01e7fd09b2f9eb7d7c682067e2de4efec6))
* **keyword:** 二维码 ([b2fef89](https://github.com/Cansiny0320/qq-group-bot/commit/b2fef89b99cc28f37a53327da5b4ddbe40b5b478))



