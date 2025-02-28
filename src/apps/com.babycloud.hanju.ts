import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.babycloud.hanju',
  name: '韩小圈',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text*="跳过"][text.length<=5]',
          snapshotUrls: 'https://i.gkd.li/import/13234983',
        },
      ],
    },
    {
      key: 2,
      name: '卡片广告',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      matchTime: 10000,
      rules: '[id="com.babycloud.hanju:id/unified_ad_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13628282',
    },
  ],
});
