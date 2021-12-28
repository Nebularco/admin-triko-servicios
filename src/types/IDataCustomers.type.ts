export type DataCustomers = {
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
  };
};

export type DataCustomer = {
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
