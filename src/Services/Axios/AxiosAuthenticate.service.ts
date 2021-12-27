import IAuthenticateData from "../../interfaces/IAxiosData";
import http from "./http-common";

const create = (data: IAuthenticateData) => {
  return http.post<IAuthenticateData>("/security/users/authenticate", data);
};


const AuthenticateService = {
  create,
};

export default AuthenticateService;
