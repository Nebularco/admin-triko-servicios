import http from "../http-common";
import IAuthenticateData from "../interfaces/IAxiosData";

const create = (data: IAuthenticateData) => {
  return http.post<IAuthenticateData>("/security/users/authenticate", data);
};


const AuthenticateService = {
  create,
};

export default AuthenticateService;
