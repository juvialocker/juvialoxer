import axiosInstance from './instance';
// tslint:disable-next-line:no-namespace
declare namespace manageMent {
  // tslint:disable-next-line:class-name
  interface newMgt {
    name: string;
    department: string;
    phone: number;
  }
}
// GET
// get的传参方法
// 	let params: any = {
//  	phone: this.phone
// 	};
// 查询管理员
export const findAllByName = (params:any) => {
  return axiosInstance.get(`/api/admin/findAllByName`, {params});
};

// POST
// 人员管理导出
export const exportExcel = (params: any) => {
  return axiosInstance({
    url: `/api/public/exportExcel`,
    data: params,
    method: 'post',
    responseType: 'blob', // 设置响应数据类型为 blob
  });
};