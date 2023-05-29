import { TEAM, MEMBER } from "../assets/mocks";

class ApiService {
  getTeam() {
    return new Promise((resolve, reject) => {
      if(TEAM) resolve(TEAM);
      else reject("Failed to fetch TEAM");
    })
  }
  getMember() {
    return new Promise((resolve, reject) => {
      if(MEMBER) resolve(MEMBER);
      else reject("Failed to fetch MEMBER");
    })
  }
}

const apiService = new ApiService();

export default apiService;