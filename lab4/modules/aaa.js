import {accessToken, version} from "./consts.js";

class Urls {
    constructor() {
        this.url = 'https://api.vk.com/method'
        this.commonInfo = `access_token=${accessToken}&v=${version}`
    }

    getUserInfo(userId) {
        return `${this.url}/users.get?user_ids=${userId}&fields=photo_400_orig,online,last_seen&${this.commonInfo}`
    }

    getGroupMembers(groupId, flag) {
        if (flag == 1) return `${this.url}/groups.getMembers?group_id=${groupId}&sort=id_asc&fields=photo_400_orig&${this.commonInfo}`
        if (flag == 2) return `${this.url}/groups.getMembers?group_id=${groupId}&sort=id_desc&fields=photo_400_orig&${this.commonInfo}`
        if (flag == 3) return `${this.url}/groups.getMembers?group_id=${groupId}&sort=time_asc&fields=photo_400_orig&${this.commonInfo}`
        if (flag == 4) return `${this.url}/groups.getMembers?group_id=${groupId}&sort=time_desc&fields=photo_400_orig&${this.commonInfo}`
        
    }   
}

export const urls = new Urls()