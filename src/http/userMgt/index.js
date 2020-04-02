import BaseApi from '../base/index'; // 基础api配置对象

class UserMgtApi extends BaseApi {
    constructor() {
        super();
        this.prefix = "/api";
        this.baseUlr = "/user";

        this.loginUrl = `${this.baseUlr}/login`;
        this.logoutUrl = `${this.baseUlr}/loginOut`;
    }

    login(formData) {
        /**
         * @description 登陆
         * @param {object} formDAta 登陆表单数据
         * @returns promise对象
         */
        let _url = `${this.prefix}${this.loginUrl}`;
        return this.post(_url, formData);
    }

    logout() {
        // 登陆
        let _url = `${this.prefix}${this.logoutUrl}`;
        return this.post(_url);
    }
}

export default new UserMgtApi();