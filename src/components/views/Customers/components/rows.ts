export type DataCustomers = {
  attributes: {
    created_at:string
    personalInformation: {
      firstname: string;
      lastname: string;
      idnumber: string;
    };
    user: {
      email: string;
      phonenumber: string;
    };
  };
};