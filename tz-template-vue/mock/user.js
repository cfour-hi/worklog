module.exports = {
  'post /api/power/user/get': {
    status: 0,
    data: {
      userIdAuth: 1,
      tanzkAccount: '@phone()',
      name: '@cstr(2, 4)',
      deptId: '@str(2, 4)',
      deptName: '@cstr(3, 9)',
      deptchainId: '001-1001-10001',
      createTime: '@time()',
    },
  },

  'post /api/power/login/getUserPower': {
    status: 0,
    data: {
      username: '@cstr(2, 4)',
      sysList: [
        {
          sysName: '@cstr(2, 4)',
          sysId: '@inc(999)',
          url: 'http://127.0.0.1:9999',
        },
      ],
    },
  },

  'post /api/power/account/getUserMenu': {
    status: 0,
    data: {
      list: [
        'permission', // 菜单级别权限
        'permission-btn', // 按钮级别权限
      ],
    },
  },

  'post /user/logout': {
    status: 0,
    data: {},
  },
};
