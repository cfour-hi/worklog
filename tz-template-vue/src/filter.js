import Vue from 'vue';
import dayjs from 'dayjs';

Vue.filter('dateFormat', (value, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (!value) return '';
  return dayjs(value).format(format);
});
