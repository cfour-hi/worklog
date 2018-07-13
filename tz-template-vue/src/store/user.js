import { Loading, Message } from 'element-ui';
import { goLogin } from '@/utils/auth';
import {
  getUserInfo,
  getUserSystems,
  getUserPermissions,
  logout,
} from '@/api/user';

export default {
  state: {
    info: {},
    systems: [],
    permissions: [],
    token: '',
  },

  getters: {
    systemsExcludeSelf(state) {
      return state.systems.filter(
        (system) => !process.env.BASE_API.includes(system.url)
      );
    },
  },

  mutations: {
    SET_USER_DATA: (state, { key, value }) => {
      state[key] = value;
    },
  },

  actions: {
    getUserInfo({ commit }) {
      getUserInfo().then((response) => {
        commit('SET_USER_DATA', { key: 'info', value: response });
      });
    },
    getUserPermissions({ commit }) {
      /* eslint-disable arrow-body-style */
      return new Promise((resolve, reject) => {
        return getUserSystems()
          .then(({ sysList }) => {
            const system = sysList.find((sys) => {
              return process.env.BASE_API.includes(sys.url);
            });
            if (!system) return reject(new Error('找不到匹配的系统'));

            commit('SET_USER_DATA', { key: 'systems', value: sysList });
            return system.sysId;
          })
          .then((sysId) => {
            return getUserPermissions({ sysId }).then((response) => {
              commit('SET_USER_DATA', {
                key: 'permissions',
                value: response.list,
              });
              resolve(response);
            });
          })
          .catch((error) => reject(error));
      });
    },
    logOut() {
      const loadingService = Loading.service({ lock: true });
      logout()
        .then(() => {
          Message.success('退出成功');
          goLogin();
        })
        .catch((error) => {
          loadingService.close();
          return error;
        });
    },
  },
};
