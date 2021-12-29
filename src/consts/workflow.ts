export const WORKFLOW_REGISTERING = 1;
export const WORKFLOW_SELECTING_SERVICES = 2;
export const WORKFLOW_PERSONAL_INFO = 3;
export const WORKFLOW_REQUIRED_DOC = 4;
export const WORKFLOW_ACTIVE = 5;
export const WORKFLOW_REJECTED = 6;
export const WORKFLOW_ACTIVATING = 39;

export const WORKFLOW_SERVICE_PENDING = 51;
export const WORKFLOW_SERVICE_APPROVED = 52;
export const WORKFLOW_SERVICE_REJECTED = 53;

export const WORKFLOW_DOC_PENDING = 18;
export const WORKFLOW_DOC_APPROVED = 19;
export const WORKFLOW_DOC_REJECTED = 20;
export const WORKFLOW_TRIKO_REJECTED = 0;

export const requiredDocWorkflows = {
  [WORKFLOW_DOC_PENDING]: "PendingToApprove",
  [WORKFLOW_DOC_APPROVED]: "ApprovedDoc",
  [WORKFLOW_DOC_REJECTED]: "RejectedDoc",
};

export const trikoWorkflows = {
  REGISTERING: 1,
  SELECTING_SERVICES: 2,
  PERSONAL_INFORMATION: 3,
  REQUIRED_DOCUMENTATION: 4,
  ACTIVE: 5,
  REJECTED: 6,
  RECOVERING_PROCESS: 7,
  SUSPENDED: 8,
  BUSY: 9,
  ACTIVATING: 39,
};

export const clientWorkflows = {
  REGISTERING: 10,
  PERSONAL_INFORMATION: 11,
  LOCATION: 12,
  FAMILY: 13,
  ACTIVE: 14,
  REJECTED: 613,
  RECOVERING_PROCESS: 137,
  SUSPENDED: 13,
};

export const documentWorkflows = {
  WORKFLOW_DOC_PENDING: 18,
  WORKFLOW_DOC_APPROVED: 19,
  WORKFLOW_DOC_REJECTED: 20,
  WORKFLOW_TRIKO_REJECTED: 0,
};

export const workflowTypes = {
  TRIKO: 1,
  CLIENT: 2,
  REQUIRED_DOCUMENTATION: 3,
  SERVICES: 4,
  ORDERS: 5,
  FAVOR: 7,
  TRIKO_SERVICES: 8,
};

export const serviceWorkflows = {
  PENDING: 21,
  ACCEPTED: 22,
  PAYMENT: 23,
  ON_MY_WAY: 24,
  ON_YOUR_DOOR: 25,
  CONFIRM_STARTING: 26,
  STARTED: 27,
  CONFIRM_FINISH: 28,
  QUALIFY_SERVICE_CLIENT: 29,
  FINISH: 30,
  CANCEL: 31,
  QUALIFY_SERVICE_TRIKO: 38,
  WAITING_FOR_TRIKO: 42,
  GOING_TO_SHOP: 43,
  IN_THE_SHOP: 44,
  SHOPPING: 45,
  WAITING_FOR_CLIENT: 46,
  PAYING_THE_CART: 47,
  PAYING_THE_ORDER: 48,
  CONFIRM_PAYMENT: 49,
  ON_GOING: 50,
};

export const serviceWorkflowsLabels = {
  [serviceWorkflows.PENDING]: "pending_confirmation",
  [serviceWorkflows.ACCEPTED]: "accepted_triko",
  [serviceWorkflows.PAYMENT]: "making_payment",
  [serviceWorkflows.ON_MY_WAY]: "triko_on_the_way",
  [serviceWorkflows.ON_YOUR_DOOR]: "triko_in_the_location",
  [serviceWorkflows.CONFIRM_STARTING]: "confirm_starting",
  [serviceWorkflows.STARTED]: "service_started",
  [serviceWorkflows.CONFIRM_FINISH]: "service_confirm_finish",
  [serviceWorkflows.QUALIFY_SERVICE_CLIENT]: "service_client_qualify",
  [serviceWorkflows.FINISH]: "service_finished",
  [serviceWorkflows.CANCEL]: "service_canceled",
  [serviceWorkflows.QUALIFY_SERVICE_TRIKO]: "triko_qualify",
  [serviceWorkflows.WAITING_FOR_TRIKO]: "service_waiting_for_triko",
  [serviceWorkflows.GOING_TO_SHOP]: "triko_going_to_shopping",
  [serviceWorkflows.IN_THE_SHOP]: "triko_in_the_shop",
  [serviceWorkflows.SHOPPING]: "triko_shopping",
  [serviceWorkflows.WAITING_FOR_CLIENT]: "triko_waiting_for_client",
  [serviceWorkflows.PAYING_THE_CART]: "triko_paying_cart",
  [serviceWorkflows.PAYING_THE_ORDER]: "triko_paying_order",
  [serviceWorkflows.CONFIRM_PAYMENT]: "client_confirm_payment",
  [serviceWorkflows.ON_GOING]: "on_going",
};
