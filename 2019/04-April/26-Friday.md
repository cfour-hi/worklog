## 计划任务

- [x] 处理昨晚测出的 bug

  封装 element-ui 日期时间选择快捷选项函数

  ```js
  import dayjs from 'dayjs';

  const toDayStart = (day = dayjs()) =>
    dayjs(`${day.year()}-${day.month() + 1}-${day.date()}`);

  export const shortcutToday = picker => {
    const end = toDayStart().valueOf();
    picker.$emit('pick', [end, end]);
  };

  export const shortcutYesterday = picker => {
    const end = toDayStart();
    const start = end.subtract(1, 'date');
    picker.$emit('pick', [start.valueOf(), end.valueOf()]);
  };

  export const shortcutLastWeek = picker => {
    const end = toDayStart();
    const start = end.subtract(1, 'week');
    picker.$emit('pick', [start.valueOf(), end.valueOf()]);
  };

  export const shortcutLastMonth = picker => {
    const end = toDayStart();
    const start = end.subtract(1, 'month');
    picker.$emit('pick', [start.valueOf(), end.valueOf()]);
  };
  ```

- [ ] crm v1.16 绩效评定

  代码审阅到一半，协助 @巧云 完成提工单 赠送课程 和 赠送实物 组件

## 临时任务

- [x] 协助 @巧云 完成提工单 赠送课程 和 赠送实物 组件

  拆分出 赠品表单业务组件  
  听闻下个工单版本需要优化提工单表单页面，总算可以安排时间整理这个单文件 2000 行左右代码的页面了。
