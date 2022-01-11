export type DataTrikos = {
  attributes: {
    personalInformation: {
      firstname: string;
      lastname: string;
      idnumber: string;
    };
    user: {
      email: string;
      phonenumber: string;
    };
    workflow: { workflow: string };
  };
  id:string
};
