import request from '@/utils/request';

export function getUserInfo() {
  return request({
    url: '/power/user/get',
    method: 'post',
  });
}

export function getUserSystems() {
  return request({
    url: `${process.env.AUTH_API}/login/getUserPower`,
    method: 'post',
  });
}

export function getUserPermissions(data = {}) {
  return request({
    data,
    url: `${process.env.AUTH_API}/account/getUserMenu`,
    method: 'post',
  });
}

export function logout() {
  return request({
    url: `${process.env.AUTH_API}/login/userLogout`,
    method: 'post',
  });
}
